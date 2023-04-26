import { createStore } from "redux";
import { campusCoursesApi } from "../Api/campusCoursesApi";

const GET_COURSE_DETAILS = "GET_COURSE_DETAILS";

const initialState = {
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
};

const courseReducer = (state = initialState, action) => {
    let newState = {...state}
    switch(action.type) {
        case GET_COURSE_DETAILS:
            newState = action.courseDetails
            return newState;
        default:
            return newState;
    }
}

function getCourseDetailsActionCreator(courseDetails) {
    return {type: GET_COURSE_DETAILS, courseDetails: courseDetails}
}

export function getCourseDetailsThunkCreator(id) {
    return (dispatch) => {
        campusCoursesApi.course.getCourseInfo(id).then(data => {
            dispatch(getCourseDetailsActionCreator(data))
        })
    }
}

export default courseReducer