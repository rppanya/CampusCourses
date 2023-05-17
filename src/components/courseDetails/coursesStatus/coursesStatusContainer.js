import { connect } from "react-redux";
import {
  signUpForCourseThunkCreator,
  editCoursesStatusThunkCreator,
} from "../../../reducers/course-reducer";
import CoursesStatus from "./coursesStatus";

function MiddleCoursesStatusComponent(props) {
  return <CoursesStatus {...props} />;
}

function mapStateToProps(state) {
  return { course: state.course.courseDetails.courseInfo, isAdmin: state.account.user.roles.isAdmin };
}

const CoursesStatusContainer = connect(mapStateToProps, {
  signUpForCourseThunkCreator,
  editCoursesStatusThunkCreator,
})(MiddleCoursesStatusComponent);

export default CoursesStatusContainer
