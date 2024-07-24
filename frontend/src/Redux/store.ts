import { createStore, combineReducers } from "redux";
import authReducer from "./Auth/reducers/authReducer";
import { vacationReducer } from "./Vacations/reducers";

// Combine multiple reducers if needed
const rootReducer = combineReducers({
  auth: authReducer,
  vacation: vacationReducer,
});

// Create the Redux store
const store = createStore(rootReducer);

export default store;
