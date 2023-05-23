import { React, useEffect } from "react";

import { connect } from "react-redux";

import { getListOfUsersThunkCreator } from "../../store/reducers/users-reducer";
import ModalCreateCourse from "./modalCreateCourse";
import ModalEditCourse from "./modalEditCourse";

function MiddleCoursesComponent(props) {
  useEffect(() => {
    props.getListOfUsersThunkCreator();
  }, []);

  return props.createCourse ? (
    <ModalCreateCourse {...props}></ModalCreateCourse>
  ) : (
    <ModalEditCourse {...props}></ModalEditCourse>
  );
}

function mapStateToProps(state) {
  return { users: state.users.users };
}

const ModalContainer = connect(mapStateToProps, {
  getListOfUsersThunkCreator,
})(MiddleCoursesComponent);

export default ModalContainer;
