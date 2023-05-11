import { createStore } from "redux";
import { campusCoursesApi } from "../Api/campusCoursesApi";

const GET_COURSE_DETAILS = "GET_COURSE_DETAILS";
const SIGN_UP_FOR_COURSE = "SIGN_UP_FOR_COURSE";
const GET_MY_COURSES = "GET_MY_COURSES";
const GET_TEACHING_COURSES = "GET_TEACHING_COURSES";
const EDIT_COURSE_INFO = "EDIT_COURSE_INFO";

const initialState = {
  courseDetails: {
    id: "",
    name: "",
    startYear: 0,
    maximumStudentsCount: 0,
    studentsEnrolledCount: 0,
    studentsInQueueCount: 0,
    requirements: "",
    annotations: "",
    status: "",
    semester: "",
    students: [],
    teachers: [],
    notifications: [],
  },
  myCourses: [
    {
      id: "",
      name: "",
      startYear: 0,
      maximumStudentsCount: 0,
      remainingSlotsCount: 0,
      status: "",
      semester: "",
    },
  ],
  teachingCourses: [
    {
      id: "",
      name: "",
      startYear: 0,
      maximumStudentsCount: 0,
      remainingSlotsCount: 0,
      status: "",
      semester: "",
    }
  ]
};

const courseReducer = (state = initialState, action) => {
  let newState = { ...state };
  switch (action.type) {
    case GET_COURSE_DETAILS:
      newState.courseDetails = action.courseDetails;
      return newState;
    case SIGN_UP_FOR_COURSE:
      return newState;
    case GET_MY_COURSES:
      newState.myCourses = action.myCourses;
      return newState;
    case GET_TEACHING_COURSES:
      newState.teachingCourses = action.teachingCourses;
      return newState;
    case EDIT_COURSE_INFO:
      return newState; 
    default:
      return newState;
  }
};

function signUpForCourseActionCreator() {
  return { type: SIGN_UP_FOR_COURSE };
}

function getMyCoursesActionCreator(myCourses) {
  return { type: GET_MY_COURSES, myCourses: myCourses };
}

function getTeachingCoursesActionCreator(teachingCourses) {
  return { type: GET_TEACHING_COURSES, teachingCourses: teachingCourses };
}

function getCourseDetailsActionCreator(courseDetails) {
  return { type: GET_COURSE_DETAILS, courseDetails: courseDetails };
}

export function signUpForCourseThunkCreator(id) {
  return (dispatch) => {
    campusCoursesApi.course.signUpForCourse(id).then((data) => {
      dispatch(signUpForCourseActionCreator);
    });
  };
}


export function editCourseInfoThunkCreator(courseId, data) {
  return (dispatch) => {
    campusCoursesApi.course.editCourse(courseId, data).then(() => {
      campusCoursesApi.course.getCourseInfo(courseId).then((data) => {
        dispatch(getCourseDetailsActionCreator(data));
      });
    })
  }
}

export function editCoursesStatusThunkCreator(courseId, status) {
  return (dispatch) => {
    campusCoursesApi.course.editCoursesStatus(courseId, status).then(() =>{
      campusCoursesApi.course.getCourseInfo(courseId).then((data)=> {
        dispatch(getCourseDetailsActionCreator(data))
      })
    })
  }
}


export function getMyCoursesThunkCreator() {
  return (dispatch) => {
    campusCoursesApi.course.getListOfCoursesUserHasSignedUp().then((data) => {
      dispatch(getMyCoursesActionCreator(data));
    });
  };
}

export function getTeachingCoursesThunkCreator() {
  return (dispatch) => {
    campusCoursesApi.course.getListOfCoursesUserIsTeaching().then(data => {
      dispatch(getTeachingCoursesActionCreator(data));
    })
  }
}

export function getCourseDetailsThunkCreator(id) {
  return (dispatch) => {
    campusCoursesApi.course.getCourseInfo(id).then((data) => {
      dispatch(getCourseDetailsActionCreator(data));
    });
  };
}

export default courseReducer;
