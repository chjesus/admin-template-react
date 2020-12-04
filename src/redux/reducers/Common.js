const INIT_STATE = {
  width: window.innerWidth,
  pathname: "/",
};

export const Common = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "@@router/LOCATION_CHANGE": {
      return {
        ...state,
        pathname: action.payload.location.pathname,
      };
    }
    default:
      return state;
  }
};
