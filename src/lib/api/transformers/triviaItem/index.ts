import {
  FormattedTriviaItem,
  QuestionType,
  Status,
  TriviaItem,
} from '../../../../types'

const TRUE = 'True'
const FALSE = 'False'

const capitalize = (string: string) =>
  string?.charAt(0)?.toUpperCase() + string?.slice(1)
const formatCategory = (category: string) =>
  category.split(' ').map(capitalize).join(' ')

export const triviaItem = (items: TriviaItem[]): FormattedTriviaItem[] =>
  items.map((item) => {
    const {
      category,
      correct_answer: correctAnswer,
      correct_letter: correctLetter,
      difficulty,
      guess,
      incorrect_answers: incorrectAnswers,
      max_streak: maxStreak,
      options,
      question,
      question_type: questionType,
      status,
      streak_count: streakCount,
    } = item
    const answerOptions =
      questionType === QuestionType.boolean
        ? [TRUE, FALSE]
        : Object.keys(options)
    const formattedCategory = formatCategory(category)
    const answered = capitalize(status) !== Status.unanswered
    const correctOption =
      questionType === QuestionType.boolean ? correctAnswer : correctLetter

    return {
      answered,
      answerOptions,
      category: formattedCategory,
      correctOption,
      difficulty,
      guess: capitalize(guess),
      incorrectAnswers,
      maxStreak,
      options,
      question,
      questionType,
      status: capitalize(status) as Status,
      streakCount,
    }
  })
