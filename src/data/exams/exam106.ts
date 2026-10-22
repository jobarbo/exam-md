/**
 * Examen 106: Vieillissement – Cours 6 – Aspects sociaux du vieillissement
 * Banque de 10 questions (5 tirées au hasard à chaque chargement)
 */

import type { Question, ExamData } from '../../types/exam';

export const exam106Questions: Question[] = [
	{
		id: "q1",
		title: "Question 1",
		question: "Quels types de soutien les systèmes de soutien social (parents, amis, collègues, organisations) fournissent-ils?",
		type: "checkbox",
		options: [
			{value: "a", label: "Instrumental (matériel, ressources, services)"},
			{value: "b", label: "Informationnel"},
			{value: "c", label: "Affectif/émotionnel (valorisation, être aimé, plaisir avec les autres)"},
			{value: "d", label: "Juridique obligatoire"},
		],
		explanation:
			"Le soutien social est instrumental, informationnel et affectif/émotionnel. Selon l'INSPQ (Camirand et Dumitru, 2011), le soutien social disponible décline avec l'âge : en 2005, 22 % des 65 ans et plus avaient un soutien peu élevé, contre 9 % des 12-24 ans. (Source : Notes 6, p. 1-2)",
	},
	{
		id: "q2",
		title: "Question 2",
		question: "Qu'est-ce que l'horloge sociale?",
		type: "radio",
		options: [
			{value: "a", label: "Une table de temps présente socialement qui ordonne les événements de la vie et qui a un caractère normatif"},
			{value: "b", label: "L'âge biologique mesuré par des tests médicaux"},
			{value: "c", label: "Le nombre d'années avant l'admissibilité à la pension"},
			{value: "d", label: "Un outil d'évaluation de la mémoire"},
		],
		explanation:
			"L'horloge sociale est une table de temps qui ordonne les événements de la vie. Elle est normative : la plupart des gens tentent de s'y conformer et autrui s'attend à cette conformité. Elle varie selon les cultures mais est partout présente. Marqueurs sociaux du vieil âge : chronologie et changement du rôle social et économique (recevoir plus que donner). (Source : Notes 6, p. 2)",
	},
	{
		id: "q3",
		title: "Question 3",
		question: "Sur le plan démographique, qu'est-ce que le « vieillissement de la population »?",
		type: "radio",
		options: [
			{value: "a", label: "Un rapport : l'augmentation du pourcentage des 65 ans et plus par rapport aux jeunes, causée par la baisse de la natalité et l'augmentation de l'espérance de vie"},
			{value: "b", label: "Une augmentation spontanée du nombre de personnes âgées sans lien avec les naissances"},
			{value: "c", label: "Le fait que chaque individu vieillit d'un an chaque année"},
			{value: "d", label: "Une hausse de la mortalité chez les jeunes adultes"},
		],
		explanation:
			"Le vieillissement de la population est une question de proportion : la part des 65 ans et plus augmente par rapport à celle des jeunes, à cause de la baisse de la natalité et de la hausse de l'espérance de vie. Il est défini comme un « problème social » à travers la notion de dépendance (population active vs dépendants) et les discours sur l'équité intergénérationnelle. (Source : Notes 6, p. 3)",
	},
	{
		id: "q4",
		title: "Question 4",
		question: "Appeler une aînée « ma petite madame », la tutoyer d'emblée et la surprotéger sont des exemples de quelle forme d'âgisme?",
		type: "radio",
		options: [
			{value: "a", label: "L'âgisme paternaliste"},
			{value: "b", label: "L'âgisme oppositionnel ou compétitif"},
			{value: "c", label: "L'auto-âgisme"},
			{value: "d", label: "L'âgisme dans le monde du travail"},
		],
		explanation:
			"L'âgisme paternaliste se manifeste par la surprotection et l'infantilisation, en apparence bienveillantes. L'âgisme oppositionnel dépeint les aînés comme prospères, égoïstes et trop influents politiquement; l'auto-âgisme est l'intériorisation des attitudes péjoratives; au travail, c'est la retraite forcée ou le déni des compétences. (Source : Notes 6, p. 3-4)",
	},
	{
		id: "q5",
		title: "Question 5",
		question: "Que désigne la « nature circulaire » de l'âgisme?",
		type: "radio",
		options: [
			{value: "a", label: "Les personnes âgées agissent en fonction des stéréotypes (ex. : passivité) et, ce faisant, les renforcent"},
			{value: "b", label: "L'âgisme touche successivement toutes les classes sociales"},
			{value: "c", label: "L'âgisme disparaît naturellement avec chaque nouvelle génération"},
			{value: "d", label: "L'âgisme ne vise que les personnes de 85 ans et plus"},
		],
		explanation:
			"La nature circulaire de l'âgisme : les aînés agissent en fonction des stéréotypes (passivité, etc.) et les renforcent ainsi (Grant, 1996). On la rapproche de l'auto-âgisme (intériorisation des attitudes péjoratives) et de l'effet Pygmalion. (Source : Notes 6, p. 4)",
	},
	{
		id: "q6",
		title: "Question 6",
		question: "Comment Billette et Lavoie (2010) définissent-ils l'exclusion sociale?",
		type: "radio",
		options: [
			{value: "a", label: "Un processus de non-reconnaissance et de privation de droits et de ressources envers certains segments de la population, qui se réalise à travers des rapports de force entre groupes aux visions et intérêts divergents"},
			{value: "b", label: "Un état permanent et naturel lié au vieillissement"},
			{value: "c", label: "Le simple fait de vivre seul après 65 ans"},
			{value: "d", label: "Une conséquence fonctionnelle et inévitable du désengagement"},
		],
		explanation:
			"L'exclusion sociale est un processus (plutôt qu'un état) de non-reconnaissance et de privation de droits et de ressources, qui se réalise à travers des rapports de force entre groupes. Elle mène à des inégalités et à une mise à l'écart dans sept dimensions. Elle n'est pas la conséquence « naturelle » du vieillissement. (Source : Billette et Lavoie (2010), Introduction, section 2; Notes 6, p. 4-5)",
	},
	{
		id: "q7",
		title: "Question 7",
		question: "Une personne âgée est perçue uniquement à travers son âge, ce qui nie son genre, son origine, son orientation sexuelle, sa religion, etc. De quelle dimension de l'exclusion s'agit-il?",
		type: "radio",
		options: [
			{value: "a", label: "L'exclusion identitaire"},
			{value: "b", label: "L'exclusion territoriale"},
			{value: "c", label: "L'exclusion économique"},
			{value: "d", label: "L'exclusion sociopolitique"},
		],
		explanation:
			"L'exclusion identitaire renvoie à une identité réduite à un seul groupe d'appartenance (ici, l'âge), niant les multiples caractéristiques de la personne. Les sept dimensions : symbolique, identitaire, sociopolitique, institutionnelle, économique, des liens sociaux significatifs et territoriale (ex. : gentrification, transports inadaptés). (Source : Billette et Lavoie (2010), tableau I.1; Notes 6, p. 4)",
	},
	{
		id: "q8",
		title: "Question 8",
		question: "Selon Billette et Lavoie (2010), quels sont les deux processus de l'exclusion des aînés?",
		type: "checkbox",
		options: [
			{value: "a", label: "La non-reconnaissance (liée aux exclusions symbolique et identitaire)"},
			{value: "b", label: "La privation des droits et des ressources (liée aux exclusions sociopolitique, institutionnelle, économique, des liens sociaux et territoriale)"},
			{value: "c", label: "Le désengagement mutuel et fonctionnel"},
			{value: "d", label: "La sélection naturelle"},
		],
		explanation:
			"Deux processus : 1) la non-reconnaissance (invisibilité, stigmatisation, âgisme, représentations négatives), qui renvoie aux exclusions symbolique et identitaire; 2) la privation des droits et des ressources, manifeste dans les cinq autres dimensions. La non-reconnaissance permet et justifie la privation des droits. (Source : Billette et Lavoie (2010), Introduction, section 3; Notes 6, p. 4)",
	},
	{
		id: "q9",
		title: "Question 9",
		question: "Dans la conférence de Martine Lagacé (Le paradoxe de l'âgisme), quel enchaînement l'étude auprès de 655 infirmiers de 45 ans et plus a-t-elle confirmé?",
		type: "radio",
		options: [
			{value: "a", label: "Communication âgiste perçue → insatisfaction → désengagement psychologique (pensée de la retraite) → baisse de l'estime de soi"},
			{value: "b", label: "Communication âgiste → hausse de motivation → promotion"},
			{value: "c", label: "Âge avancé → absentéisme → congédiement"},
			{value: "d", label: "Formation continue → âgisme → satisfaction"},
		],
		explanation:
			"Plus le travailleur vieillissant se perçoit comme la cible de messages âgistes, plus il est insatisfait, plus il se désengage psychologiquement (il pense à la retraite, fait le minimum, ne transfère plus ses connaissances) et plus son estime de soi diminue. Le modèle a été revalidé auprès de 322 infirmières et d'autres travailleurs (policiers, fonctionnaires). Lagacé (2013) rapporte aussi ce désengagement psychologique, puis effectif. (Source : Notes 6, p. 10-11; Lagacé (2013), p. 25)",
	},
	{
		id: "q10",
		title: "Question 10",
		question: "Qu'est-ce que l'« effet Pygmalion » décrit par Lagacé en contexte d'hébergement?",
		type: "radio",
		options: [
			{value: "a", label: "Faire croire à la personne âgée qu'elle est fragile ou inutile renforce sa dépendance; elle finit par intégrer ces croyances et se désengager"},
			{value: "b", label: "Les aînés deviennent plus autonomes lorsqu'on les surprotège"},
			{value: "c", label: "Les gestionnaires âgés favorisent les travailleurs âgés"},
			{value: "d", label: "Une technique de stimulation cognitive par les arts"},
		],
		explanation:
			"L'effet Pygmalion : en foyer, à force de dire à la personne âgée qu'elle est inutile ou fragile, on renforce sa dépendance (celle qui se laisse faire est mieux reçue que celle qui résiste); elle intègre ces croyances et se désengage. L'autre effet sournois est le vieillissement nié (« eux vs nous »), par exemple chez les gestionnaires eux-mêmes âgés. (Source : Notes 6, p. 12)",
	},
];

// Réponses correctes pour les questions à choix unique (radio)
export const correctRadioAnswers: Record<string, string> = {
	q2: "a",
	q3: "a",
	q4: "a",
	q5: "a",
	q6: "a",
	q7: "a",
	q9: "a",
	q10: "a",
};

// Réponses correctes pour les questions à choix multiples (checkbox)
export const correctCheckboxAnswers: Record<string, string[]> = {
	q1: ["a", "b", "c"],
	q8: ["a", "b"],
};

// Export complete exam data
export const exam106Data: ExamData = {
	questions: exam106Questions,
	correctRadioAnswers,
	correctCheckboxAnswers,
};
