import { axiosBase } from "../axios/configureAxios";
import * as actionTypes from "../actionTypes";

export const fetchFamilyData = familyname => dispatch =>
  axiosBase
    .get(`/${familyname}/family.json`)
    .then(response => response.data)
    .then(data => dispatch(addFamilyData(data)));

export const familyDataLoading = () => ({
  type: actionTypes.FAMILY_DATA_LOADING
});

export const addFamilyData = data => ({
  type: actionTypes.ADD_FAMILY_DATA,
  payload: data
});
