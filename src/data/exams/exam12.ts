/**
 * Examen 12: Théorie générale des systèmes et analyse écosystémique
 * Ce fichier contient toutes les questions et réponses pour l'examen 12
 */

import type { Question, ExamData } from '../../types/exam';

export const exam12Questions: Question[] = [
	{
		id: "q1",
		title: "Question 1",
		question: "Qu'est-ce qu'un système selon la théorie générale des systèmes?",
		type: "radio",
		options: [
			{value: "a", label: "Un ensemble d'éléments en interaction constante, orientés vers un objectif et évoluant dans le temps"},
			{value: "b", label: "Un groupe d'individus"},
			{value: "c", label: "Une organisation"},
			{value: "d", label: "Une théorie économique"},
		],
		explanation:
			"Un système est défini comme un ensemble d'éléments en interaction constante, orientés vers un objectif et évoluant dans le temps. Il se différencie par rapport à l'environnement et aux autres systèmes grâce à ses frontières. (Source: Fondement_12/12.txt - Un système)",
	},
	{
		id: "q2",
		title: "Question 2",
		question: "Quels sont les postulats de base de la théorie générale des systèmes?",
		type: "checkbox",
		options: [
			{value: "a", label: "Principe de totalité et de non-sommativité"},
			{value: "b", label: "Rétroaction ou causalité circulaire"},
			{value: "c", label: "Autoréflexivité"},
			{value: "d", label: "Autorégulation et principe d'homéostasie"},
			{value: "e", label: "Frontières"},
			{value: "f", label: "Principe d'équifinalité"},
		],
		explanation:
			"Les postulats de base incluent: principe de totalité et de non-sommativité (le tout est plus que la somme des parties), rétroaction ou causalité circulaire, autoréflexivité (capacité de s'autoanalyser), autorégulation et principe d'homéostasie (tendance à se maintenir), frontières (systèmes ouverts/fermés), principe d'équifinalité (différentes voies peuvent mener à un même but). (Source: Fondement_12/12 - Lecon 8.txt - Les postulats de base de la TGS)",
	},
	{
		id: "q3",
		title: "Question 3",
		question: "Qu'est-ce que l'homéostasie?",
		type: "radio",
		options: [
			{value: "a", label: "Un système doit constamment chercher l'équilibre interne et l'équilibre avec son environnement"},
			{value: "b", label: "Un déséquilibre permanent"},
			{value: "c", label: "Un système fermé"},
			{value: "d", label: "Une théorie économique"},
		],
		explanation:
			"L'homéostasie est le principe selon lequel un système doit constamment chercher l'équilibre interne et l'équilibre avec son environnement. C'est la tendance du système à se maintenir tel qu'il est malgré les pressions extérieures. (Source: Fondement_12/12.txt - Un système)",
	},
	{
		id: "q4",
		title: "Question 4",
		question: "Qu'est-ce que l'entropie?",
		type: "radio",
		options: [
			{value: "a", label: "La tendance des systèmes au désordre, à la désorganisation et à la déstructuration ou à être emportés par le chaos"},
			{value: "b", label: "L'équilibre parfait"},
			{value: "c", label: "Un système fermé"},
			{value: "d", label: "Une théorie économique"},
		],
		explanation:
			"L'entropie est la tendance des systèmes au désordre, à la désorganisation et à la déstructuration ou à être emportés par le chaos. L'objectif principal d'un système est de survivre ou de surmonter le principe d'entropie. (Source: Fondement_12/12.txt - Un système)",
	},
	{
		id: "q5",
		title: "Question 5",
		question: "Quelle est la différence entre un système ouvert et un système fermé?",
		type: "radio",
		options: [
			{value: "a", label: "Le système ouvert échange de l'énergie, de la matière et de l'information avec son environnement, tandis que le système fermé n'en dépend pas"},
			{value: "b", label: "Ils sont identiques"},
			{value: "c", label: "Le système fermé est toujours meilleur"},
			{value: "d", label: "Il n'y a pas de différence"},
		],
		explanation:
			"Le système ouvert correspond principalement à tous les systèmes vivants, car ceux-ci ne peuvent jamais être totalement fermés. Il est en relation permanente avec son environnement et échange de l'énergie, de la matière et de l'information. Le système fermé, contrairement au système ouvert, ne dépend pas de son environnement pour se maintenir et n'échange ni énergie, ni matière, ni information avec son environnement. (Source: Fondement_12/12 - Lecon 8.txt - Frontières)",
	},
	{
		id: "q6",
		title: "Question 6",
		question: "Qu'est-ce que la rétroaction (feedback)?",
		type: "radio",
		options: [
			{value: "a", label: "L'information en retour sur l'état d'un processus à un moment donné de son déroulement, permettant l'ajustement de l'action"},
			{value: "b", label: "Une punition"},
			{value: "c", label: "Un système fermé"},
			{value: "d", label: "Une théorie économique"},
		],
		explanation:
			"La rétroaction ou causalité circulaire est l'information en retour sur l'état d'un processus à un moment donné de son déroulement. Elle permet l'ajustement de l'action. Il existe deux sortes de rétroaction: la rétroaction positive (facilite et amplifie le changement) et la rétroaction négative (se concentre sur l'ordre, la régulation, l'équilibre). (Source: Fondement_12/12.txt - Rétroaction ou causalité circulaire)",
	},
	{
		id: "q7",
		title: "Question 7",
		question: "Qu'est-ce que la cybernétique de deuxième ordre?",
		type: "radio",
		options: [
			{value: "a", label: "C'est donner une rétroaction à la rétroaction observée. Lorsque quelqu'un observe un système en interaction, la relation entre l'observateur et le système se transforme en un nouveau système"},
			{value: "b", label: "Un système fermé"},
			{value: "c", label: "Une théorie économique"},
			{value: "d", label: "La même chose que la cybernétique de premier ordre"},
		],
		explanation:
			"La cybernétique de deuxième ordre est 'donner une rétroaction à la rétroaction observée'. Lorsque quelqu'un observe un système en interaction, la relation entre l'observateur et le système se transforme en un nouveau système. Dans le second ordre, l'observateur et l'observé sont en relation et constituent un nouveau système. (Source: Fondement_12/12.txt - Cybernétique de deuxième ordre)",
	},
	{
		id: "q8",
		title: "Question 8",
		question: "Quels sont les axiomes de la communication selon Watzlawick, Beavin et Jackson?",
		type: "checkbox",
		options: [
			{value: "a", label: "Il est impossible de ne pas communiquer"},
			{value: "b", label: "La métacommunication"},
			{value: "c", label: "La communication digitale et analogique"},
			{value: "d", label: "La ponctuation des séquences de la communication"},
			{value: "e", label: "La communication peut être symétrique ou asymétrique"},
		],
		explanation:
			"Les axiomes de la communication sont: 1) Il est impossible de ne pas communiquer (tout comportement est communication), 2) La métacommunication (le message exprime quelque chose sur la relation), 3) La communication digitale et analogique (deux modes de communication), 4) La ponctuation des séquences de la communication, 5) La communication peut être symétrique ou asymétrique (complémentaire). (Source: Fondement_12/12 - Lecon 8.txt - Les principes de la communication)",
	},
	{
		id: "q9",
		title: "Question 9",
		question: "Qu'est-ce que la métacommunication?",
		type: "radio",
		options: [
			{value: "a", label: "Un processus qui permet d'échanger des informations à propos de la communication qui se déroule entre deux ou plusieurs personnes"},
			{value: "b", label: "Une communication digitale"},
			{value: "c", label: "Un système fermé"},
			{value: "d", label: "Une théorie économique"},
		],
		explanation:
			"La métacommunication peut être définie comme un processus qui permet d'échanger des informations à propos de la communication qui se déroule entre deux ou plusieurs personnes. Plus simplement, c'est l'action de communiquer sur la communication. (Source: Fondement_12/12 - Lecon 8.txt - La métacommunication)",
	},
	{
		id: "q10",
		title: "Question 10",
		question: "Quels sont les systèmes de l'écologie du développement humain selon Bronfenbrenner?",
		type: "checkbox",
		options: [
			{value: "a", label: "Ontosystème"},
			{value: "b", label: "Microsystème"},
			{value: "c", label: "Mésosystème"},
			{value: "d", label: "Exosystème"},
			{value: "e", label: "Macrosystème"},
			{value: "f", label: "Chronosystème"},
		],
		explanation:
			"Les six niveaux de système selon Bronfenbrenner sont: 1) Ontosystème (caractéristiques innées ou acquises de l'individu), 2) Microsystème (milieux de vie immédiat: famille, école, garderie), 3) Mésosystème (interactions entre les différents microsystèmes), 4) Exosystème (structures sociales auxquelles l'individu ne participe pas directement mais qui ont un impact), 5) Macrosystème (normes, valeurs et idéologies d'une culture), 6) Chronosystème (changement dans le temps et dans l'espace). (Source: Fondement_12/12.txt - Chronosystème de bronfenbrenner)",
	},
	{
		id: "q11",
		title: "Question 11",
		question: "Qu'est-ce que le microsystème selon Bronfenbrenner?",
		type: "radio",
		options: [
			{value: "a", label: "Lieu ou contexte immédiat dans lequel l'individu a une participation active et directe (ex: Famille, école, club sportif)"},
			{value: "b", label: "Le système politique"},
			{value: "c", label: "Le système économique"},
			{value: "d", label: "Le système culturel"},
		],
		explanation:
			"Le microsystème est le lieu ou contexte immédiat dans lequel l'individu a une participation active et directe. Exemples: Famille, école, club sportif. On réfère aux lieux physiques, mais aussi aux personnes et objets qu'ils contiennent, aux activités et rôles qui s'y déroulent. (Source: Fondement_12/12.txt - Micro système)",
	},
	{
		id: "q12",
		title: "Question 12",
		question: "Qu'est-ce que le mésosystème selon Bronfenbrenner?",
		type: "radio",
		options: [
			{value: "a", label: "Ensemble des liens et processus qui prennent place entre deux ou plusieurs microsystèmes"},
			{value: "b", label: "Le système politique"},
			{value: "c", label: "Le système économique"},
			{value: "d", label: "Le système culturel"},
		],
		explanation:
			"Le mésosystème est l'ensemble des liens et processus qui prennent place entre deux ou plusieurs microsystèmes. Exemples: Les échanges entre les parents et les enseignants, la compatibilité des horaires, la communauté des valeurs. (Source: Fondement_12/12.txt - Méso système)",
	},
	{
		id: "q13",
		title: "Question 13",
		question: "Qu'est-ce que l'exosystème selon Bronfenbrenner?",
		type: "radio",
		options: [
			{value: "a", label: "Les institutions ou structures sociales auxquelles l'individu ne participe pas, mais dont les actions ont un impact direct sur la vie de cette personne"},
			{value: "b", label: "Le système politique"},
			{value: "c", label: "Le système économique"},
			{value: "d", label: "Le système culturel"},
		],
		explanation:
			"L'exosystème comprend les institutions ou structures sociales auxquelles l'individu ne participe pas, mais dont les actions ont un impact direct sur la vie de cette personne. Exemples: le conseil de l'université, l'Assemblée nationale, le conseil municipal. (Source: Fondement_12/12.txt - Exo système)",
	},
	{
		id: "q14",
		title: "Question 14",
		question: "Qu'est-ce que le macrosystème selon Bronfenbrenner?",
		type: "radio",
		options: [
			{value: "a", label: "Ensemble des croyances, des valeurs, des idéologies partagées par une communauté"},
			{value: "b", label: "Le système politique"},
			{value: "c", label: "Le système économique"},
			{value: "d", label: "Le système familial"},
		],
		explanation:
			"Le macrosystème est l'ensemble des croyances, des valeurs, des idéologies partagées par une communauté. Elles constituent en quelque sorte le cadre de référence culturelle ou sous-culturelle qui dicte les règles de conduite des individus, les relations entre les personnes, les attitudes, les droits et les devoirs. (Source: Fondement_12/12.txt - Macro système)",
	},
	{
		id: "q15",
		title: "Question 15",
		question: "Qu'est-ce que le chronosystème selon Bronfenbrenner?",
		type: "radio",
		options: [
			{value: "a", label: "Englobe le système du temps et des événements: il comprend la chronologie des événements vécus par les individus ou les familles"},
			{value: "b", label: "Le système politique"},
			{value: "c", label: "Le système économique"},
			{value: "d", label: "Le système culturel"},
		],
		explanation:
			"Le chronosystème englobe le système du temps et des événements. Il comprend la chronologie des événements vécus par les individus ou les familles, les tâches développementales auxquelles ils sont confrontés et l'influence de ces changements et des continuités sur leur développement respectif. Il permet donc une analyse évolutive de la situation d'un individu ou d'une famille. (Source: Fondement_12/12.txt - Chrono système)",
	},
	{
		id: "q16",
		title: "Question 16",
		question: "Qui est considéré comme le père de la théorie générale des systèmes?",
		type: "radio",
		options: [
			{value: "a", label: "Ludwig von Bertalanffy"},
			{value: "b", label: "Bronfenbrenner"},
			{value: "c", label: "Watzlawick"},
			{value: "d", label: "Bateson"},
		],
		explanation:
			"Ludwig von Bertalanffy (1901-1972), biologiste autrichien, est considéré comme le père de la théorie générale des systèmes. Il commence à s'intéresser au concept de système dans les années 1920 et publie la Théorie générale des systèmes dans sa forme définitive en 1968. (Source: Fondement_12/12 - Lecon 8.txt - Historique)",
	},
	{
		id: "q17",
		title: "Question 17",
		question: "Quels sont les principes communs des modèles écologiques?",
		type: "checkbox",
		options: [
			{value: "a", label: "L'interdépendance"},
			{value: "b", label: "L'adaptation"},
			{value: "c", label: "Le recyclage des ressources"},
			{value: "d", label: "La succession"},
		],
		explanation:
			"Les principes communs des modèles écologiques sont: 1) L'interdépendance (tout changement dans l'une des composantes influence les autres), 2) L'adaptation (pour survivre tout organisme doit s'adapter aux changements environnementaux), 3) Le recyclage des ressources (tout changement efficace doit tabler sur les ressources qui existent déjà), 4) La succession (tout changement est une suite ordonnée de modifications prévisibles). (Source: Fondement_12/12.txt - Principes communs)",
	},
	{
		id: "q18",
		title: "Question 18",
		question: "Qu'est-ce que l'équifinalité?",
		type: "radio",
		options: [
			{value: "a", label: "Double possibilité: des conditions initiales différentes peuvent produire un même résultat, et il existe également différentes manières d'atteindre un même but"},
			{value: "b", label: "Un système fermé"},
			{value: "c", label: "Une théorie économique"},
			{value: "d", label: "L'équilibre parfait"},
		],
		explanation:
			"Le principe d'équifinalité indique 'que différentes voies peuvent mener à un même but et que différents buts peuvent être atteints par une même voie'. Il s'agit donc de l'habileté des membres d'un système à atteindre les mêmes objectifs en passant par des chemins différents. (Source: Fondement_12/12.txt - Equifinalité)",
	},
	{
		id: "q19",
		title: "Question 19",
		question: "Qu'est-ce que la théorie du champ de Kurt Lewin?",
		type: "radio",
		options: [
			{value: "a", label: "Le comportement d'un individu est déterminé par la situation individuelle totale, entière. Le champ est défini comme 'la totalité des faits coexistants qui sont conçus comme mutuellement interdépendants'"},
			{value: "b", label: "Un système fermé"},
			{value: "c", label: "Une théorie économique"},
			{value: "d", label: "L'équilibre parfait"},
		],
		explanation:
			"La théorie du champ de Lewin établit que le comportement d'un individu est déterminé par la situation individuelle totale, entière. Le champ est défini comme 'la totalité des faits coexistants qui sont conçus comme mutuellement interdépendants'. On ne peut percevoir l'individu de manière adéquate sans analyser sa réalité actuelle en tenant compte de son histoire personnelle et des systèmes avec lesquels il interagit. (Source: Fondement_12/12 - Lecon 8.txt - L'écologie psychologique de Kurt Lewin)",
	},
	{
		id: "q20",
		title: "Question 20",
		question: "Qu'est-ce que l'ontosystème selon Bronfenbrenner?",
		type: "radio",
		options: [
			{value: "a", label: "L'organisme lui-même. Ses caractéristiques innées ou acquises, aux plans physique, émotionnel, intellectuel et comportemental"},
			{value: "b", label: "Le système politique"},
			{value: "c", label: "Le système économique"},
			{value: "d", label: "Le système culturel"},
		],
		explanation:
			"L'ontosystème est l'organisme lui-même. Il comprend ses caractéristiques innées ou acquises, aux plans physique, émotionnel, intellectuel et comportemental. Il réfère aussi aux influences découlant du passage du temps. Exemple: Effets de l'expérience sur le comportement ultérieur. (Source: Fondement_12/12.txt - Onto système)",
	},
];

// Réponses correctes pour les questions à choix unique (radio)
export const correctRadioAnswers: Record<string, string> = {
	q1: "a",
	q3: "a",
	q4: "a",
	q5: "a",
	q6: "a",
	q7: "a",
	q9: "a",
	q11: "a",
	q12: "a",
	q13: "a",
	q14: "a",
	q15: "a",
	q16: "a",
	q18: "a",
	q19: "a",
	q20: "a",
};

// Réponses correctes pour les questions à choix multiples (checkbox)
export const correctCheckboxAnswers: Record<string, string[]> = {
	q2: ["a", "b", "c", "d", "e", "f"],
	q8: ["a", "b", "c", "d", "e"],
	q10: ["a", "b", "c", "d", "e", "f"],
	q17: ["a", "b", "c", "d"],
};

// Export complete exam data
export const exam12Data: ExamData = {
	questions: exam12Questions,
	correctRadioAnswers,
	correctCheckboxAnswers,
};

