import './App.scss';
import {Outlet, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import NavBar from './components/NavBar';
import SideBar from './components/Sidebar';
import UserDetail from './components/UserDetail';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Login/>} />
      <Route path="/login" element={<Login/>} />
      <Route element={<DashboardLayout/>}>
        <Route path="dashboard" element={<Dashboard/>}/>
        <Route path="/users">
          <Route index element={<Dashboard/>}/>
          <Route path='detail' element={<UserDetail/>}/>
        </Route>
      </Route>
      <Route path="*" element={<NotFound/>} />
    </Routes>
  );
}

function NotFound() {
  return (
      <div>
        <h1>I did not see this page in the figma UI</h1>
        <h4>Not Found</h4>
      </div>
  );
}

function DashboardLayout() {
  return (
      <div className='parent'>
        <NavBar />
        <div className='container'>
          <SideBar/>
          <Outlet/>
        </div>
      </div>
  );
}
//10.560

export default App;
