import instance from "./baseUrl";

function getListOfAllUsers() {
  return instance.get("users");
}

function getUsersRoles() {
  return instance.get("roles");
}

export const usersCampusCoursesApi = {
  getListOfAllUsers: getListOfAllUsers,
  getUsersRoles: getUsersRoles,
};
