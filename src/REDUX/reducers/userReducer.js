export const userReducer = (state = {}, action) => {
  switch (action.type) {
    case "ADD_USER_SUCCESS":
      console.log("add isAuth");
      return action.username;
    default:
      return state;
  }
};
