// Action types
export const ADD_VACATION_REQUEST = "ADD_VACATION_REQUEST";
export const ADD_VACATION_SUCCESS = "ADD_VACATION_SUCCESS";
export const ADD_VACATION_FAILURE = "ADD_VACATION_FAILURE";
export const EDIT_VACATION_REQUEST = "EDIT_VACATION_REQUEST";
export const EDIT_VACATION_SUCCESS = "EDIT_VACATION_SUCCESS";
export const EDIT_VACATION_FAILURE = "EDIT_VACATION_FAILURE";
export const DELETE_VACATION_REQUEST = "DELETE_VACATION_REQUEST";
export const DELETE_VACATION_SUCCESS = "DELETE_VACATION_SUCCESS";
export const DELETE_VACATION_FAILURE = "DELETE_VACATION_FAILURE";
export const LIKE_VACATION_REQUEST = "LIKE_VACATION_REQUEST";
export const LIKE_VACATION_SUCCESS = "LIKE_VACATION_SUCCESS";
export const LIKE_VACATION_FAILURE = "LIKE_VACATION_FAILURE";

// Action creators
// ADD VACATION
export const addVacation = (
  destination: string,
  description: string,
  startDate: Date,
  endDate: Date,
  price: number,
  img: string
) => ({
  type: ADD_VACATION_REQUEST,
  payload: { destination, description, startDate, endDate, price, img },
});

export const addVacationSuccess = () => ({
  type: ADD_VACATION_SUCCESS,
});

export const addVacationFailure = (error: string) => ({
  type: ADD_VACATION_FAILURE,
  payload: { error },
});

// EDIT VACATION
export const editVacation = (
  destination: string,
  description: string,
  startDate: Date,
  endDate: Date,
  price: number,
  img: string
) => ({
  type: EDIT_VACATION_REQUEST,
  payload: { destination, description, startDate, endDate, price, img },
});

export const editVacationSuccess = () => ({
  type: EDIT_VACATION_SUCCESS,
});

export const editVacationFailure = (error: string) => ({
  type: EDIT_VACATION_FAILURE,
  payload: { error },
});

// DELETE VACATION
export const deleteVacation = (
  destination: string,
  description: string,
  startDate: Date,
  endDate: Date,
  price: number,
  img: string
) => ({
  type: DELETE_VACATION_REQUEST,
  payload: { destination, description, startDate, endDate, price, img },
});

export const deleteVacationSuccess = () => ({
  type: DELETE_VACATION_SUCCESS,
});

export const deleteVacationFailure = (error: string) => ({
  type: DELETE_VACATION_FAILURE,
  payload: { error },
});

// LIKE VACATION
export const likeVacation = (
  destination: string,
  description: string,
  startDate: Date,
  endDate: Date,
  price: number,
  img: string
) => ({
  type: LIKE_VACATION_REQUEST,
  payload: { destination, description, startDate, endDate, price, img },
});

export const likeVacationSuccess = () => ({
  type: LIKE_VACATION_SUCCESS,
});

export const likeVacationFailure = (error: string) => ({
  type: LIKE_VACATION_FAILURE,
  payload: { error },
});
