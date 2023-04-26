import {createStore, combineReducers, applyMiddleware} from 'redux';
import ThunkMiddleware from 'redux-thunk';
import accountReducer from '../reducers/account-reducer';
import groupReducer from '../reducers/group-reducer';
import courseReducer from '../reducers/course-reducer';

let reducers = combineReducers({
    account: accountReducer,
    group: groupReducer,
    course: courseReducer
});

let store = createStore(reducers, applyMiddleware(ThunkMiddleware));
export default store;