/**
 * Examen 11: Modernité, colonialité et décolonialité
 * Ce fichier contient toutes les questions et réponses pour l'examen 11
 */

import type { Question, ExamData } from '../../types/exam';

export const exam11Questions: Question[] = [
	{
		id: "q1",
		title: "Question 1",
		question: "Qu'est-ce que le colonialisme?",
		type: "radio",
		options: [
			{value: "a", label: "L'occupation militaire et l'annexion légale d'un territoire par une force impériale étrangère"},
			{value: "b", label: "Un système économique"},
			{value: "c", label: "Une théorie philosophique"},
			{value: "d", label: "Un mouvement artistique"},
		],
		explanation:
			"Le colonialisme désigne l'occupation militaire et l'annexion légale d'un territoire par une force impériale étrangère. Il y a eu deux expansions européennes: la première commence avec l'invasion espagnole et portugaise à partir de 1492, et la deuxième correspond à l'invasion de l'Asie et de l'Afrique au cours du XIXe siècle. (Source: Fondement_11/11.txt - Le colonialisme et les expansions européennes)",
	},
	{
		id: "q2",
		title: "Question 2",
		question: "Quelle est la différence entre le post-colonialisme et le tournant décolonial?",
		type: "radio",
		options: [
			{value: "a", label: "Le postcolonialisme met l'accent sur l'expansion européenne du XIXe siècle, tandis que le tournant décolonial se concentre sur la première expansion européenne qui commence en 1492"},
			{value: "b", label: "Ils sont identiques"},
			{value: "c", label: "Le postcolonialisme est plus récent"},
			{value: "d", label: "Il n'y a pas de différence"},
		],
		explanation:
			"Il ne faut pas confondre le tournant décolonial avec le post-colonialisme. Le postcolonialisme met l'accent sur l'expansion européenne du XIXe siècle et est influencé par la pensée critique occidentale et postmoderne. Le tournant décolonial se concentre sur la première expansion européenne qui commence en 1492. (Source: Fondement_11/11.txt - Le post-colonialisme vs Le tournant décolonial)",
	},
	{
		id: "q3",
		title: "Question 3",
		question: "Qu'est-ce que l'orientalisme selon Edward Said?",
		type: "radio",
		options: [
			{value: "a", label: "Un concept critique qui décrit la manière dont l'Occident a élaboré une représentation dépréciative de l'Orient"},
			{value: "b", label: "Une théorie économique"},
			{value: "c", label: "Un mouvement artistique"},
			{value: "d", label: "Une religion"},
		],
		explanation:
			"L'orientalisme est un concept critique qui décrit la manière dont l'Occident a élaboré une représentation dépréciative de l'Orient. L'Orient a été conçu par l'Occident comme un 'Autre' irrationnel, psychologiquement faible, féminisé et non-européen, qui s'oppose négativement à l'idée d'un Ouest rationnel, psychologiquement fort et masculin. (Source: Fondement_11/11.txt - Orientalisme)",
	},
	{
		id: "q4",
		title: "Question 4",
		question: "Selon Dussel, quand et comment la modernité est-elle née?",
		type: "radio",
		options: [
			{value: "a", label: "En 1492, lors de la rencontre entre l'Europe et l'Amérique, et non par des processus internes au développement de l'Europe"},
			{value: "b", label: "Au XVIIIe siècle en Europe"},
			{value: "c", label: "Au XIXe siècle"},
			{value: "d", label: "Au Moyen Âge"},
		],
		explanation:
			"Selon Dussel, la Modernité n'a pas été sécrétée par des processus internes au développement de l'Europe mais a littéralement surgi de la rencontre entre l'Europe et l'Amérique, très précisément en 1492. L'Europe occidentale n'était pas le centre du monde avant 1492. (Source: Fondement_11/11 - bourguignon-2016-de-luniversel-au-pluriversel-enjeux-et-defis-du-paradigme-decolonial.txt - DÉCONSTRUIRE LE RÉCIT EUROCENTRIQUE DE LA MODERNITÉ)",
	},
	{
		id: "q5",
		title: "Question 5",
		question: "Qu'est-ce que la modernité-colonialité?",
		type: "checkbox",
		options: [
			{value: "a", label: "Il n'y a pas de modernité sans colonialité"},
			{value: "b", label: "Le colonialisme ne serait pas seulement un sous-produit de la modernité occidentale, mais elle serait le noyau de la notion de modernité"},
			{value: "c", label: "La colonialité désigne la 'logique culturelle' du colonialisme"},
			{value: "d", label: "La modernité est indépendante de la colonialité"},
		],
		explanation:
			"Il n'y a pas de modernité sans colonialité: le colonialisme ne serait pas seulement un sous-produit de la modernité occidentale, mais elle serait le noyau de la notion de modernité. La 'colonialité' désigne la 'logique culturelle' du colonialisme, c'est-à-dire au type d'héritages coloniaux qui persistent et se multiplient même après la fin du colonialisme. (Source: Fondement_11/11.txt - La modernité-colonialité)",
	},
	{
		id: "q6",
		title: "Question 6",
		question: "Qu'est-ce que la colonialité du pouvoir selon Quijano?",
		type: "radio",
		options: [
			{value: "a", label: "La concentration de la richesse et des privilèges sociaux dans les colonies est définie en fonction de la race et du phénotype des individus, et la division sociale du travail sera établie sur cette base"},
			{value: "b", label: "Un système économique uniquement"},
			{value: "c", label: "Une théorie philosophique"},
			{value: "d", label: "Un mouvement politique"},
		],
		explanation:
			"La colonialité du pouvoir (Quijano) signifie que la concentration de la richesse et des privilèges sociaux dans les colonies est définie en fonction de la race et du phénotype des individus (blanc, autochtone, noir) et la division sociale du travail sera établie sur cette base. Les catégories sociales fondées sur le racisme colonial n'existaient pas avant le colonialisme. (Source: Fondement_11/11.txt - Colonialité du pouvoir)",
	},
	{
		id: "q7",
		title: "Question 7",
		question: "Qu'est-ce que la colonialité de l'être selon Maldonado-Torres?",
		type: "radio",
		options: [
			{value: "a", label: "La négation de l'humanité de l'autre, considéré comme des populations sous-humaines, inférieures"},
			{value: "b", label: "Un système économique"},
			{value: "c", label: "Une théorie philosophique"},
			{value: "d", label: "Un mouvement politique"},
		],
		explanation:
			"La colonialité de l'être = La Honte (Maldonado-Torres) est la négation de l'humanité de l'autre. Ces autres sont considérés comme des populations sous-humaines, inférieures, et il est donc légitime de les réduire en esclavage, de prendre leurs terres, de leur faire la guerre ou simplement de les assassiner en toute impunité. (Source: Fondement_11/11.txt - Colonialité de l'être)",
	},
	{
		id: "q8",
		title: "Question 8",
		question: "Qu'est-ce que la colonialité du savoir selon Quijano et Dussel?",
		type: "checkbox",
		options: [
			{value: "a", label: "La rationalité techno-scientifique est un facteur déterminant dans la génération et l'expansion du colonialisme européen"},
			{value: "b", label: "Elle devient le seul modèle valable pour la production de connaissances, laissant de côté tout autre type d'épistémès générés dans les colonies"},
			{value: "c", label: "Elle produit une dépendance des pays non occidentaux à l'égard du savoir produit en Occident"},
			{value: "d", label: "Elle favorise l'égalité dans la production de connaissances"},
		],
		explanation:
			"La colonialité du savoir (Quijano, Dussel) signifie que la rationalité techno-scientifique est un facteur déterminant dans la génération et l'expansion du colonialisme européen, et depuis le XVIIIe siècle elle devient le seul modèle valable pour la production de connaissances, laissant de côté tout autre type 'd'épistémès' générés dans les colonies. Elle produit une dépendance des pays non occidentaux à l'égard du savoir produit en Occident. (Source: Fondement_11/11.txt - Colonialité du savoir)",
	},
	{
		id: "q9",
		title: "Question 9",
		question: "Qu'est-ce que la décolonisation selon Tuck et Wayne Yang?",
		type: "radio",
		options: [
			{value: "a", label: "Décolonisation n'est pas une métaphore: rendre les terres volées aux peuples autochtones"},
			{value: "b", label: "Un processus uniquement intellectuel"},
			{value: "c", label: "Une théorie économique"},
			{value: "d", label: "Un mouvement politique"},
		],
		explanation:
			"Décolonisation n'est pas une métaphore: rendre les terres volées aux peuples autochtones (Tuck et Wayne Yang, 2012). Elle implique aussi l'introversion envers les cultures autochtones et le refus de l'eurocentrisme, ainsi que la décolonisation de la pensée et des savoirs. (Source: Fondement_11/11.txt - Décolonisation et décolonialité)",
	},
	{
		id: "q10",
		title: "Question 10",
		question: "Qu'est-ce que la désobéissance épistémique selon Mignolo?",
		type: "radio",
		options: [
			{value: "a", label: "Dénonciation de toute prétention hégémonique et non questionnée de posséder le savoir universel"},
			{value: "b", label: "Un système économique"},
			{value: "c", label: "Une théorie philosophique"},
			{value: "d", label: "Un mouvement politique"},
		],
		explanation:
			"La désobéissance épistémique (Mignolo) est la dénonciation de toute prétention hégémonique et non questionnée de posséder le savoir universel. Elle fait partie de la décolonisation de la pensée et des savoirs (Mbonda - émancipation de colonisés). (Source: Fondement_11/11.txt - Décolonisation et décolonialité)",
	},
	{
		id: "q11",
		title: "Question 11",
		question: "Qu'est-ce que l'hybris du point zéro selon Castro-Gómez?",
		type: "radio",
		options: [
			{value: "a", label: "Le fantasme de la conscience absolue, déliée de tout lieu d'énonciation, qui s'institue comme commencement absolu"},
			{value: "b", label: "Un système économique"},
			{value: "c", label: "Une théorie philosophique"},
			{value: "d", label: "Un mouvement politique"},
		],
		explanation:
			"L'hybris du point zéro (Castro-Gómez) est le fantasme de la conscience absolue, déliée de tout lieu d'énonciation, qui s'institue comme commencement absolu, s'arrogeant un pouvoir exorbitant sur ce qu'il objective. L'eurocentrisme moderne/colonial apparaît ainsi comme une forme spécifique d'ethnocentrisme: un régime de vérité fondé sur une confusion systématique entre l'universalité abstraite et l'hégémonie mondiale concrète. (Source: Fondement_11/11 - bourguignon-2016-de-luniversel-au-pluriversel-enjeux-et-defis-du-paradigme-decolonial.txt - POUR UNE NOUVELLE GÉOPOLITIQUE DU SAVOIR)",
	},
	{
		id: "q12",
		title: "Question 12",
		question: "Qu'est-ce que la pensée frontalière selon Mignolo?",
		type: "radio",
		options: [
			{value: "a", label: "Les pratiques épistémiques des intellectuels du Sud qui occupent un lieu d'énonciation situé sur les frontières internes ou externes du système-monde colonial"},
			{value: "b", label: "Une théorie économique"},
			{value: "c", label: "Une théorie philosophique"},
			{value: "d", label: "Un mouvement politique"},
		],
		explanation:
			"La pensée frontalière (Mignolo) décrit les pratiques épistémiques des intellectuels du Sud qui occupent un 'lieu d'énonciation dichotomique [...] situé sur les frontières internes ou externes du système-monde colonial'. En articulant leurs propres traditions épistémiques au 'canon' moderne/colonial majoritaire, ces intellectuels engendrent un nouveau lieu d'énonciation. (Source: Fondement_11/11 - bourguignon-2016-de-luniversel-au-pluriversel-enjeux-et-defis-du-paradigme-decolonial.txt - POUR UNE NOUVELLE GÉOPOLITIQUE DU SAVOIR)",
	},
	{
		id: "q13",
		title: "Question 13",
		question: "Qu'est-ce que la transmodernité selon Dussel?",
		type: "radio",
		options: [
			{value: "a", label: "Le projet utopique qui viserait à traverser la modernité/colonialité, non pas en la niant mais en l'appréhendant depuis son extériorité relative, depuis le standpoint de l'altérité"},
			{value: "b", label: "Un système économique"},
			{value: "c", label: "Une théorie philosophique"},
			{value: "d", label: "Un mouvement politique"},
		],
		explanation:
			"La transmodernité (Dussel) est le projet utopique qui viserait à traverser la modernité/colonialité, non pas en la niant mais en l'appréhendant depuis son extériorité relative, depuis le standpoint de l'altérité. C'est une coréalisation solidaire, que Dussel appelle 'analectique', non par négation pure mais par incorporation depuis l'altérité. (Source: Fondement_11/11 - bourguignon-2016-de-luniversel-au-pluriversel-enjeux-et-defis-du-paradigme-decolonial.txt - POUR UNE NOUVELLE GÉOPOLITIQUE DU SAVOIR)",
	},
	{
		id: "q14",
		title: "Question 14",
		question: "Quels sont les résultats de la modernité-colonialité?",
		type: "checkbox",
		options: [
			{value: "a", label: "Création de catégories de subalternisation"},
			{value: "b", label: "Périphérisation des autres régions du monde et des autres groupes socioculturels"},
			{value: "c", label: "Races, Épistème eurocentrique, Centre/périphérie, Barbarie/civilisation"},
			{value: "d", label: "Développement/en développement, Premier monde/tiers monde"},
		],
		explanation:
			"Résultat de la modernité-colonialité: création de catégories de subalternisation, notamment par la périphérisation des autres régions du monde et des autres groupes socioculturels, une tendance qui persiste aujourd'hui. Cela inclut: Races, Épistème eurocentrique, Centre/périphérie, Barbarie/civilisation, Développement/en développement, Premier monde/tiers monde. (Source: Fondement_11/11.txt - La modernité-colonialité)",
	},
	{
		id: "q15",
		title: "Question 15",
		question: "Qu'est-ce que le plurivers selon la pensée décoloniale?",
		type: "radio",
		options: [
			{value: "a", label: "Un processus de pluriversalisation du monde qui ne soit pas une universalisation de l'épistémè eurocentriste"},
			{value: "b", label: "Un système économique"},
			{value: "c", label: "Une théorie philosophique"},
			{value: "d", label: "Un mouvement politique"},
		],
		explanation:
			"Le plurivers désigne un processus de pluriversalisation du monde qui ne soit pas une universalisation de l'épistémè eurocentriste. Ces histoires locales dessinent d'ores et déjà la possibilité d'une mondialisation qui ne soit pas une universalisation de l'épistémè eurocentriste mais un processus de pluriversalisation du monde. (Source: Fondement_11/11 - bourguignon-2016-de-luniversel-au-pluriversel-enjeux-et-defis-du-paradigme-decolonial.txt - POUR UNE NOUVELLE GÉOPOLITIQUE DU SAVOIR)",
	},
	{
		id: "q16",
		title: "Question 16",
		question: "Qui sont les principaux auteurs du tournant décolonial?",
		type: "checkbox",
		options: [
			{value: "a", label: "Santiago Castro Gomez, Maria Lugones, Enrique Dussel"},
			{value: "b", label: "Anibal Quijano, Rita Segato, Ramon Grosfoguel"},
			{value: "c", label: "Arturo Escobar, Walter Mignolo"},
			{value: "d", label: "Gayatri Chakravorty Spivak"},
		],
		explanation:
			"Les principaux auteurs du tournant décolonial sont: Santiago Castro Gomez, Maria Lugones, Enrique Dussel, Anibal Quijano, Rita Segato, Ramon Grosfoguel, Arturo Escobar, Walter Mignolo. (Note: Gayatri Chakravorty Spivak est associée au postcolonialisme, pas au tournant décolonial). (Source: Fondement_11/11.txt - Le tournant décolonial)",
	},
	{
		id: "q17",
		title: "Question 17",
		question: "Quelles sont les racines de la critique décoloniale?",
		type: "checkbox",
		options: [
			{value: "a", label: "L'anticolonialisme de Fanon et Césaire"},
			{value: "b", label: "La pédagogie de l'opprimé"},
			{value: "c", label: "La philosophie de la libération"},
			{value: "d", label: "La recherche-action participative"},
			{value: "e", label: "La théorie de la dépendance"},
		],
		explanation:
			"Les racines de la critique décoloniale incluent: l'anticolonialisme de Fanon et Césaire, la pédagogie de l'opprimé, la philosophie de la libération, la recherche-action participative, et la théorie de la dépendance. Auteurs: Enzo Faletto, Franz Fanon, Fals-Borda, Enrique Dussel. (Source: Fondement_11/11.txt - Première expansion européenne qui commence en 1492)",
	},
	{
		id: "q18",
		title: "Question 18",
		question: "Qu'est-ce que la décolonialité en travail social selon Caroline Keisha Foray?",
		type: "checkbox",
		options: [
			{value: "a", label: "Restituer un pouvoir d'être et d'agir"},
			{value: "b", label: "Explorer l'histoire et le contexte des valeurs et croyances hégémoniques incontestées"},
			{value: "c", label: "Nommer pour faire exister"},
			{value: "d", label: "Être formé.e.s et se former à comprendre et à déconstruire les représentations dominantes et les significations"},
		],
		explanation:
			"Caroline Keisha Foray propose pour la décolonialité en travail social: restituer un pouvoir d'être et d'agir, explorer l'histoire et le contexte des valeurs et croyances hégémoniques incontestées, nommer pour faire exister, être formé.e.s et se former à comprendre et à déconstruire les représentations dominantes et les significations. (Source: Fondement_11/11.txt - Décolonialité en travail social)",
	},
	{
		id: "q19",
		title: "Question 19",
		question: "Qu'est-ce que l'ego conquiro selon Dussel?",
		type: "radio",
		options: [
			{value: "a", label: "L'ego conquérant européen de la première modernité qui constituerait le préalable impératif du sujet autocentré (ego cogito) de la seconde modernité"},
			{value: "b", label: "Un système économique"},
			{value: "c", label: "Une théorie philosophique"},
			{value: "d", label: "Un mouvement politique"},
		],
		explanation:
			"L'ego conquiro européen de la première modernité constituerait le préalable impératif du sujet autocentré – l'ego cogito – de la seconde modernité. La modernité naquit quand l'Europe put se confronter à un 'Autre' et le contrôler, le vaincre, le violenter, le détruire; quand elle put se définir comme un 'ego' découvreur, conquérant, colonisateur de l'Altérité constitutive de la propre Modernité. (Source: Fondement_11/11 - bourguignon-2016-de-luniversel-au-pluriversel-enjeux-et-defis-du-paradigme-decolonial.txt - DÉCONSTRUIRE LE RÉCIT EUROCENTRIQUE DE LA MODERNITÉ)",
	},
	{
		id: "q20",
		title: "Question 20",
		question: "Qu'est-ce que la colonialité du pouvoir selon Quijano en termes de domaines d'incidence?",
		type: "checkbox",
		options: [
			{value: "a", label: "Le travail"},
			{value: "b", label: "La nature"},
			{value: "c", label: "Le sexe"},
			{value: "d", label: "La subjectivité (imaginaires et connaissances produites)"},
			{value: "e", label: "L'autorité"},
		],
		explanation:
			"L'opération de racialisation de la colonialité du pouvoir agit simultanément et inséparablement sur le travail, la nature, le sexe, la subjectivité (c'est-à-dire les imaginaires et les connaissances produites) et enfin l'autorité. Cette dimension totalisante de la colonialité est régulièrement soulignée par Ramón Grosfoguel. (Source: Fondement_11/11 - bourguignon-2016-de-luniversel-au-pluriversel-enjeux-et-defis-du-paradigme-decolonial.txt - LA COLONIALITÉ DU POUVOIR)",
	},
];

// Réponses correctes pour les questions à choix unique (radio)
export const correctRadioAnswers: Record<string, string> = {
	q1: "a",
	q2: "a",
	q3: "a",
	q4: "a",
	q6: "a",
	q7: "a",
	q9: "a",
	q10: "a",
	q11: "a",
	q12: "a",
	q13: "a",
	q15: "a",
	q19: "a",
};

// Réponses correctes pour les questions à choix multiples (checkbox)
export const correctCheckboxAnswers: Record<string, string[]> = {
	q5: ["a", "b", "c"],
	q8: ["a", "b", "c"],
	q14: ["a", "b", "c", "d"],
	q16: ["a", "b", "c"],
	q17: ["a", "b", "c", "d", "e"],
	q18: ["a", "b", "c", "d"],
	q20: ["a", "b", "c", "d", "e"],
};

// Export complete exam data
export const exam11Data: ExamData = {
	questions: exam11Questions,
	correctRadioAnswers,
	correctCheckboxAnswers,
};

