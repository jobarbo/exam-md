// Ce fichier contient les données pour l'examen sur les problèmes sociaux et les théories du travail social
// Il sera importé dynamiquement par le composant ExamForm

export const exam01Questions = [
	{
		id: "q1",
		title: "Question 1",
		question: "Selon la définition internationale du travail social, quels principes sont au cœur du travail social?",
		type: "checkbox",
		options: [
			{value: "a", label: "Les principes de justice sociale"},
			{value: "b", label: "Le droit de la personne"},
			{value: "c", label: "La responsabilité sociale collective"},
			{value: "d", label: "Le respect des diversités"},
			{value: "e", label: "La rentabilité économique"},
			{value: "f", label: "L'efficacité administrative"},
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
			{value: "a", label: "La constatation d'une situation-problème"},
			{value: "b", label: "L'élaboration d'un jugement sur la situation"},
			{value: "c", label: "Le sentiment de pouvoir modifier la situation"},
			{value: "d", label: "L'approbation gouvernementale"},
			{value: "e", label: "Le financement adéquat"},
			{value: "f", label: "La couverture médiatique"},
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
			{value: "a", label: "Entre problèmes économiques et problèmes sociaux"},
			{value: "b", label: "Entre épreuves personnelles et enjeux collectifs"},
			{value: "c", label: "Entre problèmes urbains et problèmes ruraux"},
			{value: "d", label: "Entre problèmes structurels et problèmes culturels"},
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
			{value: "a", label: "Une situation qui affecte uniquement les pauvres"},
			{value: "b", label: "Un écart entre ce qui est et ce que les gens pensent devoir être"},
			{value: "c", label: "Une déviation de la norme légale"},
			{value: "d", label: "Un conflit entre deux groupes sociaux"},
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
			{value: "a", label: "Comme un système économique centralisé"},
			{value: "b", label: "En référence à une métaphore écologique"},
			{value: "c", label: "Comme une institution politique"},
			{value: "d", label: "Comme un simple agrégat d'individus"},
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
			{value: "a", label: "Comme des problèmes de désorganisation sociale"},
			{value: "b", label: "Comme des problèmes de déviance sociale"},
			{value: "c", label: "Comme des problèmes de conflits de classes"},
			{value: "d", label: "Comme des problèmes de révolution"},
			{value: "e", label: "Comme des problèmes d'exploitation"},
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
			{value: "a", label: "Des échecs individuels à remplir les rôles sociaux"},
			{value: "b", label: "De l'absence de socialisation adéquate"},
			{value: "c", label: "Des actions d'exploitation des classes dominantes"},
			{value: "d", label: "De la désorganisation familiale"},
		],
		explanation:
			"Selon l'approche critique du conflit social, les problèmes sociaux proviennent essentiellement des actions d'exploitation des classes dominantes. Ils reflètent les incapacités de la société à rencontrer les besoins des individus et des collectivités, ainsi que les conflits de pouvoir. (Source: Mayer et Laforest, 1990, p. 29-31 - L'approche critique dite du conflit social)",
	},
	{
		id: "q8",
		title: "Question 8",
		question: "Comment l'interactionnisme symbolique conçoit-il la déviance?",
		type: "radio",
		options: [
			{value: "a", label: "Comme une caractéristique inhérente à certains actes"},
			{value: "b", label: "Comme le résultat d'un processus de définition sociale et d'étiquetage"},
			{value: "c", label: "Comme une maladie mentale"},
			{value: "d", label: "Comme une conséquence de la pauvreté"},
		],
		explanation:
			"L'interactionnisme symbolique conçoit la déviance non comme une qualité inhérente au comportement, mais comme le résultat de l'interaction entre la personne qui pose l'acte et les autres qui y réagissent. La déviance résulte d'un processus de définition sociale et d'étiquetage. (Source: Mayer et Laforest, 1990, p. 32-34 - L'interactionnisme symbolique et les théories de l'étiquetage)",
	},
	{
		id: "q9",
		title: "Question 9",
		question: "Selon Rezsohazy, les problèmes sociaux sont presque toujours associés à quoi?",
		type: "radio",
		options: [
			{value: "a", label: "À la stabilité sociale"},
			{value: "b", label: "Au changement social"},
			{value: "c", label: "À la tradition"},
			{value: "d", label: "À la modernisation"},
		],
		explanation:
			"Selon Rezsohazy, les problèmes sociaux sont presque toujours associés au changement social. Il identifie trois notions pour le comprendre: la rupture, le défi, et l'inadéquation. (Source: Mayer et Laforest, 1990, p. 18 - Rezsohazy, 1980)",
	},
	{
		id: "q10",
		title: "Question 10",
		question: "Quelle contribution spécifique le Canada a-t-il apportée à la nouvelle définition internationale du travail social?",
		type: "radio",
		options: [
			{value: "a", label: "L'accent sur la technologie en intervention"},
			{value: "b", label: "L'ajout des connaissances autochtones traditionnelles"},
			{value: "c", label: "La priorité à l'intervention individuelle"},
			{value: "d", label: "La médicalisation des problèmes sociaux"},
		],
		explanation:
			"Le Canada a contribué à ajouter un aspect important à la définition internationale du travail social: les connaissances autochtones traditionnelles. Cet ajout était particulièrement important pour le contexte canadien. (Source: Fondement_1/1.md, p. 2 - Contribution canadienne à la définition)",
	},
	{
		id: "q11",
		title: "Question 11",
		question: "Selon l'approche culturaliste, qu'est-ce qui explique principalement les problèmes sociaux?",
		type: "radio",
		options: [
			{value: "a", label: "Les conflits économiques"},
			{value: "b", label: "Les différences culturelles et la socialisation"},
			{value: "c", label: "L'exploitation capitaliste"},
			{value: "d", label: "La désorganisation urbaine"},
		],
		explanation:
			"L'approche culturaliste, fondée sur le rapport avec la psychanalyse freudienne, explique les problèmes sociaux par les différences culturelles entre les sociétés et les mécanismes de socialisation par lesquels les individus intériorisent les modèles culturels spécifiques à leur société. (Source: Mayer et Laforest, 1990, p. 25-26 - Le culturalisme)",
	},
	{
		id: "q12",
		title: "Question 12",
		question: "Quelle est la principale cible d'intervention du service social depuis ses débuts?",
		type: "radio",
		options: [
			{value: "a", label: "Les problèmes politiques"},
			{value: "b", label: "Les problèmes sociaux"},
			{value: "c", label: "Les problèmes économiques"},
			{value: "d", label: "Les problèmes culturels"},
		],
		explanation:
			"Depuis leurs débuts vers la fin du 19e siècle, les services sociaux se sont surtout attaqués aux problèmes sociaux les plus flagrants des individus et des familles: la pauvreté, la misère, les handicaps physiques et mentaux. (Source: Mayer et Laforest, 1990, p. 14 - Introduction)",
	},
	{
		id: "q13",
		title: "Question 13",
		question: "Selon Lenoir et Bell, quelles sont les trois étapes principales de l'apparition et du développement d'un problème social?",
		type: "checkbox",
		options: [
			{value: "a", label: "Des transformations qui affectent la vie quotidienne"},
			{value: "b", label: "Une formulation publique du problème"},
			{value: "c", label: "Le processus d'institutionnalisation"},
			{value: "d", label: "L'augmentation des budgets"},
			{value: "e", label: "La création de nouvelles lois"},
		],
		explanation:
			"Les trois étapes sont: 1) Des transformations qui affectent la vie quotidienne suite à des bouleversements sociaux, 2) Une formulation publique (travail d'évocation, d'imposition et de légitimation), 3) Le processus d'institutionnalisation qui tend à figer les catégories. (Source: Mayer et Laforest, 1990, p. 20-21 - Lenoir, 1989 et Bell, 1981)",
	},
	{
		id: "q14",
		title: "Question 14",
		question: "Selon l'approche du conflit social, quel serait le problème social ultime?",
		type: "radio",
		options: [
			{value: "a", label: "La déviance individuelle"},
			{value: "b", label: "Le système capitaliste lui-même"},
			{value: "c", label: "La désorganisation familiale"},
			{value: "d", label: "L'absence de normes sociales"},
		],
		explanation:
			"Pour les théoriciens du conflit social, le problème social ultime serait le système capitaliste lui-même, puisque la plupart des problèmes sociaux spécifiques tirent leur origine du problème majeur de l'inégalité inhérente au système. (Source: Mayer et Laforest, 1990, p. 30 - Ritzer, 1986)",
	},
	{
		id: "q15",
		title: "Question 15",
		question: "Qu'est-ce qui distingue un problème social d'autres types de problèmes selon Durocher et Normandeau?",
		type: "radio",
		options: [
			{value: "a", label: "Son coût économique"},
			{value: "b", label: "L'étroite relation avec les contextes institutionnels et normatifs d'une société"},
			{value: "c", label: "Sa complexité technique"},
			{value: "d", label: "Sa durée dans le temps"},
		],
		explanation:
			"Selon Durocher et Normandeau, les problèmes sociaux doivent être distingués des autres problèmes par l'étroite relation qu'ils entretiennent avec les contextes institutionnels et normatifs d'une société. Ils représentent une rupture dans l'ordre des choses conçu comme normal. (Source: Mayer et Laforest, 1990, p. 16 - Durocher, 1965 et Normandeau, 1966)",
	},
	{
		id: "q16",
		title: "Question 16",
		question: "Selon la perspective constructiviste, comment les problèmes sociaux sont-ils définis?",
		type: "radio",
		options: [
			{value: "a", label: "Comme des situations objectivement problématiques"},
			{value: "b", label: "Comme le résultat des démarches d'individus ou de groupes formulant des revendications"},
			{value: "c", label: "Comme des dysfonctions du système social"},
			{value: "d", label: "Comme des déviations de la norme statistique"},
		],
		explanation:
			"Selon Spector et Kitsuse, dans la perspective constructiviste, un problème social est constitué par « les démarches d'individus ou de groupes formulant des griefs et des revendications à propos de certaines conditions supposées exister ». (Source: Mayer et Laforest, 1990, p. 35-36 - Le constructivisme, Spector et Kitsuse, 1977)",
	},
	{
		id: "q17",
		title: "Question 17",
		question: "Quelles sont les principales écoles théoriques d'analyse des problèmes sociaux présentées par Mayer et Laforest?",
		type: "checkbox",
		options: [
			{value: "a", label: "L'École de Chicago"},
			{value: "b", label: "Le modèle culturaliste"},
			{value: "c", label: "L'approche fonctionnaliste"},
			{value: "d", label: "L'approche critique du conflit social"},
			{value: "e", label: "L'interactionnisme symbolique"},
			{value: "f", label: "Le constructivisme"},
		],
		explanation:
			"Les principales écoles théoriques présentées sont: L'École de Chicago, le modèle culturaliste, l'approche fonctionnaliste, l'approche critique du conflit social, l'interactionnisme symbolique et les théories de l'étiquetage, et le constructivisme. (Source: Mayer et Laforest, 1990 - Présentation de quelques écoles théoriques, p. 22-38)",
	},
	{
		id: "q18",
		title: "Question 18",
		question: "Selon l'idéologie professionnelle décrite par W. Ryan et McKnight, comment les professionnels définissent-ils principalement le problème?",
		type: "radio",
		options: [
			{value: "a", label: "Comme un conflit de classes"},
			{value: "b", label: "Comme une déficience individuelle"},
			{value: "c", label: "Comme un manque de ressources"},
			{value: "d", label: "Comme un problème structurel"},
		],
		explanation:
			"Selon Ryan et McKnight, les professionnels définissent le problème essentiellement comme une déficience, ce qui entraîne l'individualisation et la psychologisation du problème. Cette approche transforme le citoyen en client et les communautés en une juxtaposition d'individus déficients. (Source: Mayer et Laforest, 1990, p. 19-20 - Ryan, 1972 et McKnight, 1977)",
	},
	{
		id: "q19",
		title: "Question 19",
		question: "Quelle est la distinction faite par Merton et Nisbet entre problèmes sociaux manifestes et latents?",
		type: "radio",
		options: [
			{value: "a", label: "Manifestes sont économiques, latents sont sociaux"},
			{value: "b", label: "Manifestes sont reconnus, latents ne sont pas largement identifiés"},
			{value: "c", label: "Manifestes sont urbains, latents sont ruraux"},
			{value: "d", label: "Manifestes sont individuels, latents sont collectifs"},
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
			{value: "a", label: "La mise en évidence d'un contexte singulier comme manifestation d'une contradiction générale"},
			{value: "b", label: "Un groupe social ayant accès aux instances de décisions"},
			{value: "c", label: "La légitimité de ce groupe à inscrire la question dans le champ des problèmes"},
			{value: "d", label: "Un budget gouvernemental suffisant"},
			{value: "e", label: "Un consensus populaire total"},
		],
		explanation:
			"Selon Tachon, trois conditions sont nécessaires: 1) La mise en évidence d'un contexte singulier comme manifestation d'une contradiction générale, 2) Un groupe social intégré dans les réseaux de pouvoir ayant accès aux instances de décisions, 3) La légitimité de ce groupe à inscrire cette question dans le champ des problèmes. (Source: Mayer et Laforest, 1990, p. 20 - Tachon, 1985)",
	},
];

// Réponses correctes pour les questions à choix unique (radio)
export const correctRadioAnswers = {
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
export const correctCheckboxAnswers = {
	q1: ["a", "b", "c", "d"],
	q2: ["a", "b", "c"],
	q6: ["a", "b"],
	q13: ["a", "b", "c"],
	q17: ["a", "b", "c", "d", "e", "f"],
	q20: ["a", "b", "c"],
};
