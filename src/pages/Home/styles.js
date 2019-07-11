import styled from 'styled-components'
import { colors } from '../../config/colors'

export const MainPhoto = styled.div`
  background: url('/assets/fotoOficialBlurPreto.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  height: 800px;
  width: 100%;
  margin-bottom: -60px;

  display: flex;
  justify-content: center;
  align-items: center;

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
  padding: 0 10%;

  display: flex;
  flex-direction: column;
  align-items: space-between;

  @media (min-width: 1800px) {
    max-width: 1800px;
    margin: 0 auto;
  }
`

export const Title = styled.p`
  font-size: 32px;
  font-weight: bold;
  align-self: center;
  margin: 70px 0 30px 0;

  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;

  svg {
    margin: 20px;
    align-self: flex-end;
  }
`

export const NewsContainer = styled.div`
  align-self: center;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 50px;
`

export const News = styled.div`
  height: 500px;
  width: 800px;
  border-radius: 5px;
  border: 1px solid ${colors.grey};
  margin: 10px 20px;
`

export const About = styled.div`
  display: flex;
  flex-direction: column;
  align-items: space-between;
  background: ${colors.lightgrey};
  border-top: 1px solid ${colors.grey};
  border-bottom: 1px solid ${colors.grey};
  margin: 10px 0;
  padding-bottom: 50px;
`

export const InfoContainer = styled.div`
  align-self: center;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 600px;
  margin-bottom: 75px;
`

export const Info = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

export const InfoHeader = styled.div`
  font-size: 52px;
  color: ${colors.interact};
  font-weight: bold;
`

export const InfoBody = styled.div`
  font-size: 30px;
  color: ${colors.interact};
`

export const AboutDescription = styled.p`
  align-self: center;
  margin-bottom: 75px;
  width: 900px;
  font-size: 20px;
`

export const Map = styled.iframe`
  width: 70%;
  height: 500px;

  align-self: center;

  border: 1px solid ${colors.grey};
`

export const FooterLogo = styled.img`
  height: 50px;

  margin: 50px 0 20px 0;

  align-self: center;
`
