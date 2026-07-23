// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  env: {
    schema: {
      YOUTUBE_API_KEY: { 
        context: 'server', 
        access: 'secret', 
        type: 'string' 
      },
    },
  },

  vite: {
    plugins: [tailwindcss()],
  },

  adapter: cloudflare(),
});