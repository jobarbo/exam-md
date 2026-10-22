/**
 * Examen 102: Vieillissement – Cours 2 – Principales théories en gérontologie sociale
 * Banque de 10 questions (5 tirées au hasard à chaque chargement)
 */

import type { Question, ExamData } from '../../types/exam';

export const exam102Questions: Question[] = [
	{
		id: "q1",
		title: "Question 1",
		question: "Quelle est la plus ancienne des théories en gérontologie sociale présentées par Bernadette Dallaire?",
		type: "radio",
		options: [
			{value: "a", label: "La théorie des rôles (Cottrell, 1942)"},
			{value: "b", label: "La théorie du désengagement (Cumming et Henry, 1961)"},
			{value: "c", label: "La théorie de l'activité (Havighurst, 1963)"},
			{value: "d", label: "La théorie de l'échange social (Dowd, 1980)"},
		],
		explanation:
			"La théorie des rôles (Cottrell, 1942) est la plus ancienne. Les individus jouent des rôles organisés selon une séquence temporelle (horloge sociale). En vieillissant, ils perdent des rôles plutôt que d'en gagner, ce qui peut entraîner une perte d'identité et d'estime de soi. (Source : Notes 1-2, p. 5 — Dallaire, 2018)",
	},
	{
		id: "q2",
		title: "Question 2",
		question: "Que postule la théorie du désengagement (Cumming et Henry, 1961)?",
		type: "radio",
		options: [
			{value: "a", label: "Le retrait est naturel, universel et mutuel (personne et entourage), et sert à maintenir l'équilibre du système social"},
			{value: "b", label: "Les personnes âgées actives sont plus satisfaites que les personnes non actives"},
			{value: "c", label: "Les personnes âgées remplacent les rôles perdus par des rôles similaires"},
			{value: "d", label: "Le statut des aînés dépend de l'équilibre entre leur contribution et les ressources qu'on leur consacre"},
		],
		explanation:
			"Pour la théorie du désengagement, le vieillissement « normal » est le retrait, naturel et universel. Ce désengagement est mutuel (fait par la personne et son entourage) et a pour fonction de maintenir l'équilibre du système social (lien avec le fonctionnalisme) en évitant les déséquilibres causés par la perte d'individus. Lagacé (2013) souligne que cette norme a pu légitimer des pratiques institutionnelles qui empêchent la participation des aînés. (Source : Notes 1-2, p. 5-6; Lagacé (2013), p. 26)",
	},
	{
		id: "q3",
		title: "Question 3",
		question: "Selon la théorie de l'activité (Havighurst, 1963), qu'est-ce que le vieillissement optimal?",
		type: "radio",
		options: [
			{value: "a", label: "Rester actif, poursuivre le plus longtemps possible les rôles du mitan de la vie (45-60 ans) et empêcher l'atrophie du réseau social"},
			{value: "b", label: "Se retirer progressivement de ses rôles pour laisser la place aux plus jeunes"},
			{value: "c", label: "Participer à la sous-culture des personnes âgées"},
			{value: "d", label: "Maintenir une personnalité mature, peu importe le niveau d'activité"},
		],
		explanation:
			"Pour Havighurst, les personnes âgées actives sont plus satisfaites et mieux adaptées. Il est préférable pour l'estime de soi de poursuivre les rôles joués au mitan de la vie (45-60 ans) le plus longtemps possible. Donc « vieillissement réussi » = vieillissement actif. (Source : Notes 1-2, p. 6)",
	},
	{
		id: "q4",
		title: "Question 4",
		question: "Quelles critiques sont adressées aux théories du désengagement et de l'activité?",
		type: "checkbox",
		options: [
			{value: "a", label: "Il est erroné d'avancer que le désengagement est inévitable et universel"},
			{value: "b", label: "La théorie de l'activité a un caractère normatif et responsabilise à outrance (maladie = vieillissement « raté »?)"},
			{value: "c", label: "Elles ne tiennent pas compte des préférences individuelles ni des antécédents et généralisent sans nuancer la culture et le contexte"},
			{value: "d", label: "Elles accordent trop d'importance aux différences culturelles entre les aînés"},
		],
		explanation:
			"Critiques : la TD a tort de présenter le désengagement comme inévitable et universel; la TA est normative et responsabilise à outrance (en cas de maladie ou de perte d'autonomie, vieillissement « raté »?). Les deux ne tiennent pas compte des préférences individuelles et des antécédents, généralisent et partagent une opposition « normal » vs « anormal ». (Source : Notes 1-2, p. 6)",
	},
	{
		id: "q5",
		title: "Question 5",
		question: "Que propose la théorie de la continuité (Neugarten, 1968)?",
		type: "radio",
		options: [
			{value: "a", label: "Les aînés substituent les rôles perdus par des rôles similaires; le vieillissement est réussi si la personne maintient une personnalité mature et équilibrée (vision plus individualiste)"},
			{value: "b", label: "Les aînés maintiennent leur identité par leur participation à la sous-culture des personnes âgées"},
			{value: "c", label: "Le statut des aînés décline avec la modernisation des sociétés"},
			{value: "d", label: "Le retrait des aînés est mutuel et fonctionnel"},
		],
		explanation:
			"Selon la théorie de la continuité, les personnes âgées remplacent les rôles perdus par des rôles similaires et maintiennent le même type de liens. Le vieillissement est réussi si la personne maintient une personnalité mature et équilibrée : c'est une vision plus individualiste (selon le parcours de chacun) plutôt que normative comme l'activité et le désengagement. (Source : Notes 1-2, p. 7)",
	},
	{
		id: "q6",
		title: "Question 6",
		question: "Selon la théorie de l'échange social (Dowd), de quoi dépend le statut social des personnes âgées?",
		type: "radio",
		options: [
			{value: "a", label: "De l'équilibre entre leur contribution à la société et les ressources que la société doit consacrer à les soutenir"},
			{value: "b", label: "De leur appartenance à une même génération"},
			{value: "c", label: "Uniquement de leur âge chronologique"},
			{value: "d", label: "De leur programmation génétique"},
		],
		explanation:
			"La théorie de l'échange social (« donnant-donnant ») : le statut social des aînés est le produit de l'équilibre entre leur contribution à la société et les ressources que celle-ci leur consacre. Quand la société estime qu'ils n'ont plus rien à donner et qu'ils font augmenter les coûts socio-sanitaires, ils perdent du pouvoir. (Source : Notes 1-2, p. 7)",
	},
	{
		id: "q7",
		title: "Question 7",
		question: "La perspective du parcours de vie se situe à l'intersection de quelles temporalités?",
		type: "checkbox",
		options: [
			{value: "a", label: "La temporalité biologique (vieillissement physique de la naissance à la mort)"},
			{value: "b", label: "L'histoire (collective)"},
			{value: "c", label: "L'historicité du sujet (trajectoire individuelle et vision de cette trajectoire)"},
			{value: "d", label: "La temporalité institutionnelle (durée des programmes gouvernementaux)"},
		],
		explanation:
			"Le paradigme du parcours de vie (plus qu'une théorie, une famille de théories) croise 3 temporalités : biologique, historique (collective) et l'historicité du sujet. Selon Hutchison (2005), il permet de relier les dimensions micro et macrosociales. (Source : Notes 1-2, p. 7-8)",
	},
	{
		id: "q8",
		title: "Question 8",
		question: "Dans la perspective du parcours de vie, qu'est-ce qui distingue une « génération » d'une « cohorte »?",
		type: "radio",
		options: [
			{value: "a", label: "Les membres d'une génération ont conscience de partager une culture, une identité et des référents qui les différencient des autres générations"},
			{value: "b", label: "Une génération regroupe des personnes nées la même année, une cohorte des personnes nées le même siècle"},
			{value: "c", label: "Les deux termes sont parfaitement synonymes"},
			{value: "d", label: "Une cohorte est définie par la conscience d'appartenance, une génération seulement par la date de naissance"},
		],
		explanation:
			"Une cohorte est un groupe de personnes nées durant la même période historique qui vivent les mêmes événements dans le même contexte culturel aux mêmes âges. La notion de cohorte n'est pas synonyme de génération : on parle de génération lorsque les membres ont conscience de partager une culture, une identité et des référents (ex. : baby-boomers, génération X, milléniaux). (Source : Notes 1-2, p. 8)",
	},
	{
		id: "q9",
		title: "Question 9",
		question: "Selon Lagacé (2013), dans sa conceptualisation initiale par Butler (1969), l'âgisme s'articule autour de quels trois éléments?",
		type: "radio",
		options: [
			{value: "a", label: "Des stéréotypes et préjugés, des comportements discriminatoires et des pratiques et politiques institutionnelles qui les perpétuent"},
			{value: "b", label: "La maladie, la pauvreté et l'isolement"},
			{value: "c", label: "Le désengagement, l'activité et la continuité"},
			{value: "d", label: "Le racisme, le sexisme et le capacitisme"},
		],
		explanation:
			"Pour Butler (1969), l'âgisme est un processus de discrimination envers les aînés qui combine : 1) des stéréotypes et préjugés (envers les aînés, la vieillesse et le vieillissement); 2) des comportements discriminatoires; 3) des pratiques et politiques institutionnelles qui perpétuent stéréotypes et discrimination. (Source : Lagacé (2013), p. 25)",
	},
	{
		id: "q10",
		title: "Question 10",
		question: "Quelles critiques Lagacé (2013) adresse-t-elle au modèle du vieillissement actif?",
		type: "checkbox",
		options: [
			{value: "a", label: "Le terme « actif » reste ancré dans le « faire » (emploi, bénévolat) au détriment de l'« être »"},
			{value: "b", label: "Il gomme l'influence des déterminants sociaux et suppose que vieillir activement est un « choix » individuel"},
			{value: "c", label: "Il risque de fragmenter la vieillesse et de stigmatiser les « non actifs » (ex. : le quatrième âge), avec un risque d'autostigmatisation"},
			{value: "d", label: "Il valorise trop la contemplation, la réminiscence et la méditation"},
		],
		explanation:
			"Lagacé montre que le vieillissement actif, malgré sa volonté d'inclusion, reste centré sur le « faire »; qu'il gomme les déterminants sociaux (les individus ne sont pas égaux devant le vieillissement); qu'il risque de fragmenter la vieillesse et de rediriger l'âgisme vers les aînés non actifs (quatrième âge, médias qui opposent « bon » et « mauvais » vieillissement), avec un risque d'autostigmatisation. Elle propose une approche inclusive valorisant le « faire » ET l'« être ». (Source : Lagacé (2013), p. 27-29)",
	},
];

// Réponses correctes pour les questions à choix unique (radio)
export const correctRadioAnswers: Record<string, string> = {
	q1: "a",
	q2: "a",
	q3: "a",
	q5: "a",
	q6: "a",
	q8: "a",
	q9: "a",
};

// Réponses correctes pour les questions à choix multiples (checkbox)
export const correctCheckboxAnswers: Record<string, string[]> = {
	q4: ["a", "b", "c"],
	q7: ["a", "b", "c"],
	q10: ["a", "b", "c"],
};

// Export complete exam data
export const exam102Data: ExamData = {
	questions: exam102Questions,
	correctRadioAnswers,
	correctCheckboxAnswers,
};
