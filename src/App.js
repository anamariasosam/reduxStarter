import React, { Component } from 'react'
import TodoList from './components/TodoList'
import TodoInput from './components/TodoInput'
import Filter from './components/Filter'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <TodoInput />
        <TodoList />
        <Filter />
      </div>
    )
  }
}

export default App
