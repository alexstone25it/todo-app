import { axiosBase } from "../axios/configureAxios";
import * as actionTypes from "../actionTypes";

export const fetchFamilyData = familyname => dispatch =>
  axiosBase
    .get(`/${familyname}/family.json`)
    .then(response => response.data)
    .then(data => dispatch(addFamilySettings(data)))
    .then(() => dispatch(addFamilySuccess(familyname)));

export const familyDataLoading = () => ({
  type: actionTypes.FAMILY_DATA_LOADING
});

export const addFamilySettings = data => ({
  type: actionTypes.ADD_FAMILY_SETTINGS,
  payload: data
});
export const addFamilySuccess = familyname => ({
  type: actionTypes.ADD_FAMILY_SUCCESS,
  payload: familyname
});
