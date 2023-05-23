import React, { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";
import { Layout, Menu } from "antd";
import swal from "sweetalert";

import "antd/dist/reset.css";

function Navbar(props) {

  const navigate = useNavigate();
  const [items, changeItems] = useState([]);
  const { Header } = Layout;
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
    props.isTeacher
      ? { label: "Преподаваемые курсы", key: "/courses/teaching" }
      : null,
    { label: props.email, key: "/profile", style: { marginLeft: "auto" } },
    { label: "Выход", key: "logout" },
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
        !authorizeItems.find(
          (item) => item !== null && item.key === currentLocation
        ))
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
        defaultSelectedKeys={window.location.pathname}
        onClick={({ key }) => {
          if (key === "logout") {
            swal({
              title: "Вы уверены что хотите выйти?",
              icon: "warning",
              buttons: {
                cancel: "Отмена",
                defeat: "Выйти",
              },
              dangerMode: true,
            }).then((value) => {
              switch (value) {
                case "cancel":
                  break;
                case "defeat":
                  props.logoutThunkCreator();
                  break;
                default:
                  break;
              }
            });
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
