import sidebarLinks from "../../constants/sidebarLinks";
import './Sidebar.scss'
import SideBarLink from "./sidebarLink";
import TopLink from "./topLink";

export default function SideBar() {
  const {customers, business, settings}= sidebarLinks
    return (
      <aside className="asideParent">
        <TopLink/>
        <div className="aside-showOnlyOnPc">
          <SideBarLink onClick={()=>null} label="Customers" linkArray={customers}/>
          <SideBarLink onClick={()=>null} label="Business" linkArray={business}/>
          <SideBarLink onClick={()=>null} label="Settings" linkArray={settings} marginBottom={false}/>         
        </div>        
      </aside>
    );
}
  