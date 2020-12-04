import { COLLAPSED_MENU } from "../constant/constants";

const INIT_STATE = {
  collapsed: false,
};

export const Settings = (state = INIT_STATE, action) => {
  switch (action.type) {
    case COLLAPSED_MENU: {
      return {
        ...state,
        collapsed: action.payload,
      };
    }

    default:
      return state;
  }
};
