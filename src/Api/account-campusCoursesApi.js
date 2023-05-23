import instance from "./baseUrl";

function login(data) {
  return instance.post("login", data);
}

function registration(data) {
  return instance.post("registration", data);
}

function logout() {
  return instance.post("logout", {});
}

function getProfileInfo() {
  return instance.get("profile", {});
}

function changeProfileInfo(data) {
  data = JSON.stringify(data);
  return instance.put("profile", data);
}

export const accountCampusCoursesApi = {
  login: login,
  registration: registration,
  logout: logout,
  getProfileInfo: getProfileInfo,
  changeProfileInfo: changeProfileInfo,
};
