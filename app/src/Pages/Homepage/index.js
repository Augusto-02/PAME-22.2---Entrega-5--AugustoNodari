
import React from 'react'
import { Background, Box, Headerstyle, HeaderTitle, MediumBox } from './styles'

import Button from '../../Componnets/Button'
import { Link } from 'react-router-dom'

function Homepage() {
  return (
    <Background>
      <Headerstyle>
            <HeaderTitle>Farmacia</HeaderTitle>
      </Headerstyle>

      <MediumBox>
            <Box>
                  <Link to='/Adicionar'><Button></Button></Link>
                  <label>Adicionar e Remover item</label>

                  <Link to='/Verifica'><Button></Button></Link>
                  <label>Verificar entregas</label>

                  <Link to='/'><Button></Button></Link>
                  <label>Sair</label>
            </Box>
      </MediumBox>

      <Headerstyle>
            <HeaderTitle>Farmacia</HeaderTitle>
      </Headerstyle>
    </Background>
  )
}

export default Homepage