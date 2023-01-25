import React from 'react'
import { Background, Box, Headerstyle, HeaderTitle, MediumBox, MiniBox } from './styles'

import Button from '../../Componnets/Button'
import { Link } from 'react-router-dom'

function Verifica() {
      
  return (
      <Background>
            <Headerstyle>
                  <HeaderTitle>Farmacia</HeaderTitle>
            </Headerstyle>

            <MediumBox>
                  <Box>
                        <HeaderTitle>Entregas sendo realizdas</HeaderTitle>
                              <MiniBox>
                              <input type="checkbox"></input>
                              <label>Remedio 1</label>
                              </MiniBox>
                              <MiniBox>
                              <input type="checkbox"></input>
                              <label>Remedio 2</label>
                              </MiniBox>
                              <MiniBox>
                              <input type="checkbox"></input>
                              <label>Remedio 3</label>
                              </MiniBox>
                              <MiniBox>
                              <input type="checkbox"></input>
                              <label>Remedio 4</label>
                              </MiniBox>
                              <MiniBox>
                              <input type="checkbox"></input>
                              <label>Remedio 5</label>
                              </MiniBox>
                              <MiniBox>
                              <input type="checkbox"></input>
                              <label>Remedio 6</label>
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

export default Verifica