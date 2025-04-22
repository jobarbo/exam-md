// Ce fichier contient les données pour l'examen sur les politiques sociales et le travail social
// Il sera importé dynamiquement par le composant ExamForm

export const exam08Questions = [
	{
		id: "q1",
		title: "Question 1",
		question: "Quelle est la définition des politiques sociales selon Vaillancourt?",
		type: "radio",
		options: [
			{value: "a", label: "L'action des autorités publiques au sein d'une société uniquement"},
			{value: "b", label: "Des interventions de l'état qui contribuent au bien-être et à la citoyenneté des individus et des collectivités"},
			{value: "c", label: "L'ensemble des services sociaux fournis par le secteur privé"},
			{value: "d", label: "Des mesures qui visent uniquement à servir les intérêts des groupes privés"},
		],
		explanation:
			"Selon Vaillancourt, les politiques sociales sont des interventions de l'état et des pouvoirs publics qui contribuent au bien-être et à la citoyenneté des individus, des collectivités locales, voire des régions, d'une manière qui fait reculer la marchandisation et la familialisation.",
	},
	{
		id: "q2",
		title: "Question 2",
		question: "Quels sont les trois modes de régulation du social présentés dans le cours?",
		type: "checkbox",
		options: [
			{value: "a", label: "L'état providence"},
			{value: "b", label: "Le néo-libéralisme (ou néo-conservatisme)"},
			{value: "c", label: "La perspective solidaire (ou partenariale)"},
			{value: "d", label: "L'état socialiste révolutionnaire"},
			{value: "e", label: "Le modèle autoritaire centralisé"},
			{value: "f", label: "L'anarcho-capitalisme"},
		],
		explanation: "Les trois modes de régulation du social présentés dans le cours sont l'état providence, le néo-libéralisme (ou néo-conservatisme) et la perspective solidaire (ou partenariale).",
	},
	{
		id: "q3",
		title: "Question 3",
		question: "Comment l'état providence est-il défini dans le cours?",
		type: "radio",
		options: [
			{value: "a", label: "Celui qui encourage la sous-traitance et le libre choix"},
			{value: "b", label: "Celui qui régle tout, administre tout, dispense tous les services"},
			{value: "c", label: "Celui qui favorise les partenariats avec le secteur communautaire"},
			{value: "d", label: "Celui qui limite ses interventions au minimum"},
		],
		explanation: 'L\'état providence est défini comme "celui qui régle tout, administre tout, dispense tous les services".',
	},
	{
		id: "q4",
		title: "Question 4",
		question: "Selon le néo-libéralisme, comment sont perçues les personnes dans le contexte des politiques sociales?",
		type: "radio",
		options: [
			{value: "a", label: "Comme des partenaires dans la co-construction des politiques"},
			{value: "b", label: "Comme des consommateurs (approche consumériste)"},
			{value: "c", label: "Comme des bénéficiaires passifs de l'aide de l'État"},
			{value: "d", label: "Comme des activistes sociaux"},
		],
		explanation: "Dans l'approche néo-libérale, les personnes sont perçues comme des consommateurs (approche consumériste).",
	},
	{
		id: "q5",
		title: "Question 5",
		question: "Quels sont les éléments caractéristiques de la perspective solidaire (ou partenariale)?",
		type: "checkbox",
		options: [
			{value: "a", label: "Les politiques sociales sont des co-constructions"},
			{value: "b", label: "Elle donne lieu à une économie plurielle (3 secteurs)"},
			{value: "c", label: "Elle favorise des rapports marqués par le partenariat"},
			{value: "d", label: "Elle perçoit toute érosion dans la gratuité comme une menace"},
			{value: "e", label: "Elle considère l'État comme un obstacle au développement social"},
			{value: "f", label: "Elle privilégie l'action individuelle plutôt que collective"},
		],
		explanation:
			"La perspective solidaire est caractérisée par des politiques sociales qui sont des co-constructions, une économie plurielle (3 secteurs: public, privé, communautaire), et des rapports marqués par le partenariat.",
	},
	{
		id: "q6",
		title: "Question 6",
		question: "Selon Rosanvallon, quels sont les quatre volets des politiques sociales?",
		type: "checkbox",
		options: [
			{value: "a", label: "Redistributif"},
			{value: "b", label: "Capacitation"},
			{value: "c", label: "Régulation"},
			{value: "d", label: "Protection"},
			{value: "e", label: "Privatisation"},
			{value: "f", label: "Répression"},
			{value: "g", label: "Normalisation"},
		],
		explanation: "Selon Rosanvallon, les quatre volets des politiques sociales sont: redistributif, capacitation, régulation et protection.",
	},
	{
		id: "q7",
		title: "Question 7",
		question: "Comment les marxistes perçoivent-ils l'état providence?",
		type: "radio",
		options: [
			{value: "a", label: "Il détourne les travailleurs du socialisme"},
			{value: "b", label: "Il témoigne de la volonté de redistribuer la richesse"},
			{value: "c", label: "Il est un frein aux lois du marché"},
			{value: "d", label: "Il est l'expression parfaite du socialisme"},
		],
		explanation: "Pour les marxistes, l'état providence détourne les travailleurs du socialisme car les mesures sociales ont pour effet de diminuer le militantisme.",
	},
	{
		id: "q8",
		title: "Question 8",
		question: "Quels sont les fondements des politiques sociales mentionnés dans le cours?",
		type: "checkbox",
		options: [
			{value: "a", label: "Elles visent à corriger les failles du marché"},
			{value: "b", label: "Elles visent à atténuer les inégalités sociales, économiques, de santé, en éducation, etc."},
			{value: "c", label: "Elles reposent sur une solidarité à l'intérieur de la société"},
			{value: "d", label: "Elles reposent sur la légitimité de l'état à corriger les failles et imperfections du marché"},
			{value: "e", label: "Elles visent à maximiser les profits du secteur privé"},
			{value: "f", label: "Elles cherchent à réduire le rôle de l'État dans l'économie"},
			{value: "g", label: "Elles visent à uniformiser les comportements sociaux"},
		],
		explanation:
			"Les fondements des politiques sociales mentionnés dans le cours sont: corriger les failles du marché, atténuer les inégalités, reposer sur une solidarité sociale, et la légitimité de l'état à corriger les imperfections du marché.",
	},
	{
		id: "q9",
		title: "Question 9",
		question: "Quel type de financement des systèmes de santé est caractérisé par l'universalité et la gestion publique?",
		type: "radio",
		options: [
			{value: "a", label: "Le financement à dominante assurance publique (Bismarckien)"},
			{value: "b", label: "Le financement à dominante impôt (Beveridgien)"},
			{value: "c", label: "Le financement à dominante privé ou mixte"},
			{value: "d", label: "Le financement par cotisations individuelles"},
		],
		explanation:
			"Le financement à dominante impôt (Beveridgien) est caractérisé par l'universalité et la gestion publique, avec un financement par impôt. C'est l'expression la plus parfaite des orientations d'un état providence (Canada, Québec, pays scandinaves, etc.).",
	},
	{
		id: "q10",
		title: "Question 10",
		question: "Quel type de justice correspond au modèle où les soins sont un droit et chacun reçoit ce qui lui est dû?",
		type: "radio",
		options: [
			{value: "a", label: "La justice distributive"},
			{value: "b", label: "La justice commutative"},
			{value: "c", label: "La justice pénale"},
			{value: "d", label: "La justice restaurative"},
		],
		explanation:
			"La justice distributive correspond au modèle où les soins sont un droit et chacun reçoit ce qui lui est dû. Dans ce modèle, il n'y a aucun lien entre la contribution et les services reçus, comme dans le financement par impôt.",
	},
	{
		id: "q11",
		title: "Question 11",
		question: "Quel modèle d'état providence, selon la typologie de Gosta Esping-Andersen, n'intervient qu'en dernier recours?",
		type: "radio",
		options: [
			{value: "a", label: "Le welfare state libéral"},
			{value: "b", label: "Le modèle conservateur-corporatiste"},
			{value: "c", label: "Le régime social-démocrate"},
			{value: "d", label: "Le modèle méditerranéen"},
		],
		explanation: "Le welfare state libéral n'intervient qu'en dernier recours, pousse à un retour rapide sur le marché du travail et se limite à la protection des plus faibles.",
	},
	{
		id: "q12",
		title: "Question 12",
		question: "Quel est le rapport entre les mouvements sociaux et les politiques sociales selon le cours?",
		type: "radio",
		options: [
			{value: "a", label: "Les politiques sociales sont indépendantes des mouvements sociaux"},
			{value: "b", label: "Les mouvements sociaux s'opposent systématiquement aux politiques sociales"},
			{value: "c", label: "Les mouvements sociaux produisent ou forcent à produire des politiques sociales"},
			{value: "d", label: "Les politiques sociales visent à contrôler les mouvements sociaux"},
		],
		explanation:
			"Selon le cours, ce sont les mouvements sociaux qui produisent (comme la loi 112) ou forcent à produire des politiques sociales. Une large part des politiques sociales trouve son origine dans les luttes populaires.",
	},
	{
		id: "q13",
		title: "Question 13",
		question: 'Qu\'est-ce que le cours entend par "passagers clandestins" dans le contexte des politiques sociales?',
		type: "radio",
		options: [
			{value: "a", label: "Les personnes qui bénéficient illégalement des services sociaux"},
			{value: "b", label: "Les personnes qui ne paient pas d'impôts"},
			{value: "c", label: "Les personnes qui profitent des politiques sociales sans s'être mobilisées pour les obtenir"},
			{value: "d", label: "Les immigrants sans papiers qui utilisent les services sociaux"},
		],
		explanation: 'Dans le contexte des politiques sociales, les "passagers clandestins" sont les personnes qui profitent des politiques sociales sans s\'être mobilisées pour les obtenir.',
	},
	{
		id: "q14",
		title: "Question 14",
		question: "Quelles sont les deux dimensions centrales de la gouvernance dans l'étude des politiques publiques?",
		type: "checkbox",
		options: [
			{value: "a", label: "Le degré de décentralisation des instances"},
			{value: "b", label: "La composition démocratique des instances"},
			{value: "c", label: "Le montant des financements alloués"},
			{value: "d", label: "La rapidité de mise en œuvre des politiques"},
			{value: "e", label: "L'efficacité économique des politiques"},
			{value: "f", label: "La pérennité des structures administratives"},
		],
		explanation:
			"Les deux dimensions centrales de la gouvernance sont le degré de décentralisation des instances (leur proximité avec le local) et la composition démocratique des instances (qui représente le local, les citoyens).",
	},
	{
		id: "q15",
		title: "Question 15",
		question: "Selon David Alper, quelles sont les composantes de la justice sociale?",
		type: "checkbox",
		options: [
			{value: "a", label: "S'occuper des personnes marginalisées"},
			{value: "b", label: "Travailler vers une plus grande égalité entre les autochtones, nouveaux arrivants et Canadiens de souche"},
			{value: "c", label: "Réduire les inégalités sociales et économiques"},
			{value: "d", label: "S'occuper d'un meilleur environnement climatique"},
			{value: "e", label: "Maximiser les profits des entreprises"},
			{value: "f", label: "Favoriser la compétition individuelle et la méritocratie"},
			{value: "g", label: "Imposer un modèle culturel unique pour faciliter l'intégration"},
		],
		explanation:
			"Selon David Alper, la justice sociale comprend s'occuper des personnes marginalisées, travailler vers une plus grande égalité entre différents groupes, réduire les inégalités sociales et économiques, et s'occuper d'un meilleur environnement climatique.",
	},
	{
		id: "q16",
		title: "Question 16",
		question: "Selon le cours, quel est l'impact des inégalités sur la santé des individus?",
		type: "radio",
		options: [
			{value: "a", label: "Elles ont un impact néfaste sur la santé"},
			{value: "b", label: "Elles n'ont aucun impact sur la santé"},
			{value: "c", label: "Elles améliorent la santé en encourageant l'autonomie"},
			{value: "d", label: "Leur impact varie selon les individus"},
		],
		explanation:
			"Selon le cours, les inégalités ont un impact néfaste sur la santé des individus, alors que l'égalité est bonne pour la santé, comme le montrent les exemples de la Norvège et de la Finlande.",
	},
	{
		id: "q17",
		title: "Question 17",
		question: 'D\'après le cours, quelles sont les "quatre choses à savoir sur la justice sociale" selon David Alper?',
		type: "checkbox",
		options: [
			{value: "a", label: "Une responsabilité individuelle et collective"},
			{value: "b", label: "Une poignée de personnes peut changer les choses"},
			{value: "c", label: "Penser globalement, agir localement"},
			{value: "d", label: "Les sociétés les plus égalitaires sont les sociétés les plus en santé"},
			{value: "e", label: "La justice sociale doit être imposée par l'État sans participation citoyenne"},
			{value: "f", label: "Les inégalités sont nécessaires pour stimuler l'économie"},
			{value: "g", label: "La croissance économique résout naturellement les problèmes sociaux"},
		],
		explanation:
			'Les "quatre choses à savoir sur la justice sociale" selon David Alper sont: une responsabilité individuelle et collective, une poignée de personnes peut changer les choses, penser globalement et agir localement, et les sociétés les plus égalitaires sont les sociétés les plus en santé.',
	},
	{
		id: "q18",
		title: "Question 18",
		question:
			"Selon le sondage de la Fondation Chagnon (2015) mentionné dans le cours, quel pourcentage des québécois considère que les politiques sociales ont contribué de manière importante à la qualité de vie?",
		type: "radio",
		options: [
			{value: "a", label: "50%"},
			{value: "b", label: "67%"},
			{value: "c", label: "83%"},
			{value: "d", label: "95%"},
		],
		explanation: "Selon le sondage de la Fondation Chagnon (2015), 83% des québécois considèrent que les politiques sociales ont contribué de manière importante à la qualité de vie.",
	},
	{
		id: "q19",
		title: "Question 19",
		question: "D'après le cours, quelle devise est associée à l'état providence?",
		type: "radio",
		options: [
			{value: "a", label: '"L\'union fait la force"'},
			{value: "b", label: '"Liberté, Égalité, Fraternité"'},
			{value: "c", label: '"Un pour tous, tous pour un"'},
			{value: "d", label: '"Je me souviens"'},
		],
		explanation: 'D\'après le cours, l\'état providence est "l\'expression de la devise de la république française" qui est "Liberté, Égalité, Fraternité".',
	},
	{
		id: "q20",
		title: "Question 20",
		question: 'Selon le cours, quelle affirmation définit le mieux "le social" dans le contexte des politiques sociales?',
		type: "radio",
		options: [
			{value: "a", label: "Le social fait appel au politique pour corriger l'économique"},
			{value: "b", label: "Le social fait appel à l'économique pour corriger le politique"},
			{value: "c", label: "Le social est indépendant de l'économique et du politique"},
			{value: "d", label: "Le social est entièrement déterminé par l'économique"},
		],
		explanation:
			'Selon le cours, "le social fait appel au politique pour corriger l\'économique". Cette définition souligne le rôle des politiques sociales dans la correction des failles du système économique.',
	},
];

// Réponses correctes pour les questions à choix unique (radio)
export const correctRadioAnswers = {
	q1: "b",
	q3: "b",
	q4: "b",
	q7: "a",
	q9: "b",
	q10: "a",
	q11: "a",
	q12: "c",
	q13: "c",
	q16: "a",
	q18: "c",
	q19: "b",
	q20: "a",
};

// Réponses correctes pour les questions à choix multiples (checkbox)
export const correctCheckboxAnswers = {
	q2: ["a", "b", "c"],
	q5: ["a", "b", "c"],
	q6: ["a", "b", "c", "d"],
	q8: ["a", "b", "c", "d"],
	q14: ["a", "b"],
	q15: ["a", "b", "c", "d"],
	q17: ["a", "b", "c", "d"],
};
