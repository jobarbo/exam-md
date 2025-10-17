/**
 * Markdown Utilities
 * Functions for loading and managing markdown content and chapter data
 */

import { marked } from 'marked';
import fs from 'fs';
import path from 'path';
import type { ChapterType, ChapterMetadata } from '../types/chapter';

// Chapter titles configuration
const CHAPTER_TITLES: Record<string, string> = {
	'01': 'Fondement 1 - Problèmes sociaux et théories du travail social',
	'02': 'Fondement 2 - Pensée critique, épistémologie et paradigme',
	'03': 'Fondement 3 - Fonctionnalisme et Durkheim',
	'04': 'Fondement 4 - Marxisme et approche conflictuelle',
	'05': 'Fondement 5 - Constructivisme social',
	'06': "Fondement 6 - Interactionnisme symbolique et théorie de l'étiquetage",
};

/**
 * Dynamically detect chapters that have an exam available
 */
function getChaptersWithExam(): string[] {
	try {
		const examDataDir = path.resolve('src/data/exams');
		const files = fs.readdirSync(examDataDir);

		// Filter to get only exam files (.ts or .js)
		const examFiles = files.filter(
			(file) => file.startsWith('exam') && (file.endsWith('.ts') || file.endsWith('.js'))
		);

		// Extract chapter IDs
		return examFiles.map((file) => {
			// Example: "exam01.ts" -> "01"
			return file.replace('exam', '').replace(/\.(ts|js)$/, '');
		});
	} catch (error) {
		console.error('Error detecting exams:', error);
		// Fallback to known exam chapters
		return ['01', '02', '03', '04', '05', '06'];
	}
}

/**
 * Dynamically detect all available chapters from markdown files
 */
function getAllAvailableChapters(): string[] {
	try {
		const markdownDir = path.resolve('public/markdown');
		const files = fs.readdirSync(markdownDir);

		// Filter to get only markdown files
		const mdFiles = files.filter((file) => file.endsWith('.md'));

		// Extract chapter IDs
		return mdFiles.map((file) => {
			// Example: "01.md" -> "01"
			return file.replace('.md', '');
		});
	} catch (error) {
		console.error('Error detecting chapters:', error);
		// Fallback to known chapters
		return Object.keys(CHAPTER_TITLES);
	}
}

// Get chapters with exams
const CHAPTERS_WITH_EXAM = getChaptersWithExam();

// Special chapters (highlighted)
const SPECIAL_CHAPTERS: string[] = [];

/**
 * Load markdown content for a specific chapter
 */
export async function getChapterMarkdown(
	chapterId: string
): Promise<{ title: string; content: string } | null> {
	try {
		console.log(`Loading chapter ${chapterId}`);
		const title = CHAPTER_TITLES[chapterId] || `Chapitre ${chapterId}`;

		try {
			const response = await fetch(`/markdown/${chapterId}.md`);
			console.log(`Response status for ${chapterId}.md:`, response.status);

			if (!response.ok) {
				console.warn(`Unable to load markdown file ${chapterId}.md, status: ${response.status}`);
				return {
					title,
					content: `<h1>Chapitre ${chapterId}</h1><p>Le contenu de ce chapitre n'est pas disponible. Statut: ${response.status}</p>`,
				};
			}

			const markdown = await response.text();
			console.log(`Markdown loaded for ${chapterId}, length: ${markdown.length} characters`);
			const content = marked.parse(markdown) as string;

			return {
				title,
				content,
			};
		} catch (fetchError) {
			console.error(`Error fetching ${chapterId}.md:`, fetchError);
			return {
				title,
				content: `<h1>Chapitre ${chapterId}</h1><p>Erreur lors du chargement: ${fetchError instanceof Error ? fetchError.message : 'Unknown error'}</p>`,
			};
		}
	} catch (error) {
		console.error(`General error loading chapter ${chapterId}:`, error);
		return null;
	}
}

/**
 * Get all available chapters with their metadata
 */
export async function getAllChapters(): Promise<ChapterType[]> {
	const availableChapters = getAllAvailableChapters();

	const chapters: ChapterType[] = availableChapters.map((id) => ({
		id,
		title: CHAPTER_TITLES[id] || `Chapitre ${id}`,
		hasExam: CHAPTERS_WITH_EXAM.includes(id),
		isSpecial: SPECIAL_CHAPTERS.includes(id),
	}));

	// Sort chapters numerically
	return chapters.sort((a, b) => parseInt(a.id) - parseInt(b.id));
}

/**
 * Check if a specific chapter has an exam available
 */
export function hasExam(chapterId: string): boolean {
	return CHAPTERS_WITH_EXAM.includes(chapterId);
}

/**
 * Get chapter metadata
 */
export function getChapterMetadata(chapterId: string): ChapterMetadata {
	return {
		id: chapterId,
		title: CHAPTER_TITLES[chapterId] || `Chapitre ${chapterId}`,
	};
}

