/**
 * Markdown Utilities
 * Functions for loading and managing markdown content and chapter data
 */

import {marked} from "marked";
import fs from "fs";
import path from "path";
import type {ChapterType, ChapterMetadata, ModuleType} from "../types/chapter";

// Exam and course structure (single source of truth for navigation)
export const EXAM_TITLE = "Examen 1 – Vieillissement";

export const MODULES: ModuleType[] = [
	{id: "1", title: "Module 1", subtitle: "Gérontologie sociale"},
	{id: "2", title: "Module 2", subtitle: "Vieillissement démographique, biologique, psychologique et sociologique"},
];

const COURSES: {id: string; number: number; module: string; title: string}[] = [
	{id: "101", number: 1, module: "1", title: "La formation en gérontologie"},
	{id: "102", number: 2, module: "1", title: "Principales théories en gérontologie sociale"},
	{id: "103", number: 3, module: "2", title: "Aspects démographiques"},
	{id: "104", number: 4, module: "2", title: "Aspects biologiques et maladie d'Alzheimer"},
	{id: "105", number: 5, module: "2", title: "Aspects psychologiques"},
	{id: "106", number: 6, module: "2", title: "Aspects sociaux, âgisme et exclusion"},
];

const CHAPTER_TITLES: Record<string, string> = Object.fromEntries(COURSES.map((c) => [c.id, `Cours ${c.number} – ${c.title}`]));

/**
 * Dynamically detect chapters that have an exam available
 */
function getChaptersWithExam(): string[] {
	try {
		const examDataDir = path.resolve("src/data/exams");
		const files = fs.readdirSync(examDataDir);

		// Filter to get only exam files (.ts or .js)
		const examFiles = files.filter((file) => file.startsWith("exam") && (file.endsWith(".ts") || file.endsWith(".js")));

		// Extract chapter IDs
		return examFiles.map((file) => {
			// Example: "exam101.ts" -> "101"
			return file.replace("exam", "").replace(/\.(ts|js)$/, "");
		});
	} catch (error) {
		console.error("Error detecting exams:", error);
		// Fallback to known exam chapters
		return ["101", "102", "103", "104", "105", "106"];
	}
}

// Get chapters with exams
const CHAPTERS_WITH_EXAM = getChaptersWithExam();

// Special chapters (highlighted)
const SPECIAL_CHAPTERS: string[] = [];

/**
 * Load markdown content for a specific chapter
 */
export async function getChapterMarkdown(chapterId: string): Promise<{title: string; content: string} | null> {
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
				content: `<h1>Chapitre ${chapterId}</h1><p>Erreur lors du chargement: ${fetchError instanceof Error ? fetchError.message : "Unknown error"}</p>`,
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
	return getCourses();
}

/**
 * Get all courses of the exam, in course order
 */
export function getCourses(): ChapterType[] {
	return COURSES.map((course) => ({
		...course,
		hasExam: CHAPTERS_WITH_EXAM.includes(course.id),
		isSpecial: SPECIAL_CHAPTERS.includes(course.id),
	}));
}

/**
 * Get one course by its id (ex: "101")
 */
export function getCourse(chapterId: string): ChapterType | undefined {
	return getCourses().find((course) => course.id === chapterId);
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
