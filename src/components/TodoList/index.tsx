import React, { FC } from 'react'

import { Todo } from '../../types'
import friday from './friday.gif'
import styles from './styles'
import TodoListItem from '../TodoListItem'

const FRIDAY = 5

interface Props {
  list: Todo[]
}

const TodoList: FC<Props> = ({ list }) => {
  const today = new Date()
  const renderNoTasks = () => {
    const noTasksFriday = (
      <img height="260" src={friday} title="Friday" width="480" />
    )
    const noTasks = <div>no items found</div>

    return today.getDay() === FRIDAY ? noTasksFriday : noTasks
  }

  return (
    <div style={styles.todoStyles}>
      <h1>To do today:</h1>
      {list.length
        ? list.map((task) => (
            <TodoListItem key={task.id} content={task.content} due={task.due} />
          ))
        : renderNoTasks()}
    </div>
  )
}

export default TodoList
