import { connect } from "react-redux";
import {
  editStudentsStatusThunkCreator,
  editStudentsMarkThunkCreator,
  addCourseTeacherThunkCreator,
} from "../../../reducers/course-reducer";
import Users from "./users";

function MiddleUsersComponent(props) {
  return <Users {...props} />;
}

function mapStateToProps(state) {
  return {
    isAdmin: state.account.user.roles.isAdmin,
    students: state.course.courseDetails.courseInfo.students,
    teachers: state.course.courseDetails.courseInfo.teachers,
    courseId: state.course.courseDetails.courseInfo.id,
    account: state.account.user.email
  };
}

const UsersContainer = connect(mapStateToProps, {
  editStudentsMarkThunkCreator,
  editStudentsStatusThunkCreator,
  addCourseTeacherThunkCreator,
})(MiddleUsersComponent);

export default UsersContainer;
