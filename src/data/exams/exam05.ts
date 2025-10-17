/**
 * Examen 05: le constructivisme social
 * Ce fichier contient toutes les questions et réponses pour l'examen 05
 */

import type { Question, ExamData } from '../../types/exam';

export const exam05Questions: Question[] = [
	{
		id: "q1",
		title: "Question 1",
		question: "Quelles sont les deux thèses fondamentales de Berger et Luckmann dans 'La Construction sociale de la réalité'?",
		type: "checkbox",
		options: [
			{value: "a", label: "La réalité est construite socialement"},
			{value: "b", label: "La sociologie de la connaissance doit analyser les processus par lesquels la réalité apparaît"},
			{value: "c", label: "La réalité est purement objective"},
			{value: "d", label: "La connaissance est innée"},
		],
		explanation:
			"Berger et Luckmann posent deux thèses fondamentales: 1) La réalité est construite socialement, et 2) La sociologie de la connaissance doit analyser les processus à l'intérieur desquels celle-ci apparaît. (Source: Berger & Luckmann - La Construction sociale de la réalité, Fondement_5)",
	},
	{
		id: "q2",
		title: "Question 2",
		question: "Quels sont les trois moments de la construction sociale de la réalité selon Berger et Luckmann?",
		type: "checkbox",
		options: [
			{value: "a", label: "Externalisation (la société est une production humaine)"},
			{value: "b", label: "Objectivation (la société est une réalité objective)"},
			{value: "c", label: "Internalisation (l'homme est une production sociale)"},
			{value: "d", label: "Rationalisation"},
			{value: "e", label: "Bureaucratisation"},
		],
		explanation:
			"Les trois moments dialectiquement liés sont: 1) Externalisation - la société est une production humaine, 2) Objectivation - la société est une réalité objective, 3) Internalisation - l'homme est une production sociale. (Source: Berger & Luckmann - La Construction sociale de la réalité, Fondement_5/5-Molénat.txt p.105)",
	},
	{
		id: "q3",
		title: "Question 3",
		question: "Qu'est-ce que la typification selon Berger et Luckmann?",
		type: "radio",
		options: [
			{value: "a", label: "Un type de documentation"},
			{value: "b", label: "L'outil de connaissance du monde: schémas préétablis pour appréhender autrui"},
			{value: "c", label: "Une forme de discrimination"},
			{value: "d", label: "Un système de classification légale"},
		],
		explanation:
			"La typification consiste à intégrer la présence d'autrui dans des schémas préétablis qui permettent de prévoir un certain type de comportement. C'est l'outil de connaissance du monde. La structure sociale est la somme de ces typifications et des modèles d'interaction établis. (Source: Berger & Luckmann - Fondement_5/5.txt - La typification, Alfred Schütz)",
	},
	{
		id: "q4",
		title: "Question 4",
		question: "Dans l'approche constructiviste de Spector et Kitsuse, quel est l'objet spécifique de l'analyse des problèmes sociaux?",
		type: "radio",
		options: [
			{value: "a", label: "Les conditions objectives des problèmes"},
			{value: "b", label: "L'étude des activités définitionnelles d'individus et de groupes qui formulent des revendications"},
			{value: "c", label: "Les statistiques gouvernementales"},
			{value: "d", label: "Les budgets sociaux"},
		],
		explanation:
			"L'objet spécifique est l'étude des « activités d'individus ou groupes qui ont des griefs ou expriment des revendications eu égard à certaines conditions putatives ». C'est la manière dont s'élaborent collectivement les critères de perception de la réalité. (Source: Spector & Kitsuse, 1987 - Fondement_5/Mayer & Dorvil.txt p.29)",
	},
	{
		id: "q5",
		title: "Question 5",
		question: "Quelles sont les quatre étapes du modèle d'analyse séquentielle de Spector et Kitsuse?",
		type: "checkbox",
		options: [
			{value: "a", label: "Des groupes définissent une situation comme problématique et formulent des demandes"},
			{value: "b", label: "Les revendications sont approuvées par une agence gouvernementale ou institution"},
			{value: "c", label: "Les groupes considèrent la réponse officielle comme inadéquate"},
			{value: "d", label: "Le groupe tente de créer des institutions alternatives"},
			{value: "e", label: "Le problème disparaît naturellement"},
		],
		explanation:
			"Les quatre étapes sont: 1) Définition collective de la situation comme problématique avec formulation de demandes, 2) Approbation par une agence ou institution, 3) Considération que la réponse officielle est inadéquate, 4) Tentative de créer des institutions alternatives. (Source: Spector & Kitsuse - Fondement_5/Mayer & Dorvil.txt p.30)",
	},
	{
		id: "q6",
		title: "Question 6",
		question: "Qu'est-ce que l'institutionnalisation selon Berger et Luckmann?",
		type: "radio",
		options: [
			{value: "a", label: "La création d'hôpitaux"},
			{value: "b", label: "Le processus par lequel des types d'acteurs effectuent une typification réciproque d'actions habituelles"},
			{value: "c", label: "La bureaucratisation"},
			{value: "d", label: "La construction de bâtiments"},
		],
		explanation:
			"L'institutionnalisation se manifeste chaque fois que des types d'acteurs effectuent une typification réciproque d'actions habituelles (une routine d'interactions qui se répète). L'institution établit que les actions de type X seront exécutées par les acteurs de type X. (Source: Berger & Luckmann - Fondement_5/5.txt - L'institutionnalisation)",
	},
	{
		id: "q7",
		title: "Question 7",
		question: "Quels sont les quatre niveaux de légitimation selon Berger et Luckmann?",
		type: "checkbox",
		options: [
			{value: "a", label: "Le langage lui-même"},
			{value: "b", label: "Les propositions théoriques rudimentaires (maximes et adages)"},
			{value: "c", label: "Les théories explicites (droit, par exemple)"},
			{value: "d", label: "Les univers symboliques (mythologie, religion, science)"},
			{value: "e", label: "Les règlements administratifs"},
		],
		explanation:
			"Les quatre niveaux sont: 1) Le langage lui-même, 2) Les propositions théoriques rudimentaires (maximes, adages), 3) Les théories explicites concernant un secteur institutionnel, 4) Les univers symboliques qui donnent sens au monde social dans son ensemble. (Source: Berger & Luckmann - Fondement_5/5.txt - Les niveaux de légitimation)",
	},
	{
		id: "q8",
		title: "Question 8",
		question: "Selon Bonetti, quelles sont les formes que peut prendre la construction d'un problème social?",
		type: "checkbox",
		options: [
			{value: "a", label: "Menace de l'ordre public (paix sociale)"},
			{value: "b", label: "Clientélisme (attirer les faveurs de l'électorat)"},
			{value: "c", label: "Répercussions sur une catégorie dont les intérêts préoccupent la classe politique"},
			{value: "d", label: "Répercussions économiques"},
			{value: "e", label: "Mouvement de compassion et réactions émotives"},
		],
		explanation:
			"Bonetti identifie cinq formes: 1) Menace à la paix sociale, 2) Clientélisme politique, 3) Répercussions sur une catégorie importante pour la classe politique, 4) Répercussions économiques, 5) Mouvement de compassion et réactions émotives de la population. (Source: Bonetti - Fondement_5/Mayer & Dorvil.txt p.34-35)",
	},
	{
		id: "q9",
		title: "Question 9",
		question: "Dans l'exemple de la prostitution juvénile étudié par Fahmi, qui a pris l'initiative d'agir?",
		type: "radio",
		options: [
			{value: "a", label: "Les jeunes prostitués eux-mêmes"},
			{value: "b", label: "Le Comité de la protection de la jeunesse (CPJ)"},
			{value: "c", label: "Les parents"},
			{value: "d", label: "Les médias"},
		],
		explanation:
			"C'est le Comité de la protection de la jeunesse (CPJ), une agence officielle, qui a pris l'initiative d'agir. L'agence a imputé à la population une situation qu'elle jugeait répréhensible moralement. Le principal enjeu n'a pas été le bien-être des jeunes, qui n'ont jamais participé à la définition de 'leur' problème. (Source: Fahmi, 1986 - Fondement_5/Mayer & Dorvil.txt p.40-41)",
	},
	{
		id: "q10",
		title: "Question 10",
		question: "Qu'est-ce que l'imputation dans l'approche constructiviste?",
		type: "radio",
		options: [
			{value: "a", label: "Une accusation légale"},
			{value: "b", label: "Le processus de définition à caractère subjectif de ce qu'est un problème social"},
			{value: "c", label: "Un calcul statistique"},
			{value: "d", label: "Une mesure objective"},
		],
		explanation:
			"L'imputation est le processus de définition à caractère subjectif de ce qu'est un problème social. C'est un concept au cœur de l'analyse constructiviste, puisqu'il permet de remettre en question le statut même de la réalité d'un problème social. (Source: Fondement_5/Mayer & Dorvil.txt p.28 - L'imputation)",
	},
	{
		id: "q11",
		title: "Question 11",
		question: "Selon le constructivisme, comment les problèmes sociaux sont-ils conçus?",
		type: "radio",
		options: [
			{value: "a", label: "Comme des faits objectifs indépendants"},
			{value: "b", label: "Comme des constructions sociales résultant d'activités définitionnelles"},
			{value: "c", label: "Comme des phénomènes naturels"},
			{value: "d", label: "Comme des erreurs statistiques"},
		],
		explanation:
			"Le constructivisme conçoit les problèmes sociaux non comme des conditions objectives, mais comme des constructions sociales résultant des activités définitionnelles de groupes et d'individus. Les problèmes sociaux n'existent pas comme tels, ils font l'objet de processus de construction. (Source: Fondement_5/Mayer & Dorvil.txt p.27-29)",
	},
	{
		id: "q12",
		title: "Question 12",
		question: "Quelle est la différence entre socialisation primaire et secondaire?",
		type: "radio",
		options: [
			{value: "a", label: "Il n'y a pas de différence"},
			{value: "b", label: "La primaire intériorise les règles du monde social (enfance), la secondaire intériorise des sous-mondes sociaux (rôles spécifiques)"},
			{value: "c", label: "La secondaire est plus importante"},
			{value: "d", label: "La primaire ne concerne que l'école"},
		],
		explanation:
			"La socialisation primaire (enfance) est le processus d'intériorisation des règles du monde social et de construction de l'identité. La socialisation secondaire consiste à intérioriser des « sous-mondes » sociaux et des rôles spécifiques (mari, ingénieur, etc.) dans le cadre de la division du travail. (Source: Berger & Luckmann - Fondement_5/5.txt - Socialisation)",
	},
	{
		id: "q13",
		title: "Question 13",
		question: "Dans l'étude de Manseau sur l'abus sexuel, qui a principalement participé à la définition du problème?",
		type: "radio",
		options: [
			{value: "a", label: "Les enfants victimes"},
			{value: "b", label: "Les parents concernés"},
			{value: "c", label: "Les professionnels seuls"},
			{value: "d", label: "Les médias uniquement"},
		],
		explanation:
			"Selon Manseau, lors des discussions entourant l'institutionnalisation du problème de l'abus sexuel au Québec, aucun groupe d'enfants ou de parents concernés ne s'est fait entendre. Seuls les professionnels ont fait valoir leur point de vue, ce qui pose la question de la légitimité de cette définition. (Source: Manseau - Fondement_5/Mayer & Dorvil.txt p.41-42)",
	},
	{
		id: "q14",
		title: "Question 14",
		question: "Qu'est-ce que l'habituation (routine) selon Berger et Luckmann?",
		type: "radio",
		options: [
			{value: "a", label: "Une mauvaise habitude"},
			{value: "b", label: "Les actions humaines routinières qui sont la base de l'institutionnalisation"},
			{value: "c", label: "Un comportement pathologique"},
			{value: "d", label: "Une résistance au changement"},
		],
		explanation:
			"L'habituation est propre aux actions humaines routinières. Les routines aident les acteurs sociaux à trouver leur place, sont les bases de l'institutionnalisation, facilitent l'objectivation et la stabilité de la réalité sociale, et permettent une économie d'énergie en libérant du fardeau de la décision constante. (Source: Berger & Luckmann - Fondement_5/5.txt - L'habituation)",
	},
	{
		id: "q15",
		title: "Question 15",
		question: "Selon le constructivisme, comment doit-on analyser un problème social?",
		type: "radio",
		options: [
			{value: "a", label: "En se concentrant uniquement sur les conditions objectives"},
			{value: "b", label: "En analysant le processus de définition collective et les activités revendicatives"},
			{value: "c", label: "En comptant le nombre de victimes"},
			{value: "d", label: "En consultant uniquement les experts"},
		],
		explanation:
			"Selon le constructivisme, le chercheur doit se centrer sur l'analyse des processus définitionnels plutôt que sur les conditions objectives. Il faut comprendre le processus par lequel des membres d'une société définissent une situation sociale comme un problème social. (Source: Spector & Kitsuse - Fondement_5/Mayer & Dorvil.txt p.29-30)",
	},
	{
		id: "q16",
		title: "Question 16",
		question: "Quels éléments caractérisent la vie quotidienne selon Alfred Schütz?",
		type: "checkbox",
		options: [
			{value: "a", label: "La vie quotidienne est la 'réalité souveraine'"},
			{value: "b", label: "On partage ce monde avec d'autres (intersubjectif)"},
			{value: "c", label: "La typification est l'outil de connaissance"},
			{value: "d", label: "Chacun vit dans un monde complètement isolé"},
		],
		explanation:
			"Selon Schütz, la vie quotidienne est la 'réalité souveraine' qui s'impose à nous, elle est perçue comme intersubjective (partagée avec d'autres), et la typification (schémas préétablis) est l'outil de connaissance du monde. (Source: Alfred Schütz - Fondement_5/5.txt - La vie quotidienne)",
	},
	{
		id: "q17",
		title: "Question 17",
		question: "Selon Zuniga, qu'est-ce que le constructivisme n'est PAS?",
		type: "checkbox",
		options: [
			{value: "a", label: "Un idéalisme métaphysique qui affirme que tout est illusion"},
			{value: "b", label: "Un relativisme cynique pour qui tout est relatif"},
			{value: "c", label: "Une déqualification de toute connaissance scientifique"},
			{value: "d", label: "Une méthode empirique objective"},
		],
		explanation:
			"Zuniga précise que le constructivisme n'est pas: un idéalisme métaphysique qui affirmerait que tout est illusion, ni un relativisme cynique pour qui tout est relatif, ni une déqualification de toute connaissance scientifique. Il s'intéresse au processus actif de construction de la connaissance. (Source: Zuniga - Fondement_5/Mayer & Dorvil.txt p.46-47)",
	},
	{
		id: "q18",
		title: "Question 18",
		question: "Dans l'étude de Lavergne sur la violence conjugale, quelles furent les quatre étapes du processus de construction?",
		type: "checkbox",
		options: [
			{value: "a", label: "Émergence du problème par des groupes de femmes féministes"},
			{value: "b", label: "Politisation du problème (Conseil du statut de la femme)"},
			{value: "c", label: "Prise en charge par l'État (ministères)"},
			{value: "d", label: "Contestation de la définition et des solutions"},
			{value: "e", label: "Résolution complète du problème"},
		],
		explanation:
			"Les quatre étapes sont: 1) Émergence par des groupes féministes, 2) Politisation facilitée par le Conseil du statut de la femme, 3) Prise en charge par l'État qui redéfinit selon ses logiques institutionnelles, 4) Contestation de la définition et des solutions proposées. (Source: Lavergne - Fondement_5/Mayer & Dorvil.txt p.36-40)",
	},
	{
		id: "q19",
		title: "Question 19",
		question: "Quelle est la principale force du constructivisme selon Hubert?",
		type: "radio",
		options: [
			{value: "a", label: "Il fournit des solutions rapides"},
			{value: "b", label: "Il rappelle que les faits/conditions sont inséparables des acteurs sociaux qui les constituent"},
			{value: "c", label: "Il simplifie l'analyse"},
			{value: "d", label: "Il élimine tout débat"},
		],
		explanation:
			"Selon Hubert, la grande force du constructivisme est qu'il rappelle que les faits ou les conditions qui sont censés constituer les problèmes sociaux sont inséparables des acteurs sociaux - ce sont les acteurs qui les constituent en tant que faits et qui les rendent problématiques. (Source: Hubert - Fondement_5/Mayer & Dorvil.txt p.43)",
	},
	{
		id: "q20",
		title: "Question 20",
		question: "Quelle est la principale critique adressée au constructivisme?",
		type: "radio",
		options: [
			{value: "a", label: "Il est trop objectif"},
			{value: "b", label: "Il est trop réducteur en se limitant à décrire comment les acteurs procèdent sans expliquer pourquoi"},
			{value: "c", label: "Il est trop quantitatif"},
			{value: "d", label: "Il ne tient pas compte des acteurs"},
		],
		explanation:
			"La principale critique est que l'approche constructiviste est limitée car elle se borne à décrire comment les acteurs procèdent plutôt qu'à tenter d'expliquer pourquoi ils agissent ainsi. On lui reproche aussi de centrer trop l'attention sur le discours médiatisé au détriment de l'analyse des conditions objectives. (Source: Fondement_5/Mayer & Dorvil.txt p.44-45 - Critiques du constructivisme)",
	},
];

// Réponses correctes pour les questions à choix unique (radio)
export const correctRadioAnswers: Record<string, string> = {
	q3: "b",
	q4: "b",
	q6: "b",
	q9: "b",
	q10: "b",
	q11: "b",
	q12: "b",
	q13: "c",
	q14: "b",
	q15: "b",
	q19: "b",
	q20: "b",
};

// Réponses correctes pour les questions à choix multiples (checkbox)
export const correctCheckboxAnswers: Record<string, string[]> = {
	q1: ["a", "b"],
	q2: ["a", "b", "c"],
	q5: ["a", "b", "c", "d"],
	q7: ["a", "b", "c", "d"],
	q8: ["a", "b", "c", "d", "e"],
	q16: ["a", "b", "c"],
	q17: ["a", "b", "c"],
	q18: ["a", "b", "c", "d"],
};
// Export complete exam data
export const exam05Data: ExamData = {
	questions: exam05Questions,
	correctRadioAnswers,
	correctCheckboxAnswers,
};
