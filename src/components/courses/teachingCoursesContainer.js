import { useEffect } from "react";
import { connect } from "react-redux";

import { getTeachingCoursesThunkCreator } from "../../store/reducers/course-reducer";
import Courses from "./courses";

function MiddleTeachingCoursesComponent(props) {
  useEffect(() => {
    props.getTeachingCoursesThunkCreator();
  }, []);
  return (
    <Courses courses={props.course.teachingCourses} isAdmin={props.isAdmin} />
  );
}

function mapStateToProps(state) {
  return { course: state.course };
}

const TeachingCoursesContainer = connect(mapStateToProps, {
  getTeachingCoursesThunkCreator,
})(MiddleTeachingCoursesComponent);

export default TeachingCoursesContainer;
