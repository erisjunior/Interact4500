import React from 'react'

import { Container, ItemNav } from './styles'

import { LogIn } from 'react-feather'

import { withRouter } from 'react-router'

const Header = ({ history }) => (
  <Container>
    <img src='/assets/logoInteract.png' alt='Interact' />
    <div className='icons'>
      {/* <ItemNav>Notícias</ItemNav>
      <ItemNav>Calendário</ItemNav>
      <ItemNav>Sobre</ItemNav> */}
      <ItemNav onClick={() => history.push('/signin')}>
        Entrar
        <LogIn width='18px' height='18px' />
      </ItemNav>
    </div>
  </Container>
)

export default withRouter(Header)
