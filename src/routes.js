import React, { Component } from 'react'
import { Route, Switch, BrowserRouter } from 'react-router-dom'

import ShowCase from './pages/ShowCase'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path='/' exact component={ShowCase} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App
