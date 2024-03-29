import axios from "axios";
import { REACT_APP_API_KEY } from "../backend";

// getTasks with advanced search and fillter
export const getTasks = (token, profileId, todoId, sort = "1", search) => {
  return axios
    .get(
      `${REACT_APP_API_KEY}/tasks/get/${profileId}/${todoId}?sort=${sort}&${
        search && `q=${search}`
      }`,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    )
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      return err.response.data;
    });
};

// Edit Task
export const editTask = (profileId, taskId, data, token) => {
  return axios
    .put(`${REACT_APP_API_KEY}/task/update/${profileId}/${taskId}`, data, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      return err.response.data;
    });
};

// Remove Task
export const removeTask = (token, profileId, taskId) => {
  return axios
    .delete(`${REACT_APP_API_KEY}/task/remove/${profileId}/${taskId}`, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      return err.response.data;
    });
};

//  Create Task
export const createTask = (token, profileId, todoId, data) => {
  return axios
    .post(`${REACT_APP_API_KEY}/task/create/${profileId}/${todoId}`, data, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      return err.response.data;
    });
};
