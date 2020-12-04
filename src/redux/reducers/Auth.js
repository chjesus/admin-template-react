import {
  SIGN_IN_SUCCESS,
  SIGN_OUT_SUCCESS,
  SIGN_UP_SUCCESS,
  SHOW_MESSAGE,
  HIDE_MESSAGE,
  INIT_URL,
  SHOW_LOADER,
  HIDE_LOADER,
} from "../constant/constants";

const STATE = {
  loader: false,
  authUser: null,
  infoUser: {},
  alertMessage: "",
  showMessage: false,
  initUrl: "",
};

export const Auth = (state = STATE, action) => {
  switch (action.type) {
    case SIGN_IN_SUCCESS: {
      return {
        ...state,
        authUser: action.payload.token,
        infoUser: action.payload.data,
        loader: false,
      };
    }
    case SIGN_UP_SUCCESS: {
      return {
        ...state,
        loader: false,
      };
    }
    case SIGN_OUT_SUCCESS: {
      return {
        ...state,
      };
    }
    case SHOW_LOADER: {
      return {
        ...state,
        loader: true,
      };
    }
    case HIDE_LOADER: {
      return {
        ...state,
        loader: false,
      };
    }
    case SHOW_MESSAGE: {
      return {
        ...state,
        alertMessage: action.payload,
        showMessage: true,
        loader: false,
      };
    }
    case HIDE_MESSAGE: {
      return {
        ...state,
        alertMessage: "",
        showMessage: false,
        loader: false,
      };
    }
    case INIT_URL: {
      return {
        ...state,
        initUrl: action.payload,
      };
    }
    default:
      return state;
  }
};
