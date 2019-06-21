import React, { Component } from 'react'
import moment from 'moment'

//@import 'react-big-calendar/lib/sass/styles';

import {
  Container,
  Logo,
  Map,
  MainPhoto,
  News,
  About,
  FooterLogo
} from './styles'

import Calendar from '../../components/Calendar'

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
    let { headerDisplayClass } = this.state
    const height = document.documentElement.scrollTop

    if (headerDisplayClass !== 'shrink' && height > 400) {
      headerDisplayClass = 'shrink'
    } else if (headerDisplayClass === 'shrink' && height < 300) {
      headerDisplayClass = 'normal'
    }

    this.setState({ headerDisplayClass })
  }
  render() {
    return (
      <>
        <MainPhoto>
          <Logo
            src='/assets/logo.png'
            alt='Logo Gestão 19-20'
            className={this.state.headerDisplayClass}
          />
        </MainPhoto>
        <Container>
          <News />
          <Calendar events={this.state.events} />
          <About>
            <Map
              title='map'
              src='https://www.google.com/maps/d/u/0/embed?mid=1NaXavMlMmBfrN5Qg0ZCxx7ukEChIt0bD'
            />
          </About>
          <FooterLogo src='/assets/logoInteract.png' alt='Logo Gestão 19-20' />
        </Container>
      </>
    )
  }
}
