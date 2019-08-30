import { ADD_ADDON_TO_VIEW, REMOVE_ADDON_FROM_VIEW } from "../actionTypes";

import { concatToArrayNoDupes } from "../../components/shared/functions/minor/minorFuncs";

const initialState = {
  addonsInView: []
};
export const viewReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ADDON_TO_VIEW:
      const tempArr1 = state.addonsInView.slice();
      const newAddonsInView1 =
        tempArr1.indexOf(action.payload) === -1
          ? concatToArrayNoDupes(tempArr1, action.payload)
          : tempArr1;
      return {
        ...state,
        addonsInView: newAddonsInView1
      };
    case REMOVE_ADDON_FROM_VIEW:
      const tempArr2 = state.addonsInView.slice();
      const newAddonsInView2 =
        action.payload === undefined
          ? []
          : tempArr2.filter(addon => addon !== action.payload);
      return {
        ...state,
        addonsInView: newAddonsInView2
      };

    default: {
      return state;
    }
  }
};
