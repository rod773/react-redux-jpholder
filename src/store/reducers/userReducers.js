import { actionTypes } from "../actions/userActionsTypes";

const usersStartState = { users: { isLoggedIn: false } };

export default function users(state = usersStartState, action) {
  switch (action.type) {
    case actionTypes.users.IS_LOGGED_IN:
      return {
        ...state,
        users: {
          ...state.users,
          isLoggedIn: true,
        },
      };
    case actionTypes.users.IS_LOGGED_OUT:
      return {
        ...state,
        users: {
          ...state.users,
          isLoggedIn: false,
        },
      };
    default:
      return state;
  }
}
