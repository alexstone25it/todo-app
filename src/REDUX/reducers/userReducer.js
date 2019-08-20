import {
  ADD_USER_DATA,
  USER_DATA_LOADING,
  ADD_USER_SUCCESS
} from "../actionTypes";

const initialState = {
  isAuth: false,
  isLoading: true,
  errMess: null,
  username: "",
  familyname: "",
  userObj: {}
};
export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER_DATA:
      return {
        ...state,
        isLoading: false,
        errMess: null,
        userObj: action.payload
      };
    case USER_DATA_LOADING:
      return {
        ...state,
        isLoading: true,
        errMess: null,
        familyObj: {}
      };
    case ADD_USER_SUCCESS:
      return {
        ...state,
        username: action.payload[1],
        familyname: action.payload[0],
        isAuth: true
      };
    default:
      return state;
  }
};
