import {createStore, combineReducers, applyMiddleware} from 'redux';
import loginReducer from '../reducers/login-reducer';
import thunk from 'redux-thunk';

let reducers = combineReducers({
    auth: loginReducer
});

let store = createStore(reducers, applyMiddleware(thunk));
export default store;