export enum QuestionType {
  boolean = 'boolean',
  multiple = 'multiple',
}

export enum Status {
  correct = 'Correct',
  incorrect = 'Incorrect',
  unanswered = 'Unanswered',
}

export interface TriviaItem {
  category: string
  correct_answer: string
  correct_letter: string
  difficulty: string
  guess: string
  incorrect_answers: string[]
  max_streak: number
  options: { [key: string]: string }
  question_type: QuestionType
  question: string
  status: Status
  streak_count: number
}

export interface TriviaStat {
  today: number
  all_time: number
}

export interface FormattedTriviaItem {
  answered: boolean
  answerOptions: string[]
  category: string
  correctOption: string
  difficulty: string
  guess: string
  incorrectAnswers: string[]
  maxStreak: number
  options: { [key: string]: string }
  question: string
  questionType: QuestionType
  status: Status
  streakCount: number
}

export interface FormattedTriviaStat {
  today: number
  allTime: number
}
