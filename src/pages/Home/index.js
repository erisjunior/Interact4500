import React, { Component } from 'react'
import moment from 'moment'

import {
  Container,
  Logo,
  Title,
  Map,
  MainPhoto,
  About,
  InfoContainer,
  AboutDescription,
  Info,
  InfoHeader,
  InfoBody,
  FooterLogo
} from './styles'

import Calendar from './components/Calendar'
import Header from './components/Header'

import { Sun, Calendar as CalendarIcon } from 'react-feather'
import { colors } from '../../config/colors'

export default class Home extends Component {
  state = {
    headerDisplayClass: 'normal',
    events: [
      {
        start: new Date(moment('20190628', 'YYYYMMDD')),
        end: new Date(moment('20190630', 'YYYYMMDD')),
        title: 'CODIC da Liderança'
      }
    ]
  }

  componentDidMount() {
    window.onscroll = () => this.handleScroll()
  }

  handleScroll = () => {
    const { headerDisplayClass } = this.state
    const height = document.documentElement.scrollTop

    if (headerDisplayClass !== 'shrink' && height > 400) {
      this.setState({ headerDisplayClass: 'shrink' })
    } else if (headerDisplayClass === 'shrink' && height < 300) {
      this.setState({ headerDisplayClass: 'normal' })
    }
  }
  render() {
    return (
      <>
        <Header />
        <MainPhoto>
          <Logo
            src='/assets/logocomInteract.png'
            alt='Logo Gestão 19-20'
            className={this.state.headerDisplayClass}
          />
        </MainPhoto>
        {/*
          import News,NewsContainer e Video (Icon)
        <Container>
          <Title>
            Novidades Calorosas
            <Video color={colors.interact} fill={colors.interact} size={40} />
          </Title>
          <NewsContainer>
            <News />
            <News />
          </NewsContainer>
        </Container> */}
        <About>
          <Title>
            Caloroso
            <Sun
              color={colors.rotaryyellow}
              fill={colors.rotaryyellow}
              size={50}
            />
          </Title>

          <InfoContainer>
            <Info>
              <InfoHeader>3</InfoHeader>
              <InfoBody>Estados</InfoBody>
            </Info>
            <Info>
              <InfoHeader>17</InfoHeader>
              <InfoBody>Clubes</InfoBody>
            </Info>
            <Info>
              <InfoHeader>180</InfoHeader>
              <InfoBody>Associados</InfoBody>
            </Info>
          </InfoContainer>

          <AboutDescription>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab soluta
            fuga rem unde sed ipsa neque, quia, minima sunt labore facilis est,
            expedita modi officiis enim illo fugiat eaque inventore?
          </AboutDescription>

          <Map
            title='map'
            src='https://www.google.com/maps/d/u/0/embed?mid=1NaXavMlMmBfrN5Qg0ZCxx7ukEChIt0bD'
          />
        </About>
        <Container>
          <Title>
            Acompanhe as Atividades
            <CalendarIcon color={colors.rotaract} size={40} />
          </Title>
          <Calendar events={this.state.events} />
          <FooterLogo src='/assets/logoInteract.png' alt='Logo Gestão 19-20' />
        </Container>
      </>
    )
  }
}
