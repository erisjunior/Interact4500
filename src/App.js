import React, { Component } from 'react'
import { Route, Switch, BrowserRouter } from 'react-router-dom'

import Routes from './routes'

import { observer } from 'mobx-react'
import Header from './components/Header'
// import Footer from './components/Footer'

class App extends Component {
  state = {}

  render() {
    return (
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path='*' component={Routes} />
        </Switch>
        {/* <Footer /> */}
      </BrowserRouter>
    )
  }
}

App = observer(App)
export default App
