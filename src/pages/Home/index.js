import React, { Component } from 'react'

import {
  Container,
  Logo,
  Map,
  Calendar,
  MainPhoto,
  News,
  About
} from './styles'

export default class Home extends Component {
  state = {
    headerDisplayClass: 'normal'
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

          <Calendar />

          <About>
            <Map
              title='map'
              src='https://www.google.com/maps/d/u/0/embed?mid=1NaXavMlMmBfrN5Qg0ZCxx7ukEChIt0bD'
            />
          </About>
        </Container>
      </>
    )
  }
}
