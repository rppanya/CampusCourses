import instance from "./baseUrl";

const currentUrl = "courses";

function getCourseInfo(id) {
  return instance.get(`${currentUrl}/${id}/details`);
}

function signUpForCourse(id) {
  return instance.post(`${currentUrl}/${id}/sign-up`, {});
}

function editCoursesStatus(id, status) {
  return instance.post(`${currentUrl}/${id}/status`, { status: status });
}

function editStudentsStatus(courseId, status, studentId) {
  return instance.post(
    `${currentUrl}/${courseId}/student-status/${studentId}`,
    status
  );
}

function createNotification(id, notification) {
  return instance.post(`${currentUrl}/${id}/notifications`, notification);
}

function editStudentsMark(id, mark, studentId) {
  return instance.post(`${currentUrl}/${id}/marks/${studentId}`, mark);
}

function createCourseForGroup(groupId, data) {
  return instance.post(`${currentUrl}/${groupId}`, data);
}

function editCourse(id, data) {
  return instance.put(`${currentUrl}/${id}`, data);
}

function deleteCourse(id) {
  return instance.delete(`${currentUrl}/${id}`);
}

function addCoursesTeacherRoleToUser(courseId, userId) {
  return instance.post(`${currentUrl}/${courseId}/teachers`, userId);
}

function getListOfCoursesUserHasSignedUp() {
  return instance.get(`${currentUrl}/my`);
}

function getListOfCoursesUserIsTeaching() {
  return instance.get(`${currentUrl}/teaching`);
}

export const courseCampusCoursesApi = {
  getCourseInfo: getCourseInfo,
  signUpForCourse: signUpForCourse,
  editCoursesStatus: editCoursesStatus,
  editStudentsStatus: editStudentsStatus,
  createNotification: createNotification,
  editStudentsMark: editStudentsMark,
  createCourseForGroup: createCourseForGroup,
  editCourse: editCourse,
  deleteCourse: deleteCourse,
  addCoursesTeacherRoleToUser: addCoursesTeacherRoleToUser,
  getListOfCoursesUserHasSignedUp: getListOfCoursesUserHasSignedUp,
  getListOfCoursesUserIsTeaching: getListOfCoursesUserIsTeaching,
};
