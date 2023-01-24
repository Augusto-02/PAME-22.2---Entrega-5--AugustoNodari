import React from 'react'
import './styles.css'

function Body() {
  return (
      <div class ='container'>
            <div class='body'>
              <h1 class="texth1">Login:</h1>
              <input type="text" placeholder='Nome*'></input>
              <input type="password" placeholder='Senha*'></input>
              <button>Logar</button>
            </div>
      </div>
  )
}

export default Body