import {createStore, combineReducers, applyMiddleware} from 'redux';
import ThunkMiddleware from 'redux-thunk';
import accountReducer from '../reducers/account-reducer';

let reducers = combineReducers({
    account: accountReducer
});

let store = createStore(reducers, applyMiddleware(ThunkMiddleware));
export default store;