/**
 * Examen 101: Vieillissement – Cours 1 – La formation en gérontologie
 * Banque de 10 questions (5 tirées au hasard à chaque chargement)
 */

import type { Question, ExamData } from '../../types/exam';

export const exam101Questions: Question[] = [
	{
		id: "q1",
		title: "Question 1",
		question: "Que signifie l'acronyme CREGÉS?",
		type: "radio",
		options: [
			{value: "a", label: "Centre de recherche et d'expertise en gérontologie sociale"},
			{value: "b", label: "Centre régional d'évaluation gériatrique et de soins"},
			{value: "c", label: "Conseil de recherche en épidémiologie gérontologique et sanitaire"},
			{value: "d", label: "Centre de réadaptation et d'entraide pour les gens âgés et seuls"},
		],
		explanation:
			"Le CREGÉS est le Centre de recherche et d'expertise en gérontologie sociale, une infrastructure de recherche au sein du CIUSSS qui facilite les échanges d'expertise entre le milieu universitaire et les milieux de pratique. Il est subventionné par le Fonds de recherche Société et culture Québec et par Santé et Services sociaux Québec. (Source : Notes 1-2, p. 1 et 3 — vidéos CREGÉS)",
	},
	{
		id: "q2",
		title: "Question 2",
		question: "Quels sont les domaines d'expertise du CREGÉS?",
		type: "checkbox",
		options: [
			{value: "a", label: "Contrer la maltraitance"},
			{value: "b", label: "Vieillissement inclusif, diversité, santé et bien-être (IDSB)"},
			{value: "c", label: "Soins palliatifs"},
			{value: "d", label: "Proche aidance"},
			{value: "e", label: "Pharmacologie gériatrique"},
		],
		explanation:
			"Le CREGÉS compte 4 domaines d'expertise : 1) contrer la maltraitance, 2) vieillissement inclusif, diversité, santé et bien-être (IDSB), 3) soins palliatifs, 4) proche aidance. Sa programmation s'articule aussi autour de 5 axes de recherche (les aînés comme acteurs sociaux; multiples vieillissements; intervenir auprès et avec les personnes âgées et leurs proches; milieux de vie; politiques publiques). (Source : Notes 1-2, p. 3-4)",
	},
	{
		id: "q3",
		title: "Question 3",
		question: "Selon les chercheurs du CREGÉS (vidéo « La formation de la relève »), quel principe guide tout projet de recherche?",
		type: "radio",
		options: [
			{value: "a", label: "Il doit se faire en partenariat avec des praticiens, et les projets émanent très souvent des milieux de pratique"},
			{value: "b", label: "Il doit être conçu uniquement par des chercheurs universitaires pour garantir sa neutralité"},
			{value: "c", label: "Il doit être financé exclusivement par des fonds privés"},
			{value: "d", label: "Il doit porter uniquement sur le vieillissement pathologique"},
		],
		explanation:
			"Tout projet de recherche doit se faire en partenariat avec des praticiens. Les projets émanent très souvent des milieux de pratique (ex. : le projet sur la gentrification est né d'organismes communautaires). Même si un projet émane des chercheurs, ceux-ci doivent s'associer à des intervenants afin que le projet reste aligné sur les besoins du terrain. (Source : Notes 1-2, p. 2)",
	},
	{
		id: "q4",
		title: "Question 4",
		question: "Quel est le mandat du CREGÉS?",
		type: "radio",
		options: [
			{value: "a", label: "Stimuler, développer et diffuser la recherche en gérontologie sociale et soutenir le développement de pratiques innovantes et de pointe"},
			{value: "b", label: "Offrir directement des soins de longue durée aux personnes âgées"},
			{value: "c", label: "Évaluer l'admissibilité des aînés aux pensions de vieillesse"},
			{value: "d", label: "Former exclusivement les médecins gériatres"},
		],
		explanation:
			"Le mandat du CREGÉS est de stimuler, développer et diffuser la recherche en gérontologie sociale, et de soutenir le développement de pratiques innovantes et de pointe. Il réunit chercheurs, praticiens-chercheurs, étudiants et collaborateurs autour d'une même mission : améliorer les services et les pratiques professionnelles auprès des personnes âgées. (Source : Notes 1-2, p. 3)",
	},
	{
		id: "q5",
		title: "Question 5",
		question: "Quel « regard critique » sur le vieillissement Victoria Burns (CREGÉS) met-elle de l'avant?",
		type: "radio",
		options: [
			{value: "a", label: "Les personnes âgées forment une population hétérogène; par exemple, certaines vivent bien leur isolement, qui peut relever d'un choix de vie"},
			{value: "b", label: "Les personnes âgées forment un groupe homogène dont les besoins sont identiques"},
			{value: "c", label: "L'isolement des aînés doit toujours être combattu, peu importe leurs préférences"},
			{value: "d", label: "Le vieillissement est un sujet très prisé par les jeunes chercheurs au Québec"},
		],
		explanation:
			"Le regard critique proposé : les personnes âgées sont une population hétérogène. Le stéréotype veut que les aînés isolés en souffrent, mais en réalité certaines personnes peuvent bien vivre leur isolement (choix de vie), donc il ne faut pas forcément le combattre. Les chercheurs notent aussi que le vieillissement n'est pas un sujet prisé par les jeunes et que la relève est problématique au Québec. (Source : Notes 1-2, p. 2-3)",
	},
	{
		id: "q6",
		title: "Question 6",
		question: "Selon Dridi (2012), comment évolue la proportion des personnes de 65 ans et plus au Québec?",
		type: "radio",
		options: [
			{value: "a", label: "7 % en 1971, 14,6 % en 2008, 25 % en 2030 et possiblement 30 % vers 2050"},
			{value: "b", label: "14 % en 1971, 20 % en 2008, 50 % en 2030"},
			{value: "c", label: "Elle est stable autour de 10 % depuis 1971"},
			{value: "d", label: "3 % en 1971, 7 % en 2008, 10 % en 2050"},
		],
		explanation:
			"Dridi rappelle que le Québec connaît un vieillissement rapide : de 7 % en 1971, les 65 ans et plus représentaient 14,6 % en 2008; ils seront 25 % en 2030 et pourraient atteindre 30 % vers 2050. La cohabitation de quatre à cinq générations change nos habitudes et nos conceptions. (Source : Dridi (2012), p. 6)",
	},
	{
		id: "q7",
		title: "Question 7",
		question: "Selon Dridi (2012), quelles caractéristiques devrait avoir la formation gérontologique pour relever les défis du vieillissement?",
		type: "checkbox",
		options: [
			{value: "a", label: "Être basée sur l'interdisciplinarité"},
			{value: "b", label: "Maintenir un lien constant et dynamique entre la théorie et la pratique (approche réflexive)"},
			{value: "c", label: "Diversifier les modes de livraison (formations qualifiantes, « just in time », délocalisées)"},
			{value: "d", label: "Se limiter aux contenus biomédicaux, sans tenir compte des acquis expérientiels"},
		],
		explanation:
			"Pour Dridi, la formation doit être de qualité et miser sur une approche réflexive, tirant sa substance d'un lien étroit entre recherche et pratique. Nécessairement basée sur l'interdisciplinarité, elle s'articule autour d'approches où le lien théorie-pratique est constant, en tenant compte des nouvelles connaissances et des acquis expérientiels, et elle doit diversifier ses modes de livraison. (Source : Dridi (2012), p. 6-7)",
	},
	{
		id: "q8",
		title: "Question 8",
		question: "Selon Leclerc (2000), quel dilemme la formation d'intervenants en gérontologie au Québec porte-t-elle depuis ses origines?",
		type: "radio",
		options: [
			{value: "a", label: "Former un nouveau type d'intervenant OU se limiter à offrir un complément de connaissances aux intervenants traditionnels"},
			{value: "b", label: "Former des médecins OU former des infirmières"},
			{value: "c", label: "Offrir la formation au cégep OU uniquement au doctorat"},
			{value: "d", label: "Enseigner en français OU en anglais"},
		],
		explanation:
			"Leclerc : la formation doit-elle former un nouveau type d'intervenant (sans avoir jamais réussi à définir un créneau propre) ou se limiter à un complément de connaissances pour les intervenants traditionnels, avec le risque d'un rôle secondaire et temporaire? L'absence de créneau et de méthodes d'intervention propres explique en partie la baisse dramatique de clientèle. (Source : Leclerc (2000), p. 35)",
	},
	{
		id: "q9",
		title: "Question 9",
		question: "Quels paradoxes Leclerc (2000) associe-t-il aux problèmes actuels de la formation en gérontologie?",
		type: "checkbox",
		options: [
			{value: "a", label: "Les besoins de soins et services n'ont jamais été aussi importants, pourtant l'offre d'emploi stagne"},
			{value: "b", label: "Les besoins de formation n'ont jamais été aussi évidents, pourtant la demande de formation décroît"},
			{value: "c", label: "Le Québec n'a jamais été aussi en mesure d'offrir une formation de qualité, pourtant elle ne s'adapte pas aux nouveaux besoins des praticiens"},
			{value: "d", label: "Il y a trop d'étudiants inscrits, pourtant aucun cours n'est offert"},
		],
		explanation:
			"Trois problèmes, trois paradoxes : 1) besoins de soins jamais aussi importants mais offre d'emploi qui stagne; 2) besoins de formation évidents mais demande de formation en baisse (les intervenants épuisés par les réformes ont priorisé leurs besoins de protection); 3) formation de qualité disponible mais qui ne réussit pas à s'adapter aux nouveaux besoins. (Source : Leclerc (2000), p. 36-37)",
	},
	{
		id: "q10",
		title: "Question 10",
		question: "Selon Rousseau-Tremblay et Couturier (2012), comment les écoles de travail social francophones du Québec conçoivent-elles la formation en gérontologie, et que recommandent les données probantes?",
		type: "radio",
		options: [
			{value: "a", label: "Comme la rencontre de deux stratégies libérales (choix de l'étudiant et intérêt du professeur), alors que les données probantes appuient une exposition obligatoire (stratégie volontariste)"},
			{value: "b", label: "Comme un cours obligatoire pour tous, ce que les données probantes jugent inefficace"},
			{value: "c", label: "Comme une spécialisation réservée au doctorat, ce que les données probantes approuvent"},
			{value: "d", label: "Comme une formation entièrement confiée aux milieux de stage"},
		],
		explanation:
			"Les écoles conçoivent la formation en gérontologie comme la rencontre de deux stratégies libérales : le choix individuel de l'étudiant et l'intérêt personnel du professeur. Or les données probantes montrent que cette stratégie est inefficace et qu'il faut une stratégie volontariste d'exposition obligatoire, car l'exposition systématique au vieillissement augmente l'intérêt des étudiants pour les aînés. (Source : Rousseau-Tremblay et Couturier (2012), p. 169)",
	},
];

// Réponses correctes pour les questions à choix unique (radio)
export const correctRadioAnswers: Record<string, string> = {
	q1: "a",
	q3: "a",
	q4: "a",
	q5: "a",
	q6: "a",
	q8: "a",
	q10: "a",
};

// Réponses correctes pour les questions à choix multiples (checkbox)
export const correctCheckboxAnswers: Record<string, string[]> = {
	q2: ["a", "b", "c", "d"],
	q7: ["a", "b", "c"],
	q9: ["a", "b", "c"],
};

// Export complete exam data
export const exam101Data: ExamData = {
	questions: exam101Questions,
	correctRadioAnswers,
	correctCheckboxAnswers,
};
