import { combineReducers } from 'redux'
import todoReducer from './todoReducer'
import filterReducer from './filterReducer'

const todoApp = combineReducers({
  todos: todoReducer,
  filter: filterReducer,
})

export default todoApp
