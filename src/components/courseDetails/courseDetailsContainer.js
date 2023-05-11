import { connect } from "react-redux";
import {
  getCourseDetailsThunkCreator,
  signUpForCourseThunkCreator,
  editCourseInfoThunkCreator,
  editCoursesStatusThunkCreator
} from "../../reducers/course-reducer";
import { useEffect } from "react";
import CourseDetails from "./courseDetails";

function MiddleCourseDetailsComponent(props) {
  const courseId = window.location.pathname.split("/")[2];
  useEffect(() => {
    props.getCourseDetailsThunkCreator(courseId);
  }, []);
  return (
    <CourseDetails
      course={props.course.courseDetails}
      signUp={props.signUpForCourseThunkCreator}
      editCourseInfoThunkCreator={props.editCourseInfoThunkCreator}
      isAdmin={props.isAdmin}
      editCoursesStatusThunkCreator={props.editCoursesStatusThunkCreator}
    ></CourseDetails>
  );
}

function mapStateToProps(state) {
  return { course: state.course, isAdmin: state.account.user.roles.isAdmin };
}

const CourseDetailsContainer = connect(mapStateToProps, {
  getCourseDetailsThunkCreator,
  signUpForCourseThunkCreator,
  editCourseInfoThunkCreator,
  editCoursesStatusThunkCreator
})(MiddleCourseDetailsComponent);

export default CourseDetailsContainer;
