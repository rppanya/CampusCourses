import { connect } from "react-redux";
import Profile from "./profile";
import {
  changeProfileInfoThunkCreator,
  getProfileInfoThunkCreator,
} from "../../reducers/account-reducer";
import { useEffect } from "react";

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
