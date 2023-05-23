import React, { useEffect } from "react";

import { connect } from "react-redux";

import {
  getGroupsThunkCreator,
  createGroupThunkCreator,
  editGroupNameThunkCreator,
  deleteGroupThunkCreator,
} from "../../store/reducers/group-reducer";
import Groups from "./groups";

function MiddleGroupsComponent(props) {
  useEffect(() => {
    props.getGroupsThunkCreator();
  }, []);
  return <Groups {...props} />;
}

function mapStateToProps(state) {
  return {
    group: state.group,
    isAdmin: state.account.user.roles.isAdmin,
  };
}

const GroupsContainer = connect(mapStateToProps, {
  getGroupsThunkCreator,
  createGroupThunkCreator,
  editGroupNameThunkCreator,
  deleteGroupThunkCreator,
})(MiddleGroupsComponent);

export default GroupsContainer;
