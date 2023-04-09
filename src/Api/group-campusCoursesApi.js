import instance from "./baseUrl";

const currentUrl = 'groups'
const token = localStorage.getItem('token')

function getListOfGroups(){
    return instance
      .get(`${currentUrl}`, {
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

function createGroup(name) {
    return instance
        .post(`${currentUrl}`, name, {
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

function editGroupName(id, name) {
    return instance
        .put(`${currentUrl}/${id}`, name, {
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

function deleteGroup(id) {
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

function getListOfCoursesOfTheGroup(id) {
    return instance
    .get(`${currentUrl}/${id}`, {
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

export const groupCampusCoursesApi = {
    getListOfGroups: getListOfGroups,
    createGroup: createGroup,
    editGroupName: editGroupName,
    deleteGroup: deleteGroup,
    getListOfCoursesOfTheGroup: getListOfCoursesOfTheGroup
}
