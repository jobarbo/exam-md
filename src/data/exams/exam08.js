// Ce fichier contient les données pour l'examen sur les politiques sociales et le travail social
// Il sera importé dynamiquement par le composant ExamForm

export const exam08Questions = [
	{
		id: "q1",
		title: "Question 1",
		question: "Laquelle des affirmations suivantes concernant l'intervention sociale personnelle est VRAIE?",
		type: "radio",
		options: [
			{value: "a", label: "Elle se limite uniquement au travail avec les individus."},
			{value: "b", label: "Elle exclut toute forme d'intervention de groupe."},
			{value: "c", label: "Elle peut impliquer un travail avec des familles entières."},
			{value: "d", label: "Elle est incompatible avec l'approche systémique."},
		],
		explanation: "L'intervention sociale personnelle peut inclure le travail avec des familles entières, et pas uniquement avec des individus isolés.",
	},
	{
		id: "q2",
		title: "Question 2",
		question: "Quels sont les objectifs principaux de l'évaluation initiale en intervention sociale personnelle? (plusieurs réponses possibles)",
		type: "checkbox",
		options: [
			{value: "a", label: "Identifier les forces et ressources de la personne"},
			{value: "b", label: "Déterminer l'éligibilité aux prestations sociales uniquement"},
			{value: "c", label: "Comprendre la situation problématique dans son contexte"},
			{value: "d", label: "Établir une relation de confiance avec la personne"},
		],
		explanation: "L'évaluation initiale vise à identifier les forces et ressources, comprendre la situation dans son contexte et établir une relation de confiance.",
	},
	{
		id: "q3",
		title: "Question 3",
		question: "Quelle approche en intervention sociale met l'accent sur l'importance des interactions entre l'individu et son environnement?",
		type: "radio",
		options: [
			{value: "a", label: "L'approche psychodynamique"},
			{value: "b", label: "L'approche systémique"},
			{value: "c", label: "L'approche behavioriste"},
			{value: "d", label: "L'approche centrée sur la tâche"},
		],
		explanation: "L'approche systémique considère les problèmes individuels comme le résultat d'interactions complexes entre la personne et son environnement familial, social, etc.",
	},
	{
		id: "q4",
		title: "Question 4",
		question: "Quelles sont les compétences essentielles pour pratiquer l'écoute active? (plusieurs réponses possibles)",
		type: "checkbox",
		options: [
			{value: "a", label: "Reformuler les propos de la personne"},
			{value: "b", label: "Interrompre fréquemment pour orienter la conversation"},
			{value: "c", label: "Porter attention au langage non-verbal"},
			{value: "d", label: "Poser des questions ouvertes"},
		],
		explanation: "L'écoute active implique de reformuler, d'être attentif au langage non-verbal et de poser des questions ouvertes.",
	},
	{
		id: "q5",
		title: "Question 5",
		question: "Quel principe éthique est violé lorsqu'un travailleur social partage des informations confidentielles sans le consentement de la personne?",
		type: "radio",
		options: [
			{value: "a", label: "Le principe de bienfaisance"},
			{value: "b", label: "Le principe de confidentialité"},
			{value: "c", label: "Le principe de justice sociale"},
			{value: "d", label: "Le principe d'autodétermination"},
		],
		explanation: "Le principe de confidentialité exige que les informations partagées lors des entretiens restent protégées, sauf exception légale ou consentement.",
	},
	{
		id: "q6",
		title: "2. Approches de régulation du social",
		question: "Quelle approche de régulation du social est caractérisée par des politiques sociales qui sont des co-constructions et leur mise en œuvre des co-productions?",
		type: "radio",
		options: [
			{value: "a", label: "L'État providence"},
			{value: "b", label: "Le néo-libéralisme"},
			{value: "c", label: "La perspective solidaire (ou partenariale)"},
			{value: "d", label: "L'approche consumériste"},
		],
		explanation:
			"La perspective solidaire (ou partenariale) est caractérisée par des politiques sociales conçues comme des co-constructions et mises en œuvre comme des co-productions. Cette approche valorise le partenariat entre l'État, le secteur privé et le secteur communautaire, formant une économie plurielle.",
	},
	{
		id: "q7",
		title: "7. Les volets des politiques sociales selon Rosanvallon",
		question: "Selon Rosanvallon, quels sont les quatre volets des politiques sociales?",
		type: "checkbox",
		options: [
			{value: "a", label: "Redistributif"},
			{value: "b", label: "Capacitation"},
			{value: "c", label: "Régulation"},
			{value: "d", label: "Protection"},
			{value: "e", label: "Individualisation"},
		],
		explanation: "Selon Rosanvallon, les quatre volets aux politiques sociales sont: redistributif, capacitation, régulation et protection.",
	},
	{
		id: "q8",
		title: "8. L'État providence et les idéologies",
		question: "Comment les marxistes perçoivent-ils l'État providence?",
		type: "radio",
		options: [
			{value: "a", label: "Il détourne les travailleurs du socialisme"},
			{value: "b", label: "Il témoigne de la volonté de redistribuer la richesse"},
			{value: "c", label: "Il est un frein aux lois du marché"},
			{value: "d", label: "Il représente l'idéal socialiste à atteindre"},
		],
		explanation: "Pour les marxistes, l'État providence détourne les travailleurs du socialisme, car les mesures sociales ont pour effet de diminuer le militantisme.",
	},
	{
		id: "q9",
		title: "9. Fondements des politiques sociales",
		question: "Parmi les suivants, lesquels sont des fondements des politiques sociales mentionnés dans le cours?",
		type: "checkbox",
		options: [
			{value: "a", label: "Elles visent à corriger les failles du marché"},
			{value: "b", label: "Elles visent à atténuer les inégalités sociales, économiques, de santé, en éducation, etc."},
			{value: "c", label: "Elles reposent sur une solidarité à l'intérieur de la société"},
			{value: "d", label: "Elles reposent sur la légitimité de l'État à corriger les failles et imperfections du marché"},
			{value: "e", label: "Elles visent à maintenir la domination des élites économiques"},
		],
		explanation:
			"Les fondements des politiques sociales mentionnés dans le cours incluent: elles visent à corriger les failles du marché, elles visent à atténuer les inégalités sociales, économiques, de santé, en éducation, etc., elles reposent sur une solidarité à l'intérieur de la société, et elles reposent sur la légitimité de l'État à corriger les failles et imperfections du marché.",
	},
	{
		id: "q10",
		title: "10. Types de financement des systèmes de santé",
		question: "Quel type de financement des systèmes de santé correspond au modèle américain?",
		type: "radio",
		options: [
			{value: "a", label: "Financement à dominante assurance publique (Bismarckien)"},
			{value: "b", label: "Financement à dominante impôt (Beveridgien)"},
			{value: "c", label: "Financement à dominante privé ou mixte"},
			{value: "d", label: "Financement public intégral"},
		],
		explanation:
			"Le modèle américain correspond à un financement à dominante privé ou mixte, caractérisé par une présence marquée d'intérêts privés dans le financement et dans la prestation de services.",
	},
	{
		id: "q11",
		title: '11. Définition du "social" dans le contexte des politiques sociales',
		question: "Selon le cours, que signifie l'affirmation \"le social fait appel au politique pour corriger l'économique\"?",
		type: "radio",
		options: [
			{value: "a", label: "Les problèmes sociaux sont causés par les politiques gouvernementales"},
			{value: "b", label: "Les politiques sociales utilisent le pouvoir politique pour corriger les failles du système économique"},
			{value: "c", label: "L'économie doit être entièrement régulée par l'État"},
			{value: "d", label: "La politique sociale est indépendante de l'économie"},
		],
		explanation:
			"Cette affirmation signifie que les politiques sociales utilisent le pouvoir politique pour corriger les failles et les inégalités produites par le système économique, pour atteindre des résultats que le système ne pourrait pas atteindre par lui-même.",
	},
	{
		id: "q12",
		title: "12. Justice commutative",
		question: "Qu'est-ce qui caractérise la justice commutative dans le domaine des soins de santé?",
		type: "radio",
		options: [
			{value: "a", label: "Les soins sont un droit, chacun reçoit ce qui lui est dû"},
			{value: "b", label: "Les soins sont en fonction du rapport entre ce qu'on donne et ce qu'on reçoit"},
			{value: "c", label: "Les soins sont gratuits pour tous les citoyens"},
			{value: "d", label: "Les soins sont distribués selon les besoins, indépendamment des contributions"},
		],
		explanation:
			"La justice commutative dans le domaine des soins de santé fait référence à un modèle où les soins sont en fonction du rapport entre ce qu'on donne et ce qu'on reçoit - on aura donc les services qu'on peut se payer. C'est le modèle qui correspond à l'État providence libéral.",
	},
	{
		id: "q13",
		title: "13. Mobilisation et politique sociale",
		question: "Selon le cours, quel est le rapport entre les mouvements sociaux et les politiques sociales?",
		type: "radio",
		options: [
			{value: "a", label: "Les politiques sociales sont créées indépendamment des mouvements sociaux"},
			{value: "b", label: "Les mouvements sociaux s'opposent systématiquement aux politiques sociales"},
			{value: "c", label: "Les mouvements sociaux produisent ou forcent à produire des politiques sociales"},
			{value: "d", label: "Les politiques sociales visent à réprimer les mouvements sociaux"},
		],
		explanation:
			"Selon le cours, ce sont les mouvements sociaux qui produisent (comme la loi 112) ou forcent à produire des politiques sociales. Une large part des politiques sociales trouve son origine dans les luttes populaires.",
	},
	{
		id: "q14",
		title: "14. Gouvernance des politiques sociales",
		question: "Quelles sont les deux dimensions centrales de la gouvernance dans l'étude des politiques publiques?",
		type: "checkbox",
		options: [
			{value: "a", label: "Le degré de décentralisation des instances"},
			{value: "b", label: "La composition démocratique des instances"},
			{value: "c", label: "Le montant des financements alloués"},
			{value: "d", label: "L'efficacité technique des programmes"},
			{value: "e", label: "La rapidité de mise en œuvre des politiques"},
		],
		explanation:
			"Les deux dimensions centrales de la gouvernance mentionnées dans le cours sont le degré de décentralisation des instances (leur proximité avec le local) et la composition démocratique des instances (qui représente le local, les citoyens).",
	},
	{
		id: "q15",
		title: "15. Justice sociale selon David Alper",
		question: "Parmi les suivantes, lesquelles sont des composantes de la justice sociale selon le professeur David Alper?",
		type: "checkbox",
		options: [
			{value: "a", label: "S'occuper des personnes marginalisées"},
			{value: "b", label: "Travailler vers une plus grande égalité entre les autochtones, nouveaux arrivants et Canadiens de souche"},
			{value: "c", label: "Réduire les inégalités sociales et économiques"},
			{value: "d", label: "S'occuper d'un meilleur environnement climatique"},
			{value: "e", label: "Favoriser exclusivement la croissance économique"},
		],
		explanation:
			"Selon le professeur David Alper, la justice sociale implique de s'occuper des personnes marginalisées, de travailler vers une plus grande égalité entre les autochtones, nouveaux arrivants et Canadiens de souche, de réduire les inégalités sociales et économiques, et de s'occuper d'un meilleur environnement climatique.",
	},
	{
		id: "q16",
		title: "16. Impact des inégalités",
		question: "Selon le cours, quel est l'impact des inégalités sur les individus?",
		type: "radio",
		options: [
			{value: "a", label: "Elles ont un impact néfaste sur la santé des individus"},
			{value: "b", label: "Elles encouragent la compétitivité et l'innovation"},
			{value: "c", label: "Elles n'ont aucun impact démontré"},
			{value: "d", label: "Elles renforcent l'autonomie individuelle"},
		],
		explanation:
			"Selon le cours, les inégalités ont un impact néfaste sur la santé des individus. À l'inverse, l'égalité est bonne pour la santé, comme l'illustrent les exemples de la Norvège et de la Finlande.",
	},
	{
		id: "q17",
		title: "17. Passagers clandestins",
		question: 'Dans le contexte des politiques sociales et de la mobilisation, que désigne le terme "passagers clandestins"?',
		type: "radio",
		options: [
			{value: "a", label: "Les personnes qui reçoivent des prestations sociales sans y avoir droit"},
			{value: "b", label: "Les personnes qui profitent des politiques sociales sans s'être mobilisées pour les obtenir"},
			{value: "c", label: "Les travailleurs au noir qui échappent à l'impôt"},
			{value: "d", label: "Les immigrants illégaux qui bénéficient des services publics"},
		],
		explanation:
			"Le terme \"passagers clandestins\" désigne les personnes qui profitent des politiques sociales sans s'être mobilisées pour les obtenir. Le cours mentionne que l'augmentation des passagers clandestins et la baisse de la militance peuvent mener à la baisse de la mobilisation, voire à la résignation.",
	},
	{
		id: "q18",
		title: "18. Quatre choses à savoir sur la justice sociale",
		question: "Selon David Alper, laquelle des affirmations suivantes n'est PAS considérée comme l'une des \"quatre choses à savoir sur la justice sociale\"?",
		type: "radio",
		options: [
			{value: "a", label: "Une responsabilité individuelle et collective"},
			{value: "b", label: "Une poignée de personnes peut changer les choses"},
			{value: "c", label: "Penser globalement, agir localement"},
			{value: "d", label: "Les sociétés les plus égalitaires sont les sociétés les plus en santé"},
			{value: "e", label: "La justice sociale doit être imposée par les gouvernements sans participation citoyenne"},
		],
		explanation:
			"Selon David Alper, les \"quatre choses à savoir sur la justice sociale\" sont: une responsabilité individuelle et collective, une poignée de personnes peut changer les choses, penser globalement et agir localement, et les sociétés les plus égalitaires sont les sociétés les plus en santé. L'idée que la justice sociale doit être imposée sans participation citoyenne n'est pas mentionnée et contredit même l'idée de responsabilité individuelle et collective.",
	},
	{
		id: "q19",
		title: "19. État providence et la devise française",
		question: "D'après le cours, l'État providence est l'expression de quelle devise?",
		type: "radio",
		options: [
			{value: "a", label: '"L\'union fait la force"'},
			{value: "b", label: '"Liberté, Égalité, Fraternité"'},
			{value: "c", label: '"Un pour tous, tous pour un"'},
			{value: "d", label: '"Je me souviens"'},
		],
		explanation: 'D\'après le cours, l\'État providence est "l\'expression de la devise de la république française" qui est "Liberté, Égalité, Fraternité".',
	},
	{
		id: "q20",
		title: "20. Perception des Québécois sur les politiques sociales",
		question:
			"Selon le sondage de la Fondation Chagnon (2015) mentionné dans le cours, quel pourcentage des Québécois considère que les politiques sociales ont contribué de manière importante à la qualité de vie?",
		type: "radio",
		options: [
			{value: "a", label: "50%"},
			{value: "b", label: "67%"},
			{value: "c", label: "83%"},
			{value: "d", label: "97%"},
		],
		explanation:
			"Selon le sondage de la Fondation Chagnon (2015) mentionné dans le cours, 83% des Québécois considèrent que les politiques sociales ont contribué de manière importante à la qualité de vie.",
	},
];

// Réponses correctes pour les questions à choix unique (radio)
export const correctRadioAnswers = {
	q1: "c",
	q2: "c",
	q3: "b",
	q4: "c",
	q5: "b",
	q6: "c",
	q8: "a",
	q10: "c",
	q11: "b",
	q12: "b",
	q13: "c",
	q16: "a",
	q17: "b",
	q18: "e",
	q19: "b",
	q20: "c",
};

// Réponses correctes pour les questions à choix multiples (checkbox)
export const correctCheckboxAnswers = {
	q7: ["a", "b", "c", "d"],
	q9: ["a", "b", "c", "d"],
	q14: ["a", "b"],
	q15: ["a", "b", "c", "d"],
};
