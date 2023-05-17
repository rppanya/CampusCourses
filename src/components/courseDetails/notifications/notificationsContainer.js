import { connect } from "react-redux";
import { createNotificationThunkCreator } from "../../../reducers/course-reducer";
import Notifications from "./notifications";

function MiddleNotificationsComponent(props) {
  return <Notifications {...props}/>;
}

function mapStateToProps(state) {
  return {
    courseId: state.course.courseDetails.id,
    notifications: state.course.courseDetails.courseInfo.notifications,
    isAdmin: state.account.user.roles.isAdmin,
  };
}

const NotificationsContainer = connect(mapStateToProps, {
  createNotificationThunkCreator,
})(MiddleNotificationsComponent);

export default NotificationsContainer;
