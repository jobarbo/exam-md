/**
 * Examen 10: Approches critiques, transformationnelles et anti-oppressives
 * Ce fichier contient toutes les questions et réponses pour l'examen 10
 */

import type { Question, ExamData } from '../../types/exam';

export const exam10Questions: Question[] = [
	{
		id: "q1",
		title: "Question 1",
		question: "Qu'est-ce qu'une approche anti-oppressive selon Pullen-Sansfaçon?",
		type: "checkbox",
		options: [
			{value: "a", label: "Une façon de travailler qui va questionner les relations de pouvoir"},
			{value: "b", label: "Une approche qui essaie de développer la capacitation/autonomisation des personnes (empowerment)"},
			{value: "c", label: "Une approche qui essaie de déconstruire les relations de pouvoir en posant les bonnes questions"},
			{value: "d", label: "Une approche qui pathologise les individus"},
		],
		explanation:
			"Une approche anti-oppressive est une façon de travailler qui va questionner les relations de pouvoir, essayer de mettre sur pied des façons de travailler qui vont développer la capacitation/autonomisation des personnes (empowerment), et essayer de déconstruire les relations de pouvoir en posant les bonnes questions. Elle est dépathologisante. (Source: Fondement_10/10.txt - Une approche anti-oppressive)",
	},
	{
		id: "q2",
		title: "Question 2",
		question: "Qu'est-ce que l'École de Francfort?",
		type: "radio",
		options: [
			{value: "a", label: "Un courant de pensée né dans l'École de Francfort pour établir une critique de la théorie traditionnelle et de la culture occidentales"},
			{value: "b", label: "Une école primaire"},
			{value: "c", label: "Un mouvement artistique"},
			{value: "d", label: "Une théorie économique"},
		],
		explanation:
			"L'École de Francfort désigne le courant de pensée qui est né dans l'École de Francfort pour établir une critique de la théorie traditionnelle et de la culture et de la morale occidentales. Principaux auteurs: Horkheimer, Adorno, Habermas, Marcuse, Benjamin. (Source: Fondement_10/10.txt - École de Francfort)",
	},
	{
		id: "q3",
		title: "Question 3",
		question: "Quelles sont les caractéristiques de la théorie critique?",
		type: "checkbox",
		options: [
			{value: "a", label: "Autoréflexive"},
			{value: "b", label: "Interdisciplinaire"},
			{value: "c", label: "Matérialiste"},
			{value: "d", label: "Émancipatrice"},
		],
		explanation:
			"La théorie critique est autoréflexive (qui tient compte de sa propre intégration dans des conditions sociales et historiques spécifiques), interdisciplinaire (qui intègre l'analyse philosophique à la théorie sociale), matérialiste (insérant théorisation critique dans la réalité sociale), et émancipatrice (orientant vers le but de l'émancipation sociale). (Source: Fondement_10/10.txt - Méthodes de la théorie critique)",
	},
	{
		id: "q4",
		title: "Question 4",
		question: "Qu'est-ce que le féminisme selon les documents?",
		type: "radio",
		options: [
			{value: "a", label: "Il existe une grande diversité de cadres théoriques et de courants de pensée au sein même du féminisme, d'où l'importance de parler de 'féminismes' au pluriel"},
			{value: "b", label: "Un mouvement uniforme"},
			{value: "c", label: "Une théorie économique"},
			{value: "d", label: "Un parti politique"},
		],
		explanation:
			"Il n'existe pas une définition unique et universelle du féminisme. Il y a une grande diversité de cadres théoriques et de courants de pensée au sein même du féminisme. Parler de 'féminismes' au pluriel souligne cette diversité. L'un des points communs est que la réflexion théorique est issue de la pratique militante. (Source: Fondement_10/10.txt - Féminisme)",
	},
	{
		id: "q5",
		title: "Question 5",
		question: "Quelles étaient les revendications de la première vague du féminisme?",
		type: "checkbox",
		options: [
			{value: "a", label: "Contestation de l'exclusion systématique des femmes de la vie publique et du pouvoir politique"},
			{value: "b", label: "L'égalité juridique avec les hommes"},
			{value: "c", label: "L'obtention du droit de vote (suffragettes)"},
			{value: "d", label: "Le contrôle de la natalité"},
		],
		explanation:
			"La première vague du féminisme était un mouvement collectif de lutte de femmes dont les revendications incluaient: la contestation de l'exclusion systématique des femmes de la vie publique et du pouvoir politique, l'égalité juridique avec les hommes, et l'obtention du droit de vote (suffragettes). (Source: Fondement_10/10.txt - L'approche féministe: 1ère vague)",
	},
	{
		id: "q6",
		title: "Question 6",
		question: "Qu'est-ce que le patriarcat selon Kate Millet?",
		type: "radio",
		options: [
			{value: "a", label: "Une formation sociale où les hommes détiennent le pouvoir"},
			{value: "b", label: "Un système économique"},
			{value: "c", label: "Une religion"},
			{value: "d", label: "Un parti politique"},
		],
		explanation:
			"Selon Kate Millet (1970), le patriarcat est déni comme 'une formation sociale où les hommes détiennent le pouvoir' (Sexual Politics, 1971). Il est synonyme de 'domination masculine' et 'oppression des femmes'. Il s'agit d'un système sociopolitique et culturel. (Source: Fondement_10/10.txt - Féminismes et patriarcat)",
	},
	{
		id: "q7",
		title: "Question 7",
		question: "Qu'est-ce que l'intersectionnalité?",
		type: "radio",
		options: [
			{value: "a", label: "Une position sociale en mouvance où les effets interactifs des systèmes discriminants modèlent la personnalité d'un individu unique et complexe"},
			{value: "b", label: "Une théorie économique"},
			{value: "c", label: "Un système politique"},
			{value: "d", label: "Une méthode d'enseignement"},
		],
		explanation:
			"L'intersectionnalité se définit par 'une position sociale en mouvance où les effets interactifs des systèmes discriminants modèlent la personnalité d'un individu unique et complexe'. Elle permet de comprendre comment les différentes identités sociales d'une personne peuvent se combiner pour produire des modes de discrimination et de privilège. (Source: Fondement_10/Pullen.txt - L'intersectionnalité)",
	},
	{
		id: "q8",
		title: "Question 8",
		question: "Quels sont les trois types d'intersectionnalité?",
		type: "checkbox",
		options: [
			{value: "a", label: "Structurelle: les façons dont le classisme, le sexisme et le racisme s'imbriquent"},
			{value: "b", label: "Politique: qui sépare les femmes et les femmes de couleur en deux groupes subordonnés"},
			{value: "c", label: "Représentationnelle: plaide pour la production d'une image qui soutient les femmes de couleur"},
			{value: "d", label: "Économique"},
		],
		explanation:
			"Les trois types d'intersectionnalité sont: 1) Structurelle (les façons dont le classisme, le sexisme et le racisme s'imbriquent et oppriment les femmes de couleur), 2) Politique (qui sépare les femmes et les femmes de couleur en deux groupes subordonnés), 3) Représentationnelle (plaide pour la production d'une image qui soutient les femmes de couleur). (Source: Fondement_10/10.txt - L'intersectionnalité)",
	},
	{
		id: "q9",
		title: "Question 9",
		question: "Qu'est-ce que la théorie Queer selon Judith Butler?",
		type: "radio",
		options: [
			{value: "a", label: "Elle critique l'essentialisme inhérent à la notion de sexe basé sur la biologie et l'hétéronormativité"},
			{value: "b", label: "Une théorie économique"},
			{value: "c", label: "Un système politique"},
			{value: "d", label: "Une méthode d'enseignement"},
		],
		explanation:
			"La théorie Queer, développée par Judith Butler, critique l'essentialisme inhérent à la notion de sexe basée sur la biologie, ainsi que toutes les idées qui insinuent que l'hétérosexualité est l'orientation sexuelle par défaut (hétéronormativité). Elle remet en question la dichotomie entre le 'sexe biologique' et le genre. (Source: Fondement_10/10.txt - La théorie QUEER)",
	},
	{
		id: "q10",
		title: "Question 10",
		question: "Qu'est-ce que l'oppression selon Mullender et Ward?",
		type: "radio",
		options: [
			{value: "a", label: "Une situation dans laquelle les conditions de vie sont construites et un processus par lequel cette situation est créée et maintenue"},
			{value: "b", label: "Un sentiment personnel"},
			{value: "c", label: "Une théorie économique"},
			{value: "d", label: "Un système politique"},
		],
		explanation:
			"Mullender et Ward décrivent l'oppression comme: 1) une situation dans laquelle les conditions de vie sont construites et 2) un processus par lequel cette situation est créée et maintenue. C'est un acte d'exploitation prenant diverses formes qui a des conséquences sur les conditions de vie d'une personne ou d'un groupe. (Source: Fondement_10/Pullen.txt - Oppression)",
	},
	{
		id: "q11",
		title: "Question 11",
		question: "Quels sont les principes pour une pratique anti-oppressive selon Pullen-Sansfaçon?",
		type: "checkbox",
		options: [
			{value: "a", label: "La poursuite de la transformation sociale"},
			{value: "b", label: "Un engagement de mise à jour des connaissances"},
			{value: "c", label: "Entretenir ses capacités d'auto-réflexion critique"},
			{value: "d", label: "Une analyse critique des problèmes"},
			{value: "e", label: "Le développement de l'empowerment"},
			{value: "f", label: "La mise sur pied d'alliances et le travail en partenariat"},
		],
		explanation:
			"Les principes incluent: la poursuite de la transformation sociale, un engagement de mise à jour des connaissances, entretenir ses capacités d'auto-réflexion critique, une analyse critique des problèmes, le développement de l'empowerment, et la mise sur pied d'alliances et le travail en partenariat. (Source: Fondement_10/Pullen.txt - Principes pour une pratique anti-oppressive)",
	},
	{
		id: "q12",
		title: "Question 12",
		question: "Qu'est-ce que le modèle PCS de Thompson?",
		type: "radio",
		options: [
			{value: "a", label: "Un modèle à trois niveaux: Personnel (P), Culturel (C), Structurel (S) pour analyser l'oppression"},
			{value: "b", label: "Un modèle économique"},
			{value: "c", label: "Un système politique"},
			{value: "d", label: "Une méthode d'enseignement"},
		],
		explanation:
			"Le modèle PCS de Thompson est un modèle à trois niveaux: Personnel (préjugés et attitudes sur le plan personnel), Culturel (valeurs communes, consensus et conformité sur les normes), Structurel (divisions sociales, forces sociales et sociopolitiques). Il permet d'avoir une compréhension holistique des problèmes vécus par la personne. (Source: Fondement_10/Pullen.txt - Analyse critique et mise à jour des connaissances)",
	},
	{
		id: "q13",
		title: "Question 13",
		question: "Quelles étaient les revendications de la deuxième vague du féminisme?",
		type: "checkbox",
		options: [
			{value: "a", label: "Lutte contre les inégalités de facto et juridiques"},
			{value: "b", label: "Droit de disposer librement de son corps (sexualité, contraception, avortement)"},
			{value: "c", label: "Dénonciation du patriarcat comme système de domination"},
			{value: "d", label: "Le droit de vote"},
		],
		explanation:
			"La deuxième vague (années 1960/1970) incluait: l'élargissement des champs de luttes (lutte contre les inégalités de facto et juridiques), le droit de disposer librement de son corps (sexualité, contraception, avortement), et la dénonciation du patriarcat comme système de domination. (Source: Fondement_10/10.txt - L'approche féministe: 2ème vague)",
	},
	{
		id: "q14",
		title: "Question 14",
		question: "Qu'est-ce que la troisième vague du féminisme?",
		type: "radio",
		options: [
			{value: "a", label: "Une critique interne du féminisme qui remet en question le présupposé d'universalité de la condition de la femme et inclut les groupes marginalisés"},
			{value: "b", label: "Un mouvement uniforme"},
			{value: "c", label: "Une théorie économique"},
			{value: "d", label: "Un parti politique"},
		],
		explanation:
			"La troisième vague (années 1980 et suivantes) est une critique interne du féminisme qui remet en question le présupposé d'universalité de la condition de la femme. Elle critique la deuxième vague qui représentait surtout les femmes blanches et de classe moyenne, sans considérer les groupes marginalisés (les noires, les lesbiennes, les femmes des pays non-occidentaux, les migrantes, les autochtones). (Source: Fondement_10/10.txt - L'approche féministe: 3ème vague)",
	},
	{
		id: "q15",
		title: "Question 15",
		question: "Qu'est-ce que l'empowerment selon la pratique anti-oppressive?",
		type: "radio",
		options: [
			{value: "a", label: "Le développement du pouvoir d'agir des personnes, des groupes et des communautés à travers différents paliers (individuel, interpersonnel, structurel)"},
			{value: "b", label: "Un système économique"},
			{value: "c", label: "Un système politique"},
			{value: "d", label: "Une méthode d'enseignement"},
		],
		explanation:
			"L'empowerment est le développement du pouvoir d'agir des personnes, des groupes et des communautés. Il peut être atteint à travers trois paliers: l'empowerment individuel, interpersonnel et structurel. Les paliers supérieurs peuvent seulement être atteints après les paliers inférieurs. (Source: Fondement_10/Pullen.txt - Le développement de l'empowerment)",
	},
	{
		id: "q16",
		title: "Question 16",
		question: "Quelles sont les formes spécifiques d'oppression selon Tremblay?",
		type: "checkbox",
		options: [
			{value: "a", label: "Racisme, ethnocentrisme (groupes ethniques)"},
			{value: "b", label: "Sexisme, genrisme, misogynie (femmes)"},
			{value: "c", label: "Hétérosexisme, homophobie (gais, lesbiennes, bisexuels, transgenres)"},
			{value: "d", label: "Classisme (personnes défavorisées sur le plan socioéconomique)"},
			{value: "e", label: "Capacitisme (personnes handicapées)"},
		],
		explanation:
			"Les formes spécifiques d'oppression incluent: racisme, ethnocentrisme (groupes ethniques); sexisme, genrisme, misogynie (femmes); hétérosexisme, homophobie (gais, lesbiennes, bisexuels, transgenres); classisme (personnes défavorisées); capacitisme (personnes handicapées). (Source: Fondement_10/Pullen.txt - Divisions sociales et formes spécifiques d'oppression)",
	},
	{
		id: "q17",
		title: "Question 17",
		question: "Qu'est-ce que la pratique anti-oppressive selon Dominelli?",
		type: "radio",
		options: [
			{value: "a", label: "Une philosophie centrée sur la personne, un système de valeurs égalitaires recherchant la réduction des effets délétères des inégalités structurelles"},
			{value: "b", label: "Un système économique"},
			{value: "c", label: "Un système politique"},
			{value: "d", label: "Une méthode d'enseignement"},
		],
		explanation:
			"Selon Dominelli, la pratique anti-oppressive incarne une philosophie centrée sur la personne, un système de valeurs égalitaires recherchant la réduction des effets délétères des inégalités structurelles; une méthodologie axée sur le processus et les résultats; un mode de relation entre les structures sociales qui vise à habiliter les utilisateurs de services. (Source: Fondement_10/Pullen.txt - Différentes interprétations de la pratique anti-oppressive)",
	},
	{
		id: "q18",
		title: "Question 18",
		question: "Qu'est-ce que l'effet exponentiel de l'oppression selon Mullaly?",
		type: "radio",
		options: [
			{value: "a", label: "Les types d'oppression vécus ne font pas que s'additionner, mais ont aussi pour effet de créer de nouvelles variables d'oppression, augmentant de manière exponentielle avec l'ajout de nouvelles formes"},
			{value: "b", label: "L'oppression est simplement additive"},
			{value: "c", label: "L'oppression n'existe pas"},
			{value: "d", label: "L'oppression est toujours la même"},
		],
		explanation:
			"Selon Mullaly, les conditions d'oppression multiples ont des effets plus que cumulatifs. Les types d'oppression vécus (racisme, sexisme, classisme) ne font pas que s'additionner, mais ont aussi pour effet de créer 'de nouvelles variables d'oppression'. L'effet interactif des oppressions multiples augmente de manière exponentielle avec l'ajout de nouvelles formes d'oppression. (Source: Fondement_10/Pullen.txt - Oppression)",
	},
	{
		id: "q19",
		title: "Question 19",
		question: "Quels sont les paliers d'intervention selon Mullaly pour la pratique anti-oppressive?",
		type: "checkbox",
		options: [
			{value: "a", label: "Personnel: intervention individualisée pour stabiliser l'expérience des personnes vivant de l'oppression"},
			{value: "b", label: "Interpersonnel: développement d'alliances avec d'autres personnes vivant de l'oppression"},
			{value: "c", label: "Culturel: développement de discours alternatifs et de processus de résistance"},
			{value: "d", label: "Structurel: changement sur le plan des structures, des institutions, des processus et des pratiques sociales"},
		],
		explanation:
			"Les paliers d'intervention selon Mullaly sont: Personnel (intervention individualisée pour stabiliser l'expérience), Interpersonnel (développement d'alliances), Culturel (développement de discours alternatifs et de processus de résistance), Structurel (changement sur le plan des structures, des institutions). (Source: Fondement_10/Pullen.txt - Deux modèles de pratique anti-oppressive)",
	},
	{
		id: "q20",
		title: "Question 20",
		question: "Qu'est-ce que l'auto-réflexion critique dans la pratique anti-oppressive?",
		type: "radio",
		options: [
			{value: "a", label: "Prendre conscience de son propre positionnement social afin de ne pas répéter les oppressions envers les autres"},
			{value: "b", label: "Critiquer les autres"},
			{value: "c", label: "Ignorer ses propres préjugés"},
			{value: "d", label: "Se concentrer uniquement sur les problèmes des clients"},
		],
		explanation:
			"L'auto-réflexion critique implique de prendre conscience de son propre positionnement social afin de ne pas répéter les oppressions envers les autres. Il s'agit de faire une évaluation constante de ses attitudes, expériences, valeurs et position sociale, ainsi que de la manière dont ces dernières influencent la relation avec la personne, les groupes, les communautés. (Source: Fondement_10/Pullen.txt - Autoréflexion critique)",
	},
];

// Réponses correctes pour les questions à choix unique (radio)
export const correctRadioAnswers: Record<string, string> = {
	q2: "a",
	q4: "a",
	q6: "a",
	q7: "a",
	q9: "a",
	q10: "a",
	q12: "a",
	q14: "a",
	q15: "a",
	q17: "a",
	q18: "a",
	q20: "a",
};

// Réponses correctes pour les questions à choix multiples (checkbox)
export const correctCheckboxAnswers: Record<string, string[]> = {
	q1: ["a", "b", "c"],
	q3: ["a", "b", "c", "d"],
	q5: ["a", "b", "c"],
	q8: ["a", "b", "c"],
	q11: ["a", "b", "c", "d", "e", "f"],
	q13: ["a", "b", "c"],
	q16: ["a", "b", "c", "d", "e"],
	q19: ["a", "b", "c", "d"],
};

// Export complete exam data
export const exam10Data: ExamData = {
	questions: exam10Questions,
	correctRadioAnswers,
	correctCheckboxAnswers,
};

