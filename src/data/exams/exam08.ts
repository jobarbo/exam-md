/**
 * Examen 08: Institutions et pouvoir
 * Ce fichier contient toutes les questions et réponses pour l'examen 08
 */

import type { Question, ExamData } from '../../types/exam';

export const exam08Questions: Question[] = [
	{
		id: "q1",
		title: "Question 1",
		question: "Selon Foucault, comment le pouvoir s'exerce-t-il?",
		type: "radio",
		options: [
			{value: "a", label: "Il est détenu ou possédé par une seule personne"},
			{value: "b", label: "Il est exercé dans la société au travers de dispositifs et de pratiques"},
			{value: "c", label: "Il n'existe que dans le gouvernement"},
			{value: "d", label: "Il est uniquement économique"},
		],
		explanation:
			"Pour Foucault, le pouvoir n'est pas détenu ou possédé, mais exercé dans la société au travers de dispositifs et de pratiques (la clinique, les écoles, les asiles, les prisons, etc.). Il existe une multiplicité de micro-pouvoirs omniprésents dans la société. (Source: Fondement_8/8 2.txt - Foucault et le pouvoir)",
	},
	{
		id: "q2",
		title: "Question 2",
		question: "Quelles sont les quatre technologies du pouvoir selon Foucault?",
		type: "checkbox",
		options: [
			{value: "a", label: "Le supplice"},
			{value: "b", label: "La punition"},
			{value: "c", label: "La surveillance"},
			{value: "d", label: "La discipline"},
			{value: "e", label: "L'éducation"},
		],
		explanation:
			"Les technologies du pouvoir consistent en: 1) Le supplice (forme de punition impliquant une souffrance corporelle intense et publique), 2) La punition (outil de pouvoir et de contrôle social), 3) La surveillance (forme sophistiquée de contrôle social), 4) La discipline (s'exerce à travers des institutions comme les écoles, hôpitaux, usines et prisons). (Source: Fondement_8/8 2.txt - Les technologies du pouvoir)",
	},
	{
		id: "q3",
		title: "Question 3",
		question: "Qu'est-ce que le panoptique selon Foucault?",
		type: "radio",
		options: [
			{value: "a", label: "Une forme de gouvernement"},
			{value: "b", label: "Une prison conçue par Bentham où un gardien peut observer tous les détenus sans être vu"},
			{value: "c", label: "Un système économique"},
			{value: "d", label: "Une théorie philosophique"},
		],
		explanation:
			"Le panoptique est une prison conçue par Jeremy Bentham où tous les détenus sont observables en permanence par une tour centrale, sans qu'ils sachent quand ils sont surveillés. Cette incertitude pousse les prisonniers à s'autodiscipliner. Foucault utilise cette métaphore pour décrire comment les sociétés modernes exercent le pouvoir. (Source: Fondement_8/8 2.txt - La surveillance et le panoptique)",
	},
	{
		id: "q4",
		title: "Question 4",
		question: "Quels sont les trois instruments essentiels pour le dressage selon Foucault?",
		type: "checkbox",
		options: [
			{value: "a", label: "La surveillance hiérarchique (ou le regard hiérarchique)"},
			{value: "b", label: "La sanction normalisatrice"},
			{value: "c", label: "L'examen"},
			{value: "d", label: "La punition physique"},
		],
		explanation:
			"Foucault distingue trois instruments essentiels pour le dressage: 1) La surveillance hiérarchique (regards qui voient sans être vus), 2) La sanction normalisatrice (rend pénalisable tout ce qui ne relève pas de la norme), 3) L'examen (combine les techniques de la hiérarchie et de la sanction). (Source: Fondement_8/8 2.txt - Les moyens du bon dressement)",
	},
	{
		id: "q5",
		title: "Question 5",
		question: "Qu'est-ce que l'orthopédie sociale selon Foucault?",
		type: "radio",
		options: [
			{value: "a", label: "Une discipline médicale"},
			{value: "b", label: "Une entreprise de correction de l'âme à travers le corps, où les murs, verrous et cellules représentent une entreprise d'orthopédie sociale"},
			{value: "c", label: "Un système éducatif"},
			{value: "d", label: "Une théorie économique"},
		],
		explanation:
			"L'orthopédie sociale est l'entreprise par laquelle la correction de l'âme se fait à travers le corps. Les murs, verrous et cellules représentent une entreprise d'orthopédie sociale. Le corps devient le matériel de travail pour le pouvoir, qui agit comme un forgeron: un corps qu'on manipule, qu'on façonne, qu'on dresse. (Source: Fondement_8/8 2.txt - L'orthopédie sociale)",
	},
	{
		id: "q6",
		title: "Question 6",
		question: "Qu'est-ce qu'une institution totale selon Goffman?",
		type: "radio",
		options: [
			{value: "a", label: "Un lieu de résidence et de travail où un grand nombre d'individus, placés dans la même situation, coupés du monde extérieur pour une période relativement longue, mènent ensemble une vie recluse dont les modalités sont explicitement et minutieusement réglées"},
			{value: "b", label: "Une école privée"},
			{value: "c", label: "Un hôpital général"},
			{value: "d", label: "Une entreprise"},
		],
		explanation:
			"Selon Goffman, une institution totale est un lieu de résidence et de travail où un grand nombre d'individus, placés dans la même situation, coupés du monde extérieur pour une période relativement longue, mènent ensemble une vie recluse dont les modalités sont explicitement et minutieusement réglées. Exemples: prisons, hôpitaux psychiatriques, monastères, casernes militaires, maisons de retraite. (Source: Fondement_8/8 2.txt - Les institutions totales)",
	},
	{
		id: "q7",
		title: "Question 7",
		question: "Quels sont les quatre éléments essentiels aux institutions totales selon Goffman?",
		type: "checkbox",
		options: [
			{value: "a", label: "Coupure du monde extérieur, matérialisée par des obstacles aux entrées et sorties"},
			{value: "b", label: "Tous les besoins et activités des reclus sont pris en charge par l'institution dans un même lieu, sous une même autorité"},
			{value: "c", label: "L'institution adopte un mode de fonctionnement bureaucratique avec des règles et une surveillance régulière"},
			{value: "d", label: "Les contacts entre les reclus et les surveillants sont limités, produisant une image stéréotypée et hostile de l'autre"},
			{value: "e", label: "L'institution est toujours temporaire"},
		],
		explanation:
			"Les quatre éléments essentiels sont: 1) Coupure du monde extérieur (hauts murs, portes verrouillées), 2) Tous les besoins pris en charge par l'institution dans un même lieu, sous une même autorité, 3) Mode de fonctionnement bureaucratique avec règles et surveillance, 4) Contacts limités entre reclus et surveillants produisant des images stéréotypées et hostiles. (Source: Fondement_8/8 2.txt - 4 éléments essentiels aux institutions totales)",
	},
	{
		id: "q8",
		title: "Question 8",
		question: "Qu'est-ce que la mortification du soi selon Goffman?",
		type: "radio",
		options: [
			{value: "a", label: "Un processus de développement personnel"},
			{value: "b", label: "Un processus par lequel l'institution totale reformule l'identité des reclus, les dépouillant de leur identité personnelle"},
			{value: "c", label: "Une technique médicale"},
			{value: "d", label: "Une méthode éducative"},
		],
		explanation:
			"La mortification du soi est le processus par lequel les institutions totales tendent à dépersonnaliser les individus et reformulent leur identité. Les reclus sont dépouillés du soutien de leur environnement domestique et soumis à des dégradations, humiliations et profanations de leur personnalité. (Source: Fondement_8/8 2.txt - La destruction de l'identité des reclus)",
	},
	{
		id: "q9",
		title: "Question 9",
		question: "Qu'est-ce que la métaphore théâtrale selon Goffman?",
		type: "radio",
		options: [
			{value: "a", label: "Goffman étudie la société comme un spectacle des apparences, mené par des acteurs en représentation"},
			{value: "b", label: "Une théorie sur le théâtre"},
			{value: "c", label: "Une méthode d'enseignement"},
			{value: "d", label: "Un concept économique"},
		],
		explanation:
			"Selon Goffman, la vie sociale ressemble à une vaste scène où chacun joue un rôle, cherchant à contrôler l'impression laissée aux autres. La métaphore théâtrale permet d'étudier la société comme un spectacle des apparences, mené par des acteurs en représentation. (Source: Fondement_8/8 2.txt - La métaphore théâtrale)",
	},
	{
		id: "q10",
		title: "Question 10",
		question: "Qu'est-ce que le stigmate selon Goffman?",
		type: "radio",
		options: [
			{value: "a", label: "Un attribut qui jette un discrédit profond sur une personne, correspondant à l'écart entre l'identité virtuelle et réelle"},
			{value: "b", label: "Une marque d'honneur"},
			{value: "c", label: "Un titre professionnel"},
			{value: "d", label: "Un diplôme"},
		],
		explanation:
			"Le stigmate est un attribut qui jette un discrédit profond sur une personne. C'est l'écart entre l'identité virtuelle (ce que la société attend de moi) et l'identité réelle (ce que je suis objectivement). C'est une construction sociale, un attribut négatif posé sur l'individu à travers le regard des gens. (Source: Fondement_8/8 2.txt - Stigmate et stigmatisation)",
	},
	{
		id: "q11",
		title: "Question 11",
		question: "Selon Foucault, quel est le rapport entre pouvoir et savoir?",
		type: "checkbox",
		options: [
			{value: "a", label: "Le pouvoir produit du savoir"},
			{value: "b", label: "Pouvoir et savoir s'impliquent directement l'un l'autre"},
			{value: "c", label: "Il n'y a pas de relation de pouvoir sans constitution corrélative d'un champ de savoir"},
			{value: "d", label: "Le savoir est indépendant du pouvoir"},
		],
		explanation:
			"Selon Foucault: le pouvoir produit du savoir (et pas simplement en le favorisant), pouvoir et savoir s'impliquent directement l'un l'autre, et il n'y a pas de relation de pouvoir sans constitution corrélative d'un champ de savoir, ni de savoir qui ne suppose et ne constitue en même temps des relations de pouvoir. (Source: Fondement_8/8 2.txt - Les technologies du pouvoir et le savoir)",
	},
	{
		id: "q12",
		title: "Question 12",
		question: "Qu'est-ce que la sanction normalisatrice selon Foucault?",
		type: "radio",
		options: [
			{value: "a", label: "Une punition physique"},
			{value: "b", label: "Un système qui rend pénalisable tout ce qui ne relève pas de la norme, marque les écarts et ordonne les qualités et compétences"},
			{value: "c", label: "Une récompense"},
			{value: "d", label: "Un système éducatif"},
		],
		explanation:
			"La sanction normalisatrice rend pénalisable tout ce qui ne relève pas de la norme (« le domaine indéfini du non conforme »). Elle marque les écarts et ordonne les qualités et compétences, permettant de dégrader ou de faire reculer l'individu dans le système de reconnaissance implicite. (Source: Fondement_8/8 2.txt - La sanction normalisatrice)",
	},
	{
		id: "q13",
		title: "Question 13",
		question: "Quelles sont les techniques de mortification et de dépersonnalisation dans les institutions totales?",
		type: "checkbox",
		options: [
			{value: "a", label: "L'isolement (barrière entre le reclus et le monde extérieur)"},
			{value: "b", label: "Cérémonies d'admission (étapes administratives humiliantes)"},
			{value: "c", label: "Preuves d'obéissance (homogénéisation et transformation du reclus)"},
			{value: "d", label: "L'éducation"},
		],
		explanation:
			"Les techniques incluent: 1) L'isolement (la barrière entre le reclus et le monde extérieur constitue la première amputation), 2) Cérémonies d'admission (étapes administratives humiliantes: enregistrement, photographie, pesée, prise d'empreintes, fouille, distribution d'uniformes, etc.), 3) Preuves d'obéissance (objectif: homogénéisation et transformation du reclus en un objet incapable d'entraver la routine). (Source: Fondement_8/8 2.txt - Les techniques de mortification)",
	},
	{
		id: "q14",
		title: "Question 14",
		question: "Qu'est-ce que la 'face' selon Goffman?",
		type: "radio",
		options: [
			{value: "a", label: "La partie visible du corps"},
			{value: "b", label: "Valeur sociale positive qu'une personne revendique à travers la ligne d'action que les autres supposent qu'elle a adoptée lors d'un contact particulier"},
			{value: "c", label: "Une expression faciale"},
			{value: "d", label: "Un masque"},
		],
		explanation:
			"La face est la valeur sociale positive qu'une personne revendique à travers la ligne d'action que les autres supposent qu'elle a adoptée lors d'un contact particulier. Les acteurs cherchent toujours à aider les autres acteurs dans leur représentation pour maintenir l'équilibre. (Source: Fondement_8/8 2.txt - La métaphore théâtrale)",
	},
	{
		id: "q15",
		title: "Question 15",
		question: "Selon Foucault, comment la discipline fabrique-t-elle des corps?",
		type: "radio",
		options: [
			{value: "a", label: "Elle crée des corps soumis et exercés, des corps 'dociles'"},
			{value: "b", label: "Elle développe uniquement la force physique"},
			{value: "c", label: "Elle améliore la santé"},
			{value: "d", label: "Elle favorise l'autonomie"},
		],
		explanation:
			"La discipline fabrique des corps soumis et exercés, des corps 'dociles'. Elle majore les forces du corps en termes d'utilité économique et diminue ces mêmes forces en termes d'obéissance politique. Elle dissocie le pouvoir du corps: d'une part, elle augmente l'aptitude du corps; d'autre part, elle transforme cette énergie potentielle en un rapport de sujétion stricte. (Source: Fondement_8/8 2.txt - La discipline)",
	},
	{
		id: "q16",
		title: "Question 16",
		question: "Quels sont les cinq types d'institutions totales selon Goffman?",
		type: "checkbox",
		options: [
			{value: "a", label: "Organisations prenant en charge des personnes inoffensives et incapables de prendre soin d'elles-mêmes"},
			{value: "b", label: "Établissements prenant en charge des personnes incapables de se protéger et considérées comme dangereuses"},
			{value: "c", label: "Lieux d'enfermement de personnes considérées comme une menace pour la collectivité"},
			{value: "d", label: "Institutions créées pour mener à bien une tâche spécifique"},
			{value: "e", label: "Établissements religieux proposant une retraite hors du monde"},
		],
		explanation:
			"Les cinq types sont: 1) Organisations pour personnes inoffensives et incapables (institutions d'hébergement pour personnes handicapées, orphelins, vieillards), 2) Établissements pour personnes incapables de se protéger et dangereuses (sanatoriums, hôpitaux psychiatriques), 3) Lieux d'enfermement pour personnes menaçantes (prisons, camps de concentration), 4) Institutions pour tâche spécifique (casernes, navires, internats), 5) Établissements religieux (couvents, abbayes). (Source: Fondement_8/8 2.txt - 5 types d'institutions totales)",
	},
	{
		id: "q17",
		title: "Question 17",
		question: "Qu'est-ce que la 'déculturation' dans les institutions totales?",
		type: "radio",
		options: [
			{value: "a", label: "L'apprentissage d'une nouvelle culture"},
			{value: "b", label: "Un processus où les reclus entrent avec une culture de présentation étrangère à l'institution, entraînant une désadaptation"},
			{value: "c", label: "L'éducation culturelle"},
			{value: "d", label: "Un échange culturel"},
		],
		explanation:
			"La déculturation se produit lorsque les reclus entrent à l'institution avec une culture de présentation étrangère à celle-ci (issue de l'univers familial). Une déculturation se produit, entraînant une désadaptation qui rend l'individu incapable de faire face à certaines situations de la vie quotidienne. (Source: Fondement_8/8 2.txt - La destruction de l'identité des reclus)",
	},
	{
		id: "q18",
		title: "Question 18",
		question: "Selon Foucault, quelle transformation s'est produite dans la pénalité à la charnière du XVIIIe et XIXe siècle?",
		type: "radio",
		options: [
			{value: "a", label: "Transformation d'une pénalité de supplice, qui cible le corps, vers une pénalité de la correction, qui cible l'âme des condamnés"},
			{value: "b", label: "Abolition de toutes les peines"},
			{value: "c", label: "Augmentation des supplices"},
			{value: "d", label: "Uniformisation des peines"},
		],
		explanation:
			"À la charnière du XVIIIe et XIXe siècle, on assiste à une transformation d'une pénalité de supplice, qui cible le corps, vers une pénalité de la correction, qui cible l'âme des condamnés. Le pouvoir investit le corps différemment et transforme la finalité des sanctions. (Source: Fondement_8/appareil-901.txt - Élision du corps)",
	},
	{
		id: "q19",
		title: "Question 19",
		question: "Qu'est-ce que la 'fausse note' selon Goffman?",
		type: "radio",
		options: [
			{value: "a", label: "Une erreur musicale"},
			{value: "b", label: "Une rupture dans la définition de la situation, par exemple à cause d'une gaffe ou d'un impair d'un des acteurs"},
			{value: "c", label: "Un mensonge"},
			{value: "d", label: "Une blague"},
		],
		explanation:
			"La fausse note est une rupture dans la définition de la situation, par exemple à cause d'une gaffe ou d'un impair d'un des acteurs. Les conséquences peuvent être émotionnelles (malaise, gêne), relationnelles (réputation de l'équipe) ou personnelles (une rupture peut détruire l'image de soi). (Source: Fondement_8/8 2.txt - La métaphore théâtrale)",
	},
	{
		id: "q20",
		title: "Question 20",
		question: "Selon Foucault, qu'est-ce que le biopouvoir?",
		type: "radio",
		options: [
			{value: "a", label: "Le pouvoir sur la vie, caractérisé par la sécurité et la protection de la population"},
			{value: "b", label: "Le pouvoir économique"},
			{value: "c", label: "Le pouvoir politique uniquement"},
			{value: "d", label: "Le pouvoir religieux"},
		],
		explanation:
			"Le biopouvoir est la figure du pouvoir moderne caractérisée par la sécurité et la protection de la population. Il s'agit d'un pouvoir sur la vie, qui trie le bon grain de l'ivraie, d'exclure certains pour protéger les autres. (Source: Fondement_8/8 2.txt - Le panoptique et le biopouvoir)",
	},
];

// Réponses correctes pour les questions à choix unique (radio)
export const correctRadioAnswers: Record<string, string> = {
	q1: "b",
	q3: "b",
	q5: "b",
	q6: "a",
	q8: "b",
	q9: "a",
	q10: "a",
	q12: "b",
	q14: "b",
	q15: "a",
	q17: "b",
	q18: "a",
	q19: "b",
	q20: "a",
};

// Réponses correctes pour les questions à choix multiples (checkbox)
export const correctCheckboxAnswers: Record<string, string[]> = {
	q2: ["a", "b", "c", "d"],
	q4: ["a", "b", "c"],
	q7: ["a", "b", "c", "d"],
	q11: ["a", "b", "c"],
	q13: ["a", "b", "c"],
	q16: ["a", "b", "c", "d", "e"],
};

// Export complete exam data
export const exam08Data: ExamData = {
	questions: exam08Questions,
	correctRadioAnswers,
	correctCheckboxAnswers,
};

