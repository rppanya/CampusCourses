import { Layout, Menu } from "antd";
import "antd/dist/reset.css";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";

const { Header } = Layout;

function Navbar(props) {
  const navigate = useNavigate();
  const [items, changeItems] = useState([]);
  const token = localStorage.getItem("token")
    ? localStorage.getItem("token")
    : null;
  const authorizeItems = [
    {
      label: "Кампусные курсы",
      key: "/",
      style: { color: "white", fontSize: "18px" },
    },
    { label: "Группы курсов", key: "/groups" },
    props.isStudent ? { label: "Мои курсы", key: "/courses/my" } : null,
    props.isTeacher ? { label: "Преподаваемые курсы", key: "/teaching" } : null,
    { label: props.email, key: "/profile" },
    { label: "Выход", key: "logout", style: { marginLeft: "auto" } },
    { key: "/courses" },
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
    if (
      (!token &&
        !unauthorizeItems.find((item) => item.key === currentLocation)) ||
      (token &&
        !authorizeItems.find((item) => {
          if (item !== null && item.key === currentLocation) {
            return true;
          }
        }))
    ) {
      navigate("/");
    }
  }, [token]);

  useEffect(() => {
    if (token) {
      changeItems(authorizeItems);
    } else {
      changeItems(unauthorizeItems);
    }
  }, [props]);

  useEffect(() => {
    if (token) {
      props.getRolesThunkCreator();
      props.getProfileInfoThunkCreator();
    }
  }, []);

  return (
    <Header>
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={["Кампусные курсы"]}
        onClick={({ key }) => {
          if (key === "logout") {
            props.logoutThunkCreator();
          } else {
            navigate(key);
          }
        }}
        items={items}
      ></Menu>
    </Header>
  );
}

export default Navbar;
