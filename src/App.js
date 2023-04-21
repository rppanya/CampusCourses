import "./App.css";
import { Layout } from "antd";
import "antd/dist/reset.css";
import Navbar from "./components/navbar/navbar";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import GroupsContainer from "./components/coursesGroups/groupsContainer";
import LoginFormContainer from "./components/login/loginFormContainer";
import RegistrationFormContainer from "./components/registration/registrationFormContainer";
import ProfileContainer from "./components/profile/profileContainer";
import CoursesContainer from "./components/courses/coursesContainer";
import Course from "./components/courses/course";
import CourseDetails from "./components/courseDetails/courseDetails";

const { Content } = Layout;

function App() {
  return (
    <div className="App">
      <Layout className="layout">
        <Navbar></Navbar>
        <Content style={{ padding: "0 50px" }}>
          <div className="site-layout-content">
            <Routes>
              <Route
                path="/"
                element={<div>Добро пожаловать в систему капусных курсов</div>}
              ></Route>
              <Route path="/groups" element={<GroupsContainer />}></Route>
              <Route
                path="/groups/:groupId"
                element={<CoursesContainer></CoursesContainer>}
              ></Route>
              <Route path="/courses/my" element={<div>Мои курсы</div>}></Route>
              <Route
                path="/teaching"
                element={<div>Преподаваемые курсы</div>}
              ></Route>
              <Route
                path="/profile"
                element={<ProfileContainer></ProfileContainer>}
              ></Route>
              <Route
                path="/registration"
                element={
                  <RegistrationFormContainer></RegistrationFormContainer>
                }
              ></Route>
              <Route
                path="/login"
                element={<LoginFormContainer></LoginFormContainer>}
              ></Route>
            </Routes>
          </div>
        </Content>
      </Layout>
    </div>
  );
}

const AppWrapper = () => {
  return (
    <Router>
      <App />
    </Router>
  );
};

export default AppWrapper;