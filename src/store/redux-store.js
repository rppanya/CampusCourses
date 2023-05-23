import { createStore, combineReducers, applyMiddleware } from "redux";
import ThunkMiddleware from "redux-thunk";

import accountReducer from "../store/reducers/account-reducer";
import groupReducer from "../store/reducers/group-reducer";
import courseReducer from "../store/reducers/course-reducer";
import usersReducer from "../store/reducers/users-reducer";
import errorsReducer from "../store/reducers/errors-reducer";

let reducers = combineReducers({
  account: accountReducer,
  group: groupReducer,
  course: courseReducer,
  users: usersReducer,
  errors: errorsReducer,
});

let store = createStore(reducers, applyMiddleware(ThunkMiddleware));
export default store;
