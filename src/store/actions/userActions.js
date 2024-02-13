import { actionTypes } from "./userActionsTypes";

export const logInUser = () => {
  return { type: actionTypes.users.IS_LOGGED_IN };
};
export const logOutUser = () => {
  return { type: actionTypes.users.IS_LOGGED_OUT };
};
