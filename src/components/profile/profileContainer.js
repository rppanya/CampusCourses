import { React, useEffect } from "react";

import { connect } from "react-redux";

import {
  changeProfileInfoThunkCreator,
  getProfileInfoThunkCreator,
} from "../../store/reducers/account-reducer";
import Profile from "./profile";

function MiddleProfileComponent(props) {
  useEffect(() => {
    props.getProfileInfoThunkCreator();
  }, []);

  return <Profile {...props} />;
}

function mapStateToProps(state) {
  return { account: state.account };
}

const ProfileContainer = connect(mapStateToProps, {
  changeProfileInfoThunkCreator,
  getProfileInfoThunkCreator,
})(MiddleProfileComponent);

export default ProfileContainer;
