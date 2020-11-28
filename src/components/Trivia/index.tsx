import React, { FC } from 'react'

import { QuestionType, Status, TriviaItem, TriviaStat } from '../../types'
import Stats from '../Stats'
import styles from './styles'

interface Props {
  triviaItems: TriviaItem[]
  triviaStats?: TriviaStat
}

const capitalize = (string: string) =>
  string.charAt(0).toUpperCase() + string.slice(1)
const formatCategory = (category: string) =>
  category.split(' ').map(capitalize).join(' ')

const Trivia: FC<Props> = ({ triviaItems, triviaStats }) => {
  const renderMultipleChoice = (item: TriviaItem) => {
    const { correct_letter: correctLetter, guess, options, status } = item
    const letters = Object.keys(options)
    const answered = status !== Status.unanswered

    return letters.map((letter) => {
      const guessed = guess && guess.toUpperCase() === letter
      const correct =
        answered && correctLetter && correctLetter.toUpperCase() === letter
      const style = {
        ...styles.answerContainer,
        ...(guessed ? styles.guessed : {}),
        ...(correct ? styles.correct : {}),
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
      const guessed = guess && capitalize(guess) === answerOption
      const correct = answered && capitalize(answerOption) === correctAnswer
      const style = {
        ...styles.answerContainer,
        ...(guessed ? styles.guessed : {}),
        ...(correct ? styles.correct : {}),
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
      <div style={styles.tips}>
        <div>
          To play, say &quot;Hey Google - Answer: C&quot; or &quot;Hey Google -
          Answer: True&quot;
        </div>
        <div>
          Don&apos;t know the answer? Just guess, or say &quot;Hey Google - new
          question&quot;
        </div>
      </div>

      {triviaItems.map((item) => {
        const {
          category,
          difficulty,
          question_type: questionType,
          question,
          status,
        } = item
        const statusStyle = {
          ...styles.status,
          ...(status === Status.correct ? styles.green : {}),
          ...(status === Status.incorrect ? styles.red : {}),
        }

        return (
          <div key={question} style={styles.container}>
            <div style={styles.header}>
              <span style={styles.category}>{formatCategory(category)}</span>

              {status !== Status.unanswered && (
                <span style={statusStyle}>{capitalize(status)}!</span>
              )}
            </div>

            <div>
              <span style={styles.question}>{question}</span>
              <span style={styles.difficulty}>({difficulty})</span>
            </div>

            <div>
              {questionType === QuestionType.boolean
                ? renderTrueFalse(item)
                : renderMultipleChoice(item)}
            </div>
          </div>
        )
      })}
      <Stats triviaItems={triviaItems} triviaStats={triviaStats} />
    </div>
  )
}

export default Trivia
