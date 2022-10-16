import { Link } from "react-router-dom";
import sidebarLinks from "../../constants/sidebarLinks";
import Logo from "../Logo";
import './Sidebar.css'
import SideBarLink from "./sidebarLink";
import TopLink from "./topLink";

export default function SideBar() {
  const {customers, business, settings}= sidebarLinks
    return (
      <aside className="asideParent">
        <TopLink/>
        <div className="aside-showOnlyOnPc">
          <SideBarLink label="Customers" linkArray={customers}/>
          <SideBarLink label="Business" linkArray={business}/>
          <SideBarLink label="Settings" linkArray={settings} marginBottom={false}/>         
        </div>        
      </aside>
    );
}
  