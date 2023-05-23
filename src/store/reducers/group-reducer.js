import { campusCoursesApi } from "../../api/campusCoursesApi";
import {
  setErrorActionCreator,
  setSuccessActionCreator,
} from "./errors-reducer";

const GET_GROUPS = "GET_GROUPS";
const GET_LIST_OF_COURSES = "GET_LIST_OF_COURSES";

const initialState = {
  groups: [
    {
      name: "",
      id: "",
      courses: [],
    },
  ],
};

const groupReducer = (state = initialState, action) => {
  let newState = { ...state };
  switch (action.type) {
    case GET_GROUPS:
      newState.groups = action.groups;
      return newState;
    case GET_LIST_OF_COURSES:
      const index = newState.groups.findIndex((e) => e.id === action.id);
      const allCourses = action.courses;
      newState.groups[index].courses = allCourses;
      return newState;
    default:
      return newState;
  }
};

function getCoursesActionCreator(id, courses) {
  return { type: GET_LIST_OF_COURSES, id: id, courses: courses };
}

function getGroupsActionCreator(groups) {
  return { type: GET_GROUPS, groups: groups };
}

export function createGroupThunkCreator(name) {
  return (dispatch) => {
    campusCoursesApi.group.createGroup(name).then((data) => {
      if (!data.isError) {
        campusCoursesApi.group.getListOfGroups().then((data) => {
          dispatch(getGroupsActionCreator(data));
          dispatch(setSuccessActionCreator("Группа создана!"));
        });
      } else {
        dispatch(setErrorActionCreator(data.error));
      }
    });
  };
}

export function editGroupNameThunkCreator(id, name) {
  return (dispatch) => {
    campusCoursesApi.group.editGroupName(id, name).then((data) => {
      if (!data.isError) {
        campusCoursesApi.group.getListOfGroups().then((data) => {
          dispatch(getGroupsActionCreator(data));
          dispatch(setSuccessActionCreator("Данные обновлены!"));
        });
      } else {
        dispatch(setErrorActionCreator(data.error));
      }
    });
  };
}

export function deleteGroupThunkCreator(id) {
  return (dispatch) => {
    campusCoursesApi.group.deleteGroup(id).then((data) => {
      if (!data.isError) {
        campusCoursesApi.group.getListOfGroups().then((data) => {
          dispatch(getGroupsActionCreator(data));
          dispatch(setSuccessActionCreator("Группа удалена!"));
        });
      } else {
        dispatch(setErrorActionCreator(data.error));
      }
    });
  };
}

export function deleteCourseThunkCreator(courseId, groupId) {
  return (dispatch) => {
    campusCoursesApi.course.deleteCourse(courseId).then((data) => {
      if (!data.isError) {
        campusCoursesApi.group
          .getListOfCoursesOfTheGroup(groupId)
          .then((courses) => {
            dispatch(getCoursesActionCreator(groupId, courses));
            dispatch(setSuccessActionCreator("Курс удален!"));
          });
      } else {
        dispatch(setErrorActionCreator(data.error));
      }
    });
  };
}

export function createCourseThunkCreator(groupId, data) {
  return (dispatch) => {
    campusCoursesApi.course.createCourseForGroup(groupId, data).then((data) => {
      if (!data.isError) {
        campusCoursesApi.group
          .getListOfCoursesOfTheGroup(groupId)
          .then((courses) => {
            dispatch(getCoursesActionCreator(groupId, courses));
            dispatch(setSuccessActionCreator("Курс создан!"));
          });
      } else {
        dispatch(setErrorActionCreator(data.error));
      }
    });
  };
}

export function getCoursesThunkCreator(id) {
  return (dispatch) => {
    campusCoursesApi.group.getListOfGroups().then((data) => {
      if (!data.isError) {
        campusCoursesApi.group
          .getListOfCoursesOfTheGroup(id)
          .then((courses) => {
            dispatch(getGroupsActionCreator(data));
            dispatch(getCoursesActionCreator(id, courses));
          });
      } else {
        dispatch(setErrorActionCreator(data.error));
      }
    });
  };
}

export function getGroupsThunkCreator() {
  return (dispatch) => {
    campusCoursesApi.group.getListOfGroups().then((data) => {
      if (!data.isError) {
        dispatch(getGroupsActionCreator(data));
      } else {
        dispatch(setErrorActionCreator(data.error));
      }
    });
  };
}

export default groupReducer;
