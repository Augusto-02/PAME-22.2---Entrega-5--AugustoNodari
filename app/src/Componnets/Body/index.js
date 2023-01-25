import React from 'react'
import './styles.css'
import { Link } from 'react-router-dom'

function Body() {
  return (
      <div class ='container'>
            <div class='body'>
              <h1 class="texth1">Login:</h1>
              <input type="text" placeholder='Nome*'></input>
              <input type="password" placeholder='Senha*'></input>
              <Link to='/Homepage'><button>Logar</button></Link>
            </div>
      </div>
  )
}

export default Body