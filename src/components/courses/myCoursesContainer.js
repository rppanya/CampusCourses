import { useEffect } from "react";
import { connect } from "react-redux";
import { getMyCoursesThunkCreator } from "../../reducers/course-reducer";
import Courses from "./courses";


function MiddleMyCoursesComponent(props) {
    useEffect(() => {
        props.getMyCoursesThunkCreator();
    }, []);
    return <Courses courses={props.course.myCourses} isAdmin={props.isAdmin}/>
}

function mapStateToProps(state) {
  return { course: state.course };
}

const MyCoursesContainer = connect(mapStateToProps, {
  getMyCoursesThunkCreator,
})(MiddleMyCoursesComponent);

export default MyCoursesContainer;