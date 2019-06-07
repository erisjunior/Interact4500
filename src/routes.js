import React, { Component } from 'react'
import { Route, Switch, BrowserRouter } from 'react-router-dom'

import Home from './page/Home'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path='/' exact component={Home} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App
