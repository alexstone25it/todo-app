import {
  ADD_USER_SETTINGS,
  USER_DATA_LOADING,
  ADD_USER_SUCCESS
} from "../actionTypes";

const initialState = {
  userAuth: false,
  isLoading: true,
  errMess: null,
  username: "",

  userAddons: [],
  userRota: {},
  userTasks: {},
  userShopping: {}
};
export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER_SETTINGS:
      return {
        ...state,
        isLoading: false,
        errMess: null,
        userAddons: action.payload.addons,
        userRota: action.payload.rota,
        userTasks: action.payload.tasks,
        userShopping: action.payload.shopping
      };
    case USER_DATA_LOADING:
      return {
        ...state,
        userAuth: false,
        isLoading: true,
        errMess: null
      };
    case ADD_USER_SUCCESS:
      return {
        ...state,
        username: action.payload,
        userAuth: true
      };
    default:
      return state;
  }
};
