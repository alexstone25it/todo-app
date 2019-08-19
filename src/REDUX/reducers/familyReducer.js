import { ADD_FAMILY_DATA } from "../actionTypes";

export const familyReducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_FAMILY_DATA:
      console.log(action.payload);
      return {
        ...state,
        familyObj: action.payload
      };
    default:
      return state;
  }
};
