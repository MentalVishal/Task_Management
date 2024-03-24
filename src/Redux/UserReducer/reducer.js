import {
  LOGIN_ERROR,
  LOGIN_LOADING,
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
} from "./actionTypes";

let initialState = {
  username: "",
  userId: "",
  email: "",
  token: "",
  role: "",
  tasks: [],
  isAuth: false,
  loading: false,
  isError: false,
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN_LOADING:
      return { ...state, loading: true };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        isAuth: true,
        username: payload.User.username,
        email: payload.User.email,
        tasks: payload.User.tasks,
        role: payload.User.role,
        userId: payload.User._id,
        token: payload.Token,
      };
    case LOGIN_ERROR:
      return { ...state, isError: true, isAuth: false };

    case LOGOUT_SUCCESS:
      return { ...state, isAuth: false, token: "", name: "" };

    default:
      return { ...state };
  }
};
