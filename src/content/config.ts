import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    summary: z.string().optional(),
    description: z.string().optional(),
    date: z.string(),
    tags: z.array(z.string()),
    featured: z.boolean().optional().default(false),
    readTime: z.number().optional().default(5),
    image: z.string().optional(),
  }),
});

export const collections = {
  blog,
};
