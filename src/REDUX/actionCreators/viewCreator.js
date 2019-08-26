import * as actionTypes from "../actionTypes";

export const addAddonToView = addonTitle => ({
  type: actionTypes.ADD_ADDON_TO_VIEW,
  payload: addonTitle
});
