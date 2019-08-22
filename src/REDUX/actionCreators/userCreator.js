import { axiosBase } from "../axios/configureAxios";

import * as actionTypes from "../actionTypes";

export const fetchUserData = (familyname, username) => dispatch =>
  axiosBase
    .get(`/${familyname}/${username}.json`)
    .then(response => response.data)
    .then(data => dispatch(addUserSettings(data)))
    .then(() => dispatch(addUserSuccess(username)));

export const userDataLoading = () => ({
  type: actionTypes.USER_DATA_LOADING
});
export const addUserSettings = data => ({
  type: actionTypes.ADD_USER_SETTINGS,
  payload: data
});
export const addUserSuccess = username => ({
  type: actionTypes.ADD_USER_SUCCESS,
  payload: username
});
