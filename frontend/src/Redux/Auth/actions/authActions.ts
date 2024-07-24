// Action types
export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";
export const REGISTER_REQUEST = "REGISTER_REQUEST";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAILURE = "REGISTER_FAILURE";

// Action creators
export const login = (email: string, password: string) => ({
  type: LOGIN_REQUEST,
  payload: { email, password },
});

export const loginSuccess = () => ({
  type: LOGIN_SUCCESS,
});

export const loginFailure = (error: string) => ({
  type: LOGIN_FAILURE,
  payload: { error },
});

export const register = (
  firstName: string,
  lastName: string,
  email: string,
  password: string,
  isAdmin: boolean
) => ({
  type: REGISTER_REQUEST,
  payload: { firstName, lastName, email, password, isAdmin },
});

export const registerSuccess = () => ({
  type: REGISTER_SUCCESS,
});

export const registerFailure = (error: string) => ({
  type: REGISTER_FAILURE,
  payload: { error },
});
