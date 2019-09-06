import {
  FAMILY_ADD_SETTINGS,
  FAMILY_DATA_LOADING,
  FAMILY_ADD_DATA_SUCCESS,
  FAMILY_POST_NEW_TASK,
  FAMILY_POST_NEW_TASK_SUCCESS
} from "../actionTypes";

const initialState = {
  familyDataLoading: false,
  familyDataSuccess: false,
  errMess: null,
  familyname: "",
  familyAddons: [],
  familyRota: {},
  familyTasks: {},
  familyShopping: {},
  newTask: {},
  newTaskPosting: false,
  newTaskPostingSuccess: false,
  newTaskPostingFailed: false
};
export const familyReducer = (state = initialState, action) => {
  switch (action.type) {
    case FAMILY_ADD_SETTINGS:
      return {
        ...state,
        familyDataLoading: false,
        familyDataSuccess: false,
        errMess: null,
        familyAddons: action.payload.addons,
        familyRota: action.payload.rota,
        familyTasks: action.payload.tasks,
        familyShopping: action.payload.shopping
      };
    case FAMILY_DATA_LOADING:
      return {
        ...state,
        familyDataLoading: true,
        familyDataSuccess: false,
        errMess: null
      };
    case FAMILY_ADD_DATA_SUCCESS:
      return {
        ...state,
        familyname: action.payload,
        familyDataLoading: false,
        familyDataSuccess: false,
        errMess: null
      };
    case FAMILY_POST_NEW_TASK:
      return {
        ...state,
        newTask: action.payload,
        newTaskPosting: true,
        newTaskPostingSuccess: false,
        newTaskPostingFailed: false,
        errMess: null
      };
    case FAMILY_POST_NEW_TASK_SUCCESS:
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
