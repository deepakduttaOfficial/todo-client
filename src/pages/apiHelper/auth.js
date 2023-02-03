import axios from "axios";
import { REACT_APP_API_KEY } from "../../backend";

//  Sign up helper
export const signup = (data) => {
  return axios
    .post(`${REACT_APP_API_KEY}/signup`, data)
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      return err.response.data;
    });
};

// Sign in helper
export const signin = (data) => {
  return axios
    .post(`${REACT_APP_API_KEY}/signin`, data)
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      return err.response.data;
    });
};

// User authenticate
export const authenticate = (data, next) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("token", JSON.stringify(data));
  }
  next();
};

export const isAuthenticate = () => {
  if (typeof window === "undefined") {
    return false;
  }
  if (typeof window !== "undefined") {
    return JSON.parse(localStorage.getItem("token"));
  } else {
    return false;
  }
};
