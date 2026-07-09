import { defineCollection, z } from 'astro:content';

const docsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    lastUpdated: z.string(),
    category: z.string(),
    theme: z.object({
      mode: z.string(),
      background: z.string(),
      accent: z.string(),
      textPrimary: z.string(),
    }),
  }),
});

export const collections = {
  docs: docsCollection,
};