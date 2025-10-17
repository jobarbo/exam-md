/**
 * Shared TypeScript types for exam data
 * These types provide type safety across all exam files
 */

export interface QuestionOption {
	value: string;
	label: string;
}

export interface Question {
	id: string;
	title: string;
	question: string;
	type: 'radio' | 'checkbox';
	options: QuestionOption[];
	explanation: string;
}

export interface ExamData {
	questions: Question[];
	correctRadioAnswers: Record<string, string>;
	correctCheckboxAnswers: Record<string, string[]>;
}

export interface ExamMetadata {
	id: string;
	title: string;
	description: string;
}



