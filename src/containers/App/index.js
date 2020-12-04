import React, { useEffect } from "react";

import {
  Switch,
  Route,
  useHistory,
  useLocation,
  useRouteMatch,
  Redirect,
} from "react-router-dom";

import { setInitUrl } from "../../redux/actions/Auth";
import { useSelector, useDispatch } from "react-redux";

import SignIn from "../SignIn";
import SignUp from "../SignUp";
import Main from "./Main";

const PrivateRoute = ({
  component: Component,
  location,
  authUser,
  ...rest
}) => (
  <Route
    {...rest}
    render={(props) =>
      authUser ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/signin",
            state: { from: location },
          }}
        />
      )
    }
  />
);

function App() {
  const { authUser, initUrl } = useSelector(({ auth }) => auth);
  const dispatch = useDispatch();

  const location = useLocation();
  const history = useHistory();
  const match = useRouteMatch();

  useEffect(() => {
    if (initUrl === "") {
      dispatch(setInitUrl(location.pathname));
    }
  });

  useEffect(() => {
    if (location.pathname === "/") {
      if (authUser === null) {
        history.push("/signin");
      } else if (initUrl === "" || initUrl === "/" || initUrl === "/signin") {
        history.push("/dashboard");
      } else {
        history.push(initUrl);
      }
    }
  }, [authUser, location, history, initUrl]);

  return (
    <>
      <Switch>
        <Route exact path="/signin" component={SignIn} />
        <Route exact path="/signup" component={SignUp} />
        <PrivateRoute
          path={`${match.url}`}
          authUser={authUser}
          location={location}
          component={Main}
        />
      </Switch>
    </>
  );
}

export default App;
