import React from 'react'
import Body from '../Body'
import Header from '../Header'
import './styles.css'

function ToDoList() {
  return (
    <div>
      <Header></Header>
      <div class="box">
        <Body></Body>
      </div>
      <Header></Header>
    </div>
  )
}

export default ToDoList