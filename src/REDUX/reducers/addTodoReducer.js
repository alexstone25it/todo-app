import { ADD_ADDON_TARGETED } from "../actionTypes";

const initialState = {
  addonTargeted: ""
};
export const addTodoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ADDON_TARGETED:
      return {
        ...state,
        addonTargeted: action.payload
      };
    default:
      return state;
  }
};
