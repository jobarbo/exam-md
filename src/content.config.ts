// Import utilities from `astro:content`
import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Define the chapters collection for markdown files
const chapters = defineCollection({
	loader: glob({ pattern: "**/*.md", base: "./public/markdown" }),
	schema: z.object({
		title: z.string().optional(),
		description: z.string().optional(),
	}),
});

// Define the exams collection schema
const exams = defineCollection({
	loader: glob({ pattern: "**/*.{ts,js}", base: "./src/data/exams" }),
	schema: z.object({
		questions: z.array(z.object({
			id: z.string(),
			title: z.string(),
			question: z.string(),
			type: z.enum(['radio', 'checkbox']),
			options: z.array(z.object({
				value: z.string(),
				label: z.string(),
			})),
			explanation: z.string(),
		})),
		correctRadioAnswers: z.record(z.string()).optional(),
		correctCheckboxAnswers: z.record(z.array(z.string())).optional(),
	}),
});

// Export a single `collections` object to register collections
export const collections = {
	chapters,
	exams,
};



