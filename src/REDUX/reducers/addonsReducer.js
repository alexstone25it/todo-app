/*reducer is a list of possible actions */

export const userAddonsReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_USER_ADDONS":
      return action.userAddons;
    default:
      return state;
  }
};
