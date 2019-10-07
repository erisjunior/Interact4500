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
          <Title>Cadastro</Title>

          <Input placeholder='Insira Email' type='email' />
          <Input placeholder='Insira Senha' type='password' />
          <Input placeholder='Repita a Senha' type='password' />

          <SignUpButton href='#!'>Realizar cadastro</SignUpButton>
          <SignInButton
            href='#!'
            onClick={() => this.props.history.push('signin')}
          >
            Realizar Login
          </SignInButton>
        </LoginContainer>
        <Logo src='/assets/logocomInteract.png' alt='Logo Gestão 19-20' />
      </Container>
    )
  }
}
