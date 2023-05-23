import React from "react";

import { connect } from "react-redux";

import { registrationThunkCreator } from "../../store/reducers/account-reducer";
import RegistrationForm from "./registrationForm";

function MiddleRegistrationFormComponent(props) {
  return <RegistrationForm {...props} />;
}

function mapStateToProps(state) {
  return { account: state.account };
}

const RegistrationFormContainer = connect(mapStateToProps, {
  registrationThunkCreator,
})(MiddleRegistrationFormComponent);

export default RegistrationFormContainer;
