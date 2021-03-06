import React from 'react'
import ReactDOM from 'react-dom'

// Components
import TodoContainer from './components/TodoContainer'
// Style
import './App.css'


ReactDOM.render(
  <React.StrictMode>
    <TodoContainer />
  </React.StrictMode>,
  document.getElementById('root')
)
