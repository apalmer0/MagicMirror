import React, { FC, useCallback, useEffect, useState } from 'react'

import { API } from '../../lib/api'
import { QuestionType, Status, FormattedTriviaItem } from '../../types'
import Stats from '../Stats'
import styles from './styles'

const Trivia: FC = () => {
  const [items, setItems] = useState<FormattedTriviaItem[]>([])

  useEffect(() => {
    const getTriviaItems = async () => {
      try {
        const data = await API.triviaItem.loadAll()

        setItems(data)
      } catch (e) {
        console.error(e)
      }
    }

    getTriviaItems()
    const interval = setInterval(getTriviaItems, 5000)
    return () => clearInterval(interval)
  }, [])

  const getStyle = useCallback(
    (guessed: boolean, correct: boolean) => ({
      ...styles.answerContainer,
      ...(guessed ? styles.guessed : {}),
      ...(correct ? styles.correct : {}),
    }),
    [],
  )

  const renderQuestion = useCallback(
    (item: FormattedTriviaItem, questionType: QuestionType) => {
      const { answered, answerOptions, correctOption, guess, options } = item

      return answerOptions.map((answerOption) => {
        const guessed = guess === answerOption
        const correct = answered && answerOption === correctOption

        return (
          <div style={getStyle(guessed, correct)} key={answerOption}>
            {questionType === QuestionType.boolean ? (
              <span>{answerOption}</span>
            ) : (
              <>
                <span>{answerOption}: </span>
                <span>{options[answerOption]}</span>
              </>
            )}
          </div>
        )
      })
    },
    [],
  )

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

      {items.map((item) => {
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
      <Stats triviaItems={items} />
    </div>
  )
}

export default Trivia
