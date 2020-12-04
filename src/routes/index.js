import React from "react";
import { Switch, Route } from "react-router-dom";

import Dashboard from "./Dashboard";
import Shops from "./Shops";
import Setting from "./Setting";

function App(props) {
  const { match } = props;

  return (
    <Switch>
      <Route path={`${match.url}dashboard`} component={Dashboard} />
      <Route path={`${match.url}shops`} component={Shops} />
      <Route path={`${match.url}config`} component={Setting} />
    </Switch>
  );
}

export default App;
