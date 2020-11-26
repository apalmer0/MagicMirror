export enum QuestionType {
  boolean = 'boolean',
  multiple = 'multiple',
}

export enum Status {
  correct = 'correct',
  incorrect = 'incorrect',
  unanswered = 'unanswered',
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
