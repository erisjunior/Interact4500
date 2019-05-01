import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Login from "./pages/Login";
import Timeline from "./pages/Timeline";
import Bookmark from "./pages/Bookmark";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/timeline" component={Timeline} />
          <Route path="/bookmark" component={Bookmark} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
