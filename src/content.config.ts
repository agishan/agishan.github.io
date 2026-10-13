import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

// One markdown file per job in src/content/work/. The file name becomes the URL:
// src/content/work/shopify.md -> /work/shopify
const work = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/work" }),
  schema: z.object({
    company: z.string(),
    role: z.string(),
    when: z.string(), // shown as-is, e.g. "Sep–Dec 2025"
    where: z.string().default(""),
    summary: z.string(), // the one line on the work list
    tools: z.array(z.string()).default([]),
    order: z.number(), // lower = higher on the list (newest first)
    draft: z.boolean().default(false), // true hides it from the site
    todo: z.string().optional(), // private notes to self; never shown on the site
  }),
});

// One markdown file per project in src/content/projects/.
// Set `page: false` for a project that should be listed but not clickable.
const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    pitch: z.string(), // big line under the title on the project page
    summary: z.string(), // the line on the projects list
    when: z.string(),
    with: z.string().default(""),
    stack: z.array(z.string()).default([]),
    award: z.string().default(""),
    status: z.string().default(""),
    stats: z.array(z.object({ value: z.string(), label: z.string() })).default([]),
    links: z.array(z.object({ label: z.string(), href: z.string() })).default([]),
    order: z.number(),
    page: z.boolean().default(true),
    draft: z.boolean().default(false),
    todo: z.string().optional(), // private notes to self; never shown on the site
  }),
});

export const collections = { work, projects };
