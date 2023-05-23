import { campusCoursesApi } from "../../api/campusCoursesApi";
import { setErrorActionCreator } from "./errors-reducer";

const GET_LIST_OF_USERS = "GET_LIST_OF_USERS";

const initialState = {
  users: [
    {
      id: "",
      fullName: "",
    },
  ],
};

const usersReducer = (state = initialState, action) => {
  let newState = { ...state };

  switch (action.type) {
    case GET_LIST_OF_USERS:
      newState.users = action.users;
      return newState;
    default:
      return newState;
  }
};

function getListOfUsersActionCreator(users) {
  return { type: GET_LIST_OF_USERS, users: users };
}

export function getListOfUsersThunkCreator() {
  return (dispatch) => {
    campusCoursesApi.users.getListOfAllUsers().then((data) => {
      if (!data.isError) {
        dispatch(getListOfUsersActionCreator(data));
      } else {
        dispatch(setErrorActionCreator(data.error));
      }
    });
  };
}

export default usersReducer;
