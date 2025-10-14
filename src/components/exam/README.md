# Système de Composants d'Examen Modulaires

Ce dossier contient un ensemble de composants modulaires pour créer des examens avec un minimum de duplication de code. Ces composants sont conçus pour être réutilisables et faciles à maintenir.

## Composants disponibles

### `Question.astro`

Composant pour afficher une question d'examen avec son titre, texte et explication.

**Props:**

- `id`: Identifiant unique de la question (ex: "q1")
- `title`: Titre de la question (ex: "1. Perspective historique")
- `question`: Texte de la question
- `explanation`: Explication qui sera affichée après avoir soumis la réponse

### `RadioOption.astro` et `CheckboxOption.astro`

Composants pour les options à choix unique (radio) ou multiple (checkbox).

**Props:**

- `name`: Nom du groupe d'options (doit correspondre à l'id de la question)
- `id`: Identifiant unique de l'option (ex: "q1a")
- `value`: Valeur de l'option (ex: "a")
- `label`: Texte de l'option

### `ExamForm.astro`

Conteneur pour l'ensemble de l'examen, gère le formulaire et la logique de vérification des réponses.

**Props:**

- `title`: Titre de l'examen
- `examId`: Identifiant de l'examen (ex: "10" pour Exam10)

### `ExamStyle.astro`

Fournit les styles CSS communs pour tous les examens.

## Utilisation

### Étape 1: Créer un fichier de données d'examen

Créez un fichier JavaScript dans `src/data/exams/` qui exportera les questions et les réponses correctes.

```javascript
// src/data/exams/exam10.js
export const exam10Questions = [
	{
		id: "q1",
		title: "1. Ma question",
		question: "Texte de la question?",
		type: "radio", // ou 'checkbox'
		options: [
			{value: "a", label: "Option A"},
			{value: "b", label: "Option B"},
			// ...
		],
		explanation: "Explication de la réponse...",
	},
	// Autres questions...
];

// Réponses correctes pour les questions à choix unique
export const correctRadioAnswers = {
	q1: "b",
	// Autres réponses...
};

// Réponses correctes pour les questions à choix multiples
export const correctCheckboxAnswers = {
	q2: ["a", "c"],
	// Autres réponses...
};
```

### Étape 2: Créer un composant d'examen

```astro
---
import ExamForm from '../exam/ExamForm.astro';
import Question from '../exam/Question.astro';
import RadioOption from '../exam/RadioOption.astro';
import CheckboxOption from '../exam/CheckboxOption.astro';
import ExamStyle from '../exam/ExamStyle.astro';
import { exam10Questions } from '../../data/exams/exam10.js';

export interface Props {
  title: string;
}

const { title } = Astro.props;
---

<ExamStyle />
<ExamForm title={title} examId="10">
  {exam10Questions.map(question => (
    <Question
      id={question.id}
      title={question.title}
      question={question.question}
      explanation={question.explanation}
    >
      {question.type === 'radio'
        ? question.options.map(option => (
            <RadioOption
              name={question.id}
              id={`${question.id}${option.value}`}
              value={option.value}
              label={option.label}
            />
          ))
        : question.options.map(option => (
            <CheckboxOption
              name={question.id}
              id={`${question.id}${option.value}`}
              value={option.value}
              label={option.label}
            />
          ))
      }
    </Question>
  ))}
</ExamForm>
```

## Avantages

- **Réduction du code dupliqué** : Les éléments communs comme les styles, la structure et la logique de validation sont définis une seule fois.
- **Maintenance plus facile** : Les modifications peuvent être appliquées à un seul endroit.
- **Séparation des préoccupations** : Les données sont séparées de la présentation.
- **Évolutivité** : Facilité d'ajout de nouveaux types de questions ou fonctionnalités.

## Notes

Pour convertir un examen existant au format modulaire, vous devez:

1. Extraire les données des questions dans un fichier séparé
2. Créer un nouveau fichier d'examen utilisant les composants modulaires
3. Mettre à jour les références à cet examen dans le reste du site
