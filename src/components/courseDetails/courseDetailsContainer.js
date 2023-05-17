import { connect } from "react-redux";
import {
  getCourseDetailsThunkCreator,
  editCourseInfoThunkCreator,
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
      course={props.course}
      editCourseInfoThunkCreator={props.editCourseInfoThunkCreator}
      isAdmin={props.isAdmin}
    ></CourseDetails>
  );
}

function mapStateToProps(state) {
  return {
    course: state.course.courseDetails.courseInfo,
    isAdmin: state.account.user.roles.isAdmin,
  };
}

const CourseDetailsContainer = connect(mapStateToProps, {
  getCourseDetailsThunkCreator,
  editCourseInfoThunkCreator,
})(MiddleCourseDetailsComponent);

export default CourseDetailsContainer;
