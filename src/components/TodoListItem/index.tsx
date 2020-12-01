import React, { FC } from 'react'
import differenceInDays from 'date-fns/differenceInDays'
import parse from 'date-fns/parse'

import styles from './styles'

interface Props {
  content: string
  due: string
}

const BASE_FONT_SIZE = 25

const TodoListItem: FC<Props> = ({ content, due }) => {
  const today = new Date()
  const dueDate = parse(due, 'yyyy-L-dd', today)
  const difference = differenceInDays(today, dueDate) * 5
  const fontSize = BASE_FONT_SIZE + difference
  const style = {
    ...styles.todoItem,
    fontSize: `${fontSize}px`,
  }

  return (
    <div style={style}>
      <span>◦</span>
      <span style={styles.listContent}>{content}</span>
    </div>
  )
}

export default TodoListItem
