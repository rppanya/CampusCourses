import instance from "./baseUrl";

const token = localStorage.getItem('token')

function getListOfAllUsers() {
    return instance
      .get('users', {
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

function getUsersRoles() {
    return instance
      .get('roles', {
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

export const usersCampusCoursesApi = {
    getListOfAllUsers: getListOfAllUsers,
    getUsersRoles: getUsersRoles
}