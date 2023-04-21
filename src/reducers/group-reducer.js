import { createStore } from "redux"
import { campusCoursesApi } from "../Api/campusCoursesApi"

const GET_GROUPS = "GET_GROUPS"
const GET_LIST_OF_COURSES = "GET_LIST_OF_COURSES"

const initialState = {
    groups: [
        {
            name: "",
            id: "",
            courses: []
        }
    ]
}

const groupReducer = (state = initialState, action) => {
    let newState = {...state}
    switch(action.type) {
        case GET_GROUPS:
            newState.groups = action.groups
            return newState
        case GET_LIST_OF_COURSES:
            const index = newState.groups.findIndex(e => e.id === action.id)
            newState.groups[index].courses = action.courses
            console.log("курсы")
            return newState
        default :
            return newState
    }
}

function getCoursesActionCreator(id, courses) {
    return {type: GET_LIST_OF_COURSES, id: id, courses: courses}
}

function getGroupsActionCreator(groups) {
    return {type: GET_GROUPS, groups: groups}
}

export function getCoursesThunkCreator(id) {
    return (dispatch) => {
        campusCoursesApi.group.getListOfCoursesOfTheGroup(id).then(data => {
            dispatch(getCoursesActionCreator(id, data))
        })
    }
}

export function getGroupsThunkCreator() {
    return (dispatch) => {
        campusCoursesApi.group.getListOfGroups().then(data =>  {
            dispatch(getGroupsActionCreator(data))
        })
    }
}

export default groupReducer