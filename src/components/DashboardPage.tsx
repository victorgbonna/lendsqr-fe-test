import {Route, Routes } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import Users from '../pages/Users';
import UserDetails from '../pages/Users/userDetails';
import NavBar from './NavBar';

export default function DashboardPage() {
    return (
        <div>
            <NavBar />
            <Routes>
            <Route path="/dashboard" element={<Dashboard/>}/>
            <Route path="/users" element={<Users/>}/>
            <Route path="/users/:id" element={<UserDetails/>}/>  
            </Routes>
        </div>
    );
}
  