import { axiosBase } from "../axios/configureAxios";

const ADD_USER_SUCCESS = "ADD_USER_SUCCESS";
const ADD_USER_FAILED = "ADD_USER_FAILED";
//fetch user
//add user
//user not there

export const fetchUser = username => dispatch =>
  axiosBase
    .get(`/userName/${username}.json`)
    .then(response => response.data)
    .then(response => console.log(response))
    .then(username => dispatch(addUser(username)));
//get all data here, remove axios from maincomponent & user addons reducer
export const addUser = username => ({
  type: ADD_USER_SUCCESS,
  userName: username
});
