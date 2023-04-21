import { Layout, Menu } from "antd";
import "antd/dist/reset.css";
import { useNavigate } from "react-router-dom";
import {
  logoutThunkCreator,
  getProfileInfoThunkCreator,
  getRolesThunkCreator,
} from "../../reducers/account-reducer";
import { connect, useSelector } from "react-redux";
import React, { useEffect, useState } from "react";

const { Header } = Layout;

function mapStateToProps(state) {
  return { account: state.account };
}

function Navbar(props) {
  const navigate = useNavigate();
  const [items, changeItems] = useState([]);
  const isStudent = useSelector((props) => props.account.user.roles.isStudent);
  const isTeacher = useSelector((props) => props.account.user.roles.isTeacher);
  const token = localStorage.getItem("token");
  const authorizeItems = [
    {
      label: "Кампусные курсы",
      key: "/",
      style: { color: "white", fontSize: "18px" },
    },
    { label: "Группы курсов", key: "/groups" },
    isStudent ? { label: "Мои курсы", key: "/courses/my" } : null,
    isTeacher ? { label: "Преподаваемые курсы", key: "/teaching" } : null,
    { label: props.account.user.email, key: "/profile" },
    { label: "Выход", key: "logout", style: { marginLeft: "auto" } },
  ];
  const unauthorizeItems = [
    {
      label: "Кампусные курсы",
      key: "/",
      style: { color: "white", fontSize: "18px" },
    },
    { label: "Вход", key: "/login", style: { marginLeft: "auto" } },
    { label: "Регистрация", key: "/registration" },
  ];

  useEffect(() => {
    const currentLocation = "/" + window.location.pathname.split("/")[1];
    if ((
      !token &&
      !unauthorizeItems.find((item) => item.key === currentLocation)
    ) || (
      token &&
      !authorizeItems.find((item) => {
        if (item !== null && item.key === currentLocation) {
          return true;
        }
      })
    )) {
      navigate("/");
    }
  }, [token]);

  useEffect(() => {
    if (token) {
      props.getProfileInfoThunkCreator(token);
      props.getRolesThunkCreator(token);
      changeItems(authorizeItems);
    } else {
      changeItems(unauthorizeItems);
    }
  }, [isStudent, isTeacher, token, props.account.user.email]);

  return (
    <Header>
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={["Кампусные курсы"]}
        onClick={({ key }) => {
          if (key === "logout") {
            props.logoutThunkCreator(token);
          } else {
            navigate(key);
          }
        }}
        items={items}
      ></Menu>
    </Header>
  );
}

export default connect(mapStateToProps, {
  logoutThunkCreator,
  getProfileInfoThunkCreator,
  getRolesThunkCreator,
})(Navbar);
