/**
 * Examen 03: le fonctionnalisme et Durkheim
 * Ce fichier contient toutes les questions et réponses pour l'examen 03
 */

import type { Question, ExamData } from '../../types/exam';

export const exam03Questions: Question[] = [
	{
		id: "q1",
		title: "Question 1",
		question: "Quelles sont les caractéristiques du paradigme positiviste?",
		type: "checkbox",
		options: [
			{value: "a", label: "Il existe une réalité objective qu'il faut découvrir"},
			{value: "b", label: "La vérité peut être découverte via la recherche empirique"},
			{value: "c", label: "Les résultats doivent être quantifiés"},
			{value: "d", label: "L'approche est subjective et interprétative"},
			{value: "e", label: "La réalité dépend de nos perceptions"},
		],
		explanation:
			"Le paradigme positiviste se caractérise par: la croyance en une réalité objective à découvrir, la conviction que la vérité peut être découverte via la recherche, l'importance de quantifier les résultats, et l'utilisation de la méthode scientifique et de l'approche déductive. (Source: Fondement_3/Leçon 3 - Le paradigme positiviste, approche déductive)",
	},
	{
		id: "q2",
		title: "Question 2",
		question: "Comment Durkheim définit-il un fait social?",
		type: "radio",
		options: [
			{value: "a", label: "Tout comportement individuel"},
			{value: "b", label: "Toute manière de faire susceptible d'exercer sur l'individu une contrainte extérieure"},
			{value: "c", label: "Toute action volontaire"},
			{value: "d", label: "Toute pensée personnelle"},
		],
		explanation:
			"Selon Durkheim: « Est fait social toute manière de faire, fixée ou non, susceptible d'exercer sur l'individu une contrainte extérieure; ou bien encore, qui est générale dans l'étendue d'une société donnée tout en ayant une existence propre, indépendante de ses manifestations individuelles. » (Source: Durkheim - Les règles de la méthode sociologique, p.5)",
	},
	{
		id: "q3",
		title: "Question 3",
		question: "Quels sont les trois principes d'un système social selon Pareto?",
		type: "checkbox",
		options: [
			{value: "a", label: "Les éléments entretiennent des relations d'interdépendance"},
			{value: "b", label: "Le tout est plus grand que la somme de ses parties"},
			{value: "c", label: "L'interdépendance est régie par des règles exprimables logiquement"},
			{value: "d", label: "Chaque partie fonctionne de manière autonome"},
			{value: "e", label: "Le système est toujours stable"},
		],
		explanation:
			"Les trois principes selon Pareto sont: 1) Les éléments de la réalité sociale entretiennent des relations d'interdépendance, 2) Le tout est plus grand que la somme de ses parties, 3) L'interdépendance et la totalité sont régies par des règles qui peuvent être exprimées logiquement. (Source: Fondement_3/Leçon 3 - Pareto et la conception systémique)",
	},
	{
		id: "q4",
		title: "Question 4",
		question: "Quelle est la différence entre les sociétés mécaniques et organiques selon Durkheim?",
		type: "radio",
		options: [
			{value: "a", label: "Les sociétés mécaniques sont industrialisées, les organiques sont traditionnelles"},
			{value: "b", label: "Les sociétés mécaniques sont traditionnelles avec forte cohésion, les organiques ont une division du travail"},
			{value: "c", label: "Il n'y a pas de différence"},
			{value: "d", label: "Les sociétés mécaniques sont plus évoluées"},
		],
		explanation:
			"Les sociétés mécaniques (traditionnelles) ont peu de différences entre les membres, forte cohésion sociale et estime collective. Les sociétés organiques (issues de l'industrialisation) ont une division du travail, développement individuel, et la cohésion repose sur la complémentarité des fonctions. (Source: Durkheim - De la division du travail social, Leçon 3 p.7-8)",
	},
	{
		id: "q5",
		title: "Question 5",
		question: "Qu'est-ce que l'anomie selon Durkheim?",
		type: "radio",
		options: [
			{value: "a", label: "Un excès de règles sociales"},
			{value: "b", label: "Un état de dérégulation et de désorganisation des relations sociales (sans normes)"},
			{value: "c", label: "Une forme de cohésion sociale"},
			{value: "d", label: "Un type de solidarité"},
		],
		explanation:
			"L'anomie est un état de dérégulation et de désorganisation des relations sociales ('sans normes'). Les actions ne sont plus réglées par des normes claires et contraignantes, ce qui peut mener les gens à sombrer dans l'angoisse ou l'incertitude et peut conduire au suicide. (Source: Fondement_3/Leçon 3 p.13 - Anomie et suicide)",
	},
	{
		id: "q6",
		title: "Question 6",
		question: "Quels sont les quatre types de suicide identifiés par Durkheim?",
		type: "checkbox",
		options: [
			{value: "a", label: "Le suicide égoïste"},
			{value: "b", label: "Le suicide altruiste"},
			{value: "c", label: "Le suicide fataliste"},
			{value: "d", label: "Le suicide anomique"},
			{value: "e", label: "Le suicide économique"},
			{value: "f", label: "Le suicide rationnel"},
		],
		explanation:
			"Les quatre types sont: 1) Égoïste (liens rompus avec la société), 2) Altruiste (identification parfaite avec la société, ex: mort par devoir), 3) Fataliste (relation conflictuelle, individu étouffé par les normes), 4) Anomique (absence de règles, individu sans repères). (Source: Durkheim - Le suicide, Fondement_3/Leçon 3 p.13-14)",
	},
	{
		id: "q7",
		title: "Question 7",
		question: "Qu'est-ce qu'une fonction selon le fonctionnalisme?",
		type: "radio",
		options: [
			{value: "a", label: "Un rôle administratif"},
			{value: "b", label: "La contribution d'une action partielle au tout dont elle fait partie"},
			{value: "c", label: "Une dysfonction sociale"},
			{value: "d", label: "Un comportement déviant"},
		],
		explanation:
			"Selon le fonctionnalisme, une fonction est la contribution d'une action partielle au tout dont elle fait partie. Les faits sociaux sont analysés en fonction de leur fonctionnalité ou dysfonctionnement par rapport à la société dans son ensemble. (Source: Fondement_3/Leçon 3 p.11 - L'analyse fonctionnelle)",
	},
	{
		id: "q8",
		title: "Question 8",
		question: "Qu'est-ce qu'un rôle social?",
		type: "radio",
		options: [
			{value: "a", label: "Une position dans une hiérarchie"},
			{value: "b", label: "L'ensemble des attitudes et comportements qu'une personne doit adopter dans une interaction sociale"},
			{value: "c", label: "Une fonction économique"},
			{value: "d", label: "Un titre professionnel"},
		],
		explanation:
			"Un rôle social est l'ensemble des attitudes et des comportements qu'une personne doit adopter dans le cadre d'une interaction sociale. Il est lié au statut social et régi par des normes. (Source: Fondement_3/Leçon 3 p.11 - Rôle social)",
	},
	{
		id: "q9",
		title: "Question 9",
		question: "Selon Durkheim, de quoi dépend le suicide?",
		type: "radio",
		options: [
			{value: "a", label: "Uniquement de facteurs psychologiques individuels"},
			{value: "b", label: "Du degré de cohésion sociale et d'intégration du groupe"},
			{value: "c", label: "De la situation économique personnelle"},
			{value: "d", label: "Des prédispositions génétiques"},
		],
		explanation:
			"Selon Durkheim, le suicide dépend du degré de cohésion sociale et d'intégration du groupe auquel la personne appartient. Plus on est intégré, connecté et joue des rôles sociaux, plus le sentiment d'appartenance augmente et le risque de suicide diminue. (Source: Durkheim - Le suicide, Fondement_3/Leçon 3 p.13)",
	},
	{
		id: "q10",
		title: "Question 10",
		question: "Quelle est la règle la plus fondamentale du fonctionnalisme selon Durkheim?",
		type: "radio",
		options: [
			{value: "a", label: "Traiter les faits sociaux comme des opinions"},
			{value: "b", label: "Traiter les faits sociaux comme des objets"},
			{value: "c", label: "Traiter les faits sociaux comme des croyances"},
			{value: "d", label: "Traiter les faits sociaux comme des émotions"},
		],
		explanation:
			"La règle la plus fondamentale consiste à traiter les faits sociaux comme des objets. Le fait social est objectivé, il devient mesurable et peut être étudié scientifiquement. (Source: Durkheim - Les règles de la méthode sociologique, Fondement_3/Leçon 3 p.5)",
	},
	{
		id: "q11",
		title: "Question 11",
		question: "Dans les sociétés organiques, sur quoi repose la cohésion sociale?",
		type: "radio",
		options: [
			{value: "a", label: "Sur la similitude des individus"},
			{value: "b", label: "Sur la complémentarité des activités et des fonctions"},
			{value: "c", label: "Sur l'autorité centrale"},
			{value: "d", label: "Sur les traditions ancestrales"},
		],
		explanation:
			"Dans les sociétés organiques, issues de la division du travail et de l'industrialisation, la cohésion sociale repose sur la complémentarité des activités et des fonctions des individus. La spécialisation fait que chaque personne a besoin des autres pour vivre en société. (Source: Durkheim - De la division du travail social, Fondement_3/Leçon 3 p.8)",
	},
	{
		id: "q12",
		title: "Question 12",
		question: "Qu'est-ce qui caractérise une norme sociale?",
		type: "radio",
		options: [
			{value: "a", label: "Elle est toujours écrite"},
			{value: "b", label: "Elle prescrit la manière dont les actions doivent être exercées"},
			{value: "c", label: "Elle est uniquement légale"},
			{value: "d", label: "Elle ne change jamais"},
		],
		explanation:
			"Une norme prescrit la manière dont les actions doivent être exercées. Les normes sociales constituent le ciment de la société, permettant la contrainte sociale et l'intégration sociale nécessaires à la cohérence de la société. (Source: Fondement_3/Leçon 3 p.10 - Normes sociales)",
	},
	{
		id: "q13",
		title: "Question 13",
		question: "Quel type de suicide caractérise une personne qui se sent étouffée et contrainte par les normes de la société?",
		type: "radio",
		options: [
			{value: "a", label: "Le suicide égoïste"},
			{value: "b", label: "Le suicide altruiste"},
			{value: "c", label: "Le suicide fataliste"},
			{value: "d", label: "Le suicide anomique"},
		],
		explanation:
			"Le suicide fataliste caractérise une relation conflictuelle entre la société et l'individu, qui se perçoit comme étouffé et contraint par les normes que la société lui impose (exemple: prisonnier). (Source: Durkheim - Le suicide, Fondement_3/Leçon 3 p.14)",
	},
	{
		id: "q14",
		title: "Question 14",
		question: "Selon le fonctionnalisme, comment conçoit-on la société?",
		type: "radio",
		options: [
			{value: "a", label: "Comme un champ de bataille entre classes"},
			{value: "b", label: "Comme un organisme vivant dont les parties sont solidaires"},
			{value: "c", label: "Comme une construction arbitraire"},
			{value: "d", label: "Comme un système économique"},
		],
		explanation:
			"Le fonctionnalisme conçoit la société comme un être vivant, un organisme dont le tout et les parties sont solidaires. Chaque organe (institution) doit remplir sa fonction par rapport au tout organique. L'accent est mis sur l'harmonie et la collaboration. (Source: Fondement_3/Leçon 3 p.2 - Vision organique de la société)",
	},
	{
		id: "q15",
		title: "Question 15",
		question: "Quelle est la critique principale du béhaviorisme positiviste?",
		type: "radio",
		options: [
			{value: "a", label: "Il est trop subjectif"},
			{value: "b", label: "Il est réducteur et ignore le contexte socio-historique"},
			{value: "c", label: "Il est trop complexe"},
			{value: "d", label: "Il n'est pas scientifique"},
		],
		explanation:
			"La principale critique est que le béhaviorisme positiviste est réducteur (réduit tout à des éléments physiologiques, physiques, chimiques) et ignore le contexte socio-historique qui forme les individus et les relations sociales. (Source: Fondement_3/Leçon 3 p.4 - Critique du béhaviorisme positiviste)",
	},
];

// Réponses correctes pour les questions à choix unique (radio)
export const correctRadioAnswers: Record<string, string> = {
	q2: "b",
	q4: "b",
	q5: "b",
	q7: "b",
	q8: "b",
	q9: "b",
	q10: "b",
	q11: "b",
	q12: "b",
	q13: "c",
	q14: "b",
	q15: "b",
};

// Réponses correctes pour les questions à choix multiples (checkbox)
export const correctCheckboxAnswers: Record<string, string[]> = {
	q1: ["a", "b", "c"],
	q3: ["a", "b", "c"],
	q6: ["a", "b", "c", "d"],
};
// Export complete exam data
export const exam03Data: ExamData = {
	questions: exam03Questions,
	correctRadioAnswers,
	correctCheckboxAnswers,
};
