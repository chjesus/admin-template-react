import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import { Auth } from "./Auth";
import { Common } from "./Common";
import { Settings } from "./Settings";

const createReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    auth: Auth,
    common: Common,
    settings: Settings,
  });

export default createReducer;
