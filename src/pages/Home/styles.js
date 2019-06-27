import styled from 'styled-components'
import { colors } from '../../config/colors'

export const MainPhoto = styled.div`
  background: url('/assets/fotoOficialBlur.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 800px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  .shrink {
    animation: shrink 1s forwards;
  }

  .normal {
    animation: grow 1s forwards;
  }

  @keyframes grow {
    0% {
      transform: scale(0);
    }
    100% {
      transform: scale(1);
    }
  }
  @keyframes shrink {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(0);
    }
  }
`

export const Logo = styled.img`
  width: 75%;

  @media (min-width: 1500px) {
    width: 40%;
  }
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: space-between;
  padding: 0 10%;

  @media (min-width: 1800px) {
    max-width: 1800px;
    margin: 0 auto;
  }
`

export const News = styled.div`
  display: flex;
  flex-direction: row;
  align-items: space-between;
`

export const About = styled.div`
  display: flex;
  flex-direction: column;
  align-items: space-between;
`

export const Map = styled.iframe`
  align-self: center;
  width: 70%;
  height: 500px;
  border: 1px solid ${colors.grey};
`

export const FooterLogo = styled.img`
  height: 50px;
  margin: 50px 0 20px 0;
  align-self: center;
`
