const todo = (state = [], action) => {
  if (action.type === 'ADD_TODO') {
    return state.concat(action.payload)
  }

  if (action.type === 'TOGGLE_TODO') {
    const id = action.payload.id
    const todo = state.filter(item => item.id === id)
    todo[0].state = action.payload.status

    return [].concat(state)
  }

  if (action.type === 'DELETE_TODO') {
    const id = action.payload

    return state.filter(item => item.id !== id)
  }

  return state
}

export default todo
