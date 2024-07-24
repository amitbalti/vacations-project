//
import {
  ADD_VACATION_REQUEST,
  ADD_VACATION_SUCCESS,
  ADD_VACATION_FAILURE,
  EDIT_VACATION_REQUEST,
  EDIT_VACATION_SUCCESS,
  EDIT_VACATION_FAILURE,
  DELETE_VACATION_REQUEST,
  DELETE_VACATION_SUCCESS,
  DELETE_VACATION_FAILURE,
  LIKE_VACATION_REQUEST,
  LIKE_VACATION_SUCCESS,
  LIKE_VACATION_FAILURE,
} from "../actions/vacationActions";

interface VacationState {
  isVacation: boolean;
  error: string | null;
}

const initialState: VacationState = {
  isVacation: false,
  error: null,
};

// const authReducer = (state = initialState, action: any) => {
//   switch (action.type) {
//     case LOGIN_REQUEST:
//     case REGISTER_REQUEST:
//       return {
//         ...state,
//         error: null,
//       };
//     case LOGIN_SUCCESS:
//     case REGISTER_SUCCESS:
//       return {
//         ...state,
//         isAuthenticated: true,
//         error: null,
//       };
//     case LOGIN_FAILURE:
//     case REGISTER_FAILURE:
//       return {
//         ...state,
//         isAuthenticated: false,
//         error: action.payload.error,
//       };
//     default:
//       return state;
//   }
// };

const vacationReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ADD_VACATION_REQUEST:
    case EDIT_VACATION_REQUEST:
    case DELETE_VACATION_REQUEST:
    case LIKE_VACATION_REQUEST:
      return {
        ...state,
        error: null,
      };
    case ADD_VACATION_SUCCESS:
    case EDIT_VACATION_SUCCESS:
    case DELETE_VACATION_SUCCESS:
    case LIKE_VACATION_SUCCESS:
      return {
        ...state,
        isVacation: true,
        error: null,
      };
    case ADD_VACATION_FAILURE:
    case EDIT_VACATION_FAILURE:
    case DELETE_VACATION_FAILURE:
    case LIKE_VACATION_FAILURE:
      return {
        ...state,
        isVacation: false,
        error: action.payload.error,
      };
    default:
      return state;
  }
};
export default vacationReducer;
