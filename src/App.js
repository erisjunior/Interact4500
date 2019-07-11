import React, { Component } from 'react'
import { Route, Switch, BrowserRouter } from 'react-router-dom'

import Routes from './routes'

import { observer } from 'mobx-react'

class App extends Component {
  state = {}

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path='*' component={Routes} />
        </Switch>
      </BrowserRouter>
    )
  }
}

App = observer(App)
export default App
