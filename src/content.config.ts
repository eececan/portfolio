import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
	loader: glob({ base: './src/content/projects', pattern: '**/*.{md,mdx}' }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			tagline: z.string(),
			summary: z.string(),
			year: z.string(),
			status: z.enum(['active', 'complete', 'paused']).default('active'),
			order: z.number().default(99),
			tags: z.array(z.string()).default([]),
			cover: image().optional(),
			coverAlt: z.string().optional(),
			repo: z.string().url().optional(),
			demo: z.string().url().optional(),
			draft: z.boolean().default(false),
		}),
});

export const collections = { projects };
