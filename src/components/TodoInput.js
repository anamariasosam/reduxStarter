import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions'

const TodoInput = props => {
  let input

  return (
    <form>
      <h1 className="f1">Hack Todo</h1>
      <input
        type="text"
        placeholder="Insert TODO"
        autoFocus
        ref={ node => { input = node }}
      />
      <button type="submit" onClick={(event) => {
        event.preventDefault()

        props.addTodo({
          task: input.value,
          state: 'active',
          id: +new Date()
        })

        input.value = ""
      }}>add</button>
    </form>
  )
}

export default connect(null, {
  addTodo: actions.addTodo,
})(TodoInput)
