import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import { userReducer } from "../reducers/userReducer";
import { familyReducer } from "../reducers/familyReducer";
import { addTodoReducer } from "../reducers/addTodoReducer";

const rootReducer = combineReducers({
  user: userReducer,
  family: familyReducer,
  addTodos: addTodoReducer
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
