import axios from "axios";

const baseURL = "https://camp-courses.api.kreosoft.space/";

const instance = axios.create({
  baseURL: baseURL,
});

function login(data) {
  console.log("api");

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

export const campusCoursesApi = {
  login: login,
  registration: registration
}
