import { Button, Breadcrumb, Layout, Menu, theme } from 'antd';
import 'antd/dist/reset.css';
import { useNavigate } from 'react-router-dom';

const { Header } = Layout;

function Navbar() {
  const navigate = useNavigate();
    return (
        <Header>
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['Кампусные курсы']} 
          onClick={({ key }) => {
            if(key === "signout") {
              //signout
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

export default Navbar