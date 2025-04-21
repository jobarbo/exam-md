// Ce fichier contient les données pour l'examen sur le chapitre 11
// Il sera importé dynamiquement par le composant ExamForm

export const exam11Questions = [
	{
		id: "q1",
		title: "1. Fonction principale du travailleur social",
		question: "Quelle est la fonction principale du travailleur social dans le modèle d'intervention de groupe?",
		type: "radio",
		options: [
			{value: "a", label: "Diriger les membres du groupe avec autorité"},
			{value: "b", label: "Faciliter les interactions entre les membres du groupe"},
			{value: "c", label: "Fournir des solutions directes aux problèmes individuels"},
			{value: "d", label: "Évaluer les performances des membres du groupe"},
		],
		explanation:
			"Le travailleur social agit principalement comme facilitateur des interactions entre les membres du groupe, encourageant le partage d'expériences et l'aide mutuelle plutôt que d'imposer des solutions ou de diriger avec autorité.",
	},
	{
		id: "q2",
		title: "2. Étapes de formation d'un groupe",
		question: "Quelles sont les étapes généralement reconnues dans la formation d'un groupe?",
		type: "checkbox",
		options: [
			{value: "a", label: "Phase d'orientation ou de formation"},
			{value: "b", label: "Phase de conflit ou de confrontation"},
			{value: "c", label: "Phase de cohésion ou de normalisation"},
			{value: "d", label: "Phase de travail ou de production"},
			{value: "e", label: "Phase de fin ou de dissolution"},
		],
		explanation:
			"Le processus de formation d'un groupe comprend généralement ces cinq phases: orientation (où les membres se rencontrent et établissent des premiers liens), conflit (où émergent des désaccords), cohésion (où le groupe développe une identité commune), travail (où le groupe est productif), et fin (où le groupe se termine).",
	},
	{
		id: "q3",
		title: "3. Types de leadership",
		question: "Quels sont les trois types classiques de leadership selon les études de groupe?",
		type: "checkbox",
		options: [
			{value: "a", label: "Leadership autocratique"},
			{value: "b", label: "Leadership démocratique"},
			{value: "c", label: "Leadership laissez-faire"},
			{value: "d", label: "Leadership transformationnel"},
			{value: "e", label: "Leadership transactionnel"},
		],
		explanation:
			"Les trois types classiques de leadership sont: autocratique (le leader prend toutes les décisions), démocratique (le leader implique les membres dans les décisions), et laissez-faire (le leader intervient peu et laisse le groupe s'autoréguler).",
	},
	{
		id: "q4",
		title: "4. Cohésion de groupe",
		question: "Qu'est-ce que la cohésion de groupe représente?",
		type: "radio",
		options: [
			{value: "a", label: "L'uniformité des opinions dans le groupe"},
			{value: "b", label: "La force des liens qui unissent les membres et leur attachement au groupe"},
			{value: "c", label: "L'absence de conflits dans le groupe"},
			{value: "d", label: "La capacité du groupe à imposer ses règles à tous les membres"},
		],
		explanation:
			"La cohésion de groupe fait référence à la force des liens entre les membres et leur sentiment d'appartenance au groupe. Un groupe cohésif n'est pas nécessairement sans conflits ou avec des opinions uniformes, mais les membres se sentent liés les uns aux autres et attachés au groupe.",
	},
	{
		id: "q5",
		title: "5. Rôles dans un groupe",
		question: "Quels types de rôles peut-on observer dans un groupe?",
		type: "checkbox",
		options: [
			{value: "a", label: "Rôles liés à la tâche (ex: initiateur, chercheur d'informations)"},
			{value: "b", label: "Rôles de maintien (ex: harmonisateur, facilitateur)"},
			{value: "c", label: "Rôles individuels (ex: bloqueur, dominateur)"},
			{value: "d", label: "Rôles formels (ex: président, secrétaire)"},
			{value: "e", label: "Rôles informels (ex: bouc émissaire, clown)"},
		],
		explanation:
			"Dans un groupe, on peut observer différents types de rôles: ceux liés à la tâche qui aident le groupe à atteindre ses objectifs, ceux de maintien qui contribuent à l'harmonie du groupe, les rôles individuels qui satisfont des besoins personnels (parfois au détriment du groupe), ainsi que des rôles formels (officiellement assignés) et informels (qui émergent naturellement).",
	},
	{
		id: "q6",
		title: "6. Normes de groupe",
		question: "Que sont les normes dans un groupe?",
		type: "radio",
		options: [
			{value: "a", label: "Des règles explicites imposées par le travailleur social"},
			{value: "b", label: "Des standards de comportement acceptables qui émergent dans le groupe"},
			{value: "c", label: "Des objectifs mesurables pour évaluer la performance du groupe"},
			{value: "d", label: "Des sanctions pour punir les comportements déviants"},
		],
		explanation:
			"Les normes sont des standards de comportement qui se développent au sein du groupe et définissent ce qui est acceptable ou attendu des membres. Ces normes peuvent être explicites (clairement énoncées) ou implicites (tacites mais comprises par tous).",
	},
	{
		id: "q7",
		title: "7. Communication dans le groupe",
		question: "Quels éléments sont importants pour une communication efficace dans un groupe?",
		type: "checkbox",
		options: [
			{value: "a", label: "Écoute active"},
			{value: "b", label: "Feedback constructif"},
			{value: "c", label: "Communication non-verbale"},
			{value: "d", label: "Absence de désaccords"},
			{value: "e", label: "Structure de communication ouverte"},
		],
		explanation:
			"Une communication efficace dans un groupe repose sur l'écoute active (être attentif aux autres), le feedback constructif (retours bienveillants et utiles), l'attention à la communication non-verbale, et une structure de communication ouverte où tous peuvent s'exprimer. L'absence de désaccords n'est pas un critère d'efficacité, car les désaccords constructifs peuvent être bénéfiques.",
	},
	{
		id: "q8",
		title: "8. Prise de décision en groupe",
		question: "Quelles méthodes peuvent être utilisées pour la prise de décision en groupe?",
		type: "checkbox",
		options: [
			{value: "a", label: "Décision par autorité (le leader décide)"},
			{value: "b", label: "Décision par majorité (vote)"},
			{value: "c", label: "Décision par consensus"},
			{value: "d", label: "Décision par expert (la personne la plus compétente décide)"},
			{value: "e", label: "Décision par compromis"},
		],
		explanation:
			"Les groupes peuvent prendre des décisions de différentes manières: par autorité (le leader décide seul), par majorité (vote), par consensus (tous s'accordent), par expertise (la personne la plus compétente sur le sujet décide), ou par compromis (chacun cède un peu pour trouver un terrain d'entente).",
	},
	{
		id: "q9",
		title: "9. Facteurs influençant la dynamique de groupe",
		question: "Quels facteurs peuvent influencer la dynamique d'un groupe?",
		type: "checkbox",
		options: [
			{value: "a", label: "La taille du groupe"},
			{value: "b", label: "La composition du groupe (diversité, caractéristiques des membres)"},
			{value: "c", label: "Le contexte social et culturel"},
			{value: "d", label: "Les objectifs du groupe"},
			{value: "e", label: "Le style de leadership"},
		],
		explanation:
			"De nombreux facteurs influencent la dynamique d'un groupe, notamment sa taille (les grands groupes fonctionnent différemment des petits), sa composition (diversité, caractéristiques des membres), le contexte social et culturel, les objectifs poursuivis, et le style de leadership adopté.",
	},
	{
		id: "q10",
		title: "10. Conflits dans un groupe",
		question: "Quelle affirmation concernant les conflits dans un groupe est la plus exacte?",
		type: "radio",
		options: [
			{value: "a", label: "Les conflits doivent toujours être évités car ils sont néfastes pour le groupe"},
			{value: "b", label: "Les conflits sont toujours bénéfiques car ils stimulent la créativité"},
			{value: "c", label: "Certains conflits peuvent être constructifs s'ils sont bien gérés"},
			{value: "d", label: "Les conflits sont toujours le signe d'un échec du leadership"},
		],
		explanation:
			"Les conflits ne sont pas nécessairement négatifs. Bien que certains conflits puissent être destructeurs, d'autres peuvent être constructifs et conduire à de meilleures solutions, à condition qu'ils soient bien gérés et centrés sur les idées plutôt que sur les personnes.",
	},
	{
		id: "q11",
		title: "11. Pensée de groupe (groupthink)",
		question: "Qu'est-ce que le phénomène de 'pensée de groupe' (groupthink)?",
		type: "radio",
		options: [
			{value: "a", label: "Une méthode efficace de brainstorming en groupe"},
			{value: "b", label: "La tendance d'un groupe à valoriser le consensus au détriment de la pensée critique"},
			{value: "c", label: "La capacité d'un groupe à résoudre des problèmes plus efficacement que des individus isolés"},
			{value: "d", label: "L'émergence naturelle d'une intelligence collective supérieure"},
		],
		explanation:
			"La 'pensée de groupe' est un phénomène où le désir de conformité et d'harmonie dans un groupe conduit à une prise de décision irrationnelle ou dysfonctionnelle. Les membres cherchent tellement le consensus qu'ils suppriment leurs doutes, limitent la pensée critique et ignorent les alternatives.",
	},
	{
		id: "q12",
		title: "12. Fonctions du travailleur social en groupe",
		question: "Quelles fonctions le travailleur social peut-il remplir dans un groupe?",
		type: "checkbox",
		options: [
			{value: "a", label: "Faciliter la communication entre les membres"},
			{value: "b", label: "Encourager la participation de tous"},
			{value: "c", label: "Gérer les conflits"},
			{value: "d", label: "Établir et maintenir un climat de confiance"},
			{value: "e", label: "Fournir les réponses et solutions aux problèmes du groupe"},
		],
		explanation:
			"Le travailleur social remplit plusieurs fonctions dans un groupe: faciliter la communication, encourager la participation, gérer constructivement les conflits, et établir un climat de confiance. En revanche, son rôle n'est généralement pas de fournir des réponses toutes faites, mais plutôt d'aider le groupe à trouver ses propres solutions.",
	},
	{
		id: "q13",
		title: "13. Groupes en ligne",
		question: "Concernant les groupes en ligne, quelle affirmation est la plus correcte?",
		type: "radio",
		options: [
			{value: "a", label: "Les groupes en ligne ne peuvent pas développer de cohésion significative"},
			{value: "b", label: "Les groupes en ligne fonctionnent exactement comme les groupes en présentiel"},
			{value: "c", label: "Les groupes en ligne ont leurs propres dynamiques qui diffèrent parfois des groupes en présentiel"},
			{value: "d", label: "Les groupes en ligne sont toujours plus efficaces que les groupes en présentiel"},
		],
		explanation:
			"Les groupes en ligne développent leurs propres dynamiques qui peuvent différer des groupes en présentiel. Ils peuvent effectivement développer de la cohésion, mais les modes d'interaction, de communication et de développement du groupe peuvent suivre des patterns différents de ceux observés en présentiel.",
	},
	{
		id: "q14",
		title: "14. Évaluation d'un groupe",
		question: "Quels aspects peuvent être évalués dans un groupe?",
		type: "checkbox",
		options: [
			{value: "a", label: "L'atteinte des objectifs du groupe"},
			{value: "b", label: "La satisfaction des membres"},
			{value: "c", label: "Les processus de groupe (communication, prise de décision, etc.)"},
			{value: "d", label: "L'évolution des membres individuellement"},
			{value: "e", label: "L'impact du groupe sur son environnement"},
		],
		explanation:
			"L'évaluation d'un groupe peut porter sur différents aspects: l'atteinte des objectifs fixés, la satisfaction des membres par rapport à leur expérience, la qualité des processus de groupe, l'évolution de chaque membre, et l'impact que le groupe a pu avoir sur son environnement ou sa communauté.",
	},
	{
		id: "q15",
		title: "15. Confidentialité dans un groupe",
		question: "Concernant la confidentialité dans un groupe, quelle est l'affirmation la plus exacte?",
		type: "radio",
		options: [
			{value: "a", label: "La confidentialité n'est pas un enjeu dans les groupes car tout est partagé"},
			{value: "b", label: "La confidentialité est un principe absolu qui ne souffre aucune exception"},
			{value: "c", label: "La confidentialité doit être clairement définie et ses limites expliquées aux membres"},
			{value: "d", label: "La confidentialité est uniquement de la responsabilité du travailleur social"},
		],
		explanation:
			"La confidentialité est un principe important dans les groupes, mais elle a des limites (par exemple, l'obligation de signalement en cas de danger). Ces règles et limites doivent être clairement expliquées aux membres dès le début. La confidentialité est une responsabilité partagée par tous les membres du groupe, pas seulement par le travailleur social.",
	},
];

// Réponses correctes pour les questions à choix unique (radio)
export const correctRadioAnswers = {
	q1: "b",
	q4: "b",
	q6: "b",
	q10: "c",
	q11: "b",
	q13: "c",
	q15: "c",
};

// Réponses correctes pour les questions à choix multiples (checkbox)
export const correctCheckboxAnswers = {
	q2: ["a", "b", "c", "d", "e"],
	q3: ["a", "b", "c"],
	q5: ["a", "b", "c", "d", "e"],
	q7: ["a", "b", "c", "e"],
	q8: ["a", "b", "c", "d", "e"],
	q9: ["a", "b", "c", "d", "e"],
	q12: ["a", "b", "c", "d"],
	q14: ["a", "b", "c", "d", "e"],
};
