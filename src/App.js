import React from "react";
import GitHubUsers from "./GitHubUsers";
import User from "./User";
import Error from "./Error";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" exact>
            <GitHubUsers />
          </Route>
          <Route path="/user/:username">
            <User />
          </Route>
          <Route path="*">
            <Error />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
