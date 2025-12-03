/**
 * Examen 14: Thérapies comportementales et cognitives (TCC)
 * Ce fichier contient toutes les questions et réponses pour l'examen 14
 */

import type { Question, ExamData } from '../../types/exam';

export const exam14Questions: Question[] = [
	{
		id: "q1",
		title: "Question 1",
		question: "Que signifie TCC?",
		type: "radio",
		options: [
			{value: "a", label: "Thérapies comportementales et cognitives"},
			{value: "b", label: "Thérapies cognitives et comportementales"},
			{value: "c", label: "Thérapies cognitives et corporelles"},
			{value: "d", label: "Thérapies comportementales et corporelles"},
		],
		explanation:
			"Les TCC sont un courant dans le champ des psychothérapies. Il y a plusieurs façons de nommer ces thérapies : TCC, thérapies cognitivo-comportementales, thérapies comportementales et cognitives, ou, en anglais : CBT ou Cognitive and Behavioral Therapy. (Source: Fondement_14/14 - Bouvet (2020).txt)",
	},
	{
		id: "q2",
		title: "Question 2",
		question: "Quels sont les objectifs des TCC?",
		type: "checkbox",
		options: [
			{value: "a", label: "Modifier les comportements inadaptés"},
			{value: "b", label: "Modifier les pensées (cognitions) dysfonctionnelles"},
			{value: "c", label: "Traiter les émotions (dans le cadre de la « troisième vague » TCC)"},
			{value: "d", label: "Normaliser tous les comportements"},
		],
		explanation:
			"Comme leur nom l'indique, les TCC visent la modification (thérapies) des comportements inadaptés (comportementales) et des pensées (cognitives) dysfonctionnelles. Les TCC se complètent maintenant par des approches traitant des émotions dans le cadre de la « troisième vague » TCC. (Source: Fondement_14/14 - Bouvet (2020).txt)",
	},
	{
		id: "q3",
		title: "Question 3",
		question: "Qu'est-ce que l'apprentissage répondant (ou pavlovien)?",
		type: "radio",
		options: [
			{value: "a", label: "Un type d'apprentissage où un stimulus neutre devient capable de déclencher une réponse automatique après avoir été associé à un stimulus qui provoque naturellement cette réponse"},
			{value: "b", label: "Un type d'apprentissage par récompense"},
			{value: "c", label: "Un type d'apprentissage social"},
			{value: "d", label: "Un type d'apprentissage cognitif"},
		],
		explanation:
			"Les théories de l'apprentissage classique proviennent directement des travaux scientifiques menés par Ivan Pavlov. Il a démontré que des chiens pouvaient être amenés à saliver en entendant le simple son d'une cloche sans rapport avec de la nourriture, après avoir associé la cloche à la présentation de nourriture. (Source: Fondement_14/14 - Bouvet (2020).txt)",
	},
	{
		id: "q4",
		title: "Question 4",
		question: "Qui est considéré comme le premier behavioriste?",
		type: "radio",
		options: [
			{value: "a", label: "John Watson"},
			{value: "b", label: "Ivan Pavlov"},
			{value: "c", label: "B.F. Skinner"},
			{value: "d", label: "Albert Bandura"},
		],
		explanation:
			"C'est John Watson (1878-1958), le premier des behavioristes (behavior en anglais = comportement), qui a développé cette idée, en particulier dans ses applications sociales. (Source: Fondement_14/14 - Bouvet (2020).txt)",
	},
	{
		id: "q5",
		title: "Question 5",
		question: "Qu'est-ce que la désensibilisation systématique par inhibition réciproque?",
		type: "checkbox",
		options: [
			{value: "a", label: "Désensibiliser: enlever la réponse d'angoisse face à un stimulus"},
			{value: "b", label: "Systématique: de façon stratégique, organisée et complète"},
			{value: "c", label: "Par inhibition: inhiber la réponse inadaptée (l'angoisse)"},
			{value: "d", label: "Réciproque: en associant le stimulus phobogène avec une réponse antagoniste (relaxation)"},
			{value: "e", label: "Une technique uniquement pour les phobies animales"},
		],
		explanation:
			"La désensibilisation systématique par inhibition réciproque consiste à apprendre à l'organisme une nouvelle réponse (relaxation) face au stimulus phobogène, cette nouvelle réponse étant antagoniste de la réponse d'angoisse. Joseph Wolpe est reconnu comme le premier thérapeute comportementaliste ayant mis en place cette stratégie. (Source: Fondement_14/14 - Bouvet (2020).txt)",
	},
	{
		id: "q6",
		title: "Question 6",
		question: "Qu'est-ce que l'exposition en TCC?",
		type: "radio",
		options: [
			{value: "a", label: "Une méthode comportementale où le patient s'expose progressivement à l'objet de sa peur, après une préparation spécifique et en suivant une démarche thérapeutique précise"},
			{value: "b", label: "Une technique uniquement cognitive"},
			{value: "c", label: "Une confrontation brutale"},
			{value: "d", label: "Une thérapie de choc"},
		],
		explanation:
			"Une méthode comportementale est, par exemple, la méthode d'exposition systématique par laquelle, après une préparation spécifique et en suivant une démarche thérapeutique précise, le patient va être amené à s'exposer progressivement à l'objet de sa peur. L'exposition doit être personnalisée, progressive, et répétée autant que nécessaire. (Source: Fondement_14/14 - Bouvet (2020).txt)",
	},
	{
		id: "q7",
		title: "Question 7",
		question: "Qu'est-ce que la restructuration cognitive?",
		type: "radio",
		options: [
			{value: "a", label: "Une technique cognitive qui consiste à repérer et à remettre en question les pensées automatiques dysfonctionnelles pour les remplacer par des pensées alternatives plus adaptées et réalistes"},
			{value: "b", label: "Une technique comportementale"},
			{value: "c", label: "Une technique uniquement émotionnelle"},
			{value: "d", label: "Une technique de relaxation"},
		],
		explanation:
			"Une méthode cognitive est, par exemple, l'utilisation des « colonnes de Beck », qui consistent à repérer les pensées automatiques dysfonctionnelles répétitives, puis à en éprouver la rationalité de façon systématique (entretien socratique), pour ensuite envisager des pensées alternatives plus adaptées. (Source: Fondement_14/14 - Bouvet (2020).txt)",
	},
	{
		id: "q8",
		title: "Question 8",
		question: "Qu'est-ce que la méditation de pleine conscience en TCC?",
		type: "checkbox",
		options: [
			{value: "a", label: "Une approche émotionnelle qui repose sur des techniques attentionnelles"},
			{value: "b", label: "Le fait d'ancrer son attention durablement sur une perception précise"},
			{value: "c", label: "Une attitude mentale « métacognitive » où le sujet se place en observation de ses cognitions"},
			{value: "d", label: "Une technique qui modifie le rapport du sujet à ses émotions et à ses cognitions"},
			{value: "e", label: "Une technique qui change directement les cognitions"},
		],
		explanation:
			"Une méthode émotionnelle est, par exemple, l'approche de méditation de pleine conscience qui repose sur des techniques attentionnelles. Le fait d'ancrer ainsi son attention durablement sur une perception précise place le sujet dans une perspective intérieure « méta », d'observateur. Cela permet de modifier le rapport du sujet à ses émotions et à ses cognitions. (Source: Fondement_14/14 - Bouvet (2020).txt)",
	},
	{
		id: "q9",
		title: "Question 9",
		question: "Qu'est-ce que l'autocontrôle en TCC?",
		type: "radio",
		options: [
			{value: "a", label: "Le fait que le patient puisse, par lui-même, gérer ses difficultés, même sans l'aide d'un thérapeute, devenant dans une certaine mesure son propre thérapeute"},
			{value: "b", label: "Le contrôle des autres"},
			{value: "c", label: "Le contrôle des émotions uniquement"},
			{value: "d", label: "Une technique de relaxation"},
		],
		explanation:
			"L'autocontrôle, en TCC, c'est le fait que le patient puisse, par lui-même, gérer ses difficultés, même sans l'aide d'un thérapeute. Il s'agit qu'il devienne, dans une certaine mesure, son propre thérapeute. C'est pourquoi toutes les techniques TCC sont non seulement utilisées en thérapie, mais aussi apprises au patient. (Source: Fondement_14/14 - Bouvet (2020).txt)",
	},
	{
		id: "q10",
		title: "Question 10",
		question: "Quelles sont les trois vagues des TCC?",
		type: "checkbox",
		options: [
			{value: "a", label: "Première vague: approches comportementales (behavioristes)"},
			{value: "b", label: "Deuxième vague: approches cognitives"},
			{value: "c", label: "Troisième vague: approches émotionnelles et de pleine conscience"},
			{value: "d", label: "Quatrième vague: approches psychanalytiques"},
		],
		explanation:
			"Les TCC ne sont pas apparues d'un coup. L'approche comportementale est souvent nommée « première vague des TCC ». La deuxième vague correspond aux approches cognitives. La troisième vague inclut les approches émotionnelles et de pleine conscience. (Source: Fondement_14/14 - Bouvet (2020).txt)",
	},
	{
		id: "q11",
		title: "Question 11",
		question: "Qui est considéré comme le premier thérapeute comportementaliste ayant mis en place une stratégie précise pour soigner les phobies?",
		type: "radio",
		options: [
			{value: "a", label: "Joseph Wolpe"},
			{value: "b", label: "Ivan Pavlov"},
			{value: "c", label: "John Watson"},
			{value: "d", label: "Aaron Beck"},
		],
		explanation:
			"Joseph Wolpe (1915-1997) est reconnu comme le premier thérapeute comportementaliste ayant mis en place une stratégie comportementale précise et efficace pour soigner un trouble spécifique : les phobies. Il s'agit de la désensibilisation systématique par inhibition réciproque. (Source: Fondement_14/14 - Bouvet (2020).txt)",
	},
	{
		id: "q12",
		title: "Question 12",
		question: "Qu'est-ce que le modèle cognitivo-comportemental des troubles psychiques?",
		type: "radio",
		options: [
			{value: "a", label: "Un modèle où une situation agit comme un stimulus qui déclenche des réactions cognitives, comportementales et émotionnelles qui interagissent entre elles et génèrent des troubles psychiques"},
			{value: "b", label: "Un modèle uniquement comportemental"},
			{value: "c", label: "Un modèle uniquement cognitif"},
			{value: "d", label: "Un modèle uniquement émotionnel"},
		],
		explanation:
			"De façon générale, les troubles psychiques entremêlent des émotions (peur, tristesse, colère…), des comportements (de vérification, d'évitement, de violence…) et des pensées (cognitions dysfonctionnelles). Une situation agit comme un stimulus qui déclenche des réactions cognitives, comportementales et émotionnelles qui interagissent entre elles. (Source: Fondement_14/14 - Bouvet (2020).txt)",
	},
	{
		id: "q13",
		title: "Question 13",
		question: "Quelles sont les caractéristiques des TCC?",
		type: "checkbox",
		options: [
			{value: "a", label: "S'appuient sur des théories de l'apprentissage et des théories cognitives"},
			{value: "b", label: "Sont validées par des recherches scientifiques"},
			{value: "c", label: "Sont nées d'abord lors d'études de laboratoire où elles ont été testées et validées"},
			{value: "d", label: "Visent la modification des comportements inadaptés et des pensées dysfonctionnelles"},
			{value: "e", label: "Sont normatives et imposent des comportements standards"},
		],
		explanation:
			"Les TCC s'appuient sur un ensemble de théories (théories de l'apprentissage, théories cognitives) et sont validées par des recherches scientifiques. Une des caractéristiques spécifiques des TCC est que ces approches, pour une grande part, sont nées d'abord lors d'études de laboratoire où elles ont été testées et validées, avant d'être ensuite exportées dans la pratique psychothérapeutique. (Source: Fondement_14/14 - Bouvet (2020).txt)",
	},
	{
		id: "q14",
		title: "Question 14",
		question: "Qu'est-ce qu'un comportement inadapté ou dysfonctionnel selon les TCC?",
		type: "radio",
		options: [
			{value: "a", label: "Un comportement, une cognition ou une émotion qui gêne la personne dans ses relations aux autres, au monde et à elle-même, de façon intense et persistante"},
			{value: "b", label: "Tout comportement différent de la norme"},
			{value: "c", label: "Un comportement socialement inacceptable"},
			{value: "d", label: "Un comportement pathologique uniquement"},
		],
		explanation:
			"Sont inadaptés les comportements, les cognitions et les émotions qui gênent le sujet de façon intense et persistante, qui perturbent ses rapports avec lui-même et avec son environnement, qui entravent son accomplissement personnel et qui restreignent de façon importante les satisfactions qu'il serait en droit d'attendre de la vie. (Source: Fondement_14/14 - Bouvet (2020).txt)",
	},
	{
		id: "q15",
		title: "Question 15",
		question: "Qu'est-ce que l'habituation dans le contexte de l'exposition?",
		type: "radio",
		options: [
			{value: "a", label: "Le processus par lequel l'angoisse diminue en situation anxiogène, menant progressivement à la désensibilisation et à l'extinction de la réponse « peur »"},
			{value: "b", label: "L'augmentation de l'angoisse"},
			{value: "c", label: "L'évitement de la situation"},
			{value: "d", label: "Une technique de relaxation"},
		],
		explanation:
			"Il est très important que les séances soient suffisamment longues pour qu'à chaque fois l'angoisse diminue. C'est cette baisse de l'angoisse en situation anxiogène qui produit le phénomène d'habituation qui mène progressivement à la désensibilisation et à l'extinction de la réponse « peur ». (Source: Fondement_14/14 - Bouvet (2020).txt)",
	},
	{
		id: "q16",
		title: "Question 16",
		question: "Quelles sont les principales théories qui fondent les TCC?",
		type: "checkbox",
		options: [
			{value: "a", label: "Théories de l'apprentissage: apprentissage répondant de Pavlov, opérant de Skinner et social de Bandura"},
			{value: "b", label: "Théories cognitives du traitement de l'information dont la théorie cognitive des schémas de Beck"},
			{value: "c", label: "Théorie psychanalytique de Freud"},
			{value: "d", label: "Théorie systémique"},
		],
		explanation:
			"Les TCC s'appuient sur: 1) Théories générales: Théories de l'apprentissage (apprentissage répondant de Pavlov, opérant de Skinner et social de Bandura) et Théories cognitives du traitement de l'information dont la théorie cognitive des schémas de Beck. (Source: Fondement_14/14 - Bouvet (2020).txt)",
	},
	{
		id: "q17",
		title: "Question 17",
		question: "Qu'est-ce que l'entretien socratique?",
		type: "radio",
		options: [
			{value: "a", label: "Une technique où le thérapeute pose des questions pour amener le patient à éprouver la rationalité de ses pensées automatiques dysfonctionnelles"},
			{value: "b", label: "Une technique de relaxation"},
			{value: "c", label: "Une technique d'exposition"},
			{value: "d", label: "Une technique de suggestion"},
		],
		explanation:
			"À l'aide du thérapeute, le patient va en éprouver la rationalité de façon systématique (entretien socratique : « Qu'est-ce qui vous fait dire cela, concrètement ? Est-ce une pensée réaliste ? Est-ce que les bébés des autres mères pleurent ? Sont-elles des mauvaises mères ? », etc.). (Source: Fondement_14/14 - Bouvet (2020).txt)",
	},
	{
		id: "q18",
		title: "Question 18",
		question: "Qu'est-ce que la différence entre pensées égosyntoniques et égodystoniques?",
		type: "radio",
		options: [
			{value: "a", label: "Les pensées égosyntoniques sont celles auxquelles le patient croit et qui le définissent, tandis que les pensées égodystoniques sont perçues comme étrangères à son moi et fausses"},
			{value: "b", label: "Elles sont identiques"},
			{value: "c", label: "Les égosyntoniques sont toujours dysfonctionnelles"},
			{value: "d", label: "Les égodystoniques sont toujours adaptées"},
		],
		explanation:
			"Ces pensées dysfonctionnelles qui étaient égosyntoniques (le patient y croit, elles le définissent comme une « vraie » caractéristique) deviennent alors égodystoniques (le patient les perçoit comme étrangères à son moi et fausses ; bien qu'elles restent envahissantes, il n'y croit plus autant). (Source: Fondement_14/14 - Bouvet (2020).txt)",
	},
	{
		id: "q19",
		title: "Question 19",
		question: "Qu'est-ce que l'évitement expérientiel?",
		type: "radio",
		options: [
			{value: "a", label: "Le fait d'éviter de ressentir certaines émotions ou pensées, ce qui, s'il est trop fréquent, renforce les émotions négatives"},
			{value: "b", label: "L'évitement de situations dangereuses"},
			{value: "c", label: "Une technique thérapeutique"},
			{value: "d", label: "Un comportement adapté"},
		],
		explanation:
			"La méditation de pleine conscience limite l'évitement expérientiel, lequel, s'il est trop fréquent, renforce les émotions négatives. L'évitement expérientiel consiste à éviter de ressentir certaines émotions ou pensées. (Source: Fondement_14/14 - Bouvet (2020).txt)",
	},
	{
		id: "q20",
		title: "Question 20",
		question: "Qu'est-ce que la psychoéducation en TCC?",
		type: "radio",
		options: [
			{value: "a", label: "L'explication au patient de ce dont il s'agit, de la nature de son trouble et des techniques qui seront utilisées"},
			{value: "b", label: "Une technique d'exposition"},
			{value: "c", label: "Une technique de relaxation"},
			{value: "d", label: "Une technique cognitive uniquement"},
		],
		explanation:
			"Une bonne exposition doit être précédée d'un bon diagnostic, d'une analyse précise du problème (« analyse fonctionnelle ») et d'une bonne explication au patient de ce dont il s'agit (« psychoéducation »). La psychoéducation fait partie intégrante des TCC. (Source: Fondement_14/14 - Bouvet (2020).txt)",
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
	q11: "a",
	q12: "a",
	q14: "a",
	q15: "a",
	q17: "a",
	q18: "a",
	q19: "a",
	q20: "a",
};

// Réponses correctes pour les questions à choix multiples (checkbox)
export const correctCheckboxAnswers: Record<string, string[]> = {
	q2: ["a", "b", "c"],
	q5: ["a", "b", "c", "d"],
	q8: ["a", "b", "c", "d"],
	q10: ["a", "b", "c"],
	q13: ["a", "b", "c", "d"],
	q16: ["a", "b"],
};

// Export complete exam data
export const exam14Data: ExamData = {
	questions: exam14Questions,
	correctRadioAnswers,
	correctCheckboxAnswers,
};

