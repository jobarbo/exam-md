import {marked} from "marked";

const CHAPTER_TITLES = {
	"08": "Politiques sociales et travail social",
	"09": "L'intervention personnelle en travail social",
	10: "L'intervention de groupe",
	11: "Dynamique des groupes en travail social",
	12: "Chapitre 12",
	13: "Chapitre 13",
};

// Liste des chapitres qui ont un questionnaire disponible
const CHAPTERS_WITH_EXAM = ["08", "09", "10", "11"];

// Liste des chapitres considérés comme spéciaux (mise en évidence)
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
	const chapters = Object.entries(CHAPTER_TITLES).map(([id, title]) => ({
		id,
		title,
		hasExam: CHAPTERS_WITH_EXAM.includes(id),
		isSpecial: SPECIAL_CHAPTERS.includes(id),
	}));

	// Trier les chapitres par ordre numérique
	return chapters.sort((a, b) => parseInt(a.id) - parseInt(b.id));
}

// Fonction pour vérifier si un chapitre a un questionnaire disponible
export function hasExam(chapterId) {
	return CHAPTERS_WITH_EXAM.includes(chapterId);
}
