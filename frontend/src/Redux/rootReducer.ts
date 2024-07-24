import { combineReducers } from "redux";
import authReducer from "./Auth/reducers/authReducer";
import { vacationReducer } from "./Vacations/reducers";

const rootReducer = combineReducers({
  auth: authReducer,
  vacation: vacationReducer,
  // Add other reducers here
});

export default rootReducer;
