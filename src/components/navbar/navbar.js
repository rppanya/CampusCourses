import { Layout, Menu, Row, Col } from "antd";
import "antd/dist/reset.css";
import { useNavigate } from "react-router-dom";
import {
  logoutThunkCreator,
  getProfileInfoThunkCreator,
  getRolesThunkCreator
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
  const token = localStorage.getItem('token')

  useEffect(() => {
    if (token) {
      props.getProfileInfoThunkCreator(token)
      props.getRolesThunkCreator(token)
      changeItems([
        { label: "Группы курсов", key: "/groups" },
        isStudent ? { label: "Мои курсы", key: "/courses/my" } : null,
        isTeacher ? { label: "Преподаваемые курсы", key: "/teaching" } : null,
        { label: props.account.user.email, key: "/profile" },
        { label: "Выход", key: "logout"}
      ])
    } else {
      changeItems([
        { label: "Вход", key: "/login" },
        { label: "Регистрация", key: "/registration" }
      ])
    }
      
  }, [isStudent, isTeacher, token, props.account.user.email]);


  return (
    <Header>
      <Row>
        <Col span={4} style={{textAlign: "center", verticalAlign: "middle"}}>
          <span style={{color: "white", fontSize: "18px"}} >Кампусные курсы</span>
        </Col>
        <Col span={20}>
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
        style={{justifyContent: "flex-end"}}
        items={items}
      >
      </Menu>
        </Col>
      </Row>
    </Header>
  );
}

export default connect(mapStateToProps, {
  logoutThunkCreator,
  getProfileInfoThunkCreator,
  getRolesThunkCreator
})(Navbar);
