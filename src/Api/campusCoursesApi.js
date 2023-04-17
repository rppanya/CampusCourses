import { accountCampusCoursesApi } from "./account-campusCoursesApi";
import { courseCampusCoursesApi } from "./course-campusCoursesApi";
import { groupCampusCoursesApi } from "./group-campusCoursesApi";
import { usersCampusCoursesApi } from "./users-campusCoursesApi";

export const campusCoursesApi = {
  account: accountCampusCoursesApi,
  course: courseCampusCoursesApi,
  group: groupCampusCoursesApi,
  users: usersCampusCoursesApi,
};
