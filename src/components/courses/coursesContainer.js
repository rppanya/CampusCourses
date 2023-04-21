import { connect } from "react-redux";
import { getCoursesThunkCreator, getGroupsThunkCreator } from "../../reducers/group-reducer";
import { useEffect } from "react";
import Courses from "./courses";

function MiddleCorsesComponent(props) {
  const groupId = window.location.pathname.split("/").pop();
  const index = props.group.groups.findIndex((e) => e.id === groupId)
  useEffect(() => {
    props.getGroupsThunkCreator();
    props.getCoursesThunkCreator(groupId);
  }, []);
  return <Courses {...props.group.groups[index]} />;
}

function mapStateToProps(state) {
  return { group: state.group };
}

const CoursesContainer = connect(mapStateToProps, { getGroupsThunkCreator, getCoursesThunkCreator })(
  MiddleCorsesComponent
);

export default CoursesContainer;
