import {createStore, combineReducers, applyMiddleware} from 'redux';
import ThunkMiddleware from 'redux-thunk';
import accountReducer from '../reducers/account-reducer';
import groupReducer from '../reducers/group-reducer';

let reducers = combineReducers({
    account: accountReducer,
    group: groupReducer
});

let store = createStore(reducers, applyMiddleware(ThunkMiddleware));
export default store;