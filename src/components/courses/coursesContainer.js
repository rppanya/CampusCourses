import { useEffect } from "react";
import { connect } from "react-redux";

import {
  getCoursesThunkCreator,
  getGroupsThunkCreator,
} from "../../store/reducers/group-reducer";
import {
  createCourseThunkCreator,
  deleteCourseThunkCreator,
} from "../../store/reducers/group-reducer";
import { getListOfUsersThunkCreator } from "../../store/reducers/users-reducer";
import Courses from "./courses";

function MiddleCoursesComponent(props) {
  const groupId = window.location.pathname.split("/").pop();
  const index = props.group.groups.findIndex((e) => e.id === groupId);
  useEffect(() => {
    props.getCoursesThunkCreator(groupId);
  }, []);
  useEffect(() => {}, [props.group.groups[index]]);
  return (
    <Courses
      {...props.group.groups[index]}
      isAdmin={props.isAdmin}
      createCourseThunkCreator={props.createCourseThunkCreator}
      getListOfUsersThunkCreator={props.getListOfUsersThunkCreator}
      deleteCourseThunkCreator={props.deleteCourseThunkCreator}
      users={props.users}
    />
  );
}

function mapStateToProps(state) {
  return {
    group: state.group,
    isAdmin: state.account.user.roles.isAdmin,
    users: state.users.users,
  };
}

const CoursesContainer = connect(mapStateToProps, {
  getGroupsThunkCreator,
  getCoursesThunkCreator,
  createCourseThunkCreator,
  getListOfUsersThunkCreator,
  deleteCourseThunkCreator,
})(MiddleCoursesComponent);

export default CoursesContainer;
