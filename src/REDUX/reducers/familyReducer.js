import {
  ADD_FAMILY_SETTINGS,
  FAMILY_DATA_LOADING,
  ADD_FAMILY_SUCCESS
} from "../actionTypes";

export const familyReducer = (
  state = {
    familyAuth: false,
    isLoading: true,
    errMess: null,
    familyname: "",
    familyAddons: [],
    familyRota: {},
    familyTasks: {},
    familyShopping: {}
  },
  action
) => {
  switch (action.type) {
    case ADD_FAMILY_SETTINGS:
      return {
        ...state,
        isLoading: false,
        errMess: null,
        familyAddons: action.payload.addons,
        familyRota: action.payload.rota,
        familyTasks: action.payload.tasks,
        familyShopping: action.payload.shopping
      };
    case FAMILY_DATA_LOADING:
      return {
        ...state,
        familyAuth: false,
        isLoading: true,
        errMess: null
      };
    case ADD_FAMILY_SUCCESS:
      return {
        ...state,
        familyname: action.payload,
        familyAuth: true
      };
    default:
      return state;
  }
};
