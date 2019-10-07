import React, { Component } from 'react'

import {
  Container,
  LoginContainer,
  Title,
  Input,
  SignInButton,
  SignUpButton,
  Logo
} from './styles'

export default class SignIn extends Component {
  render() {
    return (
      <Container>
        <LoginContainer>
          <Title>Login</Title>

          <Input placeholder='Insira Email' type='email' />
          <Input placeholder='Insira Senha' type='password' />

          <SignInButton href='#!'>Entrar</SignInButton>
          <SignUpButton
            href='#!'
            onClick={() => this.props.history.push('signup')}
          >
            Cadastre-se
          </SignUpButton>
        </LoginContainer>
        <Logo src='/assets/logocomInteract.png' alt='Logo Gestão 19-20' />
      </Container>
    )
  }
}
