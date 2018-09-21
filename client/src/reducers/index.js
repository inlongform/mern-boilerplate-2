import { combineReducers } from "redux";
import usersReducer from "./usersReducer";
import errorsReducer from "./errorsReducer";

export default combineReducers({
  users: usersReducer,
  errors: errorsReducer
});
