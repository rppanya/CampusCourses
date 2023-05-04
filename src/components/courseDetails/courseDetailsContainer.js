import { connect } from "react-redux";
import { getCourseDetailsThunkCreator, signUpForCourseThunkCreator } from "../../reducers/course-reducer";
import { useEffect } from "react";
import CourseDetails from "./courseDetails";

function MiddleCourseDetailsComponent(props) {
  const courseId = window.location.pathname.split("/")[2];
  useEffect(() => {
    props.getCourseDetailsThunkCreator(courseId);
  }, []);
  return <CourseDetails course={props.course.courseDetails} signUp={props.signUpForCourseThunkCreator}></CourseDetails>;
}

function mapStateToProps(state) {
  return { course: state.course };
}

const CourseDetailsContainer = connect(mapStateToProps, {
  getCourseDetailsThunkCreator,
  signUpForCourseThunkCreator
})(MiddleCourseDetailsComponent);

export default CourseDetailsContainer;
