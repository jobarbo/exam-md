// Ce fichier contient les données pour l'examen final du cours SVS-1705
// Il synthétise les matières importantes des cours 8 à 13

export const exam14Questions = [
	// POLITIQUES SOCIALES (COURS 8)
	{
		id: "q1",
		title: "Politiques sociales - Définitions",
		question: "Selon Vaillancourt, que sont les politiques sociales?",
		type: "radio",
		options: [
			{value: "1", label: "Des interventions de l'État et des pouvoirs publics qui contribuent au bien-être et à la citoyenneté"},
			{value: "2", label: "Des mesures pour contrôler les comportements des groupes marginalisés"},
			{value: "3", label: "Des stratégies pour maximiser le rendement des services sociaux"},
			{value: "4", label: "Des règlements qui servent uniquement les intérêts des groupes privés"},
		],
		explanation:
			"Selon Vaillancourt, les politiques sociales sont des interventions de l'État et des pouvoirs publics qui contribuent au bien-être et à la citoyenneté des individus et des collectivités, d'une manière qui fait reculer la marchandisation.",
	},
	{
		id: "q2",
		title: "Politiques sociales - Modes de régulation",
		question: "Quels sont les trois modes de régulation du social présentés dans le cours?",
		type: "checkbox",
		options: [
			{value: "1", label: "L'État providence"},
			{value: "2", label: "Le néo-libéralisme (ou néo-conservatisme)"},
			{value: "3", label: "La perspective solidaire (ou partenariale)"},
			{value: "4", label: "L'État socialiste révolutionnaire"},
			{value: "5", label: "Le modèle anarcho-communautaire"},
		],
		explanation: "Les trois modes de régulation du social présentés sont l'État providence, le néo-libéralisme (ou néo-conservatisme) et la perspective solidaire (ou partenariale).",
	},
	{
		id: "q3",
		title: "Politiques sociales - Types d'État providence",
		question: "Selon la typologie de Gøsta Esping-Andersen, quels sont les trois grands types d'État providence?",
		type: "checkbox",
		options: [
			{value: "1", label: "Libéral (pays anglophones)"},
			{value: "2", label: "Conservateur-corporatiste (Europe continentale)"},
			{value: "3", label: "Social-démocrate (pays scandinaves)"},
			{value: "4", label: "Socialiste (pays de l'ancien bloc soviétique)"},
			{value: "5", label: "Traditionnel (pays en développement)"},
		],
		explanation:
			"Selon Esping-Andersen, les trois grands types d'État providence sont le modèle libéral (pays anglophones), le modèle conservateur-corporatiste (Europe continentale) et le modèle social-démocrate (pays scandinaves).",
	},

	// INTERVENTION SOCIALE PERSONNELLE (COURS 9)
	{
		id: "q4",
		title: "Intervention sociale personnelle - Spécificité",
		question: "Quelle est la spécificité du travail social?",
		type: "radio",
		options: [
			{value: "1", label: "Il intervient uniquement auprès des individus en difficulté"},
			{value: "2", label: "Il se concentre exclusivement sur les structures sociales"},
			{value: "3", label: "Il intervient au point de rencontre entre les individus et la société"},
			{value: "4", label: "Il s'intéresse principalement aux aspects économiques des problèmes sociaux"},
		],
		explanation: "La spécificité du travail social est qu'il intervient au point de rencontre entre les individus et la société (ou entre l'individu et son environnement).",
	},
	{
		id: "q5",
		title: "Intervention sociale personnelle - Ingrédients essentiels",
		question: "Quels sont les deux ingrédients essentiels de l'intervention sociale personnelle?",
		type: "checkbox",
		options: [
			{value: "1", label: "L'empathie sociale"},
			{value: "2", label: "Le pouvoir d'agir"},
			{value: "3", label: "La directivité structurante"},
			{value: "4", label: "La persuasion rationnelle"},
		],
		explanation: "Selon le cours, deux ingrédients essentiels de l'intervention sociale personnelle sont l'empathie sociale et le pouvoir d'agir.",
	},
	{
		id: "q6",
		title: "Intervention sociale personnelle - Orientations",
		question: "Quelles sont les deux orientations principales de l'intervention sociale?",
		type: "radio",
		options: [
			{value: "1", label: "Théorique et pratique"},
			{value: "2", label: "Individuelle et collective"},
			{value: "3", label: "Fonctionnaliste et critique"},
			{value: "4", label: "Administrative et clinique"},
		],
		explanation:
			"Le cours présente deux orientations principales de l'intervention sociale: l'orientation fonctionnaliste (adaptation de l'individu) et l'orientation critique (transformation sociale).",
	},

	// INTERVENTION DE GROUPE (COURS 10)
	{
		id: "q7",
		title: "Intervention de groupe - Types de groupes",
		question: "Quelles sont les deux principales catégories de groupes en travail social?",
		type: "radio",
		options: [
			{value: "1", label: "Groupes de thérapie et groupes d'éducation"},
			{value: "2", label: "Groupes synchrones et groupes asynchrones"},
			{value: "3", label: "Groupes de tâches et groupes d'aide"},
			{value: "4", label: "Groupes virtuels et groupes en présentiel"},
		],
		explanation:
			"Selon le cours, on distingue deux principales catégories de groupes: les groupes de tâches (ex. équipe multidisciplinaire) et les groupes d'aide (ex. groupes d'éducation, de soutien, de thérapie).",
	},
	{
		id: "q8",
		title: "Intervention de groupe - Habiletés",
		question: "Quelle est la différence entre une 'habileté' et une 'aptitude' dans le contexte de l'intervention de groupe?",
		type: "radio",
		options: [
			{value: "1", label: "Les habiletés sont innées alors que les aptitudes peuvent être développées"},
			{value: "2", label: "Les habiletés relèvent du 'savoir-faire' tandis que les aptitudes relèvent du 'savoir-être'"},
			{value: "3", label: "Les habiletés sont spécifiques à certaines phases du groupe alors que les aptitudes sont constantes"},
			{value: "4", label: "Il n'y a pas de différence significative entre ces deux termes"},
		],
		explanation: "Une habileté se réfère au 'savoir-faire' (savoir poser des gestes avec adresse), tandis que l'aptitude relève davantage du 'savoir-être' (ex. la confiance en soi, la flexibilité).",
	},
	{
		id: "q9",
		title: "Intervention de groupe - Phases",
		question: "Quelles sont les phases de l'intervention de groupe mentionnées dans le cours?",
		type: "checkbox",
		options: [
			{value: "1", label: "Phase pré-groupe"},
			{value: "2", label: "Phase de début"},
			{value: "3", label: "Phase de travail"},
			{value: "4", label: "Phase de fin"},
			{value: "5", label: "Phase d'évaluation post-intervention"},
		],
		explanation: "Le cours identifie quatre phases principales dans l'intervention de groupe: la phase pré-groupe, la phase de début, la phase de travail et la phase de fin.",
	},

	// ORGANISATION COMMUNAUTAIRE (COURS 11)
	{
		id: "q10",
		title: "Organisation communautaire - Définition",
		question: "Selon Kramer et Specht, l'organisation communautaire réfère à:",
		type: "radio",
		options: [
			{value: "1", label: "Une forme de thérapie de groupe visant la résolution de conflits internes"},
			{value: "2", label: "Un processus où un agent de changement professionnel aide un système d'action communautaire à s'engager dans une action collective planifiée"},
			{value: "3", label: "Une méthode de gestion des services sociaux visant l'amélioration de l'efficience"},
			{value: "4", label: "Une stratégie politique pour imposer un modèle de développement économique"},
		],
		explanation:
			"Selon Kramer et Specht, l'organisation communautaire réfère à un processus par lequel un agent de changement professionnel aide un système d'action communautaire à s'engager dans une action collective planifiée.",
	},
	{
		id: "q11",
		title: "Organisation communautaire - Composantes",
		question: "Quelles sont les composantes d'une définition de l'organisation communautaire selon le RQIIAC?",
		type: "checkbox",
		options: [
			{value: "1", label: "La dimension professionnelle"},
			{value: "2", label: "La dimension politique"},
			{value: "3", label: "La dimension opérationnelle"},
			{value: "4", label: "La finalité orientée vers le changement social"},
			{value: "5", label: "La dimension thérapeutique"},
		],
		explanation:
			"Selon le RQIIAC, l'organisation communautaire comprend quatre composantes: la dimension professionnelle, la dimension politique, la dimension opérationnelle et la finalité orientée vers le changement social.",
	},
	{
		id: "q12",
		title: "Organisation communautaire - Modèles de Rothman",
		question: "Quels sont les trois modèles d'intervention en organisation communautaire selon Rothman?",
		type: "checkbox",
		options: [
			{value: "1", label: "Le développement local"},
			{value: "2", label: "Le planning social"},
			{value: "3", label: "L'action sociale"},
			{value: "4", label: "La thérapie communautaire"},
			{value: "5", label: "La médiation sociale"},
		],
		explanation: "Selon le modèle de Rothman, l'organisation communautaire comprend trois modèles d'intervention: le développement local, le planning social et l'action sociale.",
	},

	// RECHERCHE EN TRAVAIL SOCIAL (COURS 12)
	{
		id: "q13",
		title: "Recherche en travail social - Sources de connaissances",
		question: "Selon le cours, quelles sont différentes sources de connaissances?",
		type: "checkbox",
		options: [
			{value: "1", label: "L'expérience personnelle"},
			{value: "2", label: "Ce que les autres nous transmettent"},
			{value: "3", label: "La culture à laquelle on appartient"},
			{value: "4", label: "Les écoles de pensées"},
			{value: "5", label: "La recherche scientifique"},
			{value: "6", label: "L'inspiration mystique"},
		],
		explanation:
			"Les sources de connaissances mentionnées dans le cours incluent l'expérience personnelle, ce que les autres nous transmettent, la culture, les écoles de pensées et la recherche scientifique.",
	},
	{
		id: "q14",
		title: "Recherche en travail social - Rôles des travailleurs sociaux",
		question: "Quels sont les rôles des travailleurs sociaux face à la recherche?",
		type: "checkbox",
		options: [
			{value: "1", label: "Consommateur critique"},
			{value: "2", label: "Créateur et diffuseur"},
			{value: "3", label: "Partenaire"},
			{value: "4", label: "Chercheur"},
			{value: "5", label: "Évaluateur"},
			{value: "6", label: "Opposant systématique"},
		],
		explanation: "Les travailleurs sociaux peuvent jouer plusieurs rôles face à la recherche: consommateur critique, créateur et diffuseur, partenaire, chercheur et évaluateur.",
	},
	{
		id: "q15",
		title: "Recherche en travail social - Critères thématiques",
		question: "Selon Chevrier (1997), quels sont les critères pour choisir une thématique de recherche en travail social?",
		type: "checkbox",
		options: [
			{value: "1", label: "La pertinence sociale"},
			{value: "2", label: "La pertinence scientifique"},
			{value: "3", label: "Le financement disponible"},
			{value: "4", label: "La notoriété potentielle"},
		],
		explanation: "Selon Chevrier (1997), deux critères principaux guident le choix des thématiques de recherche en travail social: la pertinence sociale et la pertinence scientifique.",
	},

	// PARADIGME DU TRAVAIL SOCIAL (COURS 13)
	{
		id: "q16",
		title: "Paradigme du travail social - Formation",
		question: "Comment peut-on caractériser le développement de la formation des travailleurs sociaux?",
		type: "radio",
		options: [
			{value: "1", label: "Une reconnaissance précoce et bien établie dès le début du 20ème siècle"},
			{value: "2", label: "Une reconnaissance tardive, initialement liée à l'assistance"},
			{value: "3", label: "Un développement uniquement au niveau technique, sans formation universitaire"},
			{value: "4", label: "Une formation exclusivement axée sur les méthodes d'intervention directe"},
		],
		explanation: "Le travail social a connu une reconnaissance tardive, étant à l'origine lié à l'assistance. C'est progressivement que se sont développés des programmes universitaires.",
	},
	{
		id: "q17",
		title: "Paradigme du travail social - Définition de paradigme",
		question: "Selon Thomas Kuhn, qu'est-ce qu'un paradigme?",
		type: "radio",
		options: [
			{value: "1", label: "Une méthode d'intervention spécifique au travail social"},
			{value: "2", label: "Une représentation du monde basée sur un ensemble d'observations"},
			{value: "3", label: "Un outil d'évaluation des pratiques professionnelles"},
			{value: "4", label: "Un ensemble de compétences requises pour la profession"},
		],
		explanation: "Selon Kuhn, un paradigme est une représentation du monde, basée sur un ensemble d'observations. C'est un cadre de référence global qui sert à expliquer la réalité.",
	},
	{
		id: "q18",
		title: "Paradigme du travail social - Systèmes",
		question: "Quels éléments composent l'environnement dans le paradigme du travail social?",
		type: "checkbox",
		options: [
			{value: "1", label: "Microsystème"},
			{value: "2", label: "Mésosystème"},
			{value: "3", label: "Exosystème"},
			{value: "4", label: "Macrosystème"},
			{value: "5", label: "Métasystème"},
		],
		explanation:
			"Dans le paradigme du travail social, l'environnement comprend le microsystème, le mésosystème, l'exosystème et le macrosystème, correspondant à différents niveaux d'influence et d'interaction avec la personne.",
	},

	// QUESTIONS DE SYNTHÈSE
	{
		id: "q19",
		title: "Question de synthèse - Méthodes d'intervention",
		question: "Comment peut-on caractériser les trois méthodes d'intervention en travail social selon les régions du monde?",
		type: "checkbox",
		options: [
			{value: "1", label: "Les pays européens mettent surtout de l'avant l'intervention individuelle"},
			{value: "2", label: "Les pays latino-américains privilégient les pratiques communautaires"},
			{value: "3", label: "L'intervention de groupe est plus importante dans les pays anglophones"},
			{value: "4", label: "Tous les pays développés accordent la même importance aux trois méthodes"},
		],
		explanation:
			"Les pays européens mettent surtout de l'avant l'intervention individuelle, les pays latino-américains privilégient les pratiques communautaires, et l'intervention de groupe est une réalité plus importante dans les pays anglophones.",
	},
	{
		id: "q20",
		title: "Question de synthèse - Rôles et intervention",
		question: "Quels sont les différents rôles que peut adopter un travailleur social dans sa pratique?",
		type: "checkbox",
		options: [
			{value: "1", label: "Conseiller/thérapeute"},
			{value: "2", label: "Formateur/éducateur"},
			{value: "3", label: "Intermédiaire/agent de liaison"},
			{value: "4", label: "Défenseur/avocat"},
			{value: "5", label: "Protecteur"},
			{value: "6", label: "Contrôleur social"},
		],
		explanation:
			"Les différents rôles du travailleur social mentionnés dans le cours comprennent: conseiller/thérapeute, formateur/éducateur, intermédiaire/agent de liaison, défenseur/avocat (défense de droits sociaux) et protecteur.",
	},
	{
		id: "q21",
		title: "Politiques sociales - Évolution historique",
		question: "Quelle transformation majeure les politiques sociales ont-elles connue depuis les années 1980?",
		type: "radio",
		options: [
			{value: "1", label: "L'expansion considérable de l'État providence dans tous les pays occidentaux"},
			{value: "2", label: "Le passage progressif d'un État providence à un État partenaire ou néolibéral"},
			{value: "3", label: "L'abandon complet des politiques sociales au profit du marché"},
			{value: "4", label: "Le retour à des politiques sociales traditionnelles basées sur la charité"},
		],
		explanation:
			"Depuis les années 1980, on observe un passage progressif d'un État providence à un État partenaire ou néolibéral, caractérisé par une réduction des interventions directes de l'État et une plus grande participation d'acteurs privés et communautaires.",
	},

	// INTERVENTION SOCIALE PERSONNELLE (COURS 9)
	{
		id: "q22",
		title: "Intervention sociale personnelle - Étapes",
		question: "Quelles sont les étapes de l'intervention sociale personnelle?",
		type: "checkbox",
		options: [
			{value: "1", label: "Évaluation de la situation"},
			{value: "2", label: "Planification de l'intervention"},
			{value: "3", label: "Réalisation de l'intervention"},
			{value: "4", label: "Évaluation des résultats"},
			{value: "5", label: "Témoignage en cour"},
		],
		explanation:
			"Les quatre étapes principales de l'intervention sociale personnelle sont: l'évaluation de la situation, la planification de l'intervention, la réalisation de l'intervention et l'évaluation des résultats.",
	},

	// INTERVENTION DE GROUPE (COURS 10)
	{
		id: "q23",
		title: "Intervention de groupe - Rôles à éviter",
		question: "Quels sont les rôles dysfonctionnels que les membres peuvent adopter dans un groupe?",
		type: "checkbox",
		options: [
			{value: "1", label: "Le dominateur qui monopolise la parole"},
			{value: "2", label: "Le bouc émissaire qui reçoit les projections négatives"},
			{value: "3", label: "Le saboteur qui détourne l'attention du groupe"},
			{value: "4", label: "L'expert qui partage ses connaissances"},
			{value: "5", label: "Le silencieux qui n'exprime pas ses opinions"},
		],
		explanation:
			"Plusieurs rôles dysfonctionnels peuvent émerger dans un groupe: le dominateur qui monopolise la parole, le bouc émissaire qui reçoit les projections négatives, le saboteur qui détourne l'attention, et le silencieux qui n'exprime pas ses opinions. L'expert qui partage ses connaissances est généralement considéré comme un rôle fonctionnel.",
	},

	// ORGANISATION COMMUNAUTAIRE (COURS 11)
	{
		id: "q24",
		title: "Organisation communautaire - Stratégies d'action",
		question: "Dans l'approche d'action sociale selon Rothman, quelles stratégies sont généralement utilisées?",
		type: "checkbox",
		options: [
			{value: "1", label: "Confrontation et manifestations"},
			{value: "2", label: "Négociation et compromis"},
			{value: "3", label: "Éducation populaire et conscientisation"},
			{value: "4", label: "Médiation et résolution de conflits"},
			{value: "5", label: "Lobbying et représentation politique"},
		],
		explanation:
			"Dans l'approche d'action sociale selon Rothman, les stratégies généralement utilisées incluent la confrontation et les manifestations, l'éducation populaire et la conscientisation, ainsi que le lobbying et la représentation politique.",
	},

	// RECHERCHE EN TRAVAIL SOCIAL (COURS 12)
	{
		id: "q25",
		title: "Recherche en travail social - Méthodes",
		question: "Quelles sont les principales méthodes de recherche utilisées en travail social?",
		type: "checkbox",
		options: [
			{value: "1", label: "Méthodes quantitatives"},
			{value: "2", label: "Méthodes qualitatives"},
			{value: "3", label: "Recherche-action participative"},
			{value: "4", label: "Recherche évaluative"},
			{value: "5", label: "Recherche spéculative"},
		],
		explanation:
			"Les principales méthodes de recherche utilisées en travail social comprennent les méthodes quantitatives, les méthodes qualitatives, la recherche-action participative et la recherche évaluative.",
	},

	// PARADIGME DU TRAVAIL SOCIAL (COURS 13)
	{
		id: "q26",
		title: "Paradigme du travail social - Identité professionnelle",
		question: "Qu'est-ce qui caractérise l'identité professionnelle du travailleur social?",
		type: "checkbox",
		options: [
			{value: "1", label: "Une expertise à la jonction de l'individu et du social"},
			{value: "2", label: "Un engagement envers la justice sociale"},
			{value: "3", label: "Une pratique fondée sur des valeurs et une éthique professionnelle"},
			{value: "4", label: "Une approche exclusivement thérapeutique"},
			{value: "5", label: "Une neutralité politique absolue"},
		],
		explanation:
			"L'identité professionnelle du travailleur social se caractérise par une expertise à la jonction de l'individu et du social, un engagement envers la justice sociale, et une pratique fondée sur des valeurs et une éthique professionnelle.",
	},

	// QUESTIONS PRATIQUES ET DE SYNTHÈSE
	{
		id: "q27",
		title: "Cas pratique - Politiques sociales",
		question:
			"Un nouveau programme d'aide financière a été mis en place, mais les démarches administratives sont si complexes que peu de personnes éligibles y accèdent. Quelle analyse un travailleur social pourrait-il faire de cette situation?",
		type: "radio",
		options: [
			{value: "1", label: "Le programme est bien conçu, les bénéficiaires devraient faire plus d'efforts"},
			{value: "2", label: "Le problème relève uniquement des compétences individuelles des personnes ciblées"},
			{value: "3", label: "Il y a un enjeu d'accessibilité qui peut révéler un non-recours aux droits et une exclusion structurelle"},
			{value: "4", label: "Le programme est volontairement complexe pour limiter les dépenses publiques"},
		],
		explanation:
			"Un travailleur social analyserait cette situation comme un enjeu d'accessibilité révélant potentiellement un phénomène de non-recours aux droits et d'exclusion structurelle, ce qui nécessite une intervention au niveau des systèmes plutôt que de simplement responsabiliser les individus.",
	},
	{
		id: "q28",
		title: "Cas pratique - Intervention",
		question:
			"Lors d'une intervention auprès d'une personne en situation de précarité, celle-ci vous exprime qu'elle se sent humiliée par les démarches d'aide sociale. Quelle approche privilégieriez-vous?",
		type: "radio",
		options: [
			{value: "1", label: "Lui expliquer que ces démarches sont nécessaires et qu'elle doit s'y conformer"},
			{value: "2", label: "Reconnaître son expérience et travailler avec elle pour préserver sa dignité dans le processus"},
			{value: "3", label: "Lui suggérer d'abandonner les démarches si elles sont trop difficiles émotionnellement"},
			{value: "4", label: "L'orienter vers un soutien psychologique pour gérer ses émotions négatives"},
		],
		explanation:
			"L'approche à privilégier consiste à reconnaître l'expérience vécue par la personne et à travailler avec elle pour préserver sa dignité dans le processus, en accord avec les valeurs fondamentales du travail social que sont le respect de la dignité humaine et la promotion de la justice sociale.",
	},

	{
		id: "q29",
		title: "Question de synthèse - Intégration des méthodes",
		question: "Dans une situation où un quartier fait face à un taux élevé d'isolement des personnes âgées, comment un travailleur social pourrait-il intégrer différentes méthodes d'intervention?",
		type: "checkbox",
		options: [
			{value: "1", label: "Intervention individuelle: accompagnement personnalisé des aînés isolés"},
			{value: "2", label: "Intervention de groupe: création de groupes d'entraide et d'activités collectives"},
			{value: "3", label: "Organisation communautaire: mobilisation des ressources du quartier pour créer un réseau de soutien"},
			{value: "4", label: "Politique sociale: plaidoyer pour des services de proximité adaptés aux besoins des aînés"},
			{value: "5", label: "Institutionnalisation systématique des personnes âgées isolées"},
		],
		explanation:
			"Face à l'isolement des personnes âgées dans un quartier, un travailleur social pourrait intégrer différentes méthodes: l'intervention individuelle pour accompagner les aînés isolés, l'intervention de groupe pour créer des espaces collectifs, l'organisation communautaire pour mobiliser les ressources locales, et l'action sur les politiques sociales pour développer des services adaptés.",
	},

	{
		id: "q30",
		title: "Question de synthèse - Éthique professionnelle",
		question: "Quels principes éthiques guident la pratique du travail social?",
		type: "checkbox",
		options: [
			{value: "1", label: "Le respect de la dignité et de la valeur inhérente des personnes"},
			{value: "2", label: "La promotion de la justice sociale"},
			{value: "3", label: "Le respect du secret professionnel et de la confidentialité"},
			{value: "4", label: "L'intégrité dans la pratique professionnelle"},
			{value: "5", label: "La priorisation systématique des intérêts institutionnels"},
		],
		explanation:
			"Les principes éthiques qui guident la pratique du travail social incluent le respect de la dignité et de la valeur inhérente des personnes, la promotion de la justice sociale, le respect du secret professionnel et de la confidentialité, ainsi que l'intégrité dans la pratique professionnelle.",
	},
];

// Réponses correctes pour les questions à choix unique (radio)
export const correctRadioAnswers = {
	q1: "1",
	q4: "3",
	q6: "3",
	q7: "3",
	q8: "2",
	q10: "2",
	q16: "2",
	q17: "2",
	q21: "2",
	q27: "3",
	q28: "2",
};

// Réponses correctes pour les questions à choix multiples (checkbox)
export const correctCheckboxAnswers = {
	q2: ["1", "2", "3"],
	q3: ["1", "2", "3"],
	q5: ["1", "2"],
	q9: ["1", "2", "3", "4"],
	q11: ["1", "2", "3", "4"],
	q12: ["1", "2", "3"],
	q13: ["1", "2", "3", "4", "5"],
	q14: ["1", "2", "3", "4", "5"],
	q15: ["1", "2"],
	q18: ["1", "2", "3", "4"],
	q19: ["1", "2", "3"],
	q20: ["1", "2", "3", "4", "5"],
	q22: ["1", "2", "3", "4"],
	q23: ["1", "2", "3", "5"],
	q24: ["1", "3", "5"],
	q25: ["1", "2", "3", "4"],
	q26: ["1", "2", "3"],
	q29: ["1", "2", "3", "4"],
	q30: ["1", "2", "3", "4"],
};
