import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Login from "./pages/Login";
import Timeline from "./pages/Timeline";
import Example from "./pages/Example";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/timeline" component={Timeline} />
          <Route path="/example" component={Example} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
