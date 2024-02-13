import {
  legacy_createStore,
  compose,
  applyMiddleware,
  combineReducers,
} from "redux";
import { thunk } from "redux-thunk";
import postsReducers from "../store/reducers/postReducesrs";
import usersReducers from "../store/reducers/userReducers";
const rootReducer = combineReducers({
  posts: postsReducers,
  users: usersReducers,
});

const store = legacy_createStore(rootReducer, compose(applyMiddleware(thunk)));

export default store;
