import React, { FC } from 'react'

import styles from './styles'

const GREETINGS = [
  'Buzz your girlfriend! Woof!',
  "Go get 'em tiger",
  "It's beginning to look a lot like Christmas",
  'You look terrible today',
  'Looking gooooooooood',
  "You're actually gonna go out like that huh?",
]

const Greeting: FC = () => {
  const getGreeting = () => {
    const count = GREETINGS.length
    const index = Math.floor(Math.random() * count)

    return GREETINGS[index]
  }

  return (
    <div style={styles.greetingStyles}>
      <p>{getGreeting()}</p>
    </div>
  )
}

export default Greeting
