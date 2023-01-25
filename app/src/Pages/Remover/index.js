import React from 'react'
import { Background, Box, Headerstyle, HeaderTitle, MediumBox, MiniBox } from './styles'

import Button from '../../Componnets/Button'
import { Link } from 'react-router-dom'

function Remover() {
  return (
      <Background>
      <Headerstyle>
            <HeaderTitle>Farmacia</HeaderTitle>
      </Headerstyle>

      <MediumBox>
            <Box>
                  <HeaderTitle>Remova itens</HeaderTitle>
                  <MiniBox>
                  </MiniBox>
                  <MiniBox>

                  </MiniBox>
                  <Link to='/Homepage'><Button></Button></Link>
                  <label>Sair</label>
            </Box>
      </MediumBox>

      <Headerstyle>
            <HeaderTitle>Farmacia</HeaderTitle>
      </Headerstyle>
    </Background>
  )
}

export default Remover