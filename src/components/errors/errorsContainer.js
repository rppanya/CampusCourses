import React from "react";

import { connect } from "react-redux";

import { resetErrorActionCreator } from "../../store/reducers/errors-reducer";
import { logoutThunkCreator } from "../../store/reducers/account-reducer";
import Errors from "./errors";

function MiddleErrorsContainer(props) {
  return <Errors {...props} />;
}

function mapStateToProps(state) {
  return { errors: state.errors };
}

const ErrorsContainer = connect(mapStateToProps, {
  resetErrorActionCreator,
  logoutThunkCreator,
})(MiddleErrorsContainer);

export default ErrorsContainer;
