import { combineReducers } from "redux";
import postsReducer from "./postreducer";
import usersreducer from "./usersreducer";

export default combineReducers({
  posts: postsReducer,
  users: usersreducer,
});
