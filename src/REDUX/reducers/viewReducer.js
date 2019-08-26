import { ADD_ADDON_TO_VIEW } from "../actionTypes";

const initialState = {
  addonsInView: []
};

export const viewReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ADDON_TO_VIEW:
      let tempArr = state.addonsInView.slice();
      const newAddonsInView =
        tempArr.indexOf(action.payload) === -1
          ? tempArr.concat(action.payload)
          : tempArr;
      return {
        ...state,
        addonsInView: newAddonsInView
      };

    default: {
      return state;
    }
  }
};
