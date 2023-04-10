import { createStore } from "redux"
import { campusCoursesApi } from "../Api/campusCoursesApi"

const GET_GROUPS = "GET_GROUPS"

const initialState = {
    groups: []
}

const groupReducer = (state = initialState, action) => {
    let newState = {...state}
    switch(action.type) {
        case GET_GROUPS:
            newState.groups = action.groups
            return newState
        default :
            return newState
    }
}

function getGroupsActionCreator(groups) {
    return {type: GET_GROUPS, groups: groups}
}

export function getGroupsThunkCreator(token) {
    return (dispatch) => {
        campusCoursesApi.group.getListOfGroups(token).then(data =>  {
            dispatch(getGroupsActionCreator(data))
        })
    }
}
export default groupReducer