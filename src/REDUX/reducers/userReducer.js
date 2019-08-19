import { ADD_USER_DATA, ADD_USER_SUCCESS } from "../actionTypes";

const initialState = {
  username: "",
  familyname: "",
  userObj: {},
  isAuth: false
};
export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER_DATA:
      console.log(action.payload);
      return {
        ...state,
        userObj: action.payload
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
