import React from 'react'
import { FC } from 'react'

import styles from './styles'

interface TriviaItem {
  category: string
  correct_answer: string
  difficulty: string
  guess: string
  incorrect_answers: string[]
  max_streak: number
  question: string
  status: string
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

const Stats: FC<Props> = ({
  triviaItems = [],
  triviaStats = { today: 0, all_time: 0 },
}) => {
  const { today, all_time: allTime } = triviaStats
  const todayStats = Math.round(today * 100)
  const allTimeStats = Math.round(allTime * 100)

  if (triviaItems.length === 0) return null

  const previousQuestion = triviaItems[1]
  const { max_streak: maxStreak, streak_count: streakCount } =
    triviaItems[0] || 0
  const streakType =
    previousQuestion.status === 'incorrect' ? 'incorrect' : 'correct'

  return (
    <span>
      <table style={styles.tableStyles}>
        <thead>
          <tr>
            <th style={styles.tableHeader}>Percent Correct</th>
            <th />
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Today:</td>
            <td style={styles.statData}>{todayStats}%</td>
          </tr>
          <tr>
            <td>All Time:</td>
            <td style={styles.statData}>{allTimeStats}%</td>
          </tr>
        </tbody>
      </table>
      <table style={styles.tableStyles}>
        <thead>
          <tr>
            <th style={styles.tableHeader}>Streaks</th>
            <th />
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Current:</td>
            <td style={styles.statData}>
              {streakCount} {streakType}
            </td>
          </tr>
          <tr>
            <td>Record:</td>
            <td style={styles.statData}>{maxStreak} correct</td>
          </tr>
        </tbody>
      </table>
    </span>
  )
}

export default Stats
