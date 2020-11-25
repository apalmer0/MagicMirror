import { FC, useEffect, useState } from 'react'
import { format } from 'date-fns'

import styles from './styles'

const Clock: FC = () => {
  const [now, setNow] = useState<Date>(new Date())

  useEffect(() => {
    const newDate = new Date()
    const timer = setInterval(() => setNow(newDate), 1000)

    return () => clearInterval(timer)
  }, [])

  const date = format(now, 'MMMM do YYYY')
  const day = format(now, 'EEEE')
  const time = format(now, 'h:mm a')

  return (
    <div>
      <p style={styles.dayStyles}>{day}</p>
      <p style={styles.dateStyles}>{date}</p>
      <p style={styles.timeStyles}>{time}</p>
    </div>
  )
}

export default Clock
