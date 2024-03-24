import axios from "axios";
import {
  LOGIN_ERROR,
  LOGIN_LOADING,
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
  SIGNUP_LOADING,
  SINGUP_ERROR,
  SINGUP_SUCCESS,
} from "./actionTypes";
import { toast } from "react-toastify";

let baseURL = "https://backend-task-management-jtxi.onrender.com";

export const UserLogin = (value) => (dispatch) => {
  dispatch({ type: LOGIN_LOADING });
  return axios
    .post("https://backend-task-management-jtxi.onrender.com/user/login", value)
    .then((res) => {
      console.log(res.data);
      if (res.data.msg === "Invalid Credentials.") {
        toast.error("Invalid credentials");
      } else if (res.data.msg === "User doesnt exist, please register.") {
        toast.error("User doesnt exist, please register.");
      } else {
        dispatch({ type: LOGIN_SUCCESS, payload: res.data });
        toast.success("Login Sucessful");
      }
    })
    .catch((err) => {
      dispatch({ type: LOGIN_ERROR });
      toast.error(err);
      console.log(err);
    });
};

export const UserSignup = (value) => (dispatch) => {
  dispatch({ type: SIGNUP_LOADING });
  return axios
    .post(`${baseURL}/user/register`, value)
    .then((res) => {
      console.log(res.data);
      if (res.data.msg === "User Already Exist") {
        toast.error("User Already Exist");
      } else if (res.data.msg === "Register Sucessful") {
        dispatch({ type: SINGUP_SUCCESS, payload: res.data });
        toast.success("Signup Sucessful");
      }
    })
    .catch((err) => {
      dispatch({ type: SINGUP_ERROR });
      toast.error(err);
      console.log(err);
    });
};

export const Logout = () => (dispatch) => {
  dispatch({ type: LOGOUT_SUCCESS });
  toast.success("Logout Successfull");
};
