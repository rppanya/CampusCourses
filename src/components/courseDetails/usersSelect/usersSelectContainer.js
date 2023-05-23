import { useEffect } from "react";
import { connect } from "react-redux";

import { getListOfUsersThunkCreator } from "../../../store/reducers/users-reducer";
import UsersSelect from "./usersSelect";

function MiddleUsersSelectComponent(props) {
  useEffect(() => {
    props.getListOfUsersThunkCreator();
  }, []);
  return <UsersSelect {...props} />;
}

function mapStateToProps(state) {
  return { users: state.users.users };
}

const UsersSelectContainer = connect(mapStateToProps, {
  getListOfUsersThunkCreator,
})(MiddleUsersSelectComponent);

export default UsersSelectContainer;
