import { campusCoursesApi } from "../../api/campusCoursesApi";
import { setErrorActionCreator, setSuccessActionCreator } from "./errors-reducer";

const LOGIN = "LOGIN";
const REGISTRATION = "REGISTRATION";
const LOGOUT = "LOGOUT";
const GET_PROFILE_INFO = "GET_PROFILE_INFO";
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
};

const accountReducer = (state = initialState, action) => {
  let newState = { ...state };

  switch (action.type) {
    case LOGIN:
      if (action.token) {
        localStorage.setItem("token", action.token);
      }
      return newState;
    case REGISTRATION:
      if (action.token) {
        localStorage.setItem("token", action.token);
      }
      return newState;
    case GET_PROFILE_INFO:
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

function getRolesActionCreator(roles) {
  return { type: GET_USERS_ROLES, roles: roles };
}

function loginActionCreator(token) {
  return { type: LOGIN, token: token };
}

function registrationActionCreator(token) {
  return { type: REGISTRATION, token: token };
}

function getProfileInfoActionCreator(userInfo) {
  return { type: GET_PROFILE_INFO, user: userInfo };
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
      if (!data.isError) {
        dispatch(loginActionCreator(data.token));
        campusCoursesApi.account.getProfileInfo().then((userInfo) => {
          dispatch(getProfileInfoActionCreator(userInfo));
          campusCoursesApi.users.getUsersRoles().then((roles) => {
            dispatch(getRolesActionCreator(roles));
          });
        });
      } else {
        dispatch(setErrorActionCreator(data.error));
      }
    });
  };
}

export function registrationThunkCreator(registrationData) {
  return (dispatch) => {
    campusCoursesApi.account.registration(registrationData).then((data) => {
      if (!data.isError) {
        dispatch(registrationActionCreator(data.token));
        campusCoursesApi.account.getProfileInfo().then((userInfo) => {
          dispatch(getProfileInfoActionCreator(userInfo));
          campusCoursesApi.users.getUsersRoles().then((roles) => {
            dispatch(getRolesActionCreator(roles));
            dispatch(setSuccessActionCreator("Регистрация прошла успешно!"))
          });
        });
      } else {
        dispatch(setErrorActionCreator(data.error));
      }
    });
  };
}

export function getProfileInfoThunkCreator() {
  return (dispatch) => {
    campusCoursesApi.account.getProfileInfo().then((data) => {
      if (!data.isError) {
        dispatch(getProfileInfoActionCreator(data));
      } else {
        dispatch(setErrorActionCreator(data.error));
      }
    });
  };
}

export function changeProfileInfoThunkCreator(data) {
  return (dispatch) => {
    campusCoursesApi.account.changeProfileInfo(data).then(() => {
      if (!data.isError) {
        campusCoursesApi.account.getProfileInfo().then((data) => {
          dispatch(getProfileInfoActionCreator(data));
          dispatch(setSuccessActionCreator("Данные обновлены!"))
        });
      } else {
        dispatch(setErrorActionCreator(data.error));
      }
    });
  };
}

export function logoutThunkCreator() {
  return (dispatch) => {
    campusCoursesApi.account.logout().then(() => {
      dispatch(logoutActionCreator());
    });
  };
}

export default accountReducer;
