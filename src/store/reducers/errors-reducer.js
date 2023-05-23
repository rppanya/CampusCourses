const SET_ERROR = "SET_ERROR";
const RESET_ERROR = "RESET_ERROR";

const initialState = {
  error: {
    status: 0,
    statusText: "",
    title: "",
    message: "",
  },
};

const errorsReducer = (state = initialState, action) => {
  let newState = { ...state };
  switch (action.type) {
    case SET_ERROR:
      newState.error.status = action.error.status;
      newState.error.statusText = action.error.statusText;
      if (action.error.data) {
        newState.error.message = action.error.data.message
          ? action.error.data.message
          : "";
        newState.error.title = action.error.data.title
          ? action.error.data.title
          : "";
      }
      return newState;
    case RESET_ERROR:
      newState.error.status = 0;
      newState.error.statusText = "";
      newState.error.title = "";
      newState.error.message = "";
      return newState;
    default:
      return newState;
  }
};

export function setErrorActionCreator(error) {
  return { type: SET_ERROR, error: error };
}

export function resetErrorActionCreator() {
  return { type: RESET_ERROR };
}

export function setSuccessActionCreator(text) {
  return { type: SET_ERROR, error: { status: 200, statusText: text } };
}

export default errorsReducer;
