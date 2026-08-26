import { defineCollection, reference, z } from 'astro:content';
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

const writing = defineCollection({
	loader: glob({ base: './src/content/writing', pattern: '**/*.{md,mdx}' }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		date: z.coerce.date(),
		updated: z.coerce.date().optional(),
		kind: z.enum(['paper', 'report', 'note']).default('note'),
		// Links this writing to a project. The project page picks it up automatically.
		project: reference('projects').optional(),
		authors: z.array(z.string()).default(['Elif Ece Can']),
		venue: z.string().optional(),
		pdf: z.string().optional(),
		doi: z.string().optional(),
		draft: z.boolean().default(false),
	}),
});

export const collections = { projects, writing };
