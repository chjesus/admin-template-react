import { COLLAPSED_MENU } from "../constant/constants";

export const collapsedMenu = (value) => {
  return {
    type: COLLAPSED_MENU,
    payload: value,
  };
};
