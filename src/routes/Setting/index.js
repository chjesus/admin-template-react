import React from "react";
import { Switch, Route } from "react-router-dom";

import City from "./City";
import Permits from "./Permits";
import Rols from "./Rols";
import Users from "./Users";

function Setting(props) {
  const { match } = props;
  console.log(props);
  return (
    <Switch>
      <Route path={`${match.url}/city`} component={City} />
      <Route path={`${match.url}/permits`} component={Permits} />
      <Route path={`${match.url}/rols`} component={Rols} />
      <Route path={`${match.url}/users`} component={Users} />
    </Switch>
  );
}

export default Setting;
