import React from 'react'

import { Container, ItemNav } from './styles'

import { LogIn } from 'react-feather'

const Header = () => (
  <Container>
    <img src='/assets/logoInteract.png' alt='Interact' />
    <div className='icons'>
      <ItemNav>Notícias</ItemNav>
      <ItemNav>Calendário</ItemNav>
      <ItemNav>Sobre</ItemNav>
      <ItemNav>
        Entrar
        <LogIn width='18px' height='18px' />
      </ItemNav>
    </div>
  </Container>
)

export default Header
