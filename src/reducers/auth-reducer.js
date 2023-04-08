import { createStore } from "redux"
import { campusCoursesApi } from "../Api/campusCoursesApi"


const LOGIN = "LOGIN"
const REGISTRATION = "REGISTRATION"
const LOGOUT = "LOGOUT"
const GET_PROFILE_INFO = "GET_PROFILE_INFO"
const CHANGE_PROFILE_INFO = "CHANGE_PROFILE_INFO"

const initialState = {
    user: {
        fullName: "",
        email: "",
        birthDate: ""
    },
    token : ""
}

const authReducer = (state = initialState, action) => {
    let newState = { ...state}

    switch(action.type) {
        case LOGIN:
            console.log('login')
            newState.token = action.token
            return newState
        case REGISTRATION:
            console.log('registration')
            newState.token = action.token
            return newState
        case GET_PROFILE_INFO:
            newState.user.fullName = action.user.fullName
            newState.user.email = action.user.email
            newState.user.birthDate = action.user.birthDate
            return newState
        case CHANGE_PROFILE_INFO:
            newState.user.fullName = action.user.fullName
            newState.user.email = action.user.email
            newState.user.birthDate = action.user.birthDate
            return newState
        case LOGOUT:
            newState.token = ""
            newState.user.fullName = ""
            newState.user.email = ""
            newState.user.birthDate = ""
            return newState
        default :
            return newState
    }
}

export function loginActionCreator(token){
    return {type: LOGIN, token: token}
}

export function registrationActionCreator(token){
    return {type: REGISTRATION, token: token}
}

export function getProfileInfoActionCreator(userInfo){
    return {type: GET_PROFILE_INFO, user: userInfo}
}

export function changeProfileInfoActionCreator(userInfo){
    return {type: CHANGE_PROFILE_INFO, user: userInfo}
}

export function logoutActionCreator(){
    return {type: LOGOUT}
}

export function loginThunkCreator(loginData) {
    return (dispatch) => {
        campusCoursesApi.login(loginData).then(data => {
            dispatch(loginActionCreator(data.token))
            campusCoursesApi.getProfileInfo(data.token).then(userInfo => {
                dispatch(getProfileInfoActionCreator(userInfo))
            })
        })
    }
}

export function registrationThunkCreator(registrationData) {
    return (dispatch) => {
        campusCoursesApi.registration(registrationData).then(data => {
            dispatch(registrationActionCreator(data.token))
        })
    }
}

export function getProfileInfoThunkCreator(token) {
    return (dispatch) => {
        campusCoursesApi.getProfileInfo(token).then(data => {
            console.log(data)
            dispatch(getProfileInfoActionCreator(data))
        })
    }
}

export function changeProfileInfoThunkCreator(data, token) {
    return (dispatch) => {
        campusCoursesApi.changeProfileInfo(data, token).then(response => {
            dispatch(changeProfileInfoActionCreator(data))
        })
    }
}

export function logoutThunkCreator(token) {
    return (dispatch) => {
        campusCoursesApi.logout(token).then(data => {
            dispatch(logoutActionCreator())
        })
    }
}

export default authReducer;