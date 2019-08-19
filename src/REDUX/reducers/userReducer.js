import {
  ADD_FAMILY_DATA,
  ADD_USER_DATA,
  ADD_USER_SUCCESS
} from "../actionTypes";

export const userReducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_FAMILY_DATA:
      console.log("family data:", action.payload);
      return {
        ...state,
        familyObj: action.payload
      };
    case ADD_USER_DATA:
      console.log("user data:", action.payload);
      return {
        ...state,
        userObj: action.payload
      };
    case ADD_USER_SUCCESS:
      console.log("user success:", action.payload);
      return {
        ...state,
        username: action.payload,
        isAuth: true
      };
    default:
      return state;
  }
};
