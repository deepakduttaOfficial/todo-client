import axios from "axios";
import { REACT_APP_API_KEY } from "../backend";

//  Sinup Helper
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

// Signin helper
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

// Set token in localStroage
export const authenticate = (data, next) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("token", JSON.stringify(data));
  }
  next();
};

// Get token for the protected routes
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

// Signout
export const signout = (next) => {
  if (typeof window !== "undefined") {
    localStorage.removeItem("token");
    next();
  }
};
