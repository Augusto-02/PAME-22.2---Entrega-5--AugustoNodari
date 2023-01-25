import React, { useState } from 'react'
import { Background, Box, Headerstyle, HeaderTitle, MediumBox, MiniBox, TextBox } from './styles'

import Button from '../../Componnets/Button'
import { Link } from 'react-router-dom'

function Adiciona() {

      const [NewItem, SetNewItem] = useState("");
      const [Arraydetodos, Setarraydetodos] = useState([]);

      function AdditemtoList() {
            const newTodo = {
                  id: Math.floor(Math.random() *1000),
                  value: NewItem,
            };

            Setarraydetodos((arrayantigo) => { 
                  return [...arrayantigo, newTodo];
            });

            SetNewItem("");
      }

      function DeleteItem(id) {
            const newArray = Arraydetodos.filter((item)=> {
                  return item.id !== id
            });
            Setarraydetodos(newArray);
      }

  return (
      <Background>
      <Headerstyle>
            <HeaderTitle>Farmacia</HeaderTitle>
      </Headerstyle>

      <MediumBox>
            <Box>
                  <HeaderTitle>Adicione e Remova itens</HeaderTitle>
                  <MiniBox>
                  <input onChange={(evento) => SetNewItem(evento.target.value)} type="text" value={NewItem} placeholder='Nome*'></input>
                  <button onClick={AdditemtoList}>Adicionar Item</button>
                  </MiniBox>
                  <MiniBox>
                  <TextBox>
                        {Arraydetodos.map((item)=>{
                        return <div>{item.value} <button onClick={() => DeleteItem(item.id)}>X</button></div>
                        })}</TextBox>;
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

export default Adiciona