import { Link } from "react-router-dom";
import sidebarLinks from "../../constants/sidebarLinks";
import Logo from "../Logo";
import './Sidebar.css'

export default function TopLink() {
    return (
        <>
            <div className="tab first active">
            <img src="/svg/aside/briefcase.svg" alt="briefcase" />
            <p>Switch Organization</p>
            <img src="/svg/aside/dropdown.svg" alt="dropdown" />
            </div>
            <Link to="/dashboard">
            <div className="tab first">
                <img src="/svg/aside/home.svg" alt="home" />
                <p>Dashboard</p>
            </div>
            </Link>
        </>   
    );
}
  