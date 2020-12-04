import React from "react";
import "./assets/style";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Provider } from "react-redux";
import generateStore from "./redux/store";

import App from "./containers/App";

function AppNext() {
  const store = generateStore();

  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/" component={App} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default AppNext;
