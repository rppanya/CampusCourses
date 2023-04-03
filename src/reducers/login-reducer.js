import { createStore } from "redux"
import { campusCoursesApi } from "../Api/campusCoursesApi"


const LOGIN = "LOGIN"

const initialState = {
    isLoggedIn : false,
    token : ""
}

const loginReducer = (state = initialState, action) => {
    let newState = { ...state}

    switch(action.type) {
        case LOGIN:
            console.log('login')
            newState.isLoggedIn = true
            newState.token = action.token
            return newState
        default :
            return newState
    }
}

export function loginActionCreator(token){
    console.log('loginActionCreator')
    return {type: LOGIN, token: token}
}

export function loginThunkCreator(loginData) {
    return (dispatch) => {
        campusCoursesApi.login(loginData).then(data => {
            dispatch(loginActionCreator(data.token))
        })
    }
}

export default loginReducer;