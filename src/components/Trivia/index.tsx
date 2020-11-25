import React, { FC } from 'react'
import { connect } from 'react-redux'

import Stats from '../Stats'
import styles from './styles'
import TriviaTips from '../TriviaTips'

interface Options {
  A: string
  B: string
  C: string
  D: string
}

enum QuestionType {
  boolean = 'boolean',
  multiple = 'multiple',
}

enum Status {
  correct = 'correct',
  incorrect = 'incorrect',
  unanswered = 'unanswered',
}

interface TriviaItem {
  category: string
  correct_answer: string
  correct_letter: string
  difficulty: string
  guess: string
  incorrect_answers: string[]
  max_streak: number
  options: Options
  question_type: QuestionType
  question: string
  status: Status
  streak_count: number
}

interface TriviaStat {
  today: number
  all_time: number
}

interface Props {
  triviaItems: TriviaItem[]
  triviaStats: TriviaStat
}

const capitalize = (string: string) => string.charAt(0).toUpperCase() + string.slice(1)

const Trivia: FC<Props> = ({ triviaItems = [], triviaStats = { all_time: 0, today: 0 } }) => {
  const renderMultipleChoice = (item: TriviaItem) => {
    const { correct_letter: correctLetter, guess, options, status } = item
    const letters = Object.keys(options)
    const answered = status !== Status.unanswered

    return letters.map((letter) => {
      const guessed = guess && guess.toUpperCase() === letter
      const correct =
        answered && correctLetter && correctLetter.toUpperCase() === letter
      const style = {
        ...styles.answerContainerStyles,
        ...(guessed ? styles.guessStyle : {}),
        ...(correct ? styles.correctStyle : {}),
      }

      return (
        <div style={style} key={letter}>
          <span>{letter}: </span>
          <span>{options[letter]}</span>
        </div>
      )
    })
  }

  const renderTrueFalse = (item: TriviaItem) => {
    const {
      correct_answer: correctAnswer,
      guess,
      incorrect_answers: incorrectAnswers,
      status,
    } = item
    const answerOptions = [...incorrectAnswers, correctAnswer]
    const answered = status !== Status.unanswered

    return answerOptions.map((answerOption) => {
      const guessed = capitalize(guess) === answerOption
      const correct = answered && capitalize(answerOption) === correctAnswer
      const style = {
        ...styles.answerContainerStyles,
        ...(guessed ? styles.guessStyle : {}),
        ...(correct ? styles.correctStyle : {}),
      }

      return (
        <div style={style} key={answerOption}>
          {answerOption}
        </div>
      )
    })
  }

  return (
    <div>
      <TriviaTips />
      {triviaItems.map((item) => {
        const {
          category,
          difficulty,
          question_type: questionType,
          question,
          status,
        } = item
        const trueFalse = questionType === QuestionType.boolean
        const multipleChoice = questionType === QuestionType.multiple
        const statusStyle = {
          ...styles.statusStyles,
          ...(status === Status.correct ? styles.greenStyle : {}),
          ...(status === Status.incorrect ? styles.redStyle : {}),
        }
        const formattedCategoryName = category.split(' ').map(capitalize).join(' ')

        return (
          <div key={question} style={styles.containerStyles}>
            <div style={styles.headerStyles}>
              <span style={styles.categoryStyles}>{formattedCategoryName}</span>
              {status !== Status.unanswered && (
                <span style={statusStyle}>{capitalize(status)}!</span>
              )}
            </div>
            <div>
              <span style={styles.questionStyles}>{question}</span>
              <span style={styles.difficultyStyles}>({difficulty})</span>
            </div>
            <div>
              {trueFalse && renderTrueFalse(item)}
              {multipleChoice && renderMultipleChoice(item)}
            </div>
          </div>
        )
      })}
      <Stats triviaItems={triviaItems} triviaStats={triviaStats} />
    </div>
  )
}

const mapStateToProps = (state: any) => {
  const { triviaItems, triviaStats } = state.app

  return { triviaItems, triviaStats }
}

export default connect(mapStateToProps)(Trivia)
