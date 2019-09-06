import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import { userReducer } from "../reducers/userReducer";
import { familyReducer } from "../reducers/familyReducer";
import { viewReducer } from "../reducers/viewReducer";
import { addonTargetedReducer } from "../reducers/addonTargetedReducer";

const rootReducer = combineReducers({
  user: userReducer,
  family: familyReducer,
  view: viewReducer,
  addonTargeted: addonTargetedReducer
});

const configureStore = () => {
  const store = createStore(
    rootReducer,
    compose(
      applyMiddleware(thunk),
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  );
  return store;
};

export default configureStore;
