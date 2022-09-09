import { combineReducers } from "redux";
import userReducer from "./users/users.reducer";
// import userReducer from "./users/users.reducer"

const rootReducer = combineReducers({
  userReducer,
});

export default rootReducer;
