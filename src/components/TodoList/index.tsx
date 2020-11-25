import React, { FC } from 'react'
import { connect } from 'react-redux'

import TodoListItem from '../TodoListItem'
import styles from './styles'

const FRIDAY = 5

interface Todo {
  content: string
  due: string
  id: number
}

interface Props {
  list: Todo[]
}

const TodoList: FC<Props> = ({ list = [] }) => {
  const renderNoTasks = () => {
    const today = new Date()
    const todayIsFriday = today.getDay() === FRIDAY
    const noTasksFriday = (
      <iframe
        allowFullScreen
        className="giphy-embed"
        frameBorder="0"
        height="260"
        src="https://giphy.com/embed/l1BgT6CDFMPU5Ibtu"
        title="Friday"
        width="480"
      />
    )
    const noTasks = <div>no items found</div>

    return todayIsFriday ? noTasksFriday : noTasks
  }

  return (
    <div style={styles.todoStyles}>
      <h1>To do today:</h1>
      {list.length
        ? list.map((task) => (
            <TodoListItem key={task.id} content={task.content} />
          ))
        : renderNoTasks()}
    </div>
  )
}

const mapStateToProps = (state: any) => {
  const list = state.app.todo

  return { list }
}

export default connect(mapStateToProps)(TodoList)
