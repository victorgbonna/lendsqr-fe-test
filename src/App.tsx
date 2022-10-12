import './App.css';
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Users from './pages/Users';
import UserDetails from './pages/Users/userDetails';
import NavBar from './components/NavBar';


function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login/>} />
      <Route element={<DashboardLayout/>}>
        <Route path="dashboard" element={<Users/>}/>
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
      <div>
          <NavBar />
          <Outlet/>
      </div>
  );
}
//10.56
export default App;
