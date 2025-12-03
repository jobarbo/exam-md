/**
 * Examen 13: Théorie de l'attachement
 * Ce fichier contient toutes les questions et réponses pour l'examen 13
 */

import type { Question, ExamData } from '../../types/exam';

export const exam13Questions: Question[] = [
	{
		id: "q1",
		title: "Question 1",
		question: "Qui a développé la théorie de l'attachement en 1958?",
		type: "radio",
		options: [
			{value: "a", label: "John Bowlby"},
			{value: "b", label: "Mary Ainsworth"},
			{value: "c", label: "Sigmund Freud"},
			{value: "d", label: "Jean Piaget"},
		],
		explanation:
			"La thèse, maintenant classique, développée par John Bowlby en 1958, lors de sa première formulation de la théorie de l'attachement, est que l'attachement du bébé à sa figure d'attachement a pour base un équipement comportemental constitué par un nombre déterminé de «réponses instinctives». (Source: Fondement_13/13 - Tereno.txt)",
	},
	{
		id: "q2",
		title: "Question 2",
		question: "Quelles sont les cinq réponses instinctives identifiées par Bowlby qui contribuent au développement de l'attachement?",
		type: "checkbox",
		options: [
			{value: "a", label: "Sucer"},
			{value: "b", label: "Attraper"},
			{value: "c", label: "Suivre (comportements de proximité)"},
			{value: "d", label: "Pleurer (comportements de signalisation)"},
			{value: "e", label: "Sourire (comportements de signalisation)"},
			{value: "f", label: "Manger"},
		],
		explanation:
			"Bowlby a identifié cinq de ces réponses, qui apportent une contribution spécifique au développement de l'attachement de l'enfant: sucer, attraper, suivre (comportements de proximité), pleurer et sourire (comportements de signalisation). (Source: Fondement_13/13 - Tereno.txt)",
	},
	{
		id: "q3",
		title: "Question 3",
		question: "Qu'est-ce que le comportement d'attachement selon Bowlby?",
		type: "radio",
		options: [
			{value: "a", label: "Une forme de comportement, simple ou organisé, qui aboutit à la recherche ou au maintien de la proximité à un individu différencié et préféré"},
			{value: "b", label: "Un comportement uniquement instinctif"},
			{value: "c", label: "Un comportement acquis uniquement par l'apprentissage"},
			{value: "d", label: "Un comportement pathologique"},
		],
		explanation:
			"Le comportement d'attachement, dans ce sens, est conçu comme une forme de comportement, simple ou organisé, qui aboutit à la recherche ou au maintien de la proximité à un individu différencié et préféré. (Source: Fondement_13/13 - Tereno.txt)",
	},
	{
		id: "q4",
		title: "Question 4",
		question: "Qu'est-ce que le caregiving role?",
		type: "radio",
		options: [
			{value: "a", label: "Le comportement symétrique du comportement d'attachement, avec une fonction complémentaire de protéger l'individu attaché, celui de prodiguer les soins"},
			{value: "b", label: "Le comportement de l'enfant"},
			{value: "c", label: "Un comportement pathologique"},
			{value: "d", label: "Un type d'attachement insécure"},
		],
		explanation:
			"Le comportement symétrique du comportement d'attachement, avec une fonction complémentaire de protéger l'individu attaché, est celui de prodiguer les soins (c.-à-d.: caregiving role). Tel est le rôle du caregiver ou d'un autre adulte. (Source: Fondement_13/13 - Tereno.txt)",
	},
	{
		id: "q5",
		title: "Question 5",
		question: "Quelles sont les quatre phases du développement de l'attachement selon Bowlby?",
		type: "checkbox",
		options: [
			{value: "a", label: "Phase I – Orientation et signaux avec une discrimination limitée des figures (8 à 12 semaines)"},
			{value: "b", label: "Phase II – Orientation et signaux dirigés vers une (ou plusieurs) figure(s) différenciée(s) (12 à 24 semaines)"},
			{value: "c", label: "Phase III – Maintien de la proximité avec une figure différenciée par locomotion et d'autres signaux (6 à 36 mois)"},
			{value: "d", label: "Phase IV – Formation d'un partenariat réciproque corrigé quant au but (après 36 mois)"},
			{value: "e", label: "Phase V – Indépendance totale"},
		],
		explanation:
			"Bowlby a postulé que le système de développement de l'attachement se construit en quatre phases, les trois premières se déroulant durant la première année de vie et la quatrième commençant autour du troisième anniversaire de l'enfant. (Source: Fondement_13/13 - Tereno.txt)",
	},
	{
		id: "q6",
		title: "Question 6",
		question: "Qu'est-ce que la base de sécurité selon Ainsworth?",
		type: "radio",
		options: [
			{value: "a", label: "Le fait pour la figure d'attachement de représenter un support à partir duquel le bébé peut explorer le monde avec confiance"},
			{value: "b", label: "Un type d'attachement insécure"},
			{value: "c", label: "Un comportement pathologique"},
			{value: "d", label: "Une phase du développement"},
		],
		explanation:
			"La notion de base de sécurité désigne le fait pour la figure d'attachement de représenter un support à partir duquel le bébé peut explorer le monde avec confiance. La perception intérieure d'une relation sécure avec la figure d'attachement fonctionne comme un ancrage qui permet au bébé d'activer son système d'exploration. (Source: Fondement_13/13 - Tereno.txt)",
	},
	{
		id: "q7",
		title: "Question 7",
		question: "Qu'est-ce que la Situation Etrange?",
		type: "radio",
		options: [
			{value: "a", label: "Un procédé de laboratoire conçu pour évaluer l'organisation de l'attachement et le comportement exploratoire dans un contexte non familier et générateur d'un niveau modéré de stress"},
			{value: "b", label: "Un type d'attachement"},
			{value: "c", label: "Une théorie"},
			{value: "d", label: "Une phase du développement"},
		],
		explanation:
			"La Situation Etrange consiste en une série de huit épisodes, qui incluent des séparations et des réunions entre l'enfant et sa figure d'attachement, ainsi que l'introduction d'un adulte étranger dans la pièce d'observation. Elle a été développée par Mary Ainsworth et ses collaborateurs. (Source: Fondement_13/13 - Tereno.txt)",
	},
	{
		id: "q8",
		title: "Question 8",
		question: "Quels sont les quatre patterns d'attachement identifiés?",
		type: "checkbox",
		options: [
			{value: "a", label: "Groupe A: attachement insécure évitant"},
			{value: "b", label: "Groupe B: attachement sécure"},
			{value: "c", label: "Groupe C: attachement insécure ambivalent ou résistant"},
			{value: "d", label: "Groupe D: attachement désorganisé/désorienté"},
			{value: "e", label: "Groupe E: attachement pathologique"},
		],
		explanation:
			"Les enfants sont classés dans une de ces quatre catégories: groupe A: attachement insécure évitant; groupe B: attachement sécure; groupe C: attachement insécure ambivalent ou résistant (Ainsworth, et al., 1978); ou groupe D: attachement désorganisé/désorienté (Main et Solomon, 1990). (Source: Fondement_13/13 - Tereno.txt)",
	},
	{
		id: "q9",
		title: "Question 9",
		question: "Qu'est-ce que l'attachement sécure?",
		type: "radio",
		options: [
			{value: "a", label: "Un attachement caractérisé par l'utilisation active et la confiance de l'enfant envers la figure d'attachement pour réguler ses émotions"},
			{value: "b", label: "Un attachement pathologique"},
			{value: "c", label: "Un attachement absent"},
			{value: "d", label: "Un attachement temporaire"},
		],
		explanation:
			"Dans la Situation Etrange, un attachement sécure se reflète par l'utilisation active et la confiance de l'enfant envers la figure d'attachement pour réguler ses émotions. Ces enfants se laissent facilement aller à l'exploration quand ils sont en présence de cette figure d'attachement. (Source: Fondement_13/13 - Tereno.txt)",
	},
	{
		id: "q10",
		title: "Question 10",
		question: "Qu'est-ce que l'attachement désorganisé/désorienté?",
		type: "radio",
		options: [
			{value: "a", label: "Un pattern caractérisé par une série de réponses comportementales indirectes ou mal dirigées, dans le contexte de la Situation Etrange"},
			{value: "b", label: "Un attachement sécure"},
			{value: "c", label: "Un attachement évitant"},
			{value: "d", label: "Un attachement résistant"},
		],
		explanation:
			"Le groupe de bébés avec un attachement désorganisé/désorienté met en évidence une série de réponses comportementales indirectes ou mal dirigées. Main et Salomon (1990) ont identifié des signaux de désorganisation: manifestations séquentielles et/ou contradictoires de comportements, mouvements non dirigés, stéréotypies, expressions de stupéfaction, et expressions d'appréhension et de peur relativement à la figure d'attachement. (Source: Fondement_13/13 - Tereno.txt)",
	},
	{
		id: "q11",
		title: "Question 11",
		question: "Quels comportements maternels sont associés à l'attachement sécure selon Ainsworth?",
		type: "checkbox",
		options: [
			{value: "a", label: "Contact physique fréquent et soutenu entre le bébé et sa mère, spécialement pendant les six premiers mois"},
			{value: "b", label: "Sensibilité maternelle aux signaux du bébé, capacité à gérer ses interventions en harmonie avec les rythmes du bébé"},
			{value: "c", label: "Une ambiance contrôlée et prévisible, qui permet au bébé d'inférer les conséquences de ses propres actions"},
			{value: "d", label: "Plaisir mutuel ressenti par la mère et le bébé"},
			{value: "e", label: "Rejet chronique"},
		],
		explanation:
			"D'après les études d'Ainsworth et al. (1978), l'attachement sécure est relié aux comportements maternels suivants: a) contact physique fréquent et soutenu, b) sensibilité maternelle aux signaux du bébé, c) une ambiance contrôlée et prévisible, d) plaisir mutuel ressenti par la mère et le bébé. (Source: Fondement_13/13 - Tereno.txt)",
	},
	{
		id: "q12",
		title: "Question 12",
		question: "Qu'est-ce que la figure d'attachement primaire?",
		type: "radio",
		options: [
			{value: "a", label: "La figure qui s'insère dans son contexte de caregiving, avec laquelle l'enfant développe d'abord des relations d'attachement"},
			{value: "b", label: "Toute personne qui s'occupe de l'enfant"},
			{value: "c", label: "Un type d'attachement"},
			{value: "d", label: "Une phase du développement"},
		],
		explanation:
			"Les enfants développent d'abord des relations d'attachement avec une figure d'attachement primaire, figure qui s'insère dans son contexte de caregiving. Les jeunes enfants peuvent ensuite établir une hiérarchie de ces figures d'attachement, quand il existe plusieurs personnes s'occupant du bébé. (Source: Fondement_13/13 - Tereno.txt)",
	},
	{
		id: "q13",
		title: "Question 13",
		question: "Quels sont les risques associés à l'usage abusif des théories de l'attachement en protection de la jeunesse selon Tessier?",
		type: "checkbox",
		options: [
			{value: "a", label: "Naturalisation des rapports humains"},
			{value: "b", label: "Fixation de délais arbitraires pour le placement à long terme ou l'adoption"},
			{value: "c", label: "Risques d'exclusions discriminatoires, notamment pour les familles pauvres"},
			{value: "d", label: "Refus de considérer la théorie dans son contexte historique"},
			{value: "e", label: "Tous les enfants développent un attachement sécure"},
		],
		explanation:
			"Selon Tessier, l'usage abusif des théories de l'attachement en protection de la jeunesse présente des risques: naturalisation des rapports humains, fixation de délais arbitraires, risques d'exclusions discriminatoires (les enfants signalés sont en grande majorité issus de familles pauvres), et refus de considérer la théorie dans son contexte historique. (Source: Fondement_13/13 - Tessier.txt)",
	},
	{
		id: "q14",
		title: "Question 14",
		question: "Qu'est-ce que le havre de sécurité?",
		type: "radio",
		options: [
			{value: "a", label: "Une source de réconfort et de protection dans un contexte d'activation physiologique ou de menace environnementale, et comme base de sécurité pour l'exploration"},
			{value: "b", label: "Un type d'attachement insécure"},
			{value: "c", label: "Une phase du développement"},
			{value: "d", label: "Un comportement pathologique"},
		],
		explanation:
			"La figure d'attachement fonctionne, en principe, comme un havre de sécurité, une source de réconfort et de protection dans un contexte d'activation physiologique ou de menace environnementale, et comme base de sécurité pour l'exploration. (Source: Fondement_13/13 - Tereno.txt)",
	},
	{
		id: "q15",
		title: "Question 15",
		question: "Quelle est la différence entre l'attachement et le bonding?",
		type: "radio",
		options: [
			{value: "a", label: "L'attachement se réfère à la relation qui émerge au fil du temps à partir d'une histoire d'interactions de caregiving, tandis que le bonding se réfère aux processus de liaison associés aux premières heures de la vie"},
			{value: "b", label: "Ils sont identiques"},
			{value: "c", label: "Le bonding est plus important que l'attachement"},
			{value: "d", label: "L'attachement est uniquement biologique"},
		],
		explanation:
			"L'attachement se réfère au lien émotionnel spécifique que le bébé développe avec son caregiver pendant la première année de sa vie. Il se distingue aussi du lien que le caregiver a avec l'enfant et aux processus de liaison qui sont associés aux premières heures de la vie (c.-à-d.: bonding). (Source: Fondement_13/13 - Tereno.txt)",
	},
	{
		id: "q16",
		title: "Question 16",
		question: "Quels sont les signaux de désorganisation de l'attachement identifiés par Main et Salomon?",
		type: "checkbox",
		options: [
			{value: "a", label: "Manifestation séquentielle et/ou contradictoire de comportements"},
			{value: "b", label: "Mouvements et expressions non dirigés, incomplets ou interrompus"},
			{value: "c", label: "Stéréotypies, mouvements asymétriques et postures anormales"},
			{value: "d", label: "Mouvements et expressions de stupéfaction, immobilisation et lenteur"},
			{value: "e", label: "Expressions d'appréhension et de peur relativement à la figure d'attachement"},
			{value: "f", label: "Comportements normaux d'exploration"},
		],
		explanation:
			"Main et Salomon (1990) ont identifié les signaux de désorganisation de l'attachement chez les bébés de 12-18 mois: a) manifestation séquentielle et/ou contradictoire de comportements; b) mouvements et expressions non dirigés, incomplets ou interrompus; c) stéréotypies, mouvements asymétriques et postures anormales; d) mouvements et expressions de stupéfaction, immobilisation et lenteur; et e) expressions d'appréhension et de peur relativement à la figure d'attachement. (Source: Fondement_13/13 - Tereno.txt)",
	},
	{
		id: "q17",
		title: "Question 17",
		question: "Qu'est-ce que l'attachement insécure évitant?",
		type: "radio",
		options: [
			{value: "a", label: "Un pattern caractérisé par un contrôle excessif de l'émotivité, une exploration sans interaction affective avec la figure d'attachement, et l'absence de recherche de contact après la séparation"},
			{value: "b", label: "Un attachement sécure"},
			{value: "c", label: "Un attachement résistant"},
			{value: "d", label: "Un attachement désorganisé"},
		],
		explanation:
			"Les enfants avec une relation d'attachement insécure évitant paraissent se confronter à l'augmentation de l'activation physiologique induite en situation de laboratoire par la mise en jeu d'un contrôle excessif de l'émotivité. Ils se lancent dans l'exploration, en interagissant affectivement très peu avec la figure d'attachement, et n'initient pas activement l'interaction ou la recherche de contact avec la figure d'attachement après la séparation. (Source: Fondement_13/13 - Tereno.txt)",
	},
	{
		id: "q18",
		title: "Question 18",
		question: "Qu'est-ce que l'attachement insécure ambivalent ou résistant?",
		type: "radio",
		options: [
			{value: "a", label: "Un pattern caractérisé par une inefficacité à obtenir la sécurité de la part de la figure d'attachement, malgré des efforts répétés pour la solliciter"},
			{value: "b", label: "Un attachement sécure"},
			{value: "c", label: "Un attachement évitant"},
			{value: "d", label: "Un attachement désorganisé"},
		],
		explanation:
			"L'attachement insécure ambivalent ou résistant se caractérise par une inefficacité à obtenir la sécurité de la part de la figure d'attachement, malgré des efforts répétés pour la solliciter. Les bébés peuvent se sentir méfiants face à l'étranger et montrer une exploration pauvre, en pleurant fréquemment ou en cherchant le contact avec la figure d'attachement même avant la séparation. (Source: Fondement_13/13 - Tereno.txt)",
	},
	{
		id: "q19",
		title: "Question 19",
		question: "Quels facteurs sont associés à la désorganisation de l'attachement?",
		type: "checkbox",
		options: [
			{value: "a", label: "Comportements parentaux très perturbés et terrifiants (frightened/frightening)"},
			{value: "b", label: "Expériences parentales de pertes"},
			{value: "c", label: "Facteurs psychosociaux (p. ex.: dépression)"},
			{value: "d", label: "Ambiance de soins associées à l'alcoolisme prénatal"},
			{value: "e", label: "Exposition aux drogues"},
			{value: "f", label: "Soins adéquats et sensibles"},
		],
		explanation:
			"La désorganisation de l'attachement a été associée à des comportements parentaux très perturbés et terrifiants, des expériences parentales de pertes, de facteurs psychosociaux (dépression), d'ambiance de soins associées à l'alcoolisme prénatal et d'exposition aux drogues. (Source: Fondement_13/13 - Tereno.txt)",
	},
	{
		id: "q20",
		title: "Question 20",
		question: "Selon Tessier, pourquoi l'usage des théories de l'attachement en protection de la jeunesse est-il problématique?",
		type: "radio",
		options: [
			{value: "a", label: "Il s'inscrit dans un mouvement contestable de naturalisation des rapports humains et peut mener à des exclusions discriminatoires"},
			{value: "b", label: "Les théories sont fausses"},
			{value: "c", label: "Elles ne s'appliquent qu'aux enfants adoptés"},
			{value: "d", label: "Elles sont trop récentes"},
		],
		explanation:
			"Selon Tessier, l'usage abusif des théories de l'attachement en protection de la jeunesse s'inscrit dans un mouvement contestable de naturalisation des rapports humains. Il peut mener à des exclusions discriminatoires, notamment pour les familles pauvres, et fixe des délais arbitraires pour le placement à long terme ou l'adoption. (Source: Fondement_13/13 - Tessier.txt)",
	},
];

// Réponses correctes pour les questions à choix unique (radio)
export const correctRadioAnswers: Record<string, string> = {
	q1: "a",
	q3: "a",
	q4: "a",
	q6: "a",
	q7: "a",
	q9: "a",
	q10: "a",
	q12: "a",
	q14: "a",
	q15: "a",
	q17: "a",
	q18: "a",
	q20: "a",
};

// Réponses correctes pour les questions à choix multiples (checkbox)
export const correctCheckboxAnswers: Record<string, string[]> = {
	q2: ["a", "b", "c", "d", "e"],
	q5: ["a", "b", "c", "d"],
	q8: ["a", "b", "c", "d"],
	q11: ["a", "b", "c", "d"],
	q13: ["a", "b", "c", "d"],
	q16: ["a", "b", "c", "d", "e"],
	q19: ["a", "b", "c", "d", "e"],
};

// Export complete exam data
export const exam13Data: ExamData = {
	questions: exam13Questions,
	correctRadioAnswers,
	correctCheckboxAnswers,
};

