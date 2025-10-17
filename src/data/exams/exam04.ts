/**
 * Examen 04: le marxisme et l'approche conflictuelle
 * Ce fichier contient toutes les questions et réponses pour l'examen 04
 */

import type { Question, ExamData } from '../../types/exam';

export const exam04Questions: Question[] = [
	{
		id: "q1",
		title: "Question 1",
		question: "Pourquoi le marxisme est-il considéré comme une métathéorie?",
		type: "radio",
		options: [
			{value: "a", label: "Parce qu'il est très ancien"},
			{value: "b", label: "Parce qu'il tente d'expliquer l'ensemble de la réalité sociale et inclut les sphères politique, philosophique et sociale"},
			{value: "c", label: "Parce qu'il est simple à comprendre"},
			{value: "d", label: "Parce qu'il ne s'applique qu'à l'économie"},
		],
		explanation:
			"Le marxisme est une métathéorie car il tente d'expliquer l'ensemble de la réalité sociale à partir du modèle qu'il propose. Il inclut les sphères politique, philosophique et sociale et s'offre comme explication globale à l'organisation sociale. (Source: Fondement_4/Leçon 4 - Le marxisme comme métathéorie)",
	},
	{
		id: "q2",
		title: "Question 2",
		question: "Qu'est-ce que le capitalisme selon Marx?",
		type: "radio",
		options: [
			{value: "a", label: "Un système de partage équitable"},
			{value: "b", label: "Un régime d'exploitation généralisé du prolétariat par la bourgeoisie pour en retirer une plus-value"},
			{value: "c", label: "Un système démocratique"},
			{value: "d", label: "Un mode de production égalitaire"},
		],
		explanation:
			"Selon Marx, le capitalisme est un régime d'exploitation généralisé du prolétariat par la bourgeoisie pour en retirer une plus grande plus-value. Il vise l'extraction maximum de cette plus-value, ce qui génère des classes différentes et un phénomène d'aliénation. (Source: Fondement_4/Leçon 4 p.5 - Le capitalisme comme système d'exploitation)",
	},
	{
		id: "q3",
		title: "Question 3",
		question: "Qu'est-ce que l'aliénation selon Marx?",
		type: "radio",
		options: [
			{value: "a", label: "Un état de bonheur au travail"},
			{value: "b", label: "Le processus par lequel le travailleur est dépossédé de son humanité en vendant sa force de travail"},
			{value: "c", label: "Une forme de maladie mentale"},
			{value: "d", label: "Un choix personnel"},
		],
		explanation:
			"L'aliénation est le processus par lequel le travailleur est dépossédé de ce processus fondamental pour son développement. En vendant sa force de travail, le travailleur vend sa propre humanité car le capitalisme transforme le processus de création humaine en marchandise. (Source: Marx - Fondement_4/Leçon 4 p.6 - L'aliénation du travailleur)",
	},
	{
		id: "q4",
		title: "Question 4",
		question: "Qu'est-ce que la plus-value?",
		type: "radio",
		options: [
			{value: "a", label: "Le salaire du travailleur"},
			{value: "b", label: "La différence entre la quantité de travail effectuée et le salaire reçu"},
			{value: "c", label: "Le profit total de l'entreprise"},
			{value: "d", label: "Les impôts payés"},
		],
		explanation:
			"La plus-value se définit par la différence entre la quantité de travail effectuée par les travailleurs et le salaire qu'ils reçoivent. C'est la valeur qui n'est pas payée au travailleur et que l'employeur s'approprie. (Source: Marx - Fondement_4/Leçon 4 p.6 - La plus-value)",
	},
	{
		id: "q5",
		title: "Question 5",
		question: "Qu'est-ce que l'armée de réserve dans la théorie marxiste?",
		type: "radio",
		options: [
			{value: "a", label: "Les forces militaires"},
			{value: "b", label: "Le pourcentage de personnes en permanence à la recherche d'un emploi qui permet aux employeurs de baisser les salaires"},
			{value: "c", label: "Les travailleurs syndiqués"},
			{value: "d", label: "Les retraités"},
		],
		explanation:
			"L'armée de réserve est le pourcentage de personnes en permanence à la recherche d'un emploi. Le capitalisme a besoin de ces chômeurs car avec un grand nombre de chômeurs, les employeurs peuvent baisser les salaires des travailleurs et combler les fluctuations du marché. (Source: Marx - Fondement_4/Leçon 4 p.6 - L'armée de réserve)",
	},
	{
		id: "q6",
		title: "Question 6",
		question: "Quelles sont les quatre classes ou sous-classes sociales identifiées par Marx?",
		type: "checkbox",
		options: [
			{value: "a", label: "La grande bourgeoisie"},
			{value: "b", label: "La petite bourgeoisie"},
			{value: "c", label: "Le prolétariat"},
			{value: "d", label: "Le lumpenprolétariat"},
			{value: "e", label: "L'aristocratie"},
			{value: "f", label: "Les paysans"},
		],
		explanation:
			"Les quatre classes sont: 1) La grande bourgeoisie (possède les moyens de production), 2) La petite bourgeoisie (professions libérales, intellectuels), 3) Le prolétariat (échange sa force de travail contre salaire), 4) Le lumpenprolétariat (en marge, facilement manipulé). (Source: Marx - Fondement_4/Leçon 4 p.7 - Les classes sociales)",
	},
	{
		id: "q7",
		title: "Question 7",
		question: "Qu'est-ce que la dialectique selon Hegel et Marx?",
		type: "radio",
		options: [
			{value: "a", label: "Une simple conversation"},
			{value: "b", label: "Une forme de raisonnement basée sur la rencontre d'arguments et contre-arguments générant des contradictions"},
			{value: "c", label: "Un débat politique"},
			{value: "d", label: "Une méthode d'enseignement"},
		],
		explanation:
			"La dialectique est une forme de raisonnement basée sur la rencontre d'arguments et de contre-arguments qui génèrent des contradictions. C'est dans la tentative de résoudre ces contradictions qu'on accède à un degré supérieur de vérité. La pensée se développe par contradictions (affirmation, négation, négation de la négation). (Source: Hegel/Marx - Fondement_4/Leçon 4 p.4 - La dialectique)",
	},
	{
		id: "q8",
		title: "Question 8",
		question: "Quelle est la différence entre l'infrastructure et la superstructure selon Marx?",
		type: "radio",
		options: [
			{value: "a", label: "L'infrastructure est le système politique, la superstructure est économique"},
			{value: "b", label: "L'infrastructure est le système de production économique qui conditionne la superstructure (politique, sociale, idéologique)"},
			{value: "c", label: "Il n'y a pas de différence"},
			{value: "d", label: "La superstructure détermine l'infrastructure"},
		],
		explanation:
			"L'infrastructure est le système de production économique. La superstructure est le système politique, social et idéologique. Selon Marx, l'infrastructure conditionne la superstructure. Le mode de production matérielle conditionne le processus de la vie sociale, politique et intellectuelle. (Source: Marx - Fondement_4/Leçon 4 p.4-5 - Infrastructure et superstructure)",
	},
	{
		id: "q9",
		title: "Question 9",
		question: "Qu'est-ce que l'hégémonie selon Gramsci?",
		type: "radio",
		options: [
			{value: "a", label: "L'imposition d'idées par la force (domination)"},
			{value: "b", label: "La situation où des idées imprègnent tellement la société qu'elles facilitent le maintien du statu quo"},
			{value: "c", label: "Un type de gouvernement"},
			{value: "d", label: "Une forme de révolution"},
		],
		explanation:
			"Selon Gramsci, l'hégémonie (différente de la domination qui est l'imposition par la force) est la situation dans laquelle un ensemble d'idées, de valeurs, d'attitudes ou de croyances imprègnent tellement la société qu'elles facilitent le maintien du statu quo des relations de pouvoir existantes. (Source: Gramsci - Fondement_4/Leçon 4 p.10 - Hégémonie vs domination)",
	},
	{
		id: "q10",
		title: "Question 10",
		question: "Selon Marx, qu'est-ce qui constitue la base des changements historiques?",
		type: "radio",
		options: [
			{value: "a", label: "Les grands individus"},
			{value: "b", label: "Les modes de production"},
			{value: "c", label: "Les idées philosophiques"},
			{value: "d", label: "Les révolutions politiques"},
		],
		explanation:
			"Selon Marx, ce sont les modes de production qui constituent la base des changements historiques, et non les individus. Le mode de production de la vie matérielle conditionne le processus de la vie sociale, politique et intellectuelle en général. (Source: Marx - Fondement_4/Leçon 4 p.3 - Le matérialisme historique)",
	},
	{
		id: "q11",
		title: "Question 11",
		question: "Pourquoi le marxisme est-il dit déterministe?",
		type: "radio",
		options: [
			{value: "a", label: "Parce qu'il croit au libre arbitre"},
			{value: "b", label: "Parce qu'il considère que les phénomènes sociaux sont déterminés par des lois socio-historiques"},
			{value: "c", label: "Parce qu'il rejette toute explication"},
			{value: "d", label: "Parce qu'il est pessimiste"},
		],
		explanation:
			"Le marxisme est déterministe car il considère que les phénomènes sociaux sont déterminés par un ensemble de lois socio-historiques. Nous sommes déterminés par les infrastructures de notre société, ce qui teinte nos relations sociales. La volonté individuelle n'a pas grand-chose à voir avec les processus sociaux. (Source: Fondement_4/Leçon 4 p.3 - Le déterminisme marxiste)",
	},
	{
		id: "q12",
		title: "Question 12",
		question: "Qu'est-ce que le travail représente pour le marxisme?",
		type: "checkbox",
		options: [
			{value: "a", label: "Le processus par lequel la nature des choses est modifiée"},
			{value: "b", label: "Un processus créatif permettant d'exprimer son humanité"},
			{value: "c", label: "Le processus de matérialisation de l'être humain"},
			{value: "d", label: "Une simple obligation économique"},
			{value: "e", label: "Une punition divine"},
		],
		explanation:
			"Pour le marxisme, le travail est le processus par lequel la nature des choses est modifiée. C'est un processus créatif permettant à une personne d'exprimer sa propre humanité. C'est le processus de matérialisation de l'être humain par lequel non seulement la nature est modifiée, mais l'être humain lui-même est modifié. (Source: Marx - Fondement_4/Leçon 4 p.5 - Le travail comme essence humaine)",
	},
	{
		id: "q13",
		title: "Question 13",
		question: "Selon Dahrendorf, qu'est-ce qui empêche une révolution des groupes défavorisés dans les sociétés contemporaines?",
		type: "checkbox",
		options: [
			{value: "a", label: "Les mécanismes de démocratie industrielle"},
			{value: "b", label: "Les mécanismes politiques démocratiques"},
			{value: "c", label: "Le développement d'une classe moyenne importante"},
			{value: "d", label: "L'appartenance à des groupes variés au-delà de la simple appartenance de classe"},
			{value: "e", label: "La répression policière"},
		],
		explanation:
			"Dahrendorf identifie plusieurs 'verrous': les mécanismes de démocratie industrielle, les mécanismes politiques démocratiques, le développement d'une classe moyenne importante, et l'appartenance à des groupes variés au-delà de la simple appartenance à une classe. (Source: Dahrendorf - Fondement_4/Leçon 4 p.12 - Les verrous contre la révolution)",
	},
	{
		id: "q14",
		title: "Question 14",
		question: "Quelle est la solution proposée par Marx aux problèmes du capitalisme?",
		type: "radio",
		options: [
			{value: "a", label: "Des réformes graduelles"},
			{value: "b", label: "Une révolution qui change le système de pouvoir avec prise de conscience du prolétariat"},
			{value: "c", label: "Le maintien du statu quo"},
			{value: "d", label: "L'éducation des bourgeois"},
		],
		explanation:
			"La solution selon Marx est une révolution qui change le système de pouvoir, nécessitant une prise de conscience du prolétariat. Il prône la dictature du prolétariat via un renversement de la situation actuelle, pour ensuite démanteler cette dictature lorsque les rapports seront égaux. (Source: Marx - Fondement_4/Leçon 4 p.8 - La révolution prolétarienne)",
	},
	{
		id: "q15",
		title: "Question 15",
		question: "Qu'est-ce que les rapports sociaux de production?",
		type: "radio",
		options: [
			{value: "a", label: "Les amitiés au travail"},
			{value: "b", label: "Les relations sociales qui s'établissent entre les acteurs de la production selon leur lien avec le système de production"},
			{value: "c", label: "Les contrats de travail"},
			{value: "d", label: "Les horaires de travail"},
		],
		explanation:
			"Les rapports sociaux de production font référence aux relations sociales qui s'établissent entre les différents acteurs de la production. Les relations sociales dépendent du lien avec le système de production. Ces relations ne peuvent qu'être conflictuelles entre bourgeoisie et prolétariat. (Source: Marx - Fondement_4/Leçon 4 p.5 - Rapports sociaux de production)",
	},
	{
		id: "q16",
		title: "Question 16",
		question: "Quelle contribution le marxisme apporte-t-il au travail social?",
		type: "checkbox",
		options: [
			{value: "a", label: "Percevoir l'individu en relation avec son environnement"},
			{value: "b", label: "Identifier les déterminants qui conditionnent l'individu"},
			{value: "c", label: "Comprendre le classisme comme forme de discrimination"},
			{value: "d", label: "Reconnaître que la pauvreté est le résultat d'un processus d'aliénation"},
			{value: "e", label: "Promouvoir le capitalisme"},
		],
		explanation:
			"Le marxisme contribue à: percevoir l'individu en relation avec son environnement, identifier les déterminants qui le conditionnent, comprendre le classisme comme forme de discrimination, et reconnaître que la pauvreté n'est pas une condition naturelle mais le résultat d'un processus d'aliénation et de précarisation intergénérationnelle. (Source: Fondement_4/Leçon 4 p.13 - Contributions au travail social)",
	},
	{
		id: "q17",
		title: "Question 17",
		question: "Qu'est-ce que la bourgeoisie selon Marx?",
		type: "radio",
		options: [
			{value: "a", label: "Les agriculteurs"},
			{value: "b", label: "Un groupe social composé de marchands, commerçants et artisans qui contrôle les moyens de production"},
			{value: "c", label: "Les travailleurs d'usine"},
			{value: "d", label: "L'aristocratie"},
		],
		explanation:
			"La bourgeoisie désigne un groupe social qui n'appartient ni à l'aristocratie ni au servage et se compose principalement de marchands, de commerçants et d'artisans. Selon Marx, c'est la classe révolutionnaire qui a pris le pouvoir et contrôle les moyens de production. (Source: Marx - Fondement_4/Leçon 4 p.7 - La bourgeoisie)",
	},
	{
		id: "q18",
		title: "Question 18",
		question: "Qu'est-ce que le lumpenprolétariat?",
		type: "radio",
		options: [
			{value: "a", label: "L'élite ouvrière"},
			{value: "b", label: "La classe qui se situe en dessous du prolétariat, avec peu de conscience de classe"},
			{value: "c", label: "Les travailleurs qualifiés"},
			{value: "d", label: "La classe moyenne"},
		],
		explanation:
			"Le lumpenprolétariat est la classe qui se situe en dessous ou en marge du prolétariat et qui a peu de conscience de classe. Cette classe est facilement manipulée ou achetée par la bourgeoisie selon Marx. (Source: Marx - Fondement_4/Leçon 4 p.7 - Le lumpenprolétariat)",
	},
	{
		id: "q19",
		title: "Question 19",
		question: "Selon Marx, comment se fait le changement social?",
		type: "radio",
		options: [
			{value: "a", label: "Par l'éducation uniquement"},
			{value: "b", label: "Par la lutte des classes et la révolution"},
			{value: "c", label: "Par des réformes pacifiques"},
			{value: "d", label: "Par le développement technologique seul"},
		],
		explanation:
			"Selon Marx, le changement social se fait par la lutte des classes et la révolution. Il y a compétition et conflit entre les travailleurs et la bourgeoisie. Le prolétariat doit prendre conscience de sa situation et mener une révolution pour changer le système de pouvoir. (Source: Marx - Fondement_4/Leçon 4 p.7-8 - La lutte des classes)",
	},
	{
		id: "q20",
		title: "Question 20",
		question: "Qu'est-ce que le matérialisme historique?",
		type: "radio",
		options: [
			{value: "a", label: "L'étude des objets matériels"},
			{value: "b", label: "La théorie selon laquelle l'histoire humaine est déterminée par l'infrastructure économique"},
			{value: "c", label: "L'accumulation de richesses"},
			{value: "d", label: "La collection d'objets historiques"},
		],
		explanation:
			"Le matérialisme historique est la théorie selon laquelle l'histoire humaine est déterminée par l'infrastructure (système de production économique) qui détermine la superstructure. Les relations économiques et les modes de production changent au long de l'histoire, influençant le système sociopolitique et idéologique. (Source: Marx - Fondement_4/Leçon 4 p.3-4 - Le matérialisme historique)",
	},
];

// Réponses correctes pour les questions à choix unique (radio)
export const correctRadioAnswers: Record<string, string> = {
	q1: "b",
	q2: "b",
	q3: "b",
	q4: "b",
	q5: "b",
	q7: "b",
	q8: "b",
	q9: "b",
	q10: "b",
	q11: "b",
	q14: "b",
	q15: "b",
	q17: "b",
	q18: "b",
	q19: "b",
	q20: "b",
};

// Réponses correctes pour les questions à choix multiples (checkbox)
export const correctCheckboxAnswers: Record<string, string[]> = {
	q6: ["a", "b", "c", "d"],
	q12: ["a", "b", "c"],
	q13: ["a", "b", "c", "d"],
	q16: ["a", "b", "c", "d"],
};
// Export complete exam data
export const exam04Data: ExamData = {
	questions: exam04Questions,
	correctRadioAnswers,
	correctCheckboxAnswers,
};
