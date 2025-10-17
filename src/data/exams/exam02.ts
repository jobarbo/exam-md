/**
 * Examen 02: la pensée critique, l'épistémologie et le paradigme
 * Ce fichier contient toutes les questions et réponses pour l'examen 02
 */

import type {Question, ExamData} from "../../types/exam";

export const exam02Questions: Question[] = [
	{
		id: "q1",
		title: "Question 1",
		question: "Selon Paul (1993), qu'est-ce que la pensée critique?",
		type: "radio",
		options: [
			{value: "a", label: "L'art de critiquer les autres"},
			{value: "b", label: "L'art de discipliner sa pensée de façon à obtenir le meilleur jugement possible"},
			{value: "c", label: "L'art de développer des opinions personnelles"},
			{value: "d", label: "L'art de suivre les normes académiques"},
		],
		explanation:
			"Paul (1993) définit la pensée critique comme étant 'l'art de discipliner sa pensée de façon à obtenir le meilleur jugement possible dans diverses situations'. (Source: Fondement_2/2.txt - Leçon 2, Paul 1993)",
	},
	{
		id: "q2",
		title: "Question 2",
		question: "Quelle est la différence entre le sens commun et les connaissances scientifiques?",
		type: "radio",
		options: [
			{value: "a", label: "Le sens commun est toujours faux"},
			{value: "b", label: "Le sens commun est un ensemble de croyances sans validation scientifique, tandis que les connaissances scientifiques sont abstraites, générales et vérifiables"},
			{value: "c", label: "Les connaissances scientifiques sont plus faciles à comprendre"},
			{value: "d", label: "Il n'y a pas de différence fondamentale"},
		],
		explanation:
			"Le sens commun est un ensemble de croyances ou opinions, jugements sans validation scientifique basés sur un point de vue subjectif, tandis que les connaissances scientifiques sont des connaissances abstraites, générales, exactes et vérifiables produites par une méthode rigoureuse. (Source: Fondement_2/2.txt - Section 1: La pensée critique)",
	},
	{
		id: "q3",
		title: "Question 3",
		question: "Quels sont les risques de ne pas avoir recours à une pensée critique en travail social?",
		type: "checkbox",
		options: [
			{value: "a", label: "Prolonger indûment des interventions"},
			{value: "b", label: "S'arrêter sur des causes non pertinentes"},
			{value: "c", label: "Choisir des méthodes inappropriées"},
			{value: "d", label: "Ne pas tenir compte du contexte"},
			{value: "e", label: "Tenir dans la dépendance les personnes qui consultent"},
			{value: "f", label: "Augmenter les budgets"},
		],
		explanation:
			"Les risques incluent: prolonger indûment des interventions, s'arrêter sur des causes non pertinentes, choisir des méthodes inappropriées, ne pas tenir compte du contexte, et tenir dans la dépendance les personnes qui consultent. Le plus grand danger est que la personne ne reçoive pas le service adéquat dont elle a besoin. (Source: Fondement_2/2.txt - Le rôle de la pensée critique dans la relation d'aide)",
	},
	{
		id: "q4",
		title: "Question 4",
		question: "Quelle est la différence entre une opinion personnelle et une opinion professionnelle?",
		type: "radio",
		options: [
			{value: "a", label: "Il n'y a pas de différence"},
			{value: "b", label: "L'opinion personnelle est subjective tandis que l'opinion professionnelle est bien documentée, fondée et liée par un cadre professionnel"},
			{value: "c", label: "L'opinion professionnelle est toujours correcte"},
			{value: "d", label: "L'opinion personnelle est plus valable"},
		],
		explanation:
			"Une opinion personnelle est le point de vue subjectif qui peut être appuyé scientifiquement ou non. Une opinion professionnelle est une opinion bien documentée et fondée qui représente notre capacité d'appliquer nos connaissances théoriques et cliniques à une situation particulière, liée par un cadre professionnel. (Source: Fondement_2/2.txt - Différence entre opinion personnelle et professionnelle)",
	},
	{
		id: "q5",
		title: "Question 5",
		question: "Quelles sont les trois formes de pensée critique?",
		type: "checkbox",
		options: [
			{value: "a", label: "La pensée critique comme produit"},
			{value: "b", label: "La pensée critique comme pratique"},
			{value: "c", label: "La pensée critique comme praxis"},
			{value: "d", label: "La pensée critique comme processus"},
			{value: "e", label: "La pensée critique comme protocole"},
		],
		explanation:
			"Les trois formes sont: 1) Comme produit (technique pour contrôler l'environnement), 2) Comme pratique (mettre l'idée en contexte et la relativiser), 3) Comme praxis (conscience critique menant à l'émancipation et l'autonomie - prévaut en travail social). (Source: Fondement_2/2.txt - 3 visions sur la pensée critique)",
	},
	{
		id: "q6",
		title: "Question 6",
		question: "Qu'est-ce qu'un concept?",
		type: "radio",
		options: [
			{value: "a", label: "Un objet physique mesurable"},
			{value: "b", label: "Une idée générale et abstraite qui permet de rattacher les perceptions et d'organiser les connaissances"},
			{value: "c", label: "Une théorie complète"},
			{value: "d", label: "Un fait empirique"},
		],
		explanation:
			"Un concept est une idée générale et abstraite que se fait l'esprit humain d'un objet de pensée (concret ou abstrait), qui permet de rattacher à ce même objet les diverses perceptions et d'en organiser les connaissances. C'est une construction de la pensée. (Source: Fondement_2/2.txt - Section 2: Concept, théorie, paradigme)",
	},
	{
		id: "q7",
		title: "Question 7",
		question: "Qu'est-ce qu'une théorie scientifique?",
		type: "radio",
		options: [
			{value: "a", label: "Une opinion bien argumentée"},
			{value: "b", label: "Un ensemble cohérent d'explications sur un sujet précis incluant des lois et hypothèses"},
			{value: "c", label: "Un simple concept"},
			{value: "d", label: "Une croyance populaire"},
		],
		explanation:
			"Une théorie scientifique est un ensemble cohérent d'explications, de notions ou d'idées sur un sujet précis. Elle inclut des lois et des hypothèses induites par l'accumulation de faits qui proviennent de l'observation ou de l'expérimentation. Son but est d'expliquer un ensemble de phénomènes. (Source: Fondement_2/2.txt - Théorie scientifique)",
	},
	{
		id: "q8",
		title: "Question 8",
		question: "Qu'est-ce qu'un paradigme?",
		type: "radio",
		options: [
			{value: "a", label: "Un simple modèle graphique"},
			{value: "b", label: "Une représentation du monde, une manière de voir les choses, un modèle cohérent dominant"},
			{value: "c", label: "Une méthode de recherche"},
			{value: "d", label: "Une théorie spécifique"},
		],
		explanation:
			"Un paradigme est une représentation du monde, une manière de voir les choses, un modèle cohérent qui repose sur un fondement défini et dominant dans une époque et contexte donnés. C'est un modèle mental qui filtre les perceptions et aide à comprendre le monde. (Source: Fondement_2/2.txt - Le paradigme)",
	},
	{
		id: "q9",
		title: "Question 9",
		question: "Qu'est-ce que l'épistémologie?",
		type: "radio",
		options: [
			{value: "a", label: "L'étude des maladies"},
			{value: "b", label: "La science des sciences, l'étude de la manière dont nous connaissons les choses"},
			{value: "c", label: "L'étude de l'histoire"},
			{value: "d", label: "L'étude de la psychologie"},
		],
		explanation:
			"L'épistémologie est la science des sciences. Elle étudie la manière dont nous connaissons les choses, la façon dont nous acquérons des connaissances sur le monde. C'est l'étude critique du développement des méthodes et des résultats des sciences. (Source: Fondement_2/2.txt - Épistémologie)",
	},
	{
		id: "q10",
		title: "Question 10",
		question: "Quelle est la principale différence entre l'épistémologie de l'objet et l'épistémologie du sujet?",
		type: "radio",
		options: [
			{value: "a", label: "L'épistémologie de l'objet voit la réalité comme objective et indépendante, tandis que l'épistémologie du sujet la voit comme subjective et dépendante des perceptions"},
			{value: "b", label: "Il n'y a pas de différence"},
			{value: "c", label: "L'épistémologie de l'objet est plus récente"},
			{value: "d", label: "L'épistémologie du sujet est uniquement pour la psychologie"},
		],
		explanation:
			"L'épistémologie de l'objet voit la réalité comme objective, existant indépendamment de nous, où l'intervenant est extérieur et agit 'sur' le client. L'épistémologie du sujet voit la réalité comme subjective, dépendante des perceptions, où l'intervenant fait partie de la situation et travaille 'avec' le client. (Source: Fondement_2/2.txt - Épistémologie de l'objet vs du sujet)",
	},
	{
		id: "q11",
		title: "Question 11",
		question: "Selon St-Amand, quelles sont les trois méthodes d'intervention qu'il identifie?",
		type: "checkbox",
		options: [
			{value: "a", label: "La méthode moulée (suit les croyances du réseau public)"},
			{value: "b", label: "La méthode anti-professionnelle"},
			{value: "c", label: "La méthode basée sur une conscience engagée"},
			{value: "d", label: "La méthode purement théorique"},
			{value: "e", label: "La méthode administrative"},
		],
		explanation:
			"St-Amand identifie trois pistes: 1) La méthode moulée (assume que les croyances du réseau public aident), 2) La méthode anti-professionnelle (regard critique sur les institutions), 3) Les méthodes basées sur une conscience engagée (passage d'une intervention neutre à engagée). (Source: St-Amand, 2003, p. 159-160 - Pour conclure)",
	},
	{
		id: "q12",
		title: "Question 12",
		question: "Selon St-Amand, quel est le danger de nommer les gens comme 'patients', 'cas' ou 'clients'?",
		type: "radio",
		options: [
			{value: "a", label: "Cela facilite l'intervention"},
			{value: "b", label: "Cela impose une distance thérapeutique et un rapport de domination"},
			{value: "c", label: "Cela n'a aucun impact"},
			{value: "d", label: "Cela améliore la relation d'aide"},
		],
		explanation:
			"Selon St-Amand, en désignant une personne comme 'cliente, patiente ou cas', on impose une distance thérapeutique et un rapport de domination entre le désignant (expert) et le désigné. Cela crée une relation inégalitaire plutôt qu'une relation de partenariat. (Source: St-Amand, 2003, p. 156 - Comment nomme-t-on les gens?)",
	},
	{
		id: "q13",
		title: "Question 13",
		question: "Quelles questions devrions-nous nous poser pour développer une pensée critique selon le cours?",
		type: "checkbox",
		options: [
			{value: "a", label: "Quel est le but de la réflexion?"},
			{value: "b", label: "À quelle question essaie-t-on de répondre?"},
			{value: "c", label: "À partir de quel point de vue se place-t-on?"},
			{value: "d", label: "Quelles sont les idées centrales émises?"},
			{value: "e", label: "Quelles sont les implications des conclusions?"},
			{value: "f", label: "Combien ça coûte?"},
		],
		explanation:
			"Les questions à se poser incluent: le but de la réflexion, la question à répondre, le point de vue adopté, les idées centrales, les croyances, les informations utilisées, l'interprétation, les conclusions et leurs implications. (Source: Fondement_2/2.txt - Questions pour y voir plus clair)",
	},
	{
		id: "q14",
		title: "Question 14",
		question: "Qu'est-ce qui caractérise les épistémologies émancipatoires?",
		type: "radio",
		options: [
			{value: "a", label: "Elles visent uniquement l'accumulation de connaissances"},
			{value: "b", label: "Elles se définissent par leur volonté de favoriser l'affranchissement de groupes opprimés"},
			{value: "c", label: "Elles rejettent toute forme de science"},
			{value: "d", label: "Elles sont neutres politiquement"},
		],
		explanation:
			"Les épistémologies émancipatoires se définissent par leur volonté de favoriser l'affranchissement de groupes dits opprimés. Leur but est de donner du pouvoir aux personnes accompagnées et de changer les structures oppressives. (Source: Fondement_2/2.txt - Les écoles émancipatoires, Leçon 3 p.11)",
	},
	{
		id: "q15",
		title: "Question 15",
		question: "Selon St-Amand, quelle est l'importance de prendre conscience des origines historiques oppressives du travail social?",
		type: "radio",
		options: [
			{value: "a", label: "Ce n'est pas important"},
			{value: "b", label: "Cela permet de remettre en question les pratiques actuelles et d'éviter de reproduire des formes d'oppression"},
			{value: "c", label: "Cela sert uniquement à critiquer le passé"},
			{value: "d", label: "Cela n'a aucun lien avec la pratique actuelle"},
		],
		explanation:
			"Prendre conscience des origines historiques oppressives (génocide culturel des Autochtones, psychiatrisation abusive, etc.) permet de remettre en question les pratiques actuelles et d'éviter de reproduire des formes d'oppression dans nos interventions. (Source: St-Amand, 2003, p. 145-147 - Illusions naïves)",
	},
	{
		id: "q16",
		title: "Question 16",
		question: "Quelle est la différence principale entre Jane Addams et Mary Richmond selon St-Amand?",
		type: "radio",
		options: [
			{value: "a", label: "Addams a une vision politique du service social, Richmond privilégie la médicalisation"},
			{value: "b", label: "Richmond est plus moderne qu'Addams"},
			{value: "c", label: "Addams rejette tout travail social"},
			{value: "d", label: "Il n'y a pas de différence"},
		],
		explanation:
			"Jane Addams (lauréate du prix Nobel) représente une vision politique du service social axée sur la justice sociale et le changement structurel. Mary Richmond privilégie une approche médicalisée et individualisée des problèmes sociaux, inspirée de la psychologie. (Source: St-Amand, 2003, p. 151 - Quelques crises et contradictions)",
	},
	{
		id: "q17",
		title: "Question 17",
		question: "Selon le cours, que privilégient les ressources alternatives et les groupes d'entraide?",
		type: "radio",
		options: [
			{value: "a", label: "La formation académique"},
			{value: "b", label: "L'expertise d'expérience comme point de départ à l'intervention"},
			{value: "c", label: "Les diplômes universitaires"},
			{value: "d", label: "Les protocoles standardisés"},
		],
		explanation:
			"Les ressources communautaires et les groupes d'entraide privilégient l'expertise d'expérience comme point de départ à l'intervention plutôt que la formation académique. La personne qui a vécu une situation est considérée comme experte. (Source: St-Amand, 2003, p. 156-157 - Le vécu, l'expérience ou la formation?)",
	},
	{
		id: "q18",
		title: "Question 18",
		question: "Qu'est-ce qui vient en premier: un paradigme ou une théorie?",
		type: "radio",
		options: [
			{value: "a", label: "La théorie vient toujours en premier"},
			{value: "b", label: "Le paradigme vient avant d'écrire une théorie"},
			{value: "c", label: "Ils émergent simultanément"},
			{value: "d", label: "Cela dépend du contexte"},
		],
		explanation:
			"Un paradigme vient avant d'écrire une théorie. Lorsque l'analyse et l'évaluation ont lieu, la théorie vient après le paradigme. Le paradigme fournit le cadre général dans lequel s'élaborent les théories. (Source: Fondement_2/2.txt - Différence entre paradigme et théorie, Willet 1996)",
	},
	{
		id: "q19",
		title: "Question 19",
		question: "Quelle est la principale différence entre le réalisme (Auguste Comte) et l'idéalisme?",
		type: "radio",
		options: [
			{value: "a", label: "Le réalisme considère que la réalité est observable en elle-même, l'idéalisme affirme qu'elle ne peut être analysable qu'à partir des idées que nous nous en faisons"},
			{value: "b", label: "Le réalisme est plus récent que l'idéalisme"},
			{value: "c", label: "L'idéalisme est uniquement pour la psychologie"},
			{value: "d", label: "Il n'y a pas de différence fondamentale"},
		],
		explanation:
			"Le réalisme (Auguste Comte, 1789-1857) considère que la réalité est observable en elle-même et que cette observation est suffisante pour tirer des conclusions à son sujet. L'idéalisme affirme au contraire que la réalité ne peut être observable ou analysable qu'à partir des idées ou des catégories que nous nous en faisons. (Source: Fondement_2/2.txt - Réalisme vs Idéalisme)",
	},
	{
		id: "q20",
		title: "Question 20",
		question: "Selon le cours, quelle attitude faut-il adopter pour avoir une pensée critique?",
		type: "checkbox",
		options: [
			{value: "a", label: "Tenir nos propres raisonnements à distance"},
			{value: "b", label: "Être conscient que tout processus de réflexion est complexe"},
			{value: "c", label: "Avoir de l'honnêteté intellectuelle"},
			{value: "d", label: "S'ouvrir aux idées différentes des nôtres"},
			{value: "e", label: "Rejeter toute forme d'autorité"},
		],
		explanation:
			"Pour développer une pensée critique, il faut: tenir nos propres raisonnements à distance, être conscient de la complexité, avoir de l'honnêteté intellectuelle (s'ouvrir aux idées différentes), et réfléchir en profondeur en évaluant les forces et limites des positions. (Source: Fondement_2/2.txt - Paul 1993, règles pour la pensée critique)",
	},
];

// Réponses correctes pour les questions à choix unique (radio)
export const correctRadioAnswers: Record<string, string> = {
	q1: "b",
	q2: "b",
	q4: "b",
	q6: "b",
	q7: "b",
	q8: "b",
	q9: "b",
	q10: "a",
	q12: "b",
	q15: "b",
	q16: "a",
	q17: "b",
	q18: "b",
	q19: "a",
};

// Réponses correctes pour les questions à choix multiples (checkbox)
export const correctCheckboxAnswers: Record<string, string[]> = {
	q3: ["a", "b", "c", "d", "e"],
	q5: ["a", "b", "c"],
	q11: ["a", "b", "c"],
	q13: ["a", "b", "c", "d", "e"],
	q20: ["a", "b", "c", "d"],
};
// Export complete exam data
export const exam02Data: ExamData = {
	questions: exam02Questions,
	correctRadioAnswers,
	correctCheckboxAnswers,
};
