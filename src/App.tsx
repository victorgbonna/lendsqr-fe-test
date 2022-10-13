import './App.css';
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Users from './pages/Users';
import UserDetails from './pages/Users/userDetails';
import NavBar from './components/NavBar';
import SideBar from './components/Sidebar';


function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login/>} />
      <Route element={<DashboardLayout/>}>
        <Route path="dashboard" element={<Dashboard/>}/>
        <Route path="/users">
          <Route index element={<Users/>}/>
          <Route path=':id' element={<UserDetails/>}/>
        </Route>
      </Route>
      <Route path="*" element={<NotFound/>} />
    </Routes>
  );
}

function NotFound() {
  return (
      <div>
        <h4>Not Found</h4>
      </div>
  );
}

function DashboardLayout() {
  return (
      <>
        <NavBar />
        <div className='container'>
          <SideBar/>
          <Outlet/>
        </div>
      </>
  );
}
//10.560

export default App;
