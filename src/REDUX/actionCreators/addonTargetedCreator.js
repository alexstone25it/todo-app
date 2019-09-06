import * as actionTypes from "../actionTypes";

export const addAddonTargeted = addonTargeted => ({
  type: actionTypes.ADD_ADDON_TARGETED,
  payload: addonTargeted
});
