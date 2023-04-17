import { createStore } from "redux";
import { campusCoursesApi } from "../Api/campusCoursesApi";

const LOGIN = "LOGIN";
const REGISTRATION = "REGISTRATION";
const LOGOUT = "LOGOUT";
const GET_PROFILE_INFO = "GET_PROFILE_INFO";
const CHANGE_PROFILE_INFO = "CHANGE_PROFILE_INFO";
const GET_USERS_ROLES = "GET_USERS_ROLES";

const initialState = {
  user: {
    fullName: "",
    email: "",
    birthDate: "",
    roles: {
      isTeacher: "",
      isStudent: "",
      isAdmin: "",
    },
  },
  error: {},
};

const accountReducer = (state = initialState, action) => {
  let newState = { ...state };

  switch (action.type) {
    case LOGIN:
      localStorage.setItem("token", action.token);
      return newState;
    case REGISTRATION:
      localStorage.setItem("token", action.token);
      return newState;
    case GET_PROFILE_INFO:
      newState.user.fullName = action.user.fullName;
      newState.user.email = action.user.email;
      newState.user.birthDate = action.user.birthDate;
      return newState;
    case CHANGE_PROFILE_INFO:
      newState.user.fullName = action.user.fullName;
      newState.user.email = action.user.email;
      newState.user.birthDate = action.user.birthDate;
      return newState;
    case LOGOUT:
      localStorage.removeItem("token");
      newState.user.fullName = "";
      newState.user.email = "";
      newState.user.birthDate = "";
      return newState;
    case GET_USERS_ROLES:
      newState.user.roles.isAdmin = action.roles.isAdmin;
      newState.user.roles.isStudent = action.roles.isStudent;
      newState.user.roles.isTeacher = action.roles.isTeacher;
      return newState;
    default:
      return newState;
  }
};

export function getRolesActionCreator(roles) {
  return { type: GET_USERS_ROLES, roles: roles };
}

export function loginActionCreator(token) {
  return { type: LOGIN, token: token };
}

export function registrationActionCreator(token) {
  return { type: REGISTRATION, token: token };
}

export function getProfileInfoActionCreator(userInfo) {
  return { type: GET_PROFILE_INFO, user: userInfo };
}

export function changeProfileInfoActionCreator(userInfo) {
  return { type: CHANGE_PROFILE_INFO, user: userInfo };
}

export function logoutActionCreator() {
  return { type: LOGOUT };
}

export function getRolesThunkCreator() {
  return (dispatch) => {
    campusCoursesApi.users.getUsersRoles().then((data) => {
      dispatch(getRolesActionCreator(data));
    });
  };
}

export function loginThunkCreator(loginData) {
  return (dispatch) => {
    campusCoursesApi.account.login(loginData).then((data) => {
      dispatch(loginActionCreator(data.token));
      campusCoursesApi.account.getProfileInfo().then((userInfo) => {
        dispatch(getProfileInfoActionCreator(userInfo));
        campusCoursesApi.users.getUsersRoles().then((roles) => {
          dispatch(getRolesActionCreator(roles));
        });
      });
    });
  };
}

export function registrationThunkCreator(registrationData) {
  return (dispatch) => {
    campusCoursesApi.account.registration(registrationData).then((data) => {
      dispatch(registrationActionCreator(data.token));
    });
  };
}

export function getProfileInfoThunkCreator() {
  return (dispatch) => {
    campusCoursesApi.account.getProfileInfo().then((data) => {
      dispatch(getProfileInfoActionCreator(data));
    });
  };
}

export function changeProfileInfoThunkCreator(data) {
  return (dispatch) => {
    campusCoursesApi.account.changeProfileInfo(data).then((response) => {
      dispatch(changeProfileInfoActionCreator(data));
    });
  };
}

export function logoutThunkCreator() {
  return (dispatch) => {
    campusCoursesApi.account.logout().then((data) => {
      dispatch(logoutActionCreator());
    });
  };
}

export default accountReducer;
