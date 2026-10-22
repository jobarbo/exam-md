/**
 * Examen 103: Vieillissement – Cours 3 – Aspects démographiques du vieillissement
 * Banque de 10 questions (5 tirées au hasard à chaque chargement)
 */

import type { Question, ExamData } from '../../types/exam';

export const exam103Questions: Question[] = [
	{
		id: "q1",
		title: "Question 1",
		question: "Combien de personnes de 65 ans et plus le Québec comptait-il en 2021, et quelle part de la population cela représentait-il?",
		type: "radio",
		options: [
			{value: "a", label: "1,75 million, soit environ 20 % de la population"},
			{value: "b", label: "750 000, soit environ 7 % de la population"},
			{value: "c", label: "3 millions, soit environ 35 % de la population"},
			{value: "d", label: "1,1 million, soit environ 14 % de la population"},
		],
		explanation:
			"En 2021, le Québec comptait 1,75 million de personnes de 65 ans et plus, soit le cinquième (20 %) de la population. En 1971, leur part était de 7 %; elle passera à 26 % en 2041 selon les projections de l'ISQ. (Source : Notes 3, p. 2 — Portrait des personnes aînées au Québec)",
	},
	{
		id: "q2",
		title: "Question 2",
		question: "Pourquoi la proportion de femmes parmi les personnes aînées au Québec diminue-t-elle au fil du temps (59 % en 2001, 54 % en 2021)?",
		type: "radio",
		options: [
			{value: "a", label: "Parce que l'espérance de vie augmente plus rapidement chez les hommes que chez les femmes"},
			{value: "b", label: "Parce que l'espérance de vie des femmes diminue"},
			{value: "c", label: "Parce que les femmes aînées émigrent davantage"},
			{value: "d", label: "Parce qu'il naît moins de filles que de garçons"},
		],
		explanation:
			"En raison d'une augmentation plus rapide de l'espérance de vie chez les hommes que chez les femmes, la proportion de femmes parmi les aînés diminue : 59 % en 2001, 54 % en 2021 et 52 % prévus en 2041. (Source : Notes 3, p. 2)",
	},
	{
		id: "q3",
		title: "Question 3",
		question: "En 2021, quelle proportion des personnes aînées du Québec vivaient dans un ménage privé?",
		type: "radio",
		options: [
			{value: "a", label: "91 % (environ 9 % vivaient en logement collectif, ex. une RPA)"},
			{value: "b", label: "50 %"},
			{value: "c", label: "70 % (30 % en CHSLD)"},
			{value: "d", label: "99 %"},
		],
		explanation:
			"En 2021, 91 % des aînés vivaient dans un ménage privé et environ 9 % dans un logement collectif (ex. : résidence privée pour aînés). Les femmes aînées étaient plus susceptibles de vivre seules (33 % c. 22 %) et en logement collectif (11 % c. 6 %); les hommes vivaient plus souvent en couple (65 % c. 45 %). (Source : Notes 3, p. 2)",
	},
	{
		id: "q4",
		title: "Question 4",
		question: "Quels énoncés sur la santé et le bien-être des aînés québécois sont vrais?",
		type: "checkbox",
		options: [
			{value: "a", label: "Environ 81 % se perçoivent en bonne, très bonne ou excellente santé"},
			{value: "b", label: "Les trois quarts ont au moins une maladie chronique, mais environ 93 % n'ont aucune incapacité ou une incapacité légère"},
			{value: "c", label: "Environ 93 % sont satisfaits ou très satisfaits de leur vie"},
			{value: "d", label: "Ils ont plus d'idées suicidaires sérieuses que les plus jeunes"},
		],
		explanation:
			"81 % des 65 ans et plus se perçoivent en bonne santé ou mieux; les trois quarts ont au moins une maladie chronique, mais 93 % n'ont aucune incapacité ou une incapacité légère dans les AVQ; 93 % sont satisfaits de leur vie. Les idées suicidaires sérieuses sont MOINS fréquentes que chez les plus jeunes (1,4 % c. 3,3 % à 8 %). (Source : Notes 3, p. 6)",
	},
	{
		id: "q5",
		title: "Question 5",
		question: "En 2020, seulement 2 % des aînés étaient à faible revenu selon la Mesure du panier de consommation (MPC), contre 13 % selon la Mesure du faible revenu (MFR). Comment s'explique cet écart?",
		type: "radio",
		options: [
			{value: "a", label: "Une proportion d'aînés a un revenu situé entre les deux seuils : assez élevé pour la MPC, mais sous le seuil de la MFR"},
			{value: "b", label: "La MPC ne compte que les hommes"},
			{value: "c", label: "La MFR exclut les pensions de vieillesse"},
			{value: "d", label: "Les deux mesures portent sur des années différentes"},
		],
		explanation:
			"L'écart résulte du fait qu'une certaine proportion d'aînés se trouve entre les deux seuils : leur revenu est assez élevé pour ne pas être considéré faible selon la MPC, mais ne leur permet pas de dépasser le seuil de la MFR. Le revenu médian après impôt des 65 ans et plus était de 27 900 $ (34 200 $ hommes, 24 100 $ femmes). (Source : Notes 3, p. 3)",
	},
	{
		id: "q6",
		title: "Question 6",
		question: "Quel énoncé décrit correctement les aînés québécois en emploi en 2021?",
		type: "radio",
		options: [
			{value: "a", label: "C'est chez les 65 ans et plus qu'on observe la plus forte proportion de travailleurs autonomes (37 %)"},
			{value: "b", label: "La majorité des aînés en emploi travaillent à temps partiel"},
			{value: "c", label: "Le taux d'emploi des 65-69 ans a diminué depuis 2005"},
			{value: "d", label: "Les aînés représentent 25 % des personnes en emploi"},
		],
		explanation:
			"En 2021, 37 % des travailleurs de 65 ans et plus étaient autonomes (20 % ou moins chez les plus jeunes). La majorité (56 %) travaillait à temps plein; le taux d'emploi des 65-69 ans a augmenté (16 % → 25 % chez les hommes, 9 % → 16 % chez les femmes); les aînés formaient 4,0 % des personnes en emploi. (Source : Notes 3, p. 4)",
	},
	{
		id: "q7",
		title: "Question 7",
		question: "Selon la vidéo de l'AFP (2015) sur le vieillissement de la population mondiale, comment évolue le nombre d'actifs pour chaque personne de plus de 60 ans?",
		type: "radio",
		options: [
			{value: "a", label: "12 actifs en 1950, 8 en 2013 et 4 en 2050"},
			{value: "b", label: "4 actifs en 1950, 8 en 2013 et 12 en 2050"},
			{value: "c", label: "Il reste stable à 8 actifs"},
			{value: "d", label: "2 actifs en 1950, 1 en 2050"},
		],
		explanation:
			"En 1950, il y avait 12 actifs pour chaque personne de plus de 60 ans; en 2013, 8 pour 1; en 2050, 4 pour 1. La faible fécondité et l'amélioration des conditions de santé amplifient le vieillissement mondial : les 60 ans et plus passeront de 841 millions (2014) à 2 milliards (2050). (Source : Notes 3, p. 1)",
	},
	{
		id: "q8",
		title: "Question 8",
		question: "Selon Légaré (2009), quel mécanisme démographique provoque, dans un premier temps, le vieillissement des populations?",
		type: "radio",
		options: [
			{value: "a", label: "La baisse de la fécondité"},
			{value: "b", label: "La baisse de la mortalité infantile"},
			{value: "c", label: "L'immigration"},
			{value: "d", label: "Les guerres mondiales"},
		],
		explanation:
			"Légaré souligne que c'est la baisse de la fécondité qui, dans un premier temps, provoque le vieillissement des populations, contrairement à ceux qui affirment que la baisse de la mortalité en a été le moteur : le contrôle de la mortalité infantile a d'abord RAJEUNI les populations. Aujourd'hui, la réduction de la mortalité des adultes et des aînés prend le relais. (Source : Légaré (2009), p. 15)",
	},
	{
		id: "q9",
		title: "Question 9",
		question: "Comment Légaré (2009) définit-il l'éthique intergénérationnelle qui devrait guider la gestion du vieillissement?",
		type: "radio",
		options: [
			{value: "a", label: "Un bon dosage de solidarité intergénérationnelle et d'équité intergénérationnelle"},
			{value: "b", label: "La priorité absolue aux besoins des plus jeunes générations"},
			{value: "c", label: "La suppression des programmes sociaux de retraite"},
			{value: "d", label: "La prise en charge exclusive des aînés par leur famille"},
		],
		explanation:
			"Légaré voit le vieillissement comme un phénomène très positif (fruit du contrôle de la mortalité et de la fécondité), mais qui doit être bien géré : il faut revoir les programmes de santé et de retraite pour une gestion équitable pour toutes les générations, dans un esprit d'éthique intergénérationnelle, définie comme un bon dosage de solidarité et d'équité intergénérationnelles. (Source : Légaré (2009), p. 15-16)",
	},
	{
		id: "q10",
		title: "Question 10",
		question: "Selon Statistique Canada (2022), quels énoncés sur les générations au Recensement de 2021 sont vrais?",
		type: "checkbox",
		options: [
			{value: "a", label: "Pour la première fois depuis la fin du baby-boom, les baby-boomers (nés entre 1946 et 1965) forment moins du quart de la population (24,9 %)"},
			{value: "b", label: "Les millénariaux (nés entre 1981 et 1996) sont la génération qui a crû le plus rapidement, surtout grâce à l'immigration"},
			{value: "c", label: "Les millénariaux forment la plus grande part de la population en âge de travailler (33,2 %)"},
			{value: "d", label: "Les baby-boomers représentaient moins de 10 % de la population en 1966"},
		],
		explanation:
			"Les baby-boomers (56 à 75 ans en 2021) représentent 24,9 % de la population contre 41,7 % en 1966. Les millénariaux ont crû de 8,6 % entre 2016 et 2021 grâce à l'immigration et forment 33,2 % de la population de 15 à 64 ans. (Source : Statistique Canada (2022), p. 3)",
	},
];

// Réponses correctes pour les questions à choix unique (radio)
export const correctRadioAnswers: Record<string, string> = {
	q1: "a",
	q2: "a",
	q3: "a",
	q5: "a",
	q6: "a",
	q7: "a",
	q8: "a",
	q9: "a",
};

// Réponses correctes pour les questions à choix multiples (checkbox)
export const correctCheckboxAnswers: Record<string, string[]> = {
	q4: ["a", "b", "c"],
	q10: ["a", "b", "c"],
};

// Export complete exam data
export const exam103Data: ExamData = {
	questions: exam103Questions,
	correctRadioAnswers,
	correctCheckboxAnswers,
};
