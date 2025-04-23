import {marked} from "marked";
import fs from "fs";
import path from "path";

// Titres des chapitres - ceci pourrait être dans un fichier JSON
const CHAPTER_TITLES = {
	"08": "Politiques sociales et travail social",
	"09": "L'intervention personnelle en travail social",
	10: "L'intervention de groupe",
	11: "Dynamique des groupes en travail social",
	12: "La recherche en travail social",
	13: "La pratique en travail social",
	14: "Examen final",
};

// Fonction pour détecter dynamiquement les chapitres qui ont un questionnaire
function getChaptersWithExam() {
	try {
		// Chemin vers le dossier des composants d'examen
		const examComponentsDir = path.resolve("src/components/exams");
		// Liste tous les fichiers dans ce dossier
		const files = fs.readdirSync(examComponentsDir);

		// Filtrer pour obtenir seulement les fichiers .astro d'examen
		const examFiles = files.filter((file) => file.startsWith("Exam") && file.endsWith(".astro"));

		// Extraire les IDs des chapitres
		return examFiles.map((file) => {
			// Exemple: "Exam08.astro" -> "08"
			return file.replace("Exam", "").replace(".astro", "");
		});
	} catch (error) {
		console.error("Erreur lors de la détection des examens:", error);
		// Fallback sur les valeurs hardcodées en cas d'erreur
		return ["08", "09", "10", "11", "12", "13", "14"];
	}
}

// Fonction pour détecter dynamiquement tous les chapitres disponibles
function getAllAvailableChapters() {
	try {
		// Chemin vers le dossier des fichiers markdown
		const markdownDir = path.resolve("public/markdown");
		// Liste tous les fichiers dans ce dossier
		const files = fs.readdirSync(markdownDir);

		// Filtrer pour obtenir seulement les fichiers .md
		const mdFiles = files.filter((file) => file.endsWith(".md"));

		// Extraire les IDs des chapitres
		return mdFiles.map((file) => {
			// Exemple: "08.md" -> "08"
			return file.replace(".md", "");
		});
	} catch (error) {
		console.error("Erreur lors de la détection des chapitres:", error);
		// Fallback sur les clés de CHAPTER_TITLES en cas d'erreur
		return Object.keys(CHAPTER_TITLES);
	}
}

// Obtenir dynamiquement les chapitres qui ont un examen
const CHAPTERS_WITH_EXAM = getChaptersWithExam();

// Liste des chapitres considérés comme spéciaux (mise en évidence)
// Cette liste pourrait aussi être rendue dynamique en fonction de certains critères
const SPECIAL_CHAPTERS = [];

export async function getChapterMarkdown(chapterId) {
	try {
		console.log(`Tentative de chargement du chapitre ${chapterId}`);
		const title = CHAPTER_TITLES[chapterId] || `Chapitre ${chapterId}`;

		// Récupérer le contenu du fichier markdown depuis le dossier public
		try {
			const response = await fetch(`/markdown/${chapterId}.md`);
			console.log(`Statut de la réponse pour ${chapterId}.md:`, response.status);

			if (!response.ok) {
				console.warn(`Impossible de charger le fichier markdown ${chapterId}.md, statut: ${response.status}`);
				// Fournir un contenu par défaut
				return {
					title,
					content: `<h1>Chapitre ${chapterId}</h1><p>Le contenu de ce chapitre n'est pas disponible. Statut: ${response.status}</p>`,
				};
			}

			const markdown = await response.text();
			console.log(`Markdown chargé pour ${chapterId}, longueur: ${markdown.length} caractères`);
			const content = marked.parse(markdown);

			return {
				title,
				content,
			};
		} catch (fetchError) {
			console.error(`Erreur lors du fetch pour ${chapterId}.md:`, fetchError);
			return {
				title,
				content: `<h1>Chapitre ${chapterId}</h1><p>Erreur lors du chargement: ${fetchError.message}</p>`,
			};
		}
	} catch (error) {
		console.error(`Erreur générale lors du chargement du chapitre ${chapterId}:`, error);
		return null;
	}
}

export async function getAllChapters() {
	// Récupère tous les chapitres disponibles
	const availableChapters = getAllAvailableChapters();

	const chapters = availableChapters.map((id) => {
		return {
			id,
			title: CHAPTER_TITLES[id] || `Chapitre ${id}`,
			hasExam: CHAPTERS_WITH_EXAM.includes(id),
			isSpecial: SPECIAL_CHAPTERS.includes(id),
		};
	});

	// Trier les chapitres par ordre numérique
	return chapters.sort((a, b) => parseInt(a.id) - parseInt(b.id));
}

// Fonction pour vérifier si un chapitre a un questionnaire disponible
export function hasExam(chapterId) {
	return CHAPTERS_WITH_EXAM.includes(chapterId);
}
