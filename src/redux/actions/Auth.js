import {
  // SIGN_IN,
  // SIGN_IN_ERROR,
  SIGN_IN_SUCCESS,
  // SIGN_OUT,
  // SIGN_OUT_SUCCESS,
  // SIGN_UP,
  // SIGN_UP_SUCCESS,
  // SHOW_MESSAGE,
  // HIDE_MESSAGE,
  INIT_URL,
  SHOW_LOADER,
  HIDE_LOADER,
} from "../constant/constants";

// import axios from "axios";
import Api from "../../utils/api";

export const setInitUrl = (url) => {
  return {
    type: INIT_URL,
    payload: url,
  };
};

export const showLoader = () => {
  return {
    type: SHOW_LOADER,
  };
};

export const hideLoader = () => {
  return {
    type: HIDE_LOADER,
  };
};

export const signIn = (values) => {
  return async function (dispatch) {
    try {
      const response = await Api({
        method: "POST",
        url: `${process.env.REACT_APP_API_URL}/access/login`,
        data: values,
      });

      if (response.status === 200) {
        const dataUser = await Api({
          method: "GET",
          url: `${process.env.REACT_APP_API_URL}/users/getByToken`,
          headers: {
            authentication: response.data.message.token,
          },
        });

        if (dataUser.status === 200) {
          dispatch({
            type: SIGN_IN_SUCCESS,
            payload: {
              token: response.data.message.token,
              data: dataUser.data.message,
            },
          });
        }
      } else {
        console.log("Failed");
      }
    } catch (error) {
      console.log(error.response);
    }
  };
};
