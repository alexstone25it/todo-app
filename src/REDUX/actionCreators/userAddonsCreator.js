/*function dispatched to make a change */
import { axiosBase } from "../axios/configureAxios";

const ADD_USER_ADDONS = "ADD_USER_ADDONS";

export const fetchUserAddons = () => dispatch => {
  axiosBase
    .get("/userName/carl/userAddons.json")
    .then(response => response.data)
    .then(userAddons => dispatch(addUserAddons(userAddons)));
};

export const addUserAddons = userAddons => ({
  type: ADD_USER_ADDONS,
  userAddons
});
