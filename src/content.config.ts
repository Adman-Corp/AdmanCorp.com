import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    stack: z.array(z.string()).default([]),
    draft: z.boolean().default(true)
  })
});

const writing = defineCollection({
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    draft: z.boolean().default(true)
  })
});

export const collections = {
  projects,
  writing
};