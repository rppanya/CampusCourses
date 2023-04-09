import instance from "./baseUrl";

const currentUrl = 'courses'
const token = localStorage.getItem('token')

function getCourseInfo(id) {
    return instance
      .get(`${currentUrl}/${id}/details`, {
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
          'Authorization': 'Bearer ' + token,
        },
      })
      .then((response) => {
        if (response.status === 200) {
          return response.data
        }
      })
      .catch((error) => {
        console.log(error.response)
      })
}

function signUpForCourse(id) {
    return instance
        .post(`${currentUrl}/${id}/sign-up`, {}, {
            headers: {
              "Content-Type": "application/json",
              "Accept": "application/json",
              'Authorization': 'Bearer ' + token,
            },
        })
        .then((response) => {
            if (response.status === 200) {
                return response
            }
        })
        .catch((error) => {
            console.log(error.response)
        })
}

function editCoursesStatus(id, status) {
    return instance
        .post(`${currentUrl}/${id}/status`, status, {
            headers: {
              "Content-Type": "application/json",
              "Accept": "application/json",
              'Authorization': 'Bearer ' + token,
            },
        })
        .then((response) => {
            if (response.status === 200) {
                return response
            }
        })
        .catch((error) => {
            console.log(error.response)
        })
}

function editStudentsStatus(courseId, status, studentId) {
    return instance
        .post(`${currentUrl}/${courseId}/student-status/${studentId}`, status, {
            headers: {
              "Content-Type": "application/json",
              "Accept": "application/json",
              'Authorization': 'Bearer ' + token,
            },
        })
        .then((response) => {
            if (response.status === 200) {
                return response
            }
        })
        .catch((error) => {
            console.log(error.response)
        })
}

function createNotification(id, notification) {
    return instance
        .post(`${currentUrl}/${id}/notifications`, notification, {
            headers: {
              "Content-Type": "application/json",
              "Accept": "application/json",
              'Authorization': 'Bearer ' + token,
            },
        })
        .then((response) => {
            if (response.status === 200) {
                return response
            }
        })
        .catch((error) => {
            console.log(error.response)
        })
}

function editStudentsMark(id, mark) {
    return instance
        .post(`${currentUrl}/${id}/marks/${studentId}`, mark, {
            headers: {
              "Content-Type": "application/json",
              "Accept": "application/json",
              'Authorization': 'Bearer ' + token,
            },
        })
        .then((response) => {
            if (response.status === 200) {
                return response
            }
        })
        .catch((error) => {
            console.log(error.response)
        })
}

function createCourseForGroup(groupId, data) {
    return instance
        .post(`${currentUrl}/${groupId}`, data, {
            headers: {
              "Content-Type": "application/json",
              "Accept": "application/json",
              'Authorization': 'Bearer ' + token,
            },
        })
        .then((response) => {
            if (response.status === 200) {
                return response
            }
        })
        .catch((error) => {
            console.log(error.response)
        })
}

function editCourse(id, data) {
    return instance
        .put(`${currentUrl}/${id}`, data, {
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            'Authorization': 'Bearer ' + token,
          }
        })
        .then((response) => {
          if (response.status === 200) {
            return response
          }
        })
        .catch((error) => {
          console.log(error.response)
        })
  }

function deleteCourse(id){
    return instance
        .delete(`${currentUrl}/${id}`, {
            headers: {
              "Content-Type": "application/json",
              "Accept": "application/json",
              'Authorization': 'Bearer ' + token,
            }
          })
          .then((response) => {
            if (response.status === 200) {
              return response
            }
          })
          .catch((error) => {
            console.log(error.response)
          })
}

function addCoursesTeacherRoleToUser(courseId, userId) {
    return instance
        .post(`${currentUrl}/${courseId}/teachers`, userId, {
            headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            'Authorization': 'Bearer ' + token,
            },
        })
        .then((response) => {
            if (response.status === 200) {
                return response
            }
        })
        .catch((error) => {
            console.log(error.response)
        })
}

function getListOfCoursesUserHasSignedUp() {
    return instance
      .get(`${currentUrl}/my`, {
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
          'Authorization': 'Bearer ' + token,
        },
      })
      .then((response) => {
        if (response.status === 200) {
          return response.data
        }
      })
      .catch((error) => {
        console.log(error.response)
      })
}

function getListOfCoursesUserIsTeaching() {
    return instance
      .get(`${currentUrl}/teaching`, {
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
          'Authorization': 'Bearer ' + token,
        },
      })
      .then((response) => {
        if (response.status === 200) {
          return response.data
        }
      })
      .catch((error) => {
        console.log(error.response)
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
    getListOfCoursesUserIsTeaching: getListOfCoursesUserIsTeaching
}