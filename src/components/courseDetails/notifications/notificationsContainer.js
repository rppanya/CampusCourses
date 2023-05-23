import { connect } from "react-redux";

import { createNotificationThunkCreator } from "../../../store/reducers/course-reducer";
import Notifications from "./notifications";

function MiddleNotificationsComponent(props) {
  return <Notifications {...props} />;
}

function mapStateToProps(state) {
  return {
    courseId: state.course.courseDetails.courseInfo.id,
    notifications: state.course.courseDetails.courseInfo.notifications,
    isAdmin: state.account.user.roles.isAdmin,
  };
}

const NotificationsContainer = connect(mapStateToProps, {
  createNotificationThunkCreator,
})(MiddleNotificationsComponent);

export default NotificationsContainer;
