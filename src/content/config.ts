import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    draft: z.boolean().optional()
  }),
});

const work = defineCollection({
  type: "content",
  schema: z.object({
    company: z.string(),
    role: z.string(),
    dateStart: z.coerce.date(),
    dateEnd: z.union([z.coerce.date(), z.string()]),
  }),
});

const projects = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    draft: z.boolean().optional(),
    demoURL: z.string().optional(),
    repoURL: z.string().optional()
  }),
});

const research = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    draft: z.boolean().optional(),
    publication: z.string().optional(),
    authors: z.string().optional(),
    paperURL: z.string().optional(),
    codeURL: z.string().optional(),
  }),
});

const books = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    author: z.string(),
    year: z.number(),
    pubYear: z.number().optional(),
    dateRead: z.coerce.date().optional(),
    rating: z.number().min(1).max(10).optional(),
    status: z.enum(["reading", "completed", "to-read"]).default("completed"),
    description: z.string().optional(),
    draft: z.boolean().optional(),
  }),
});

export const collections = { blog, work, projects, research, books };
