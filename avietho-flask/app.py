import sys
import subprocess
import threading
from flask import Flask, request, jsonify
from flask_cors import CORS
from sentence_transformers import SentenceTransformer
import chromadb

app = Flask(__name__)
CORS(app)

# ---------- CONFIG ----------
DB_PATH = "./avietho_chroma"
EMBEDDING_MODEL = "all-MiniLM-L6-v2"
SIMILARITY_THRESHOLD = 2.0   
# ----------------------------

embedding_model = None
chroma_client = None
collection = None

def init_model():
    global embedding_model, chroma_client, collection
    if embedding_model is None:
        embedding_model = SentenceTransformer(EMBEDDING_MODEL)
        chroma_client = chromadb.PersistentClient(path=DB_PATH)
        collection = chroma_client.get_or_create_collection("avietho_pages")

# ----- Training endpoint (unchanged) -----
training_status = {"running": False, "message": "Not started"}

def run_training():
    global training_status, collection
    training_status["running"] = True
    training_status["message"] = "Training in progress..."
    try:
        subprocess.run([sys.executable, "train_model.py"], check=True)
        training_status["message"] = "Training completed successfully."
        if chroma_client:
            collection = chroma_client.get_collection("avietho_pages")
    except subprocess.CalledProcessError as e:
        training_status["message"] = f"Training failed: {e}"
    finally:
        training_status["running"] = False

@app.route('/train', methods=['POST'])
def start_training():
    if training_status["running"]:
        return jsonify({"error": "Training already running"}), 409
    thread = threading.Thread(target=run_training)
    thread.start()
    return jsonify({"status": "Training started"}), 202

@app.route('/status', methods=['GET'])
def get_status():
    return jsonify(training_status)

@app.route('/chat', methods=['POST'])
def chat():
    init_model()
    data = request.get_json()
    user_message = data.get('message', '').strip().lower()
    if not user_message:
        return jsonify({"reply": "Please provide a message."}), 400

    question_embedding = embedding_model.encode([user_message])[0]

    results = collection.query(
        query_embeddings=[question_embedding.tolist()],
        n_results=3,
        include=["documents", "metadatas", "distances"]
    )
    candidates = results['documents'][0]
    distances = results['distances'][0]


    if not candidates:
        reply = "I don't have enough information to answer that."
    else:
        topic_keywords = {
            "contact": ["contact", "email", "messenger", "message", "phone", "address", "inquiries"],
            "social": ["facebook", "instagram", "linkedin", "tiktok", "twitter", "youtube", "social media"],
            "services": ["service", "services", "offer", "we do", "digital pr", "video", "web development"],
            "about": ["about", "founder", "history", "avietho", "founded", "siblings"],
            "values": ["values", "mission", "vision", "principle", "excellence"],
            "clients": ["clients", "political", "government", "businesses"],
        }

        best_chunk = None
        for chunk in candidates:
            if not chunk.strip():
                continue
            for category, words in topic_keywords.items():
                if any(word in user_message for word in words):
                    if any(word in chunk.lower() for word in words):
                        best_chunk = chunk
                        break
            if best_chunk:
                break

        if best_chunk:
            reply = best_chunk.strip()
        else:
            first_valid = next((c for c in candidates if c.strip()), None)
            if not first_valid:
                reply = "I don't have enough information to answer that."
            else:
                stop_words = {"i", "me", "my", "we", "our", "you", "your", "a", "an", "the", "is", "are", "was",
                              "were", "be", "been", "have", "has", "had", "do", "does", "did", "will", "would",
                              "could", "should", "may", "might", "can", "shall", "to", "of", "in", "for", "on",
                              "with", "at", "by", "from", "up", "about", "like", "just", "how", "what", "which",
                              "who", "whom", "tell", "give", "show", "find", "get", "make", "know", "think",
                              "say", "said", "ask", "asked"}
                question_words = set(user_message.split())
                meaningful = question_words - stop_words
                chunk_lower = first_valid.lower()
                if any(word in chunk_lower for word in meaningful):
                    reply = first_valid.strip()
                else:
                    reply = "I don't have enough information to answer that."

    if "I don't have enough information" in reply:
        reply += (
            "\n\n📧 For further inquiries, please email us at "
            "info@aviethodigital.com or message us on Messenger: "
            "https://m.me/AviethoDigital"
        )

    return jsonify({"reply": reply})

if __name__ == '__main__':
    init_model()
    app.run(debug=True, port=5000)