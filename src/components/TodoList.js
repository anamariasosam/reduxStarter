import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import * as actions from '../actions'
import cx from 'classnames'
import CSSTransition from 'react-transition-group/CSSTransitionGroup'

import './TodoList.css'

const TodoList = ({
  todos,
  filter,
  toggleComplete,
  deleteTodo,
}) => {
  const visibleTodos = getVisibleTodos(todos, filter)

  return (
    <CSSTransition
      component="ul"
      transitionName="addTodo"
      transitionEnterTimeout={300}
      transitionLeaveTimeout={300}
    >
      {visibleTodos.map(todo => {
        const isCompleted = todo.state === 'completed'
        const itemcx = cx('TodoList__item', {
          completed: isCompleted
        })

        return (
          <li key={todo.id} className={itemcx} >
            <input
              type="checkbox"
              checked={isCompleted}
              onChange={event => { toggleComplete(event, todo.id) } }
            />
            {todo.task}
            <button onClick={() => { deleteTodo(todo.id) }}>Delete</button>
          </li>
        )}
      )}
    </CSSTransition>
  )
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    state: PropTypes.string.isRequired,
  })),
  filter: PropTypes.string,
  toggleComplete: PropTypes.func,
  deleteTodo: PropTypes.func,
}

function getVisibleTodos(todos, filter) {
  switch (filter) {

    case "all":
      return todos

    case "completed":
      return todos.filter(todo => todo.state === 'completed')

    case "active":
      return todos.filter(todo => todo.state !== 'completed')

    default:
      return todos
  }
}

const mapStateToProps = ({ todos, filter }) => ({ todos, filter })

export default connect(mapStateToProps, {
  toggleComplete: actions.toggleComplete,
  deleteTodo: actions.deleteTodo,
})(TodoList)
