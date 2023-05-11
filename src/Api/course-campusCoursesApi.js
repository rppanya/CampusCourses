import instance from "./baseUrl";

const currentUrl = "courses";

function getCourseInfo(id) {
  return instance.get(`${currentUrl}/${id}/details`, {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });
}

function signUpForCourse(id) {
  return instance.post(
    `${currentUrl}/${id}/sign-up`,
    {},
    {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    }
  );
}

function editCoursesStatus(id, status) {
  return instance.post(`${currentUrl}/${id}/status`, {"status": status}, {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });
}

function editStudentsStatus(courseId, status, studentId) {
  return instance
    .post(`${currentUrl}/${courseId}/student-status/${studentId}`, status, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
}

function createNotification(id, notification) {
  return instance
    .post(`${currentUrl}/${id}/notifications`, notification, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
}

function editStudentsMark(id, mark, studentId) {
  return instance
    .post(`${currentUrl}/${id}/marks/${studentId}`, mark, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
}

function createCourseForGroup(groupId, data) {
  return instance
    .post(`${currentUrl}/${groupId}`, data, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
}

function editCourse(id, data) {
  return instance
    .put(`${currentUrl}/${id}`, data, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
}

function deleteCourse(id) {
  return instance
    .delete(`${currentUrl}/${id}`, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
}

function addCoursesTeacherRoleToUser(courseId, userId) {
  return instance
    .post(`${currentUrl}/${courseId}/teachers`, userId, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
}

function getListOfCoursesUserHasSignedUp() {
  return instance
    .get(`${currentUrl}/my`, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
}

function getListOfCoursesUserIsTeaching() {
  return instance
    .get(`${currentUrl}/teaching`, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
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
