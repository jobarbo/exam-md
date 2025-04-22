// Ce fichier contient les données pour l'examen sur le modèle de l'analyse et de l'intervention en travail social
// Il sera importé dynamiquement par le composant ExamForm

export const exam13Questions = [
	{
		id: "q1",
		title: "Question 1",
		question: "Selon le cours, comment peut-on caractériser le développement de la formation des travailleurs sociaux?",
		type: "radio",
		options: [
			{value: "a", label: "Une reconnaissance précoce et bien établie dès le début du 20ème siècle"},
			{value: "b", label: "Une reconnaissance tardive, initialement liée à l'assistance"},
			{value: "c", label: "Un développement uniquement au niveau technique, sans formation universitaire"},
			{value: "d", label: "Une formation exclusivement axée sur les méthodes d'intervention directe"},
		],
		explanation:
			"Selon le cours, le travail social a connu une reconnaissance tardive, étant à l'origine lié à l'assistance. C'est progressivement que se sont développés des programmes universitaires et qu'une identité nouvelle s'est constituée.",
	},
	{
		id: "q2",
		title: "Question 2",
		question: "Quelles influences ont marqué la constitution d'une nouvelle identité pour le travail social? (plusieurs réponses possibles)",
		type: "checkbox",
		options: [
			{value: "a", label: "Des assises plus scientifiques"},
			{value: "b", label: "L'influence de courants plus progressistes"},
			{value: "c", label: "Le rejet complet des approches d'assistance"},
			{value: "d", label: "Le développement d'une identité spécifique par rapport à d'autres professions d'aide"},
		],
		explanation:
			"La nouvelle identité du travail social s'est constituée grâce à des assises plus scientifiques, l'influence de courants plus progressistes, et le développement d'une identité spécifique par rapport à d'autres professions d'aide, parfois de manière complexe ou conflictuelle.",
	},
	{
		id: "q3",
		title: "Question 3",
		question: "Selon le cours, quelle influence est considérable dans la pratique du travail social?",
		type: "radio",
		options: [
			{value: "a", label: "L'influence russe"},
			{value: "b", label: "L'influence asiatique"},
			{value: "c", label: "L'influence française"},
			{value: "d", label: "L'influence anglo-saxonne"},
		],
		explanation: "Selon le cours, l'influence anglo-saxonne est considérable dans la pratique du travail social. On pense notamment à Mary Richmond et à bien d'autres.",
	},
	{
		id: "q4",
		title: "Question 4",
		question: "Comment se caractérise l'importance relative des trois méthodes d'intervention selon les régions du monde? (plusieurs réponses possibles)",
		type: "checkbox",
		options: [
			{value: "a", label: "Les pays européens mettent surtout de l'avant l'intervention individuelle"},
			{value: "b", label: "Les pays latino-américains privilégient les pratiques communautaires"},
			{value: "c", label: "L'intervention de groupe est plus importante dans les pays anglophones"},
			{value: "d", label: "Tous les pays accordent la même importance aux trois méthodes d'intervention"},
		],
		explanation:
			"Selon le cours, les pays européens mettent surtout de l'avant l'intervention individuelle, les pays latino-américains privilégient les pratiques communautaires, et l'intervention de groupe est une réalité plus importante dans les pays anglophones.",
	},
	{
		id: "q5",
		title: "Question 5",
		question: "Selon Thomas Kuhn, qu'est-ce qu'un paradigme?",
		type: "radio",
		options: [
			{value: "a", label: "Une méthode d'intervention spécifique au travail social"},
			{value: "b", label: "Une représentation du monde basée sur un ensemble d'observations"},
			{value: "c", label: "Un outil d'évaluation des pratiques professionnelles"},
			{value: "d", label: "Un ensemble de compétences requises pour la profession"},
		],
		explanation: "Selon Kuhn, un paradigme est une représentation du monde, basée sur un ensemble d'observations. C'est un cadre de référence global qui sert à expliquer la réalité.",
	},
	{
		id: "q6",
		title: "Question 6",
		question: "Dans le schéma du paradigme du TS de Guy Bilodeau, qu'est-ce qui se trouve au centre?",
		type: "radio",
		options: [
			{value: "a", label: "L'environnement"},
			{value: "b", label: "Le travailleur social"},
			{value: "c", label: "La personne"},
			{value: "d", label: "L'établissement"},
		],
		explanation:
			"Dans le schéma du paradigme du travail social de Guy Bilodeau, la personne est au centre, entourée des conditions objectives de vie, des logiques endogènes et des transactions sociales.",
	},
	{
		id: "q7",
		title: "Question 7",
		question: "Quels éléments composent l'environnement dans le schéma du paradigme du TS? (plusieurs réponses possibles)",
		type: "checkbox",
		options: [
			{value: "a", label: "Microsystème"},
			{value: "b", label: "Mésosystème"},
			{value: "c", label: "Exosystème"},
			{value: "d", label: "Macrosystème"},
		],
		explanation:
			"Dans le schéma du paradigme du TS, l'environnement comprend le microsystème, le mésosystème, l'exosystème et le macrosystème, correspondant à différents niveaux d'influence et d'interaction avec la personne.",
	},
	{
		id: "q8",
		title: "Question 8",
		question: "Comment est définie l'intervention sociale selon le cours?",
		type: "radio",
		options: [
			{value: "a", label: "Une action ponctuelle visant à résoudre un problème individuel"},
			{value: "b", label: "Un ensemble d'activités présupposant la mise en œuvre de moyens organisés de façon cohérente dans le temps et dans l'espace en vue de modifier une situation-problème"},
			{value: "c", label: "Une méthode standardisée applicable à tous les contextes sociaux"},
			{value: "d", label: "Une approche exclusivement axée sur les problèmes psychologiques"},
		],
		explanation:
			"L'intervention sociale est définie comme un ensemble d'activités présupposant la mise en œuvre de moyens organisés de façon cohérente dans le temps et dans l'espace en vue de modifier une situation-problème.",
	},
	{
		id: "q9",
		title: "Question 9",
		question: "Quelles sont les caractéristiques de l'intervention en travail social? (plusieurs réponses possibles)",
		type: "checkbox",
		options: [
			{value: "a", label: "Une entreprise de recherche de solutions sur mesure"},
			{value: "b", label: "Une œuvre coproduite en collaboration avec le système-client et les divers acteurs sociaux"},
			{value: "c", label: "Une interposition entre les systèmes-clients et les institutions"},
			{value: "d", label: "Une démarche à caractère scientifique"},
		],
		explanation:
			"En travail social, l'intervention est une entreprise de recherche de solutions sur mesure, une œuvre coproduite en collaboration avec le système-client et les divers acteurs sociaux, une interposition entre les systèmes-clients et les institutions, et une démarche à caractère scientifique.",
	},
	{
		id: "q10",
		title: "Question 10",
		question: "Selon le cours, quelles sont les deux conceptions différentes pour percevoir les situations des personnes?",
		type: "checkbox",
		options: [
			{value: "a", label: "Le modèle individualiste"},
			{value: "b", label: "Le modèle communautaire"},
			{value: "c", label: "Le modèle systémique"},
			{value: "d", label: "Le modèle écologique"},
		],
		explanation:
			"Selon le cours, les situations des personnes peuvent être perçues selon deux conceptions différentes: le modèle individualiste (prônant l'autonomie et l'adoption de comportements adaptés à l'environnement social) et le modèle communautaire (où la réalité des personnes est plus imbriquée dans celle de son milieu, de son groupe de référence).",
	},
	{
		id: "q11",
		title: "Question 11",
		question: "Quelles sont les caractéristiques des réseaux primaires au niveau microsystémique? (plusieurs réponses possibles)",
		type: "checkbox",
		options: [
			{value: "a", label: "Ces relations n'ont d'autre but que leur existence propre"},
			{value: "b", label: "Ils produisent de la solidarité"},
			{value: "c", label: "Ils sont réciproques"},
			{value: "d", label: "Ces réseaux comportent une dimension de contrôle social"},
		],
		explanation:
			"Les réseaux primaires au niveau microsystémique se caractérisent par des relations qui n'ont d'autre but que leur existence propre, qui produisent de la solidarité, qui sont réciproques, et qui comportent une dimension de contrôle social.",
	},
	{
		id: "q12",
		title: "Question 12",
		question: "Quels sont les différents rôles du travailleur social mentionnés dans le cours? (plusieurs réponses possibles)",
		type: "checkbox",
		options: [
			{value: "a", label: "Conseiller (ex. thérapeute ou organisateur communautaire)"},
			{value: "b", label: "Formateur/éducateur"},
			{value: "c", label: "Intermédiaire, agent de liaison"},
			{value: "d", label: 'Défenseur, "avocat" (défense de droits sociaux)'},
			{value: "e", label: "Protecteur"},
		],
		explanation:
			'Les différents rôles du travailleur social mentionnés dans le cours comprennent: conseiller (ex. thérapeute ou organisateur communautaire), formateur/éducateur, intermédiaire/agent de liaison, médiateur/négociateur, défenseur/"avocat" (défense de droits sociaux) et protecteur.',
	},
	{
		id: "q13",
		title: "Question 13",
		question: "Selon le cours, qu'est-ce qui peut avoir un impact sur la pratique du travail social dans un contexte néolibéral?",
		type: "radio",
		options: [
			{value: "a", label: "Une augmentation de l'innovation et de l'initiative"},
			{value: "b", label: "Une réduction de l'initiative et parfois même de l'innovation"},
			{value: "c", label: "Une valorisation exclusive des approches communautaires"},
			{value: "d", label: "Un rejet total de l'intervention individuelle"},
		],
		explanation: "Selon le cours, le néolibéralisme a une influence grandissante, pouvant réduire l'initiative et même parfois l'innovation dans la pratique du travail social.",
	},
];

// Réponses correctes pour les questions à choix unique (radio)
export const correctRadioAnswers = {
	q1: "b",
	q3: "d",
	q5: "b",
	q6: "c",
	q8: "b",
	q13: "b",
};

// Réponses correctes pour les questions à choix multiples (checkbox)
export const correctCheckboxAnswers = {
	q2: ["a", "b", "d"],
	q4: ["a", "b", "c"],
	q7: ["a", "b", "c", "d"],
	q9: ["a", "b", "c", "d"],
	q10: ["a", "b"],
	q11: ["a", "b", "c", "d"],
	q12: ["a", "b", "c", "d", "e"],
};
