import { connect } from "react-redux";
import Groups from "./groups";
import React, { useEffect } from "react";
import {
  getGroupsThunkCreator,
  createGroupThunkCreator,
  editGroupNameThunkCreator,
  deleteGroupThunkCreator,
} from "../../reducers/group-reducer";

function MiddleGroupsComponent(props) {
  useEffect(() => {
    props.getGroupsThunkCreator();
  }, []);
  return <Groups {...props} />;
}

function mapStateToProps(state) {
  return { group: state.group, isAdmin: state.account.user.roles.isAdmin };
}

const GroupsContainer = connect(mapStateToProps, {
  getGroupsThunkCreator,
  createGroupThunkCreator,
  editGroupNameThunkCreator,
  deleteGroupThunkCreator,
})(MiddleGroupsComponent);

export default GroupsContainer;
