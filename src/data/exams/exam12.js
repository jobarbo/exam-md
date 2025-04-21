// Ce fichier contient les données pour l'examen sur la recherche en travail social
// Il sera importé dynamiquement par le composant ExamForm

export const exam12Questions = [
	{
		id: "q1",
		title: "Question 1",
		question: "Selon le cours, quelles sont les différentes sources de connaissances? (plusieurs réponses possibles)",
		type: "checkbox",
		options: [
			{value: "a", label: "L'expérience personnelle"},
			{value: "b", label: "Ce que les autres nous transmettent"},
			{value: "c", label: "La culture à laquelle on appartient"},
			{value: "d", label: "Les écoles de pensées"},
			{value: "e", label: "La recherche scientifique"},
		],
		explanation:
			"Toutes ces réponses sont des sources de connaissances mentionnées dans le cours. Les connaissances peuvent provenir de notre expérience personnelle, de ce que les autres nous transmettent, de notre culture, des écoles de pensées et de la recherche scientifique.",
	},
	{
		id: "q2",
		title: "Question 2",
		question: "Quels sont les deux éléments importants qui caractérisent une connaissance scientifique?",
		type: "checkbox",
		options: [
			{value: "a", label: "Elle découle de l'application d'une méthode scientifique"},
			{value: "b", label: "Elle repose sur des conventions"},
			{value: "c", label: "Elle est toujours objective et neutre"},
			{value: "d", label: "Elle est uniquement quantitative"},
		],
		explanation:
			"Une connaissance scientifique se caractérise par deux éléments importants: elle découle de l'application d'une méthode scientifique (si son processus de production s'est fait dans le respect de certaines règles et procédures propres à la science) et elle repose sur des conventions (il n'y a pas qu'une seule méthodologie scientifique, pas plus qu'on ne peut prétendre que la réalité sociale soit unifiée).",
	},
	{
		id: "q3",
		title: "Question 3",
		question: "Pourquoi fait-on de la recherche en travail social? (plusieurs réponses possibles)",
		type: "checkbox",
		options: [
			{value: "a", label: "Le travail social est une discipline professionnelle fondée sur des assises scientifiques"},
			{value: "b", label: "Pour étudier et comprendre les enjeux sociaux"},
			{value: "c", label: "Pour améliorer les pratiques, les services et les politiques"},
			{value: "d", label: "Pour guider sa pratique et l'évaluer"},
			{value: "e", label: "Pour justifier des coupes budgétaires dans les services sociaux"},
		],
		explanation:
			"On fait de la recherche en travail social parce que c'est une discipline professionnelle fondée sur des assises scientifiques, pour étudier et comprendre les enjeux sociaux, pour améliorer les pratiques, les services et les politiques, et pour guider et évaluer sa pratique.",
	},
	{
		id: "q4",
		title: "Question 4",
		question: "Quels sont les rôles des travailleurs sociaux face à la recherche?",
		type: "checkbox",
		options: [
			{value: "a", label: "Consommateur critique"},
			{value: "b", label: "Créateur et diffuseur"},
			{value: "c", label: "Partenaire"},
			{value: "d", label: "Chercheur"},
			{value: "e", label: "Évaluateur"},
		],
		explanation:
			"Les travailleurs sociaux peuvent jouer plusieurs rôles face à la recherche: consommateur critique (s'informer, lire, rester à jour), créateur et diffuseur (observer des phénomènes pour générer des hypothèses), partenaire, chercheur et évaluateur.",
	},
	{
		id: "q5",
		title: "Question 5",
		question: "Selon Chevrier (1997), quels sont les critères pour choisir une thématique de recherche en travail social?",
		type: "checkbox",
		options: [
			{value: "a", label: "La pertinence sociale"},
			{value: "b", label: "La pertinence scientifique"},
			{value: "c", label: "Le financement disponible"},
			{value: "d", label: "Les intérêts personnels du chercheur"},
		],
		explanation:
			"Selon Chevrier (1997), deux critères principaux guident le choix des thématiques de recherche en travail social: la pertinence sociale (comment une recherche apporte-t-elle des réponses à certains problèmes des TS et des décideurs?) et la pertinence scientifique (comment cette recherche s'inscrit-elle dans les préoccupations des chercheurs?).",
	},
	{
		id: "q6",
		title: "Question 6",
		question: "Parmi les suivants, lesquels sont des principaux domaines de recherche en travail social au Québec concernant les personnes et leur environnement?",
		type: "checkbox",
		options: [
			{value: "a", label: "Les enfants, adolescents et jeunes adultes"},
			{value: "b", label: "Les personnes âgées"},
			{value: "c", label: "Les personnes LGBTQ+"},
			{value: "d", label: "Les personnes immigrantes et réfugiées"},
			{value: "e", label: "Les œuvres d'art contemporain"},
		],
		explanation:
			"Les principaux domaines de recherche en travail social au Québec concernant les personnes et leur environnement incluent les enfants, adolescents et jeunes adultes, les personnes âgées, les personnes LGBTQ+ et les personnes immigrantes et réfugiées.",
	},
	{
		id: "q7",
		title: "Question 7",
		question: "Qu'est-ce que le CRI-VIFF?",
		type: "radio",
		options: [
			{value: "a", label: "Centre de recherche interdisciplinaire sur la violence familiale et la violence faite aux femmes"},
			{value: "b", label: "Centre de recherche international sur la vie familiale et les femmes"},
			{value: "c", label: "Centre de recherche et d'intervention pour la violence familiale"},
			{value: "d", label: "Centre de recherche institutionnel sur la vie familiale française"},
		],
		explanation:
			"Le CRI-VIFF est le Centre de recherche interdisciplinaire sur la violence familiale et la violence faite aux femmes. Il regroupe des chercheurs, des intervenants des milieux de pratique institutionnels et communautaires ainsi que des étudiants qui poursuivent l'objectif de contribuer à l'avancement des connaissances sur la violence familiale et la violence faite aux femmes.",
	},
	{
		id: "q8",
		title: "Question 8",
		question: "Quel est l'objectif du centre de recherche JEFAR?",
		type: "radio",
		options: [
			{value: "a", label: "Développer des connaissances sur l'adaptation des jeunes et des familles à risque"},
			{value: "b", label: "Étudier les effets des politiques sociales sur les familles"},
			{value: "c", label: "Développer des programmes de prévention de la délinquance juvénile"},
			{value: "d", label: "Former des intervenants spécialisés en protection de l'enfance"},
		],
		explanation:
			"L'objectif du centre de recherche JEFAR (Centre de recherche sur l'adaptation des jeunes et des familles à risque) est de développer des connaissances fondamentales et appliquées sur l'adaptation des jeunes et des familles à risque.",
	},
	{
		id: "q9",
		title: "Question 9",
		question: "Quelle caractéristique distingue particulièrement le travail social en matière de méthodologie de recherche?",
		type: "radio",
		options: [
			{value: "a", label: "L'uniformité des méthodes utilisées"},
			{value: "b", label: "La diversité des méthodes et l'hybridation méthodologique"},
			{value: "c", label: "L'utilisation exclusive des méthodes quantitatives"},
			{value: "d", label: "Le rejet des approches qualitatives"},
		],
		explanation:
			"Le travail social se caractérise par sa diversité et par l'hybridation des méthodes de recherche. Cela résulte de l'influence de disciplines qui ont des visions parfois très différentes de la manière de réaliser une recherche.",
	},
	{
		id: "q10",
		title: "Question 10",
		question: "Selon le cours, quelles sont les tendances pour l'avenir de la recherche en travail social?",
		type: "radio",
		options: [
			{value: "a", label: "Le retour aux méthodes traditionnelles et la simplification des approches"},
			{value: "b", label: "L'intensification de la recherche partenariale, interdisciplinaire et intersectorielle"},
			{value: "c", label: "L'abandon progressif de la recherche au profit de l'intervention directe"},
			{value: "d", label: "La centralisation de la recherche dans quelques institutions spécialisées"},
		],
		explanation:
			"Selon le cours, l'avenir de la recherche en travail social sera marqué par l'intensification de la recherche partenariale, interdisciplinaire et intersectorielle, pour répondre à des enjeux comme la valorisation de la diversité, les défis du vivre-ensemble, la lutte aux inégalités, les changements démographiques, etc.",
	},
	{
		id: "q11",
		title: "Question 11",
		question: "Quel est le rôle du CREGÉS?",
		type: "radio",
		options: [
			{value: "a", label: "Centre de recherche et d'expertise en gérontologie sociale"},
			{value: "b", label: "Centre de recherche sur l'éducation et la gestion des établissements sociaux"},
			{value: "c", label: "Comité de recherche et d'évaluation des groupes d'entraide sociaux"},
			{value: "d", label: "Centre régional d'études sur la gestion des établissements de santé"},
		],
		explanation:
			"Le CREGÉS est le Centre de recherche et d'expertise en gérontologie sociale. Il est porté par le CIUSSS du Centre-Ouest-de-l'Île-de-Montréal qui possède la désignation universitaire en gérontologie sociale.",
	},
	{
		id: "q12",
		title: "Question 12",
		question: "Pourquoi les personnes formées en travail social sont-elles en bonne posture pour jouer un rôle important dans le développement des connaissances en sciences sociales?",
		type: "checkbox",
		options: [
			{value: "a", label: "En raison de leurs habiletés partenariales"},
			{value: "b", label: "En raison des objets priorisés dans leur recherche"},
			{value: "c", label: "En raison de leur capacité historique à accompagner les sociétés dans les changements de fond"},
			{value: "d", label: "En raison de leur formation exclusivement théorique"},
		],
		explanation:
			"Les personnes formées en travail social sont en bonne posture pour jouer un rôle important dans le développement des connaissances en sciences sociales en raison de leurs habiletés partenariales, des objets priorisés dans leur recherche et de leur capacité historique à accompagner les sociétés dans les changements de fond.",
	},
];

// Réponses correctes pour les questions à choix unique (radio)
export const correctRadioAnswers = {
	q7: "a",
	q8: "a",
	q9: "b",
	q10: "b",
	q11: "a",
};

// Réponses correctes pour les questions à choix multiples (checkbox)
export const correctCheckboxAnswers = {
	q1: ["a", "b", "c", "d", "e"],
	q2: ["a", "b"],
	q3: ["a", "b", "c", "d"],
	q4: ["a", "b", "c", "d", "e"],
	q5: ["a", "b"],
	q6: ["a", "b", "c", "d"],
	q12: ["a", "b", "c"],
};
