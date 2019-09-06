import { axiosBase } from "../axios/configureAxios";

import * as actionTypes from "../actionTypes";

export const userFetchData = (familyname, username) => dispatch =>
  axiosBase
    .get(`/${familyname}/${username}.json`)
    .then(response => response.data)
    .then(data => dispatch(userAddSettings(data)))
    .then(() => dispatch(userAddSuccess(username)));

export const userDataLoading = () => ({
  type: actionTypes.USER_DATA_LOADING
});
export const userAddSettings = data => ({
  type: actionTypes.USER_ADD_SETTINGS,
  payload: data
});
export const userAddSuccess = username => ({
  type: actionTypes.USER_ADD_DATA_SUCCESS,
  payload: username
});
export const userPostNewTask = (familyname, username, newTask) => dispatch => {
  axiosBase
    .post(`${familyname}/${username}/tasks.json`, {
      ...newTask
    })
    .then(response => response.status)
    .then(() =>
      dispatch(userPostNewTaskSuccess(familyname, username, newTask))
    );
};
export const userPostNewTaskSuccess = (familyname, username, newTask) => ({
  type: actionTypes.USER_POST_NEW_TASK_SUCCESS,
  payload: { familyname, username, newTask }
});
