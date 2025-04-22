// Ce fichier contient les données pour l'examen sur l'organisation communautaire
// Il sera importé dynamiquement par le composant ExamForm

export const exam11Questions = [
	{
		id: "q1",
		title: "Question 1",
		question: "Selon Kramer et Specht, l'organisation communautaire réfère à:",
		type: "radio",
		options: [
			{value: "a", label: "Une forme de thérapie de groupe visant la résolution de conflits internes"},
			{value: "b", label: "Un processus où un agent de changement professionnel aide un système d'action communautaire à s'engager dans une action collective planifiée"},
			{value: "c", label: "Une méthode de gestion des services sociaux visant l'amélioration de l'efficience"},
			{value: "d", label: "Une stratégie politique pour imposer un modèle de développement économique"},
		],
		explanation:
			"Selon Kramer et Specht, l'organisation communautaire réfère à différentes méthodes d'intervention par lesquelles un agent de changement professionnel aide un système d'action communautaire composé d'individus, groupes ou organisations à s'engager dans une action collective planifiée dans le but de s'attaquer à des problèmes sociaux.",
	},
	{
		id: "q2",
		title: "Question 2",
		question: "Quelles sont les quatre composantes d'une définition de l'organisation communautaire selon le RQIIAC?",
		type: "checkbox",
		options: [
			{value: "a", label: "La dimension professionnelle"},
			{value: "b", label: "La dimension politique"},
			{value: "c", label: "La dimension opérationnelle"},
			{value: "d", label: "La finalité orientée vers le changement social"},
			{value: "e", label: "La dimension thérapeutique"},
		],
		explanation:
			"Selon le RQIIAC, l'organisation communautaire comprend quatre composantes: la dimension professionnelle (intervention professionnelle dans une communauté), la dimension politique (s'adressant aux communautés affectées par les inégalités dans une perspective de justice sociale), la dimension opérationnelle (support au processus d'action communautaire) et la finalité (orientée vers le changement social).",
	},
	{
		id: "q3",
		title: "Question 3",
		question: "Quels sont les fondements de l'organisation communautaire mentionnés dans le cours?",
		type: "checkbox",
		options: [
			{value: "a", label: "Les problèmes sociaux sont de nature collective"},
			{value: "b", label: "L'intervention sociale doit faire appel à des solutions de nature collective"},
			{value: "c", label: "C'est une méthode constituée de choix, d'exigences et de connaissances"},
			{value: "d", label: "C'est une pratique déterminée par des valeurs et des principes"},
			{value: "e", label: "C'est une pratique marquée par le changement social"},
			{value: "f", label: "C'est une approche privilégiant l'adaptation individuelle au système social"},
			{value: "g", label: "C'est une méthode reposant sur des protocoles standardisés"},
			{value: "h", label: "C'est une intervention qui doit être dirigée par des experts et professionnels"},
		],
		explanation:
			"Les fondements de l'organisation communautaire mentionnés dans le cours sont: les problèmes sociaux sont de nature collective (donc l'intervention doit faire appel à des solutions collectives), c'est une méthode constituée de choix, d'exigences et de connaissances, une pratique déterminée par des valeurs et des principes, et une pratique marquée par le changement social.",
	},
	{
		id: "q4",
		title: "Question 4",
		question: "Quelles sont les traditions d'inspiration idéologique de l'organisation communautaire mentionnées dans le cours?",
		type: "checkbox",
		options: [
			{value: "a", label: "La tradition américaine"},
			{value: "b", label: "La tradition européenne"},
			{value: "c", label: "La tradition chrétienne progressiste Latino-Américaine"},
			{value: "d", label: "La tradition asiatique"},
			{value: "e", label: "La tradition africaine"},
		],
		explanation:
			"Le cours mentionne trois traditions d'inspiration idéologique pour l'organisation communautaire: la tradition américaine (Alinsky, Nader, King, Obama), la tradition européenne (justice sociale et organisation des classes populaires), et la tradition chrétienne progressiste Latino-Américaine (Paul Freire, théologie de la libération).",
	},
	{
		id: "q5",
		title: "Question 5",
		question: "Qu'est-ce qui caractérise la tradition américaine d'organisation communautaire?",
		type: "radio",
		options: [
			{value: "a", label: "Une approche basée uniquement sur la théorie marxiste"},
			{value: "b", label: "L'organisation des minorités ethniques et les stratégies parfois non légales mais non violentes"},
			{value: "c", label: "Une approche centrée sur la transformation des structures économiques via les partis politiques"},
			{value: "d", label: "Une méthodologie axée principalement sur l'éducation populaire"},
		],
		explanation:
			"La tradition américaine d'organisation communautaire est marquée par l'organisation des minorités ethniques, la défense des consommateurs, et les stratégies non violentes (mais pas toujours légales) comme l'occupation d'espaces publics. Elle est associée à des figures comme Alinsky, Nader, King et Obama.",
	},
	{
		id: "q6",
		title: "Question 6",
		question: "Quelle expérience historique est considérée comme une première expérience québécoise à grande échelle d'animation sociale?",
		type: "radio",
		options: [
			{value: "a", label: "Les coopératives de Rochdale"},
			{value: "b", label: "La réforme de la santé et des services sociaux de 1971"},
			{value: "c", label: "L'expérience du BAEQ (Bureau d'aménagement de l'est du Québec)"},
			{value: "d", label: "La mobilisation étudiante de 2012"},
		],
		explanation:
			"L'expérience du BAEQ (Bureau d'aménagement de l'est du Québec) est considérée comme une première expérience québécoise à grande échelle d'animation sociale, avec le recours à des professionnels qui intervenaient sur la société rurale.",
	},
	{
		id: "q7",
		title: "Question 7",
		question: "Quel événement des années 1970 a marqué l'arrivée des organisateurs communautaires comme groupe professionnel distinct au Québec?",
		type: "radio",
		options: [
			{value: "a", label: "La création des SADC (Sociétés d'aide aux collectivités)"},
			{value: "b", label: "La réforme de la santé et des services sociaux de 1971 avec l'arrivée des CLSC"},
			{value: "c", label: "La création du Regroupement des organisateurs communautaires du Québec"},
			{value: "d", label: "L'adoption de la politique de reconnaissance de l'action communautaire autonome"},
		],
		explanation:
			"La réforme de la santé et des services sociaux de 1971 a marqué l'arrivée des CLSC (centres locaux de services communautaires) et celle des organisateurs communautaires comme groupe professionnel distinct au Québec.",
	},
	{
		id: "q8",
		title: "Question 8",
		question: "Quels sont les trois modèles d'intervention en organisation communautaire selon Rothman?",
		type: "checkbox",
		options: [
			{value: "a", label: "Le développement local"},
			{value: "b", label: "Le planning social"},
			{value: "c", label: "L'action sociale"},
			{value: "d", label: "La thérapie communautaire"},
			{value: "e", label: "La médiation sociale"},
		],
		explanation: "Selon le modèle de Rothman, l'organisation communautaire comprend trois modèles d'intervention: le développement local, le planning social et l'action sociale.",
	},
	{
		id: "q9",
		title: "Question 9",
		question: "Qu'est-ce qui caractérise l'approche de développement local en organisation communautaire?",
		type: "checkbox",
		options: [
			{value: "a", label: "Elle s'appuie d'abord sur un diagnostic de la pauvreté ou le déclin d'une communauté"},
			{value: "b", label: "Elle consiste à faire une intervention intégrée combinant l'économique et le social"},
			{value: "c", label: "Elle vise un quartier ou une zone dans une perspective de développement durable"},
			{value: "d", label: "Elle met l'accent sur la participation des populations, y compris les exclus"},
			{value: "e", label: "Elle vise principalement la contestation et la revendication auprès des structures de pouvoir"},
			{value: "f", label: "Elle privilégie l'intervention d'experts externes pour diriger les projets"},
			{value: "g", label: "Elle recherche des solutions uniformes applicables à toutes les communautés"},
		],
		explanation:
			"L'approche de développement local s'appuie sur un diagnostic de la pauvreté ou du déclin d'une communauté, consiste à faire une intervention intégrée combinant l'économique et le social, vise un quartier ou une zone dans une perspective de développement durable, et met l'accent sur la participation des populations, en tentant notamment de faire participer les exclus.",
	},
	{
		id: "q10",
		title: "Question 10",
		question: "Qu'est-ce qui caractérise le modèle d'action sociale en organisation communautaire?",
		type: "checkbox",
		options: [
			{value: "a", label: "C'est un modèle de contestation et de revendication"},
			{value: "b", label: "Il vise une ou des structures de pouvoir"},
			{value: "c", label: "La population visée est perçue comme opprimée ou exploitée"},
			{value: "d", label: "L'objectif est de répartir le pouvoir et les ressources"},
			{value: "e", label: "Les moyens sont définis en fonction du fait que les intérêts sont harmonieux"},
			{value: "f", label: "Il favorise la conciliation et le compromis avec les autorités"},
			{value: "g", label: "Il s'appuie principalement sur la recherche de consensus social"},
		],
		explanation:
			"Le modèle d'action sociale est un modèle de contestation et de revendication qui vise une ou des structures de pouvoir. La population visée est perçue comme opprimée ou exploitée, et l'objectif est de répartir le pouvoir et les ressources. Les moyens sont définis en fonction du fait que les intérêts sont conflictuels, non harmonieux.",
	},
	{
		id: "q11",
		title: "Question 11",
		question: "Quelle figure historique a été organisateur de communautés à Chicago avant de devenir président des États-Unis?",
		type: "radio",
		options: [
			{value: "a", label: "Martin Luther King"},
			{value: "b", label: "Ralph Nader"},
			{value: "c", label: "Barack Obama"},
			{value: "d", label: "Saul Alinsky"},
		],
		explanation:
			"Barack Obama a été organisateur de communautés à Chicago de 1985 à 1987 avant d'être avocat et président. Son objectif était de transformer une communauté défavorisée en un groupe de pression incontournable, en utilisant les techniques de pression de Saul Alinsky.",
	},
	{
		id: "q12",
		title: "Question 12",
		question: "En quoi consiste le planning social comme modèle d'organisation communautaire?",
		type: "checkbox",
		options: [
			{value: "a", label: "La résolution des problèmes sociaux par une intervention étatique de proximité"},
			{value: "b", label: "L'utilisation de la démarche scientifique fondée sur le recours aux experts"},
			{value: "c", label: "L'implantation de services publics de santé et de services sociaux"},
			{value: "d", label: "La concertation entre les organisations"},
			{value: "e", label: "La participation consultative de la population"},
			{value: "f", label: "L'organisation d'actions de protestation contre les structures de pouvoir"},
			{value: "g", label: "La mobilisation des populations locales pour l'autogestion communautaire"},
			{value: "h", label: "Le développement d'entreprises sociales gérées exclusivement par les citoyens"},
		],
		explanation:
			"Le planning social consiste en la résolution des problèmes sociaux des communautés par une intervention étatique de proximité, l'utilisation de la démarche scientifique fondée sur le recours aux experts, l'implantation de services publics, la concertation entre les organisations et la participation consultative de la population.",
	},
	{
		id: "q13",
		title: "Question 13",
		question: "Quelles sont les deux déclinaisons du modèle de planning social au Québec?",
		type: "checkbox",
		options: [
			{value: "a", label: "Le modèle sociocommunautaire"},
			{value: "b", label: "Le modèle socioinstitutionnel"},
			{value: "c", label: "Le modèle socioéconomique"},
			{value: "d", label: "Le modèle sociopolitique"},
			{value: "e", label: "Le modèle socioécologique"},
		],
		explanation:
			"Au Québec, le modèle de planning social se décline en deux groupes: le modèle sociocommunautaire (dispense de services en partenariat avec une place plus grande aux usagers) et le modèle socioinstitutionnel (l'État intervient à travers des appareils publics).",
	},
	{
		id: "q14",
		title: "Question 14",
		question: "Qu'entend-on par 'échelonnement' et 'chevauchement' dans l'application des modèles d'organisation communautaire?",
		type: "radio",
		options: [
			{value: "a", label: "L'échelonnement est la hiérarchisation des modèles et le chevauchement est leur incompatibilité"},
			{value: "b", label: "L'échelonnement réfère aux niveaux géographiques d'intervention et le chevauchement aux zones d'intervention communes"},
			{value: "c", label: "L'échelonnement est le passage d'un modèle à l'autre durant l'intervention et le chevauchement est l'utilisation simultanée de plusieurs modèles"},
			{value: "d", label: "L'échelonnement est la planification temporelle et le chevauchement est le partage des ressources"},
		],
		explanation:
			"L'échelonnement réfère au passage d'un modèle à l'autre durant l'intervention, à mesure que la situation évolue. Le chevauchement concerne l'utilisation simultanée de plusieurs modèles, quand l'intervention touche plusieurs modèles en même temps pour s'adapter aux besoins.",
	},
	{
		id: "q15",
		title: "Question 15",
		question: "Quels défis de la profession en travail social sont mentionnés dans le cours concernant l'organisation communautaire?",
		type: "checkbox",
		options: [
			{value: "a", label: "Revaloriser la participation citoyenne"},
			{value: "b", label: "Rappeler, soutenir et documenter la dimension de changement social portée par cette profession"},
			{value: "c", label: "Penser à la transmission de connaissance entre générations de praticiens"},
			{value: "d", label: "Augmenter le financement des organisations communautaires"},
			{value: "e", label: "Améliorer la formation universitaire des organisateurs communautaires"},
		],
		explanation:
			"Les défis mentionnés dans le cours sont: revaloriser la participation citoyenne (qui semble oubliée dans les réformes récentes), rappeler et documenter la dimension de changement social portée par la profession (nous innovons mais le documentons peu), et penser à la transmission de connaissance entre générations de praticiens.",
	},
];

// Réponses correctes pour les questions à choix unique (radio)
export const correctRadioAnswers = {
	q1: "b",
	q5: "b",
	q6: "c",
	q7: "b",
	q11: "c",
	q14: "c",
};

// Réponses correctes pour les questions à choix multiples (checkbox)
export const correctCheckboxAnswers = {
	q2: ["a", "b", "c", "d"],
	q3: ["a", "b", "c", "d", "e"],
	q4: ["a", "b", "c"],
	q8: ["a", "b", "c"],
	q9: ["a", "b", "c", "d"],
	q10: ["a", "b", "c", "d"],
	q12: ["a", "b", "c", "d", "e"],
	q13: ["a", "b"],
	q15: ["a", "b", "c"],
};
