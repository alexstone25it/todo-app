import {
  USER_ADD_SETTINGS,
  USER_DATA_LOADING,
  USER_ADD_DATA_SUCCESS,
  USER_POST_NEW_TASK,
  USER_POST_NEW_TASK_SUCCESS
} from "../actionTypes";

const initialState = {
  userAuth: false,
  userDataLoading: false,
  addUserSuccess: false,
  errMess: null,
  username: "",
  userAddons: [],
  userRota: {},
  userTasks: {},
  userShopping: {},
  newTask: {},
  newTaskPosting: false,
  newTaskPostingSuccess: false,
  newTaskPostingFailed: false
};
export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_ADD_SETTINGS:
      return {
        ...state,
        userAuth: false,
        userDataLoading: false,
        addUserSuccess: false,
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
        userDataLoading: true,
        addUserSuccess: false,
        errMess: null
      };
    case USER_ADD_DATA_SUCCESS:
      return {
        ...state,
        username: action.payload,
        userAuth: true,
        userDataLoading: false,
        addUserSuccess: true,
        errMess: null
      };
    case USER_POST_NEW_TASK:
      return {
        ...state,
        newTask: action.payload,
        newTaskPosting: true,
        newTaskPostingSuccess: false,
        newTaskPostingFailed: false,
        errMess: null
      };
    case USER_POST_NEW_TASK_SUCCESS:
      return {
        ...state,
        errMess: null,
        newTask: {},
        newTaskPosting: false,
        newTaskPostingSuccess: true,
        newTaskPostingFailed: false
      };
    default:
      return state;
  }
};
