import React from 'react'
import { FC } from 'react'

import { Status, TriviaItem, TriviaStat } from '../../types'
import styles from './styles'

interface Props {
  triviaItems: TriviaItem[]
  triviaStats?: TriviaStat
}

const Stats: FC<Props> = ({ triviaItems, triviaStats }) => {
  if (!triviaStats) return null

  const { today, all_time: allTime } = triviaStats
  const todayStats = Math.round(today * 100)
  const allTimeStats = Math.round(allTime * 100)

  if (triviaItems.length === 0) return null

  const previousQuestion = triviaItems[1]
  const { max_streak: maxStreak, streak_count: streakCount } = triviaItems[0]
  const streakType =
    previousQuestion.status === Status.incorrect
      ? Status.incorrect
      : Status.correct

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
