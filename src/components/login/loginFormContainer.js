import React from "react";

import { connect } from "react-redux";

import { loginThunkCreator } from "../../store/reducers/account-reducer";
import LoginForm from "./loginForm";

function MiddleLoginFormContainer(props) {
  return <LoginForm {...props} />;
}

function mapStateToProps(state) {
  return { account: state.account };
}

const LoginFormContainer = connect(mapStateToProps, { loginThunkCreator })(
  MiddleLoginFormContainer
);

export default LoginFormContainer;
