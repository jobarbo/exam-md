/**
 * Types for chapter data
 */

export interface ChapterType {
	id: string;
	title: string;
	hasExam: boolean;
	isSpecial: boolean;
}

export interface ChapterMetadata {
	id: string;
	title: string;
	description?: string;
}



