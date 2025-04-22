// Ce fichier contient les données pour l'examen sur l'intervention de groupe
// Il sera importé dynamiquement par le composant ExamForm

export const exam10Questions = [
	{
		id: "q1",
		title: "1. Perspective historique",
		question: "Durant quelle période a commencé le développement du travail social de groupe en réponse aux besoins sociaux liés à l'industrialisation et l'urbanisation?",
		type: "radio",
		options: [
			{value: "a", label: "1750 à 1800"},
			{value: "b", label: "1850 à 1930"},
			{value: "c", label: "1930 à 1960"},
			{value: "d", label: "1960 à 1980"},
		],
		explanation:
			"D'après le cours, la période de 1850 à 1920-30 (environ) marque le début du travail social de groupe dans un contexte d'industrialisation et d'urbanisation où les réseaux sociaux traditionnels (ex. familles) étaient moins aptes à répondre aux besoins sociaux.",
	},
	{
		id: "q2",
		title: "2. Développement au Québec",
		question: "Quels facteurs ont influencé le développement du travail social de groupe au Québec?",
		type: "checkbox",
		options: [
			{value: "a", label: "L'influence du milieu anglophone"},
			{value: "b", label: "Le rôle de l'église dans l'éducation, la santé et les services sociaux"},
			{value: "c", label: "Les travaux de Simone Paré"},
			{value: "d", label: "L'influence des mouvements politiques séparatistes"},
			{value: "e", label: "L'industrialisation rapide du territoire québécois"},
		],
		explanation:
			"Le développement du travail social de groupe au Québec a été influencé par le milieu anglophone qui était très influencé par ce qui se faisait dans les milieux anglophones en Europe et aux États-Unis, le rôle de l'église qui jouait un rôle déterminant dans des domaines tels l'éducation, la santé et les services sociaux, et les travaux de Simone Paré, pionnière au Québec durant les années 1950-60-70.",
	},
	{
		id: "q3",
		title: "3. Lieux de développement",
		question: "Parmi les suivants, quels étaient les lieux où le travail social de groupe s'est développé au Québec?",
		type: "checkbox",
		options: [
			{value: "a", label: "Les centres de loisir (YMCA, Patro)"},
			{value: "b", label: 'Les orphelinats et "écoles de réforme"'},
			{value: "c", label: "Le milieu paroissial"},
			{value: "d", label: "Les universités"},
			{value: "e", label: "Les hôpitaux psychiatriques"},
		],
		explanation:
			'Le travail social de groupe s\'est développé dans des organismes tels les centres de loisir (YMCA, Patro), dans des ressources telles des orphelinats et "écoles de réforme", et dans le milieu paroissial où on dispensait diverses formations à caractère social.',
	},
	{
		id: "q4",
		title: "4. Types de groupes",
		question: "Quelles sont les deux principales catégories de groupes mentionnées dans le cours?",
		type: "radio",
		options: [
			{value: "a", label: "Groupes de thérapie et groupes d'éducation"},
			{value: "b", label: "Groupes synchrones et groupes asynchrones"},
			{value: "c", label: "Groupes de tâches et groupes d'aide"},
			{value: "d", label: "Groupes virtuels et groupes en présentiel"},
		],
		explanation:
			"D'après le cours, on peut distinguer deux principales catégories de groupes : les groupes de tâches (ex. équipe multidisciplinaire, comité consultatif) et les groupes d'aide (ex. groupes d'éducation, de soutien, de thérapie).",
	},
	{
		id: "q5",
		title: "5. Types de groupes d'aide",
		question: "Parmi les suivants, lesquels sont des types de groupes d'aide mentionnés dans le cours?",
		type: "checkbox",
		options: [
			{value: "a", label: "Groupes de thérapie"},
			{value: "b", label: "Groupes d'éducation"},
			{value: "c", label: "Groupes de croissance"},
			{value: "d", label: "Groupes de soutien"},
			{value: "e", label: "Groupes de socialisation"},
			{value: "f", label: "Groupes de conversion idéologique"},
			{value: "g", label: "Groupes de surveillance communautaire"},
			{value: "h", label: "Groupes de hiérarchisation sociale"},
		],
		explanation: "Le cours identifie cinq principaux types de groupes d'aide en fonction de leur but : les groupes de thérapie, d'éducation, de croissance, de soutien et de socialisation.",
	},
	{
		id: "q6",
		title: "6. Habiletés vs aptitudes",
		question: 'Quelle est la différence entre une "habileté" et une "aptitude" dans le contexte de l\'intervention de groupe?',
		type: "radio",
		options: [
			{value: "a", label: "Les habiletés sont innées alors que les aptitudes peuvent être développées"},
			{value: "b", label: 'Les habiletés relèvent du "savoir-faire" tandis que les aptitudes relèvent du "savoir-être"'},
			{value: "c", label: "Les habiletés sont spécifiques à certaines phases du groupe alors que les aptitudes sont constantes"},
			{value: "d", label: "Il n'y a pas de différence significative entre ces deux termes"},
		],
		explanation:
			'Selon le cours, une habileté se réfère au "savoir-faire" (savoir poser des gestes avec adresse et dextérité), tandis que l\'aptitude relève davantage du "savoir-être" (ex. la confiance en soi, la flexibilité et la capacité d\'adaptation).',
	},
	{
		id: "q7",
		title: "7. Phases de l'intervention de groupe",
		question: "Quelles sont les phases de l'intervention de groupe mentionnées dans le cours?",
		type: "checkbox",
		options: [
			{value: "a", label: "Phase pré-groupe"},
			{value: "b", label: "Phase de début"},
			{value: "c", label: "Phase de travail"},
			{value: "d", label: "Phase de fin"},
			{value: "e", label: "Phase d'évaluation post-intervention"},
			{value: "f", label: "Phase de reformulation des objectifs"},
			{value: "g", label: "Phase de reconfiguration structurelle"},
		],
		explanation: "Le cours identifie quatre phases principales dans l'intervention de groupe : la phase pré-groupe, la phase de début, la phase de travail et la phase de fin.",
	},
	{
		id: "q8",
		title: "8. Favoriser la communication dans le groupe",
		question: "Selon le cours, quelles approches peuvent favoriser la communication entre les membres du groupe?",
		type: "checkbox",
		options: [
			{value: "a", label: "S'assurer que la communication ne soit pas unidirectionnelle"},
			{value: "b", label: "Faire en sorte que la communication soit claire"},
			{value: "c", label: "Reconnaître la connaissance expérientielle des membres du groupe"},
			{value: "d", label: "Pouvoir amener la discussion sur des sujets délicats"},
			{value: "e", label: "Limiter les échanges aux sujets prévus à l'ordre du jour"},
			{value: "f", label: "Établir une hiérarchie de parole basée sur l'expertise"},
			{value: "g", label: "Encourager la compétition verbale pour stimuler les échanges"},
		],
		explanation:
			"Pour favoriser la communication entre les membres du groupe, le cours mentionne qu'il faut s'assurer que la communication ne soit pas unidirectionnelle, faire en sorte que la communication soit claire, reconnaître la connaissance expérientielle des membres du groupe, et pouvoir amener la discussion sur des sujets délicats.",
	},
	{
		id: "q9",
		title: "9. Comment s'assurer de travailler avec l'ensemble du groupe?",
		question: "Selon le cours, quelles sont les approches à adopter pour travailler avec l'ensemble du groupe?",
		type: "checkbox",
		options: [
			{value: "a", label: "Être capable de partager son autorité"},
			{value: "b", label: "Penser au groupe comme un ensemble plutôt qu'une simple addition d'individus"},
			{value: "c", label: "Garder le contact visuel avec l'ensemble des personnes"},
			{value: "d", label: "Toujours suivre un plan d'intervention rigide"},
			{value: "e", label: "Concentrer son attention sur les membres les plus actifs du groupe"},
			{value: "f", label: "Ignorer les dynamiques interpersonnelles pour se concentrer sur les objectifs"},
			{value: "g", label: "Imposer un cadre strict pour garantir l'efficacité des séances"},
		],
		explanation:
			"D'après le cours, pour travailler avec l'ensemble du groupe, il faut être capable de partager son autorité, penser au groupe comme un ensemble plutôt qu'une simple addition d'individus (\"penser groupe\"), et garder le contact visuel avec l'ensemble des personnes, pas seulement celle qui parle.",
	},
	{
		id: "q10",
		title: "10. Habiletés requises durant la phase de travail",
		question: "Quelles habiletés sont particulièrement importantes lors de la phase de travail d'un groupe?",
		type: "checkbox",
		options: [
			{value: "a", label: "Pouvoir agir comme médiateur en cas de conflits"},
			{value: "b", label: "Être capable de montrer au groupe le progrès réalisé"},
			{value: "c", label: "Faire des liens entre les propos de différents membres"},
			{value: "d", label: "Pouvoir faire participer les personnes silencieuses et réguler la participation"},
			{value: "e", label: "Savoir formuler le but d'un groupe"},
			{value: "f", label: "Établir des sanctions pour les comportements non-conformes"},
			{value: "g", label: "Imposer sa vision professionnelle pour guider le groupe efficacement"},
		],
		explanation:
			"Selon le cours, lors de la phase de travail, les habiletés importantes incluent: pouvoir agir comme médiateur si des conflits surviennent, être capable de montrer au groupe le progrès réalisé, faire des liens entre les propos de différents membres, et pouvoir faire participer les personnes silencieuses tout en régulant la participation des personnes plus bavardes. La formulation du but du groupe est plutôt associée à la phase pré-groupe.",
	},
	{
		id: "q11",
		title: "11. Caractéristiques des groupes d'éducation",
		question: "Quelles sont les caractéristiques des groupes d'éducation?",
		type: "radio",
		options: [
			{value: "a", label: "L'intervenant facilite les interactions entre les membres sans direction claire"},
			{value: "b", label: "Le travailleur social agit principalement comme thérapeute"},
			{value: "c", label: "Le but est clair, l'intervenant est un expert du sujet, et a un objectif pédagogique"},
			{value: "d", label: "Le groupe vise principalement à réduire l'isolement social des participants"},
		],
		explanation:
			"D'après le cours, les groupes d'éducation ont un but clair, l'intervenant est un expert du sujet et a un objectif pédagogique. Un exemple est un groupe offrant une formation s'adressant à de nouvelles familles d'accueil, où l'intervenant éduque et informe.",
	},
	{
		id: "q12",
		title: "12. Groupes de soutien",
		question: "Quelle est la principale caractéristique d'un groupe de soutien?",
		type: "radio",
		options: [
			{value: "a", label: "Il vise à transformer en profondeur les comportements des participants"},
			{value: "b", label: "Le travailleur social favorise l'aide mutuelle entre personnes vivant une situation similaire"},
			{value: "c", label: "Il est principalement orienté vers l'acquisition de connaissances"},
			{value: "d", label: "Il est toujours dirigé par un professionnel de la santé mentale"},
		],
		explanation:
			"Selon le cours, dans les groupes de soutien, le travailleur social favorise l'aide mutuelle entre les participants. Par exemple, un groupe pour proches aidants (personnes de 40-45 ans aidant leurs parents âgés) où les membres partagent leurs expériences et se soutiennent mutuellement.",
	},
	{
		id: "q13",
		title: "13. Habiletés pour la phase de fin",
		question: "Quelles habiletés sont importantes lors de la phase de fin d'un groupe?",
		type: "checkbox",
		options: [
			{value: "a", label: "Pouvoir faire un bilan"},
			{value: "b", label: "Pouvoir explorer comment les personnes vivent cette phase"},
			{value: "c", label: 'Être capable de penser "l\'après groupe"'},
			{value: "d", label: "Savoir formuler de nouveaux objectifs pour un groupe futur"},
			{value: "e", label: "Formuler des règles et normes pour le groupe"},
			{value: "f", label: "Maintenir les liens d'attachement créés pendant l'intervention"},
			{value: "g", label: "Imposer un suivi individuel obligatoire"},
		],
		explanation:
			"D'après le cours, les habiletés importantes durant la phase de fin sont: pouvoir faire un bilan, pouvoir explorer comment les personnes vivent cette phase (positivement ou négativement), et être capable de penser \"l'après groupe\". La formulation de règles et normes est plutôt associée à la phase de début.",
	},
	{
		id: "q14",
		title: "14. Développements récents en travail social de groupe",
		question: "Quels développements importants ont caractérisé le travail social de groupe à partir des années 1960-70 au Québec?",
		type: "checkbox",
		options: [
			{value: "a", label: "L'inscription de l'intervention de groupe dans des champs de pratique spécialisés"},
			{value: "b", label: "Le développement d'approches plus rigoureuses et scientifiques"},
			{value: "c", label: "La production et publication de programmations dans le domaine de l'intervention de groupe"},
			{value: "d", label: "L'abandon progressif des pratiques de groupe au profit d'interventions individuelles"},
			{value: "e", label: "La diminution de l'importance de la recherche en intervention de groupe"},
			{value: "f", label: "L'uniformisation des techniques d'intervention indépendamment des contextes"},
			{value: "g", label: "L'imposition de modèles standardisés par les institutions"},
		],
		explanation:
			"Selon le cours, à partir des années 1960-70, on observe que l'intervention de groupe s'inscrit davantage dans des champs de pratique spécialisés, ce qui a mené à des approches plus rigoureuses et scientifiques. On note également des développements intéressants comme la production et publication de programmations dans le domaine de l'intervention de groupe. La recherche, notamment les évaluations des interventions, a aussi grandement contribué à l'avancement des connaissances et pratiques.",
	},
	{
		id: "q15",
		title: "15. Groupes virtuels",
		question: "Concernant les groupes virtuels mentionnés dans le cours, quelle affirmation est correcte?",
		type: "radio",
		options: [
			{value: "a", label: "Les groupes virtuels ne peuvent être que synchrones"},
			{value: "b", label: "Les groupes virtuels peuvent être synchrones ou asynchrones"},
			{value: "c", label: "Les groupes virtuels sont inefficaces comparés aux groupes en présentiel"},
			{value: "d", label: "Les groupes virtuels ne sont pas considérés comme une forme d'intervention de groupe"},
		],
		explanation:
			"Le cours mentionne brièvement les groupes virtuels et précise qu'ils peuvent être synchrones ou asynchrones, représentant une évolution moderne des modalités d'intervention de groupe.",
	},
	{
		id: "q16",
		title: "16. Caractéristiques des groupes spécifiques",
		question: "Associez correctement les types de groupes à leurs caractéristiques:",
		type: "radio",
		options: [
			{value: "a", label: "Les groupes de croissance sont souvent liés à la thérapie intensive et visent à traiter des problèmes de santé mentale"},
			{value: "b", label: "Les groupes de socialisation visent à réduire l'isolement social et créent des situations de partage pour des personnes vivant un état ou une transition similaire"},
			{value: "c", label: "Les groupes de croissance sont principalement axés sur l'acquisition de connaissances spécifiques"},
			{value: "d", label: "Les groupes de socialisation sont essentiellement des groupes de thérapie pour personnes âgées"},
		],
		explanation:
			"Selon le cours, les groupes de socialisation visent à réduire l'isolement social et créent des situations de partage pour des personnes vivant un état ou une transition similaire, comme un groupe pour personnes âgées vivant en résidence. Les groupes de croissance sont souvent liés à la prévention, comme un groupe permettant à des adolescentes d'explorer des métiers à prédominance masculine.",
	},
	{
		id: "q17",
		title: "17. Habiletés pour la phase pré-groupe",
		question: "Quelles sont les habiletés importantes pour la phase pré-groupe?",
		type: "radio",
		options: [
			{value: "a", label: "Résoudre les conflits entre les membres du groupe"},
			{value: "b", label: "Savoir formuler le but d'un groupe, afin que ce soit intéressant pour des participants potentiels"},
			{value: "c", label: "Faire un bilan des activités réalisées"},
			{value: "d", label: "Formuler des règles et des normes pour le groupe"},
		],
		explanation:
			"D'après le cours, l'habileté principale requise dans la phase pré-groupe est de savoir formuler le but d'un groupe de façon à ce qu'il soit intéressant pour des participants potentiels. La formulation des règles et normes est associée à la phase de début, la résolution de conflits à la phase de travail, et le bilan à la phase de fin.",
	},
	{
		id: "q18",
		title: "18. Groupes d'entraide",
		question: "Concernant les groupes d'entraide (self-help groups) mentionnés dans le cours, quelle affirmation est correcte?",
		type: "radio",
		options: [
			{value: "a", label: "Ces groupes sont toujours sous la responsabilité directe de travailleurs sociaux"},
			{value: "b", label: "Ces groupes ne font pas partie du champ d'intérêt des travailleurs sociaux"},
			{value: "c", label: "Ces groupes, comme les AA, ont connu un important développement, et les travailleurs sociaux agissent souvent en soutien à ceux-ci"},
			{value: "d", label: "Ces groupes ont perdu en popularité avec le développement d'approches plus scientifiques"},
		],
		explanation:
			"Le cours mentionne que les groupes d'entraide (comme les AA) ont connu un important développement. Bien que ces groupes ne soient pas sous la responsabilité directe des travailleurs sociaux, ces derniers agissent souvent, à différents degrés, en soutien à ces groupes.",
	},
];

// Réponses correctes pour les questions à choix unique (radio)
export const correctRadioAnswers = {
	q1: "b",
	q4: "c",
	q6: "b",
	q11: "c",
	q12: "b",
	q15: "b",
	q16: "b",
	q17: "b",
	q18: "c",
};

// Réponses correctes pour les questions à choix multiples (checkbox)
export const correctCheckboxAnswers = {
	q2: ["a", "b", "c"],
	q3: ["a", "b", "c"],
	q5: ["a", "b", "c", "d", "e"],
	q7: ["a", "b", "c", "d"],
	q8: ["a", "b", "c", "d"],
	q9: ["a", "b", "c"],
	q10: ["a", "b", "c", "d"],
	q13: ["a", "b", "c"],
	q14: ["a", "b", "c"],
};
