// Ce fichier contient les données pour l'examen sur l'interactionnisme symbolique et la théorie de l'étiquetage
// Il sera importé dynamiquement par le composant ExamForm

export const exam06Questions = [
	{
		id: "q1",
		title: "Question 1",
		question: "Quelles sont les trois prémisses de l'interactionnisme symbolique selon Blumer?",
		type: "checkbox",
		options: [
			{value: "a", label: "Les êtres humains se comportent selon les significations qu'ils accordent aux choses"},
			{value: "b", label: "Les significations sont la résultante des interactions sociales"},
			{value: "c", label: "Les significations se modifient au travers des processus d'interprétation"},
			{value: "d", label: "Les comportements sont déterminés par la biologie"},
			{value: "e", label: "La société est un système fermé"},
		],
		explanation:
			"Les trois prémisses de Blumer sont: 1) Les êtres humains se comportent selon les significations qu'ils accordent aux choses, 2) Les significations sont la résultante des interactions sociales, 3) Les significations se modifient et se construisent au travers des processus d'interprétation mis en œuvre dans les situations réelles. (Source: Blumer, 1969 - Fondement_6/Poupart 2011 p.5)",
	},
	{
		id: "q2",
		title: "Question 2",
		question: "Selon Howard Becker, comment la déviance est-elle créée?",
		type: "radio",
		options: [
			{value: "a", label: "Par les déviants eux-mêmes"},
			{value: "b", label: "Par les groupes sociaux qui instituent des normes et étiquetent certains individus"},
			{value: "c", label: "Par la nature humaine"},
			{value: "d", label: "Par des facteurs génétiques"},
		],
		explanation:
			"Selon Becker: « Les groupes sociaux créent la déviance en instituant des normes dont la transgression constitue la déviance, en appliquant ces normes à certains individus et en les étiquetant comme des déviants. » La déviance n'est pas une qualité de l'acte mais une conséquence de l'application de normes par les autres. (Source: Becker, 1963 - Fondement_6/Poupart 2011 p.10)",
	},
	{
		id: "q3",
		title: "Question 3",
		question: "Qu'est-ce que la théorie de l'étiquetage postule?",
		type: "radio",
		options: [
			{value: "a", label: "La déviance est inhérente à certains actes"},
			{value: "b", label: "La déviance dépend de la manière dont l'acte est qualifié et étiqueté par une majorité"},
			{value: "c", label: "Tous les actes sont également déviants"},
			{value: "d", label: "Il n'y a pas de déviance"},
		],
		explanation:
			"La théorie de l'étiquetage postule que la déviance n'est pas nécessairement inhérente à l'acte ni ne dépend absolument des caractéristiques individuelles. Au contraire, elle dépend de la manière dont cet acte est qualifié négativement ou étiqueté par une majorité. (Source: Fondement_6/Poupart 2011 p.9-10 - Théorie de l'étiquetage)",
	},
	{
		id: "q4",
		title: "Question 4",
		question: "Quelle était la principale caractéristique de la première École de Chicago (1918-1935)?",
		type: "radio",
		options: [
			{value: "a", label: "La recherche uniquement théorique"},
			{value: "b", label: "La recherche empirique depuis le terrain et les méthodes qualitatives"},
			{value: "c", label: "Les sondages téléphoniques"},
			{value: "d", label: "L'expérimentation en laboratoire"},
		],
		explanation:
			"L'École de Chicago se caractérise avant tout par la recherche empirique depuis le terrain. Elle a développé des méthodes originales: documents personnels, travail systématique sur le terrain, et exploitation de sources documentaires diverses. C'est une sociologie qualitative et urbaine. (Source: Fondement_6/Poupart 2011 p.2-3 - L'École de Chicago)",
	},
	{
		id: "q5",
		title: "Question 5",
		question: "Selon Poupart, que signifie « rendre compte » et « tenir compte » de la perspective des acteurs?",
		type: "checkbox",
		options: [
			{value: "a", label: "Décrire de façon nuancée les expériences et points de vue des acteurs"},
			{value: "b", label: "Comprendre ce qui influence ces expériences (contexte social)"},
			{value: "c", label: "Se distancier des explications que les acteurs donnent"},
			{value: "d", label: "Ignorer complètement les acteurs"},
		],
		explanation:
			"'Rendre compte' signifie décrire de façon nuancée et détaillée les expériences des acteurs et comprendre ce qui les influence socialement. 'Tenir compte' signifie considérer le sens que les acteurs donnent à leur réalité tout en se distancier de leurs explications pour les objectiver. (Source: Poupart, 2011 p.3-4 - Rendre compte et tenir compte)",
	},
	{
		id: "q6",
		title: "Question 6",
		question: "Qu'est-ce que la définition de la situation selon Thomas?",
		type: "radio",
		options: [
			{value: "a", label: "Une description objective"},
			{value: "b", label: "Le sens que les acteurs donnent à leur réalité qui influence leur manière d'agir"},
			{value: "c", label: "Une norme légale"},
			{value: "d", label: "Un diagnostic médical"},
		],
		explanation:
			"Selon Thomas: 'If men define situations as real, they are real in their consequences'. Si les acteurs considèrent une situation comme réelle, ils agiront en conséquence même si leur lecture s'avère non fondée objectivement. Le sens donné à la réalité influence les actions. (Source: Thomas - Fondement_6/Poupart 2011 p.4 - Définition de la situation)",
	},
	{
		id: "q7",
		title: "Question 7",
		question: "Qu'est-ce que la déviation secondaire selon Lemert?",
		type: "radio",
		options: [
			{value: "a", label: "Une déviation moins grave"},
			{value: "b", label: "Le processus par lequel le déviant accepte le statut que les autres lui donnent et organise sa vie en fonction"},
			{value: "c", label: "Une rechute après traitement"},
			{value: "d", label: "Un comportement occasionnel"},
		],
		explanation:
			"La déviation secondaire se produit lorsque la personne, stigmatisée et sanctionnée, en vient à se percevoir selon l'image projetée par les autres et adopte un comportement déviant comme moyen de défense ou d'ajustement aux problèmes conséquents à la réaction sociale. Le contrôle social mène alors à la déviance. (Source: Lemert - Fondement_6/Poupart 2011 p.11 - Déviation primaire et secondaire)",
	},
	{
		id: "q8",
		title: "Question 8",
		question: "Qu'est-ce que la stigmatisation selon Goffman?",
		type: "radio",
		options: [
			{value: "a", label: "Une marque d'honneur"},
			{value: "b", label: "Un attribut qui jette un discrédit profond sur une personne"},
			{value: "c", label: "Un titre professionnel"},
			{value: "d", label: "Un diplôme académique"},
		],
		explanation:
			"Selon Goffman, le stigmate est un attribut qui jette un discrédit profond sur une personne. Il peut découler d'une malformation physique, de caractéristiques comme la race ou la religion, ou de ce que d'autres considèrent comme des tares (être détenu, toxicomane, assisté social, etc.). (Source: Goffman, 1963 - Stigmate, Fondement_6/Poupart 2011 p.12)",
	},
	{
		id: "q9",
		title: "Question 9",
		question: "Selon la tradition de Chicago, comment les problèmes sociaux des quartiers populaires s'expliquent-ils?",
		type: "radio",
		options: [
			{value: "a", label: "Par des déficiences biologiques des populations"},
			{value: "b", label: "Par les conditions d'existence des lieux de vie et le contexte social"},
			{value: "c", label: "Par le manque d'éducation"},
			{value: "d", label: "Par la volonté des individus"},
		],
		explanation:
			"Les sociologues de Chicago rejettent les théories eugénistes. Puisque les populations ne vivaient pas ces problèmes avant d'arriver en ville et cessent de les éprouver en quittant ces quartiers, les problèmes tiennent d'abord aux conditions d'existence des lieux de vie et non à des déficiences biologiques. (Source: Fondement_6/Poupart 2011 p.2 - Rejet des théories eugénistes)",
	},
	{
		id: "q10",
		title: "Question 10",
		question: "Quelle est l'innovation la plus fondamentale de l'interactionnisme dans l'étude de la déviance?",
		type: "radio",
		options: [
			{value: "a", label: "L'utilisation des statistiques"},
			{value: "b", label: "L'introduction du thème de la réaction sociale"},
			{value: "c", label: "L'accent sur la génétique"},
			{value: "d", label: "Le rejet de toute recherche"},
		],
		explanation:
			"L'innovation fondamentale est l'introduction du thème de la réaction sociale. Les interactionnistes s'interrogent sur le rôle des groupes et institutions dans la définition de la déviance et sur les conséquences de ces définitions, plutôt que de chercher les causes de la déviance. (Source: Fondement_6/Poupart 2011 p.9 - L'innovation de l'interactionnisme)",
	},
	{
		id: "q11",
		title: "Question 11",
		question: "Selon l'étude de Cicourel, que révèlent les statistiques officielles sur la délinquance?",
		type: "radio",
		options: [
			{value: "a", label: "La criminalité réelle"},
			{value: "b", label: "Le fonctionnement des organisations et leurs activités de catégorisation"},
			{value: "c", label: "Les tendances génétiques"},
			{value: "d", label: "L'efficacité des programmes"},
		],
		explanation:
			"Selon Cicourel, les statistiques officielles sont le reflet du fonctionnement des organisations plutôt que de la criminalité réelle. Elles résultent des activités par lesquelles les organisations définissent, sélectionnent et traitent les personnes perçues comme déviantes. (Source: Cicourel - Fondement_6/Poupart 2011 p.14 - Statistiques et organisations)",
	},
	{
		id: "q12",
		title: "Question 12",
		question: "Qu'est-ce qu'une carrière déviante selon les interactionnistes?",
		type: "radio",
		options: [
			{value: "a", label: "Un emploi illégal"},
			{value: "b", label: "Un processus d'implication dans la déviance ponctué d'étapes où le sens évolue"},
			{value: "c", label: "Une trajectoire linéaire et déterminée"},
			{value: "d", label: "Un choix de vie permanent"},
		],
		explanation:
			"Selon les interactionnistes, une carrière déviante est un processus d'implication ponctué d'étapes ou de phases susceptibles d'être vécues de manière commune, mais qui n'est ni linéaire ni déterminé. Le sens donné à l'implication peut différer selon les étapes du processus. (Source: Becker - Fondement_6/Poupart 2011 p.12 - Carrière déviante)",
	},
	{
		id: "q13",
		title: "Question 13",
		question: "Selon Chamboredon, pourquoi les jeunes des milieux défavorisés ont-ils plus de chances d'être identifiés comme délinquants?",
		type: "checkbox",
		options: [
			{value: "a", label: "Leur éthique de classe peut être en conflit avec les normes dominantes"},
			{value: "b", label: "Leurs comportements sont plus visibles (scène publique)"},
			{value: "c", label: "Ils font l'objet d'une plus grande surveillance"},
			{value: "d", label: "Ils ont moins de mécanismes de protection et de résolution de conflits"},
			{value: "e", label: "Ils sont génétiquement différents"},
		],
		explanation:
			"Chamboredon identifie plusieurs facteurs: conflit entre éthique de classe et normes dominantes, plus grande visibilité sociale de leurs comportements, surveillance accrue, et moins de mécanismes propres de résolution de conflits pour échapper aux institutions officielles. (Source: Chamboredon - Fondement_6/Poupart 2011 p.13-14 - Facteurs sociaux de la délinquance)",
	},
	{
		id: "q14",
		title: "Question 14",
		question: "Qu'est-ce que la 'dramatisation du mal' selon Tannenbaum?",
		type: "radio",
		options: [
			{value: "a", label: "Une pièce de théâtre"},
			{value: "b", label: "L'effet paradoxal où l'intervention des agences de contrôle social marginalise davantage les jeunes"},
			{value: "c", label: "Une campagne médiatique"},
			{value: "d", label: "Une exagération des faits"},
		],
		explanation:
			"La 'dramatisation du mal' est l'effet paradoxal qu'entraîne l'entrée en scène des agences de contrôle social: des gestes que les jeunes posaient pour s'amuser sont redéfinis comme de la délinquance, entraînant réprobation et prise en charge qui finissent par marginaliser et transformer réellement ces jeunes en délinquants. (Source: Tannenbaum, 1938 - Fondement_6/Poupart 2011 p.11 - La dramatisation du mal)",
	},
	{
		id: "q15",
		title: "Question 15",
		question: "Selon la théorie de la désorganisation sociale de Chicago, de quoi dépendent les taux de criminalité?",
		type: "radio",
		options: [
			{value: "a", label: "Uniquement des facteurs individuels"},
			{value: "b", label: "Des caractéristiques écologiques où elle émerge (quartier)"},
			{value: "c", label: "De la génétique"},
			{value: "d", label: "Du hasard"},
		],
		explanation:
			"Selon la théorie de la désorganisation sociale, les taux de criminalité dépendent des caractéristiques écologiques où elle émerge (quartier). L'écologie du secteur où la personne habite est aussi importante que les facteurs individuels. (Source: École de Chicago - Fondement_6/Poupart 2011 p.2 - Théorie de la désorganisation sociale)",
	},
	{
		id: "q16",
		title: "Question 16",
		question: "Comment les interactionnistes conçoivent-ils le crime et la déviance?",
		type: "radio",
		options: [
			{value: "a", label: "Comme des faits bruts objectifs"},
			{value: "b", label: "Comme des construits sociaux dépendant des systèmes normatifs et des processus d'étiquetage"},
			{value: "c", label: "Comme des maladies"},
			{value: "d", label: "Comme des choix rationnels"},
		],
		explanation:
			"Les interactionnistes conçoivent le crime et la déviance non comme des 'faits bruts' mais comme des construits sociaux. Ce qui est déviant dépend du système normatif en vigueur et du processus d'étiquetage à travers lequel les individus sont désignés comme déviants. (Source: Fondement_6/Poupart 2011 p.10 - Crime et déviance comme construits sociaux)",
	},
	{
		id: "q17",
		title: "Question 17",
		question: "Selon Poupart, quelles sont les deux caractéristiques importantes de la tradition de Chicago?",
		type: "checkbox",
		options: [
			{value: "a", label: "L'importance d'être à la fois à proximité et à distance des acteurs"},
			{value: "b", label: "La tension entre s'inscrire dans le positivisme et s'en dégager"},
			{value: "c", label: "L'utilisation exclusive de méthodes quantitatives"},
			{value: "d", label: "Le rejet de toute recherche empirique"},
		],
		explanation:
			"Poupart identifie deux aspects majeurs: 1) L'importance d'être à la fois à proximité (pour comprendre) et à distance (pour objectiver) des points de vue et expériences des acteurs, 2) La tension entre s'inscrire dans la mouvance du positivisme scientifique et s'en dégager. (Source: Poupart, 2011 p.3-4 - Caractéristiques de Chicago)",
	},
	{
		id: "q18",
		title: "Question 18",
		question: "Selon Scheff, pourquoi les psychiatres avaient-ils tendance à recommander l'hospitalisation même en cas d'incertitude?",
		type: "checkbox",
		options: [
			{value: "a", label: "Considérations financières (rémunération au nombre d'évaluations)"},
			{value: "b", label: "Considérations politiques (éviter d'être blâmé publiquement)"},
			{value: "c", label: "Idéologie professionnelle (croyances médicales)"},
			{value: "d", label: "Pression des familles"},
			{value: "e", label: "Manque de lits"},
		],
		explanation:
			"Scheff identifie trois facteurs: 1) Considérations financières (plus rapide d'aller dans le sens habituel), 2) Considérations politiques et professionnelles (éviter le blâme), 3) Idéologie professionnelle (croyances que sans intervention la condition se détériorerait, qu'il existe un traitement pour toutes les formes, etc.). (Source: Scheff, 1964 - Fondement_6/Poupart & Dorvil & Mayer p.149-150)",
	},
	{
		id: "q19",
		title: "Question 19",
		question: "Quelle est la principale contribution de l'approche interactionniste à la compréhension de la déviance?",
		type: "radio",
		options: [
			{value: "a", label: "Trouver les causes biologiques"},
			{value: "b", label: "Comprendre les processus sociaux de définition et d'étiquetage plutôt que chercher les causes"},
			{value: "c", label: "Augmenter les punitions"},
			{value: "d", label: "Éliminer toutes les normes"},
		],
		explanation:
			"La principale contribution est de déplacer l'attention des causes de la déviance vers la compréhension des processus sociaux par lesquels certaines formes de comportement et les personnes qui y sont associées en viennent à être perçues, définies et traitées comme déviantes. (Source: Fondement_6/Poupart 2011 p.9-10 - Contribution de l'interactionnisme)",
	},
	{
		id: "q20",
		title: "Question 20",
		question: "Qui sont les 'entrepreneurs moraux' selon Becker?",
		type: "radio",
		options: [
			{value: "a", label: "Des hommes d'affaires"},
			{value: "b", label: "Des personnes dont le statut leur permet de participer à la définition de la normalité"},
			{value: "c", label: "Des travailleurs sociaux uniquement"},
			{value: "d", label: "Des criminels"},
		],
		explanation:
			"Les 'entrepreneurs moraux' sont des personnes dont le statut leur permet de participer à la définition de la normalité propre à un monde d'action donné. Ce sont eux qui créent les critères servant à formuler un jugement de déviance dans certaines circonstances. (Source: Becker, 1963 - Fondement_6/Poupart 2011 p.10 - Entrepreneurs moraux)",
	},
];

// Réponses correctes pour les questions à choix unique (radio)
export const correctRadioAnswers = {
	q2: "b",
	q3: "b",
	q4: "b",
	q6: "b",
	q7: "b",
	q8: "b",
	q9: "b",
	q10: "b",
	q11: "b",
	q12: "b",
	q14: "b",
	q15: "b",
	q16: "b",
	q19: "b",
	q20: "b",
};

// Réponses correctes pour les questions à choix multiples (checkbox)
export const correctCheckboxAnswers = {
	q1: ["a", "b", "c"],
	q5: ["a", "b", "c"],
	q13: ["a", "b", "c", "d"],
	q17: ["a", "b"],
	q18: ["a", "b", "c"],
};
