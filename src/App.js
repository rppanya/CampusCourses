import './App.css';
import { ReactDOM } from 'react-dom';
import { Button, Breadcrumb, Layout, Menu, theme } from 'antd';
import 'antd/dist/reset.css';
import Navbar from './components/navbar/navbar';
import { Route, Routes, BrowserRouter as Router} from 'react-router-dom';


const { Header, Content, Footer } = Layout;



function App() {
  return (
    <div className="App">
      <Layout className="layout">
        <Navbar></Navbar>
        <Content style={{padding: '0 50px'}}>
        <div className="site-layout-content">
          <Routes>
            <Route path="/" element={<div>Добро пожаловать в систему капусных курсов</div>}></Route>
            <Route path="/groups" element={<div>Группы курсов</div>}></Route>
            <Route path="/courses/my" element={<div>Мои курсы</div>}></Route>
            <Route path="/teaching" element={<div>Преподаваемые курсы</div>}></Route>
            <Route path="/profile" element={<div>username</div>}></Route>
            <Route path="/registration" element={<div>Регистрация</div>}></Route>
            <Route path="/login" element={<div>Вход</div>}></Route>
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
