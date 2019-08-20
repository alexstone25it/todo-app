import { ADD_FAMILY_DATA, FAMILY_DATA_LOADING } from "../actionTypes";

export const familyReducer = (
  state = {
    isLoading: true,
    errMess: null,
    familyObj: {}
  },
  action
) => {
  switch (action.type) {
    case ADD_FAMILY_DATA:
      return {
        ...state,
        isLoading: false,
        errMess: null,
        familyObj: action.payload
      };
    case FAMILY_DATA_LOADING:
      return {
        ...state,
        isLoading: true,
        errMess: null,
        familyObj: {}
      };
    default:
      return state;
  }
};
