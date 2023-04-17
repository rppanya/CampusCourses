import { connect } from "react-redux";
import React from "react";
import LoginForm from "./loginForm";
import { loginThunkCreator } from "../../reducers/account-reducer";

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
