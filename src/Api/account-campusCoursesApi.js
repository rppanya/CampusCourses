import instance from "./baseUrl";

function login(data) {
  return instance
    .post("login", data, {
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
    })
}

function registration(data) {
    return instance
        .post('registration', data, {
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
              },
        })
}

function logout() {
    return instance
        .post('logout', {}, {
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
              },
        })
}

function getProfileInfo() {
  return instance
      .get('profile', {
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
      })
}

function changeProfileInfo(data) {
  data = JSON.stringify(data)
  return instance
      .put('profile', data, {
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        }
      })
}

export const accountCampusCoursesApi = {
  login: login,
  registration: registration,
  logout: logout,
  getProfileInfo: getProfileInfo,
  changeProfileInfo: changeProfileInfo
}
