import React, { FC } from 'react'

import {
  QuestionType,
  Status,
  FormattedTriviaItem,
  FormattedTriviaStat,
} from '../../types'
import Stats from '../Stats'
import styles from './styles'

interface Props {
  triviaItems: FormattedTriviaItem[]
  triviaStats?: FormattedTriviaStat
}

const Trivia: FC<Props> = ({ triviaItems, triviaStats }) => {
  const getStyle = (guessed: boolean, correct: boolean) => ({
    ...styles.answerContainer,
    ...(guessed ? styles.guessed : {}),
    ...(correct ? styles.correct : {}),
  })

  const renderQuestion = (
    item: FormattedTriviaItem,
    questionType: QuestionType,
  ) => {
    const { answered, answerOptions, correctOption, guess, options } = item

    return answerOptions.map((answerOption) => {
      const guessed = !!guess && guess.toUpperCase() === answerOption
      const correct = answered && answerOption === correctOption

      return (
        <div style={getStyle(guessed, correct)} key={answerOption}>
          {questionType === QuestionType.boolean ? (
            { answerOption }
          ) : (
            <>
              <span>{answerOption}: </span>
              <span>{options[answerOption]}</span>
            </>
          )}
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
        const { category, difficulty, questionType, question, status } = item
        const statusStyle = {
          ...styles.status,
          ...(status === Status.correct ? styles.green : {}),
          ...(status === Status.incorrect ? styles.red : {}),
        }

        return (
          <div key={question} style={styles.container}>
            <div style={styles.header}>
              <span style={styles.category}>{category}</span>

              <span style={statusStyle}>{status}!</span>
            </div>

            <div>
              <span style={styles.question}>{question}</span>
              <span style={styles.difficulty}>({difficulty})</span>
            </div>

            <div>{renderQuestion(item, questionType)}</div>
          </div>
        )
      })}
      <Stats triviaItems={triviaItems} triviaStats={triviaStats} />
    </div>
  )
}

export default Trivia
