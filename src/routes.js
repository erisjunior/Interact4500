import React, { Component } from 'react'
import { Route, Switch, BrowserRouter, Redirect } from 'react-router-dom'

import Home from './pages/Home'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import News from './pages/News'

import Reports from './pages/Reports'
import Courses from './pages/Courses'
import Documents from './pages/Documents'
import Goals from './pages/Goals'
import Profile from './pages/Profile'
import Administration from './pages/Administration'

class Routes extends Component {
  render() {
    const auth = false
    return (
      <BrowserRouter>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/signin' component={SignIn} />
          <Route path='/signup' component={SignUp} />
          <Route path='/news' component={News} />
          {auth ? (
            <>
              <Route path='/reports' component={Reports} />
              <Route path='/courses' component={Courses} />
              <Route path='/documents' component={Documents} />
              <Route path='/goals' component={Goals} />
              <Route path='/profile' component={Profile} />
              <Route path='/administration' component={Administration} />
              <Redirect from='*' to='/profile' />
            </>
          ) : (
            <Redirect from='*' to='/' />
          )}
        </Switch>
      </BrowserRouter>
    )
  }
}

export default Routes
