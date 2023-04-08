import axios from "axios";

const baseURL = "https://camp-courses.api.kreosoft.space/";

const instance = axios.create({
  baseURL: baseURL
});

function login(data) {
  return instance
    .post("login", data, {
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
    })
    .then((response) => {
      if (response.status === 200) {
        console.log(response);
        return response.data;
      }
    })
    .catch((error) => {
      console.log(error.response.data.error);
    });
}

function registration(data) {
  console.log("registrationApi")
    return instance
        .post('registration', data, {
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
              },
        })
        .then((response) => {
            if (response.status === 200) {
                console.log(response);
                return response.data;
            }
        })
        .catch((error) => {
            console.log(error.response.data.error)
        })
}

function logout(token) {
    return instance
        .post('logout', {}, {
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

function getProfileInfo(token) {
  return instance
      .get('profile', {
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

function changeProfileInfo(data, token) {
  console.log(token)
  data = JSON.stringify(data)
  return instance
      .put('profile', data, {
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

export const campusCoursesApi = {
  login: login,
  registration: registration,
  logout: logout,
  getProfileInfo: getProfileInfo,
  changeProfileInfo: changeProfileInfo
}
