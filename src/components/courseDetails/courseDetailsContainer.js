import { connect } from "react-redux";
import { getCourseDetailsThunkCreator } from "../../reducers/course-reducer";
import { useEffect } from "react";
import CourseDetails from "./courseDetails";

function MiddleCourseDetailsComponent(props) {
  const courseId = window.location.pathname.split("/")[2];
  useEffect(() => {
    props.getCourseDetailsThunkCreator(courseId);
  }, []);
  return <CourseDetails {...props.course}></CourseDetails>;
}

function mapStateToProps(state) {
  return { course: state.course };
}

const CourseDetailsContainer = connect(mapStateToProps, {
  getCourseDetailsThunkCreator,
})(MiddleCourseDetailsComponent);

export default CourseDetailsContainer;
