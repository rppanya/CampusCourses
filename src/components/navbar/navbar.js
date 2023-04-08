import { Button, Breadcrumb, Layout, Menu, theme } from 'antd';
import 'antd/dist/reset.css';
import { useNavigate } from 'react-router-dom';
import { logoutThunkCreator } from '../../reducers/auth-reducer';
import { connect } from 'react-redux';
import React from "react";

const { Header } = Layout;

function mapStateToProps(state){ 
  return { auth: state.auth }
};

function Navbar(props) {
  const navigate = useNavigate();
    return (
        <Header>
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['Кампусные курсы']} 
          onClick={({ key }) => {
            if(key === "logout") {
              console.log(props.auth.token)
              props.logoutThunkCreator(props.auth.token)
            }
            else {
              navigate(key);
            }
          }} 
          items={
          [{label: "Кампусные курсы", key: "/"},
          {label: "Группы курсов", key: "/groups"},
          {label: "Мои курсы", key: "/courses/my"},
          {label: "Преподаваемые курсы", key: "/teaching"},
          {label: "username", key: "/profile"},
          {label: "Регистрация", key: "/registration"},
          {label: "Вход", key: "/login"},
          {label: "Выход", key: "logout"}]}>
          </Menu>
        </Header>
    )
}

export default connect(mapStateToProps, {logoutThunkCreator})(Navbar);