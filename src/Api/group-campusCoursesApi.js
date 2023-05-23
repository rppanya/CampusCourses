import instance from "./baseUrl";

const currentUrl = "groups";

function getListOfGroups() {
  return instance.get(`${currentUrl}`);
}

function createGroup(name) {
  return instance.post(`${currentUrl}`, name);
}

function editGroupName(id, name) {
  return instance.put(`${currentUrl}/${id}`, name);
}

function deleteGroup(id) {
  return instance.delete(`${currentUrl}/${id}`);
}

function getListOfCoursesOfTheGroup(id) {
  return instance.get(`${currentUrl}/${id}`);
}

export const groupCampusCoursesApi = {
  getListOfGroups: getListOfGroups,
  createGroup: createGroup,
  editGroupName: editGroupName,
  deleteGroup: deleteGroup,
  getListOfCoursesOfTheGroup: getListOfCoursesOfTheGroup,
};
