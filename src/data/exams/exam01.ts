/**
 * Examen 01: Problèmes sociaux et théories du travail social
 * Ce fichier contient toutes les questions et réponses pour le premier examen
 */

import type { Question, ExamData } from '../../types/exam';

export const exam01Questions: Question[] = [
	{
		id: "q1",
		title: "Question 1",
		question: "Selon la définition internationale du travail social, quels principes sont au cœur du travail social?",
		type: "checkbox",
		options: [
			{ value: "a", label: "Les principes de justice sociale" },
			{ value: "b", label: "Le droit de la personne" },
			{ value: "c", label: "La responsabilité sociale collective" },
			{ value: "d", label: "Le respect des diversités" },
			{ value: "e", label: "La rentabilité économique" },
			{ value: "f", label: "L'efficacité administrative" },
		],
		explanation:
			"Selon la définition internationale du travail social, les principes de justice sociale, le droit de la personne, de responsabilité sociale collective et de respect des diversités sont au cœur du travail social. (Source: Fondement_1/1.md - Définition internationale du travail social)",
	},
	{
		id: "q2",
		title: "Question 2",
		question: "Quelles sont les trois conditions essentielles à l'existence d'un problème social selon Mayer et Laforest?",
		type: "checkbox",
		options: [
			{ value: "a", label: "La constatation d'une situation-problème" },
			{ value: "b", label: "L'élaboration d'un jugement sur la situation" },
			{ value: "c", label: "Le sentiment de pouvoir modifier la situation" },
			{ value: "d", label: "L'approbation gouvernementale" },
			{ value: "e", label: "Le financement adéquat" },
			{ value: "f", label: "La couverture médiatique" },
		],
		explanation:
			"Les trois conditions essentielles sont: la constatation d'une situation-problème (prise de conscience), l'élaboration d'un jugement sur celle-ci (basé sur les valeurs sociales), et le sentiment de pouvoir modifier la situation (croyance en la possibilité d'intervention). (Source: Mayer et Laforest, 1990, p. 21)",
	},
	{
		id: "q3",
		title: "Question 3",
		question: "Selon C.W. Mills, quelle est la distinction importante pour analyser les problèmes sociaux?",
		type: "radio",
		options: [
			{ value: "a", label: "Entre problèmes économiques et problèmes sociaux" },
			{ value: "b", label: "Entre épreuves personnelles et enjeux collectifs" },
			{ value: "c", label: "Entre problèmes urbains et problèmes ruraux" },
			{ value: "d", label: "Entre problèmes structurels et problèmes culturels" },
		],
		explanation:
			"C.W. Mills distingue entre les « épreuves personnelles » qui surgissent au sein du caractère de l'individu et affectent ses rapports immédiats avec autrui, et les « enjeux collectifs » qui soulèvent des questions transcendant le voisinage de l'individu. Ces deux niveaux d'analyse doivent se compléter. (Source: Mayer et Laforest, 1990 - L'imagination sociologique de Mills)",
	},
	{
		id: "q4",
		title: "Question 4",
		question: "Comment Merton et Nisbet définissent-ils un problème social?",
		type: "radio",
		options: [
			{ value: "a", label: "Une situation qui affecte uniquement les pauvres" },
			{ value: "b", label: "Un écart entre ce qui est et ce que les gens pensent devoir être" },
			{ value: "c", label: "Une déviation de la norme légale" },
			{ value: "d", label: "Un conflit entre deux groupes sociaux" },
		],
		explanation:
			"Selon Merton et Nisbet, un problème social consiste en un écart entre ce qui est et ce que les gens pensent devoir être (ou entre les conditions actuelles et les valeurs et normes sociales), écart considéré corrigible. (Source: Mayer et Laforest, 1990 - Merton et Nisbet, 1961)",
	},
	{
		id: "q5",
		title: "Question 5",
		question: "Selon l'École de Chicago, comment la ville est-elle conçue?",
		type: "radio",
		options: [
			{ value: "a", label: "Comme un système économique centralisé" },
			{ value: "b", label: "En référence à une métaphore écologique" },
			{ value: "c", label: "Comme une institution politique" },
			{ value: "d", label: "Comme un simple agrégat d'individus" },
		],
		explanation:
			"L'École de Chicago concevait l'univers urbain en référence à une métaphore écologique. La ville est divisée en zones naturelles (quartiers), avec des modes de communication et d'échanges qui s'établissent selon le principe d'une adaptation mutuelle. (Source: Mayer et Laforest, 1990, p. 24 - L'École de Chicago et le modèle écologique)",
	},
	{
		id: "q6",
		title: "Question 6",
		question: "Dans l'approche fonctionnaliste, comment les problèmes sociaux sont-ils principalement définis?",
		type: "checkbox",
		options: [
			{ value: "a", label: "Comme des problèmes de désorganisation sociale" },
			{ value: "b", label: "Comme des problèmes de déviance sociale" },
			{ value: "c", label: "Comme des problèmes de conflits de classes" },
			{ value: "d", label: "Comme des problèmes de révolution" },
			{ value: "e", label: "Comme des problèmes d'exploitation" },
		],
		explanation:
			"Pour les fonctionnalistes, les problèmes sociaux sont soit des problèmes de désorganisation sociale (condition qui empêche la structure sociale de fonctionner), soit des problèmes de déviance sociale (écarts significatifs de la norme). (Source: Mayer et Laforest, 1990, p. 27-28 - Le fonctionnalisme)",
	},
	{
		id: "q7",
		title: "Question 7",
		question: "Selon l'approche critique du conflit social, d'où proviennent essentiellement les problèmes sociaux?",
		type: "radio",
		options: [
			{ value: "a", label: "Des échecs individuels à remplir les rôles sociaux" },
			{ value: "b", label: "Des dysfonctions du système social" },
			{ value: "c", label: "Des contradictions inhérentes au système capitaliste" },
			{ value: "d", label: "De l'absence de valeurs morales" },
		],
		explanation:
			"L'approche critique du conflit social conçoit les problèmes sociaux comme provenant des contradictions inhérentes au système capitaliste. Le problème est dans la structure capitaliste elle-même, et non dans un dysfonctionnement temporaire. (Source: Mayer et Laforest, 1990, p. 29 - La perspective du conflit)",
	},
	{
		id: "q8",
		title: "Question 8",
		question: "Quelle est la principale différence entre l'approche pluraliste du conflit et l'approche critique du conflit?",
		type: "radio",
		options: [
			{ value: "a", label: "L'approche pluraliste nie l'existence de conflits" },
			{ value: "b", label: "L'approche pluraliste voit les conflits comme un élément sain de la société" },
			{ value: "c", label: "L'approche critique nie l'existence de classes sociales" },
			{ value: "d", label: "L'approche pluraliste recherche une révolution" },
		],
		explanation:
			"L'approche pluraliste du conflit considère les conflits comme un élément normal et même sain de la société, permettant l'adaptation. Contrairement à l'approche critique qui voit les conflits comme provenant des contradictions du système capitaliste nécessitant une transformation radicale. (Source: Mayer et Laforest, 1990, p. 28-29)",
	},
	{
		id: "q9",
		title: "Question 9",
		question: "Selon l'approche structurelle en travail social, où réside la cause des problèmes sociaux?",
		type: "radio",
		options: [
			{ value: "a", label: "Dans les déficits individuels" },
			{ value: "b", label: "Dans les structures sociales et les rapports de pouvoir" },
			{ value: "c", label: "Dans le manque d'adaptation personnelle" },
			{ value: "d", label: "Dans l'absence de politiques sociales" },
		],
		explanation:
			"L'approche structurelle en travail social considère que les problèmes sociaux résident dans les structures sociales et les rapports de pouvoir, et non dans les individus eux-mêmes. Elle s'inspire du marxisme et des théories critiques. (Source: Mayer et Laforest, 1990, p. 30-31 - L'approche structurelle)",
	},
	{
		id: "q10",
		title: "Question 10",
		question: "Qu'est-ce qui différencie principalement l'intervention structurelle de l'intervention traditionnelle en travail social?",
		type: "radio",
		options: [
			{ value: "a", label: "L'intervention structurelle se concentre sur les déficits individuels" },
			{ value: "b", label: "L'intervention structurelle vise la transformation des structures oppressives" },
			{ value: "c", label: "L'intervention structurelle nie l'importance de l'aide individuelle" },
			{ value: "d", label: "L'intervention traditionnelle rejette l'aide gouvernementale" },
		],
		explanation:
			"L'intervention structurelle vise la transformation des structures qui oppriment les personnes, plutôt que de se concentrer uniquement sur l'adaptation de l'individu. Elle intègre une analyse politique et cherche à modifier les rapports de pouvoir. (Source: Mayer et Laforest, 1990, p. 31-32)",
	},
	{
		id: "q11",
		title: "Question 11",
		question: "Selon l'approche constructiviste, comment sont définis les problèmes sociaux?",
		type: "radio",
		options: [
			{ value: "a", label: "Comme des conditions objectives mesurables" },
			{ value: "b", label: "Comme des constructions sociales issues d'un processus de définition collective" },
			{ value: "c", label: "Comme des dysfonctions naturelles du système social" },
			{ value: "d", label: "Comme des pathologies individuelles" },
		],
		explanation:
			"L'approche constructiviste considère les problèmes sociaux non comme des conditions objectives, mais comme des constructions sociales résultant d'un processus de définition collective. L'accent est mis sur comment certaines situations deviennent définies comme problématiques. (Source: Mayer et Laforest, 1990, p. 33-34 - Le constructivisme social)",
	},
	{
		id: "q12",
		title: "Question 12",
		question: "Pour les constructivistes, quel est le rôle des claims-makers (revendicateurs) dans la définition des problèmes sociaux?",
		type: "radio",
		options: [
			{ value: "a", label: "Ils découvrent objectivement les problèmes sociaux" },
			{ value: "b", label: "Ils participent activement à construire et définir ce qui est problématique" },
			{ value: "c", label: "Ils documentent scientifiquement les faits sociaux" },
			{ value: "d", label: "Ils appliquent les politiques déjà établies" },
		],
		explanation:
			"Les claims-makers (revendicateurs) jouent un rôle actif dans la construction sociale des problèmes. Ils attirent l'attention sur certaines conditions, les nomment, les définissent et mobilisent les ressources pour en faire des enjeux publics. (Source: Mayer et Laforest, 1990, p. 34-35)",
	},
	{
		id: "q13",
		title: "Question 13",
		question: "Quelles sont les principales caractéristiques de l'approche écologique en travail social?",
		type: "checkbox",
		options: [
			{ value: "a", label: "Met l'accent sur les transactions entre personne et environnement" },
			{ value: "b", label: "Considère l'adaptation mutuelle personne-milieu" },
			{ value: "c", label: "Privilégie une vision systémique" },
			{ value: "d", label: "Se concentre uniquement sur les déficits individuels" },
			{ value: "e", label: "Rejette toute intervention au niveau des structures" },
		],
		explanation:
			"L'approche écologique en travail social met l'accent sur les transactions entre la personne et son environnement, considère l'adaptation mutuelle, et privilégie une vision systémique des situations. Elle cherche à améliorer l'adéquation entre les besoins de la personne et les ressources de l'environnement. (Source: Mayer et Laforest, 1990, p. 32-33)",
	},
	{
		id: "q14",
		title: "Question 14",
		question: "Qu'est-ce qui caractérise l'approche « multi-théories » en travail social?",
		type: "radio",
		options: [
			{ value: "a", label: "Le rejet de toute théorie au profit de l'intuition" },
			{ value: "b", label: "L'utilisation éclectique de différentes théories selon les situations" },
			{ value: "c", label: "L'adhésion stricte à une seule école de pensée" },
			{ value: "d", label: "Le rejet des connaissances scientifiques" },
		],
		explanation:
			"L'approche multi-théories ou éclectique reconnaît qu'aucune théorie unique ne peut expliquer tous les problèmes sociaux. Elle propose d'utiliser différents cadres théoriques selon les situations, en les combinant de manière réfléchie et cohérente. (Source: Mayer et Laforest, 1990, p. 35-36)",
	},
	{
		id: "q15",
		title: "Question 15",
		question: "Quelle est la principale contribution de l'interactionnisme symbolique à l'analyse des problèmes sociaux?",
		type: "radio",
		options: [
			{ value: "a", label: "L'analyse des structures économiques" },
			{ value: "b", label: "L'importance des significations et des définitions de la situation" },
			{ value: "c", label: "L'étude des fonctions sociales" },
			{ value: "d", label: "L'analyse des conflits de classes" },
		],
		explanation:
			"L'interactionnisme symbolique met l'accent sur les significations que les acteurs donnent aux situations et aux interactions. La définition de la situation par les acteurs devient centrale pour comprendre les problèmes sociaux. (Source: Mayer et Laforest, 1990, p. 33-34)",
	},
	{
		id: "q16",
		title: "Question 16",
		question: "Selon la théorie de l'étiquetage (labeling theory), qu'est-ce qui crée la déviance?",
		type: "radio",
		options: [
			{ value: "a", label: "Les caractéristiques intrinsèques de l'individu déviant" },
			{ value: "b", label: "La réaction sociale et l'attribution d'une étiquette" },
			{ value: "c", label: "Les conditions biologiques anormales" },
			{ value: "d", label: "L'absence de socialisation adéquate" },
		],
		explanation:
			"La théorie de l'étiquetage soutient que la déviance n'est pas une qualité de l'acte mais le résultat de l'application d'une étiquette par d'autres. C'est la réaction sociale qui crée le déviant, pas nécessairement l'acte lui-même. (Source: Mayer et Laforest, 1990, p. 34)",
	},
	{
		id: "q17",
		title: "Question 17",
		question: "Quels sont les éléments clés de la définition du travail social adoptée en 2014 par l'IFSW et l'IASSW?",
		type: "checkbox",
		options: [
			{ value: "a", label: "Une profession basée sur la pratique" },
			{ value: "b", label: "Une discipline académique" },
			{ value: "c", label: "Promotion du changement et du développement social" },
			{ value: "d", label: "Fondée sur les principes de justice sociale et droits humains" },
			{ value: "e", label: "Centrée sur la cohésion sociale" },
			{ value: "f", label: "Vise l'autonomisation des personnes" },
		],
		explanation:
			"La définition internationale du travail social (2014) le décrit comme: une profession basée sur la pratique, une discipline académique, promouvant le changement et développement social, fondée sur les principes de justice sociale, droits humains, responsabilité collective, respect des diversités, visant la cohésion sociale et l'autonomisation des personnes. (Source: Fondement_1/1.md)",
	},
	{
		id: "q18",
		title: "Question 18",
		question: "Selon Parson, quel est le rôle principal du système social?",
		type: "radio",
		options: [
			{ value: "a", label: "Créer des conflits pour favoriser le changement" },
			{ value: "b", label: "Maintenir l'équilibre et l'intégration sociale" },
			{ value: "c", label: "Générer des inégalités pour motiver les individus" },
			{ value: "d", label: "Favoriser la révolution sociale" },
		],
		explanation:
			"Selon Parsons et le fonctionnalisme structurel, le système social vise à maintenir l'équilibre et l'intégration. Chaque partie du système remplit des fonctions qui contribuent au maintien de l'ensemble. Les problèmes sociaux sont vus comme des dysfonctions temporaires. (Source: Mayer et Laforest, 1990, p. 27-28)",
	},
	{
		id: "q19",
		title: "Question 19",
		question: "Quelle est la différence entre les problèmes sociaux manifestes et latents selon Merton et Nisbet?",
		type: "radio",
		options: [
			{ value: "a", label: "Manifestes sont économiques, latents sont sociaux" },
			{ value: "b", label: "Manifestes sont reconnus, latents ne sont pas largement identifiés" },
			{ value: "c", label: "Manifestes sont urbains, latents sont ruraux" },
			{ value: "d", label: "Manifestes sont individuels, latents sont collectifs" },
		],
		explanation:
			"Les problèmes manifestes sont ceux généralement reconnus comme des problèmes. Les problèmes latents sont des conditions qui ne sont pas largement identifiées comme problèmes, bien qu'elles soient en désaccord avec les intérêts et les valeurs des gens. (Source: Mayer et Laforest, 1990, p. 27 - Merton et Nisbet, 1961)",
	},
	{
		id: "q20",
		title: "Question 20",
		question: "Selon Tachon, quelles sont les trois conditions nécessaires pour qu'une situation soit définie comme « problème social »?",
		type: "checkbox",
		options: [
			{ value: "a", label: "La mise en évidence d'un contexte singulier comme manifestation d'une contradiction générale" },
			{ value: "b", label: "Un groupe social ayant accès aux instances de décisions" },
			{ value: "c", label: "La légitimité de ce groupe à inscrire la question dans le champ des problèmes" },
			{ value: "d", label: "Un budget gouvernemental suffisant" },
			{ value: "e", label: "Un consensus populaire total" },
		],
		explanation:
			"Selon Tachon, trois conditions sont nécessaires: 1) La mise en évidence d'un contexte singulier comme manifestation d'une contradiction générale, 2) Un groupe social intégré dans les réseaux de pouvoir ayant accès aux instances de décisions, 3) La légitimité de ce groupe à inscrire cette question dans le champ des problèmes. (Source: Mayer et Laforest, 1990, p. 20 - Tachon, 1985)",
	},
];

// Réponses correctes pour les questions à choix unique (radio)
export const correctRadioAnswers: Record<string, string> = {
	q3: "b",
	q4: "b",
	q5: "b",
	q7: "c",
	q8: "b",
	q9: "b",
	q10: "b",
	q11: "b",
	q12: "b",
	q14: "b",
	q15: "b",
	q16: "b",
	q18: "b",
	q19: "b",
};

// Réponses correctes pour les questions à choix multiples (checkbox)
export const correctCheckboxAnswers: Record<string, string[]> = {
	q1: ["a", "b", "c", "d"],
	q2: ["a", "b", "c"],
	q6: ["a", "b"],
	q13: ["a", "b", "c"],
	q17: ["a", "b", "c", "d", "e", "f"],
	q20: ["a", "b", "c"],
};

// Export complete exam data
export const exam01Data: ExamData = {
	questions: exam01Questions,
	correctRadioAnswers,
	correctCheckboxAnswers,
};

