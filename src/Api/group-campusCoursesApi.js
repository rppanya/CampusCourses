import instance from "./baseUrl";

const currentUrl = "groups";

function getListOfGroups() {
  return instance.get(`${currentUrl}`, {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });
}

function createGroup(name) {
  console.log(name)
  return instance.post(`${currentUrl}`, {"name": name}, {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });
}

function editGroupName(id, name) {
  return instance.put(`${currentUrl}/${id}`, {"name": name}, {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });
}

function deleteGroup(id) {
  return instance.delete(`${currentUrl}/${id}`, {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });
}

function getListOfCoursesOfTheGroup(id) {
  return instance.get(`${currentUrl}/${id}`, {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });
}

export const groupCampusCoursesApi = {
  getListOfGroups: getListOfGroups,
  createGroup: createGroup,
  editGroupName: editGroupName,
  deleteGroup: deleteGroup,
  getListOfCoursesOfTheGroup: getListOfCoursesOfTheGroup,
};
