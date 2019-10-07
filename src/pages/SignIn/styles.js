import styled from 'styled-components'
import { colors } from '../../config/colors'

const { grey, lightgrey, interact, black, white } = colors

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 40%;

  padding: 40px 10px;

  background: ${lightgrey};
  border: 1px solid ${grey};
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.1);
`

export const Title = styled.p`
  font-size: 32px;
  font-weight: bold;
`

export const Input = styled.input`
  width: 55%;
  height: 35px;

  margin: 10px;
  padding: 5px;

  border-radius: 5px;

  border: 1px solid ${grey};
  color: ${black};
`

export const SignInButton = styled.a`
  width: 40%;
  height: 40px;

  padding: 10px;
  margin-top: 10px;

  background: ${interact};
  border-radius: 5px;

  color: ${white};
  text-decoration: none;
  text-align: center;
`
export const SignUpButton = styled(SignInButton)`
  background: transparent;
  border: 1px solid transparent;
  color: ${interact};
  transition: 0.5s;

  :hover {
    transition: 0.5s;
    border: 1px solid rgba(0, 0, 0, 0.2);
  }
`

export const Logo = styled.img`
  height: 100px;

  margin-top: 30px;

  align-self: center;
`
