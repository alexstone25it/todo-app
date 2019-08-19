import { axiosBase } from "../axios/configureAxios";

import * as actionTypes from "../actionTypes";
//fetch user
//add user
//user not there

export const fetchFamilyData = (familyname, username) => dispatch =>
  axiosBase
    .get(`/${familyname}/family.json`)
    .then(response => response.data)
    .then(data => dispatch(addFamilyData(data)))
    .then(() => dispatch(addUserSuccess(username)));

export const fetchUserData = (familyname, username) => dispatch =>
  axiosBase
    .get(`/${familyname}/${username}.json`)
    .then(response => response.data)
    .then(data => dispatch(addUserData(data)))
    .then(() => dispatch(addUserSuccess(username)));

//get all data here, remove axios from maincomponent & user addons reducer
export const addFamilyData = data => ({
  type: actionTypes.ADD_FAMILY_DATA,
  payload: data
});
export const addUserData = data => ({
  type: actionTypes.ADD_USER_DATA,
  payload: data
});
export const addUserSuccess = username => ({
  type: actionTypes.ADD_USER_SUCCESS,
  payload: username
});
