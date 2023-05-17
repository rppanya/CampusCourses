import { connect } from "react-redux";
import {
  getCoursesThunkCreator,
  getGroupsThunkCreator,
} from "../../reducers/group-reducer";
import { createCourseThunkCreator } from "../../reducers/group-reducer";
import { getListOfUsersThunkCreator } from "../../reducers/users-reducer";
import { useEffect } from "react";
import Courses from "./courses";

function MiddleCoursesComponent(props) {
  const groupId = window.location.pathname.split("/").pop();
  const index = props.group.groups.findIndex((e) => e.id === groupId);
  useEffect(() => {
    props.getCoursesThunkCreator(groupId);
  }, []);
  useEffect(() => {
  }, [props.group.groups[index]])
  return (
    <Courses
      {...props.group.groups[index]}
      isAdmin={props.isAdmin}
      createCourseThunkCreator={props.createCourseThunkCreator}
      getListOfUsersThunkCreator={props.getListOfUsersThunkCreator}
      users={props.users}
    />
  );
}

function mapStateToProps(state) {
  return { group: state.group, isAdmin: state.account.user.roles.isAdmin, users: state.users.users };
}

const CoursesContainer = connect(mapStateToProps, {
  getGroupsThunkCreator,
  getCoursesThunkCreator,
  createCourseThunkCreator,
  getListOfUsersThunkCreator,
})(MiddleCoursesComponent);

export default CoursesContainer;
