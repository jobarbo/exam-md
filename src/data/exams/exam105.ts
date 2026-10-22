/**
 * Examen 105: Vieillissement – Cours 5 – Aspects psychologiques du vieillissement
 * Banque de 10 questions (5 tirées au hasard à chaque chargement)
 */

import type { Question, ExamData } from '../../types/exam';

export const exam105Questions: Question[] = [
	{
		id: "q1",
		title: "Question 1",
		question: "Comment Hétu (2016) définit-il le vieillissement?",
		type: "radio",
		options: [
			{value: "a", label: "Le déclin plus ou moins graduel de la vigueur, de la santé et des fonctions cognitives, qui met la personne au défi de mobiliser ses ressources pour satisfaire ses besoins physiques, affectifs et son besoin de sens"},
			{value: "b", label: "Un naufrage inévitable qui mène à la dépendance totale"},
			{value: "c", label: "Le simple passage du cap des 65 ans"},
			{value: "d", label: "Une maladie chronique qu'il faut traiter"},
		],
		explanation:
			"Hétu définit le vieillissement comme le déclin graduel de la vigueur, de la santé et des fonctions cognitives, déclin qui met la personne au défi de mobiliser ses ressources pour maintenir la satisfaction de ses besoins physiques et affectifs ainsi que de son besoin de sens. Cette définition donne à la personne une certaine prise sur son vieillissement (habitudes de vie, réseau, attitudes). (Source : Hétu (2016), p. 9)",
	},
	{
		id: "q2",
		title: "Question 2",
		question: "Selon Hétu (2016), quand peut-on considérer qu'une personne âgée est adaptée?",
		type: "radio",
		options: [
			{value: "a", label: "Lorsqu'elle peut faire face aux demandes de son environnement (composante objective) ET qu'elle éprouve un sentiment de bien-être parce que cet environnement satisfait ses besoins (composante subjective)"},
			{value: "b", label: "Dès qu'elle se sent bien dans sa peau, même si elle néglige ses comptes"},
			{value: "c", label: "Uniquement lorsqu'elle n'a aucune incapacité physique"},
			{value: "d", label: "Lorsqu'elle vit en résidence pour aînés"},
		],
		explanation:
			"L'adaptation combine une composante objective (faire face aux demandes de l'environnement) et une composante subjective (sentiment de bien-être). Une personne qui se sent bien mais laisse ses ordures s'accumuler ne serait pas considérée adaptée. Satisfaction de vie, bien-être, adaptation et autonomie fonctionnent comme des « vases communicants ». (Source : Hétu (2016), p. 9-11)",
	},
	{
		id: "q3",
		title: "Question 3",
		question: "Quels points de repère Hétu (2016) propose-t-il pour maintenir l'autonomie psychologique des personnes en perte d'autonomie physique?",
		type: "checkbox",
		options: [
			{value: "a", label: "Promouvoir les choix personnels (ex. : vêtements, activités), dans le cadre d'une dépendance acceptée"},
			{value: "b", label: "Rendre l'environnement prévisible (informer, solliciter l'assentiment)"},
			{value: "c", label: "Éliminer les stéréotypes de nature à susciter un sentiment d'impuissance"},
			{value: "d", label: "Prendre les décisions à la place de la personne pour lui éviter du stress"},
		],
		explanation:
			"Trois enjeux pour l'intervention : 1) promouvoir les choix personnels (une aide consentie dans une dépendance acceptée diminue le sentiment d'impuissance); 2) rendre l'environnement prévisible pour augmenter le sentiment de contrôle; 3) éliminer les stéréotypes qui portent à décider à la place des bénéficiaires. Baltes et Carstensen notent que l'entourage « ignore l'indépendance et récompense la dépendance ». (Source : Hétu (2016), p. 10-12)",
	},
	{
		id: "q4",
		title: "Question 4",
		question: "À partir de l'étude de Lee (2003) auprès de stagiaires en psychologie, quel enchaînement Hétu (2016) met-il en lumière?",
		type: "radio",
		options: [
			{value: "a", label: "Stéréotypes (généralisations simplistes) → préjugés (dispositions défavorables) → comportements préjudiciables (ex. : priver les aînés de services)"},
			{value: "b", label: "Préjugés → stéréotypes → bienveillance"},
			{value: "c", label: "Comportements préjudiciables → stéréotypes → oubli"},
			{value: "d", label: "Expérience → préjugés → respect"},
		],
		explanation:
			"Des stagiaires croyaient qu'« on ne peut pas faire grand-chose pour quelqu'un qui a dépassé soixante-dix ans ». Cela illustre l'enchaînement : stéréotypes → préjugés → comportements préjudiciables, comme priver les aînés des services dont ils ont besoin. Palmore qualifie racisme, sexisme et âgisme de « maladies sociales ». (Source : Hétu (2016), p. 12-13)",
	},
	{
		id: "q5",
		title: "Question 5",
		question: "Qu'est-ce que la « rectitude gérontologique » selon Hétu (2016)?",
		type: "radio",
		options: [
			{value: "a", label: "Des stéréotypes positifs présentant les aînés comme toujours alertes et actifs, ce qui peut nuire à l'estime de soi de ceux qui vivent des déclins"},
			{value: "b", label: "Une règle déontologique pour les gérontologues"},
			{value: "c", label: "L'obligation légale de prendre sa retraite à 65 ans"},
			{value: "d", label: "Une méthode d'évaluation des capacités cognitives"},
		],
		explanation:
			"Même les stéréotypes positifs peuvent avoir un effet pervers : la rectitude gérontologique dépeint les aînés comme physiquement et mentalement alertes, actifs socialement et sexuellement, toujours en projet. Confrontés à cette vision idyllique (ex. : magazines, Vézina et al., 2007), ceux qui vivent des déclins risquent de développer une image négative d'eux-mêmes. Il faut une image positive mais réaliste. (Source : Hétu (2016), p. 13)",
	},
	{
		id: "q6",
		title: "Question 6",
		question: "Dans le modèle d'Erikson, quel est l'enjeu de la crise propre à la vieillesse?",
		type: "radio",
		options: [
			{value: "a", label: "Intégrité vs dégoût ou désespoir"},
			{value: "b", label: "Générativité vs stagnation"},
			{value: "c", label: "Intimité vs isolement"},
			{value: "d", label: "Identité vs diffusion"},
		],
		explanation:
			"À la vieillesse (besoin de comprendre et d'accepter), l'enjeu est l'intégrité (accepter ce qu'on a été et ce qu'on est, se sentir en communion avec les humains) contre le dégoût ou le désespoir (voir le temps trop court pour se reprendre). La générativité vs stagnation correspond à la maturité. Erikson divise la vie en huit étapes; une étape mal vécue rend la suivante plus difficile. (Source : Hétu (2016), p. 59-61 — tableau 1)",
	},
	{
		id: "q7",
		title: "Question 7",
		question: "Quelles faiblesses Hétu (2016) attribue-t-il aux modèles du cycle de vie?",
		type: "checkbox",
		options: [
			{value: "a", label: "L'aspect arbitraire des découpages en périodes, surtout quand on y associe des âges"},
			{value: "b", label: "Ils ne tiennent pas compte des événements imprévus (divorces, abolitions de postes…)"},
			{value: "c", label: "Ils rendent difficilement compte de la complexité de l'être humain et de la variabilité de ses réponses"},
			{value: "d", label: "Ils négligent les effets de cohorte (changements économiques et culturels)"},
			{value: "e", label: "Ils ne permettent pas aux intervenants de mieux comprendre leur clientèle"},
		],
		explanation:
			"Quatre faiblesses : découpages arbitraires (d'où un cycle de vie « post-moderne »); événements imprévus; complexité humaine; effets de cohorte. Mais ces modèles ont aussi des forces : rendre compte du changement personnel, articuler psychologie et social par le concept de rôle, rendre prévisibles les défis, et aider les intervenants à comprendre leur clientèle (« résonance développementale »). (Source : Hétu (2016), p. 63-65)",
	},
	{
		id: "q8",
		title: "Question 8",
		question: "Comment Hétu (2016) définit-il une transition?",
		type: "radio",
		options: [
			{value: "a", label: "Un événement qui entraîne des changements durables dans nos relations, nos rôles, nos routines, nos croyances et notre concept de soi"},
			{value: "b", label: "Tout événement spectaculaire, même sans changement durable"},
			{value: "c", label: "Un état de détresse qui dépasse les ressources de la personne"},
			{value: "d", label: "Une étape obligatoirement vécue à un âge précis"},
		],
		explanation:
			"La transition est un événement qui entraîne des changements dans les relations, rôles, routines, croyances et le concept de soi (Nuttman-Shwartz, 2004). Il faut des changements durables : une chute dont on dit « j'ai été chanceuse » n'est pas une transition, mais si elle amène la personne à réorganiser sa vie, il y a eu transition. La crise, elle, est un état de détresse quand les ressources ne suffisent pas. (Source : Hétu (2016), p. 66-67 et 71)",
	},
	{
		id: "q9",
		title: "Question 9",
		question: "Que révèlent les recherches empiriques sur la « crise du mi-temps de la vie », selon Hétu (2016)?",
		type: "radio",
		options: [
			{value: "a", label: "Elle laisse peu de traces : elle toucherait 5 à 10 % de la population, et certains spécialistes la qualifient de mythe"},
			{value: "b", label: "Elle touche presque tous les adultes vers 45 ans"},
			{value: "c", label: "Elle est la principale cause de dépression chez les aînés"},
			{value: "d", label: "Elle a été démontrée par Erikson en 1968"},
		],
		explanation:
			"Le concept, lancé par Elliot Jaques (années 1960) et popularisé par Gail Sheehy (Passages, 1975), trouve peu d'appui empirique : certaines études la limitent à 5 à 10 % de la population et des spécialistes la qualifient de mythe. De même, aucune crise typique n'est observée pour la ménopause, le nid vide ou la retraite (93 % de retraités satisfaits). Mieux vaut voir le cycle de vie comme une suite continue d'enjeux développementaux. (Source : Hétu (2016), p. 72-75)",
	},
	{
		id: "q10",
		title: "Question 10",
		question: "Selon la conférence du CREGÉS « Soutenir les personnes âgées endeuillées », quels sont les signes d'un deuil complexe?",
		type: "checkbox",
		options: [
			{value: "a", label: "Un déni qui perdure dans le temps"},
			{value: "b", label: "La durée : des émotions qui restent fortes pendant 3 à 5 ans (alors qu'un deuil dure normalement 1 à 2 ans)"},
			{value: "c", label: "Des idées suicidaires"},
			{value: "d", label: "Pleurer souvent durant les premières semaines suivant le décès"},
		],
		explanation:
			"Trois indices d'un deuil complexe : 1) un déni qui perdure; 2) la durée (normalement 1 à 2 ans, mais émotions fortes pendant 3 à 5 ans); 3) des idées suicidaires. Les aînés sont souvent plus résilients face au deuil, mais il faut reconnaître leur perte, cibler les pertes secondaires et proposer des rituels pour donner un sens à la perte. (Source : Notes 5, p. 1-3)",
	},
];

// Réponses correctes pour les questions à choix unique (radio)
export const correctRadioAnswers: Record<string, string> = {
	q1: "a",
	q2: "a",
	q4: "a",
	q5: "a",
	q6: "a",
	q8: "a",
	q9: "a",
};

// Réponses correctes pour les questions à choix multiples (checkbox)
export const correctCheckboxAnswers: Record<string, string[]> = {
	q3: ["a", "b", "c"],
	q7: ["a", "b", "c", "d"],
	q10: ["a", "b", "c"],
};

// Export complete exam data
export const exam105Data: ExamData = {
	questions: exam105Questions,
	correctRadioAnswers,
	correctCheckboxAnswers,
};
