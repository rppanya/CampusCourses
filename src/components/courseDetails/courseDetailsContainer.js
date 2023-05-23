import { useEffect } from "react";
import { connect } from "react-redux";

import {
  getCourseDetailsThunkCreator,
  editCourseInfoThunkCreator,
} from "../../store/reducers/course-reducer";
import CourseDetails from "./courseDetails";

function MiddleCourseDetailsComponent(props) {
  const courseId = window.location.pathname.split("/")[2];
  useEffect(() => {
    props.getCourseDetailsThunkCreator(courseId);
  }, []);

  let isTeacher = false;
  let isMainTeacher = false;
  let isStudent = false;
  props.course.teachers.forEach((teacher) => {
    if (teacher.email == props.email) {
      isTeacher = true;
      if (teacher.isMain) {
        isMainTeacher = true;
      }
    }
  });
  props.course.students.forEach((student) => {
    if (student.email == props.email) {
      isStudent = true;
    }
  });
  props.myCourses.forEach((course) => {
    if (course.id == props.course.id) {
      isStudent = true;
    }
  });

  return (
    <CourseDetails
      course={props.course}
      editCourseInfoThunkCreator={props.editCourseInfoThunkCreator}
      isAdmin={props.isAdmin}
      isTeacher={isTeacher}
      isMainTeacher={isMainTeacher}
      isStudent={isStudent}
    ></CourseDetails>
  );
}

function mapStateToProps(state) {
  return {
    course: state.course.courseDetails.courseInfo,
    isAdmin: state.account.user.roles.isAdmin,
    email: state.account.user.email,
    myCourses: state.course.myCourses,
  };
}

const CourseDetailsContainer = connect(mapStateToProps, {
  getCourseDetailsThunkCreator,
  editCourseInfoThunkCreator,
})(MiddleCourseDetailsComponent);

export default CourseDetailsContainer;
