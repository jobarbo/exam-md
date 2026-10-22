/**
 * Types for chapter data
 */

export interface ChapterType {
	id: string;
	number: number;
	module: string;
	title: string;
	hasExam: boolean;
	isSpecial: boolean;
}

export interface ModuleType {
	id: string;
	title: string;
	subtitle: string;
}

export interface ChapterMetadata {
	id: string;
	title: string;
	description?: string;
}
