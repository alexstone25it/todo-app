import { axiosBase } from "../axios/configureAxios";

import * as actionTypes from "../actionTypes";

export const fetchUserData = (familyname, username) => dispatch =>
  axiosBase
    .get(`/${familyname}/${username}.json`)
    .then(response => response.data)
    .then(data => dispatch(addUserData(data)))
    .then(() => dispatch(addUserSuccess(familyname, username)));

export const userDataLoading = () => ({
  type: actionTypes.USER_DATA_LOADING
});
export const addUserData = data => ({
  type: actionTypes.ADD_USER_DATA,
  payload: data
});
export const addUserSuccess = (familyname, username) => ({
  type: actionTypes.ADD_USER_SUCCESS,
  payload: [familyname, username]
});
