import {createStore, combineReducers, applyMiddleware} from 'redux';
import authReducer from '../reducers/auth-reducer';
import ThunkMiddleware from 'redux-thunk';

let reducers = combineReducers({
    auth: authReducer
});

let store = createStore(reducers, applyMiddleware(ThunkMiddleware));
export default store;