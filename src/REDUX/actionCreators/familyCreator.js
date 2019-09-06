import { axiosBase } from "../axios/configureAxios";
import * as actionTypes from "../actionTypes";

export const familyFetchData = familyname => dispatch =>
  axiosBase
    .get(`/${familyname}/family.json`)
    .then(response => response.data)
    .then(data => dispatch(familyAddSettings(data)))
    .then(() => dispatch(familyAddSuccess(familyname)));

export const familyDataLoading = () => ({
  type: actionTypes.FAMILY_DATA_LOADING
});

export const familyAddSettings = data => ({
  type: actionTypes.FAMILY_ADD_SETTINGS,
  payload: data
});
export const familyAddSuccess = familyname => ({
  type: actionTypes.FAMILY_ADD_DATA_SUCCESS,
  payload: familyname
});
export const familyPostNewTask = (familyname, newTask) => dispatch => {
  axiosBase
    .post(`${familyname}/family/tasks.json`, {
      ...newTask
    })
    .then(response => response.status)
    .then(() => dispatch(familyPostNewTaskSuccess(familyname, newTask)));
};
export const familyPostNewTaskSuccess = (familyname, newTask) => ({
  type: actionTypes.FAMILY_POST_NEW_TASK_SUCCESS,
  payload: { familyname, newTask }
});
