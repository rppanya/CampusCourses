import instance from "./baseUrl";

function getListOfAllUsers() {
  return instance.get("users", {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });
}

function getUsersRoles() {
  return instance.get("roles", {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });
}

export const usersCampusCoursesApi = {
  getListOfAllUsers: getListOfAllUsers,
  getUsersRoles: getUsersRoles,
};
