/**
 * Examen 104: Vieillissement – Cours 4 – Aspects biologiques et maladie d'Alzheimer
 * Banque de 10 questions (5 tirées au hasard à chaque chargement)
 */

import type { Question, ExamData } from '../../types/exam';

export const exam104Questions: Question[] = [
	{
		id: "q1",
		title: "Question 1",
		question: "Qu'est-ce que la sénescence?",
		type: "radio",
		options: [
			{value: "a", label: "Le vieillissement usuel (non pathologique) qui diminue les capacités fonctionnelles sans nécessairement provoquer de maladie ou entraîner la mort"},
			{value: "b", label: "L'apparition de maladies inhérentes au vieillissement biologique"},
			{value: "c", label: "La durée de vie maximale de l'espèce humaine"},
			{value: "d", label: "Un synonyme de démence"},
		],
		explanation:
			"La sénescence est le vieillissement normal du corps, phénomène à la fois universel et individuel, qui diminue les capacités fonctionnelles sans nécessairement causer de maladie. Le vieillissement pathologique, lui, renvoie à des maladies qui ne sont pas des composantes « normales » du vieillissement, même si elles peuvent l'accélérer. Cardinal et al. précisent que la sénescence opère de façon progressive, accompagnée ou non de maladie. (Source : Notes 4, p. 1-2; Cardinal et al. (2008), p. 7)",
	},
	{
		id: "q2",
		title: "Question 2",
		question: "Quelle est la différence entre la longévité et l'espérance de vie?",
		type: "radio",
		options: [
			{value: "a", label: "La longévité est la durée de vie maximale, biologiquement programmée (122 ans chez l'humain); l'espérance de vie est la durée de vie moyenne, influencée par les conditions de vie"},
			{value: "b", label: "La longévité est la durée de vie moyenne; l'espérance de vie est la durée maximale"},
			{value: "c", label: "Les deux termes sont synonymes"},
			{value: "d", label: "La longévité ne concerne que les femmes"},
		],
		explanation:
			"La longévité est la durée de vie maximale en conditions idéales, biologiquement programmée (122 ans selon les cas observés). L'espérance de vie est la durée de vie moyenne, influencée par l'état des sociétés (contrôle des maladies infectieuses, soins, revenus, conflits…). Au Québec, en 2017 : 80,6 ans (H) et 84,5 ans (F) à la naissance; 19,6 et 22,4 ans à 65 ans. (Source : Notes 4, p. 2)",
	},
	{
		id: "q3",
		title: "Question 3",
		question: "Parmi les théories du vieillissement biologique, lesquelles sont centrées sur les facteurs intrinsèques?",
		type: "checkbox",
		options: [
			{value: "a", label: "Les théories génétiques (programmation de l'ADN, vieillissement cellulaire)"},
			{value: "b", label: "Les théories du système immunitaire (affaiblissement ou phénomènes auto-immunitaires)"},
			{value: "c", label: "La théorie des radicaux libres"},
			{value: "d", label: "La théorie de l'usure"},
		],
		explanation:
			"Facteurs intrinsèques : théories génétiques (l'ADN déterminerait le rythme du vieillissement, mais aucun gène n'a encore été identifié) et théories du système immunitaire. Facteurs extrinsèques : radicaux libres (oxydation des cellules) et usure (cumul des attaques de l'environnement). Aucune théorie n'explique POURQUOI on vieillit, seulement COMMENT. (Source : Notes 4, p. 2-3)",
	},
	{
		id: "q4",
		title: "Question 4",
		question: "Selon Cardinal et al. (2008), que signifie le « vieillissement en santé »?",
		type: "radio",
		options: [
			{value: "a", label: "Un processus permanent d'optimisation des possibilités qui vise toutes les personnes âgées et ne signifie pas l'absence de maladie ou d'incapacités"},
			{value: "b", label: "L'absence totale de maladie chronique après 65 ans"},
			{value: "c", label: "Un état réservé aux aînés qui maintiennent un emploi"},
			{value: "d", label: "Le maintien de la force physique au même niveau qu'à 40 ans"},
		],
		explanation:
			"Le vieillissement en santé est un « processus permanent d'optimisation des possibilités permettant aux personnes âgées d'améliorer et de préserver leur santé et leur bien-être physique, social et mental, et de conserver leur autonomie et leur qualité de vie […]. Cette notion vise toutes les personnes âgées. » Il ne signifie pas l'absence de maladie ou d'incapacités et concerne l'interaction entre la personne et ses environnements (micro, méso, macro). (Source : Cardinal et al. (2008), p. 39; Notes 4, p. 4)",
	},
	{
		id: "q5",
		title: "Question 5",
		question: "Quels principes sont retenus dans le modèle conceptuel du vieillissement en santé de Cardinal et al. (2008)?",
		type: "checkbox",
		options: [
			{value: "a", label: "L'équité"},
			{value: "b", label: "La solidarité"},
			{value: "c", label: "L'indépendance"},
			{value: "d", label: "La dignité"},
			{value: "e", label: "La productivité"},
		],
		explanation:
			"Inspirés du Cadre national sur le vieillissement et du cadre de l'OMS (Vieillir en restant actif), les quatre principes retenus sont l'équité, la solidarité, l'indépendance et la dignité. Le modèle comporte aussi neuf axes d'intervention : cinq sur les déterminants de la santé et quatre sur la prévention et l'optimisation des capacités. (Source : Cardinal et al. (2008), p. 40)",
	},
	{
		id: "q6",
		title: "Question 6",
		question: "Selon Phaneuf (2007), quelle lésion de la maladie d'Alzheimer est EXTRACELLULAIRE?",
		type: "radio",
		options: [
			{value: "a", label: "Les plaques séniles, formées par l'accumulation de la protéine bêta-amyloïde"},
			{value: "b", label: "Les enchevêtrements neurofibrillaires formés par la protéine tau"},
			{value: "c", label: "Les athéromes des artères coronaires"},
			{value: "d", label: "Les caillots sanguins dus au tabagisme"},
		],
		explanation:
			"Deux types de lésions sont essentielles au diagnostic : les lésions cellulaires (intracellulaires) par accumulation de protéine tau formant des enchevêtrements neurofibrillaires, et les lésions extracellulaires en forme de plaques (bêta-amyloïde), insolubles et toxiques, qui interrompent la communication entre les cellules et les font mourir. (Source : Phaneuf (2007), p. 61 et 85)",
	},
	{
		id: "q7",
		title: "Question 7",
		question: "Qu'est-ce que l'anosognosie?",
		type: "radio",
		options: [
			{value: "a", label: "L'incapacité de reconnaître ses propres difficultés cognitives"},
			{value: "b", label: "L'incapacité de reconnaître les visages connus"},
			{value: "c", label: "La perte de la capacité d'effectuer des mouvements coordonnés"},
			{value: "d", label: "La répétition des mots des autres"},
		],
		explanation:
			"L'anosognosie survient quand l'agnosie progresse au point où la personne ne se rend plus compte de ses difficultés : elle se fait une idée erronée de son fonctionnement cognitif. À distinguer de la prosopagnosie (visages connus), de l'apraxie (mouvements coordonnés) et de l'écholalie (répétition des mots des autres). (Source : Phaneuf (2007), p. 69; Notes 4, p. 11)",
	},
	{
		id: "q8",
		title: "Question 8",
		question: "Une personne atteinte d'Alzheimer soutient que sa fille a été remplacée par une imposteure qui lui ressemble. De quel trouble s'agit-il?",
		type: "radio",
		options: [
			{value: "a", label: "Le syndrome de Capgras (illusion de sosie)"},
			{value: "b", label: "Le syndrome crépusculaire"},
			{value: "c", label: "La réaction catastrophique"},
			{value: "d", label: "L'errance nocturne"},
		],
		explanation:
			"Le syndrome de Capgras, qui porte le nom d'un psychiatre français, est une illusion de sosie pouvant survenir même au début de la maladie : le malade soutient qu'un proche a été remplacé par un double. Aller à l'encontre de cette conviction déclenche souvent opposition et colère. (Source : Phaneuf (2007), p. 72)",
	},
	{
		id: "q9",
		title: "Question 9",
		question: "Quels énoncés sur le diagnostic et la durée de la maladie d'Alzheimer sont vrais selon Phaneuf (2007)?",
		type: "checkbox",
		options: [
			{value: "a", label: "Le diagnostic n'est véritablement confirmé que par l'examen du cerveau à l'autopsie"},
			{value: "b", label: "Une évaluation sur au moins six mois, avec tests cliniques et examen neurologique, est juste dans environ 80 à 90 % des cas"},
			{value: "c", label: "Après l'apparition des symptômes, la maladie dure de 2 à 20 ans, le plus souvent de 6 à 9 ans"},
			{value: "d", label: "Le test de Folstein suffit à lui seul à confirmer le diagnostic"},
		],
		explanation:
			"Les médecins parlent de maladie d'Alzheimer « possible », confirmée seulement à l'autopsie; l'évaluation médicale sur au moins six mois est juste dans 80 à 90 % des cas. Aucun test psychologique (dont le Folstein/MEEM) ne peut à lui seul confirmer la maladie. Durée : 2 à 20 ans, en moyenne 6 à 9 ans; plus la personne est jeune, plus l'évolution est rapide. (Source : Phaneuf (2007), p. 78, 80 et 82)",
	},
	{
		id: "q10",
		title: "Question 10",
		question: "Sur l'échelle de détérioration globale du Dr Barry Reisberg (7 stades), à quel stade la personne ne peut-elle plus vivre sans aide, tout en connaissant encore le nom de son conjoint et de ses enfants?",
		type: "radio",
		options: [
			{value: "a", label: "Stade 5 : démence précoce"},
			{value: "b", label: "Stade 2 : oublis"},
			{value: "c", label: "Stade 4 : état confusionnel marqué"},
			{value: "d", label: "Stade 7 : démence profonde"},
		],
		explanation:
			"Au stade 5 (affaiblissement modérément grave, démence précoce), la personne ne peut plus vivre sans aide, ne se souvient plus de son adresse ni de son numéro de téléphone, mais connaît le nom de son conjoint et de ses enfants. Au stade 4, elle nie son problème; au stade 6, elle peut oublier le nom de son conjoint; au stade 7 : aphasie, mutisme, grognements. (Source : Phaneuf (2007), p. 77 — tableau 3.3)",
	},
];

// Réponses correctes pour les questions à choix unique (radio)
export const correctRadioAnswers: Record<string, string> = {
	q1: "a",
	q2: "a",
	q4: "a",
	q6: "a",
	q7: "a",
	q8: "a",
	q10: "a",
};

// Réponses correctes pour les questions à choix multiples (checkbox)
export const correctCheckboxAnswers: Record<string, string[]> = {
	q3: ["a", "b"],
	q5: ["a", "b", "c", "d"],
	q9: ["a", "b", "c"],
};

// Export complete exam data
export const exam104Data: ExamData = {
	questions: exam104Questions,
	correctRadioAnswers,
	correctCheckboxAnswers,
};
