import React from "react";

import { connect } from "react-redux";

import {
  logoutThunkCreator,
  getRolesThunkCreator,
  getProfileInfoThunkCreator
} from "../../store/reducers/account-reducer";
import Navbar from "./navbar";

function MiddleNavbarContainer(props) {
  return <Navbar {...props} />;
}

function mapStateToProps(state) {
  return {
    isTeacher: state.account.user.roles.isTeacher,
    isStudent: state.account.user.roles.isStudent,
    email: state.account.user.email
  };
}

const NavbarContainer = connect(mapStateToProps, {
  logoutThunkCreator,
  getRolesThunkCreator,
  getProfileInfoThunkCreator
})(MiddleNavbarContainer);

export default NavbarContainer;
