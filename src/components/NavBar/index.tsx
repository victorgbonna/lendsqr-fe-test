import { useState } from "react";
import { Link } from "react-router-dom";
import sidebarLinks from "../../constants/sidebarLinks";
import Logo from "../Logo";
import SideBarLink from "../Sidebar/sidebarLink";
import './NavBar.css'

export default function NavBar() {
    interface IsideLinks {
      linkArray?: Array<string>; marginBottom?:boolean; label?:string;
    }
    const [showNav, setShowNav]= useState(false)
    const [sidebarProps, setSidebarProps]=useState<IsideLinks>(
      {linkArray:[], label:'', marginBottom:false}) 
    const {customers, business, settings}= sidebarLinks

    return (
      <nav className="navParent">
        <div className="showOnlyOnPc">
          <div className="navParent-firstChild">
            <div className="logoParent">
              <Logo/>
            </div>
            <div className="inputSearchGroup">
              <input type="text" placeholder="Search for anything"/>
              <button>
                <img src="/svg/nav/search.svg" alt="search bar" />
              </button>
            </div>
          </div>
          <div className="navParent-secChild">
            <Link to='/' className="navText" style={{
              textDecorationLine: 'underline',
              color: '#213F7D'
            }}>
                Docs
            </Link>
            <img src="/svg/nav/bell.svg" alt="a bell icon" />
            <div className="profile">
              <img src="/images/nav/dp.png" alt="a dp icon" />
              <p className="navText">Adediji</p>
              <img src="/svg//nav/dropdown.svg" style={{cursor:"pointer"}} alt="a dropdown" />
            </div>
          </div>
        </div>
        <div className="showOnlyOnMobile">
          <div className="mainnav">
            <div className="logoParent">
              <Logo/> 
            </div>
            <div className="profile" style={{columnGap:"5px"}}>
              <img src="/images/nav/dp.png" alt="a dp icon" />
              <p className="navText">Adediji</p>
              <img src="/svg//nav/dropdown.svg" style={{cursor:"pointer"}} alt="a dropdown" />
            </div>
            <img onClick={()=>setShowNav(!showNav)} src="/svg/nav/menu-btn.svg" alt="menubar" className="bar"/>
          </div>
          {showNav &&
            <div className="navParent-secChild">
            <div className="inputSearchGroup">
              <input type="text" placeholder="Search for anything"/>
              <button>
                <img src="/svg/nav/search.svg" alt="search bar" />
              </button>
            </div>
              <Link to='/' className="navText" style={{
                textDecorationLine: 'underline',
                color: '#213F7D'
              }}>
                  Docs
              </Link>
              <div className="nav-sidelink">
                <img src="/svg/nav/bell.svg" alt="a bell icon" />
                <Link to='/bell' className="a">
                  Notifications
                </Link>
              </div> 
              <div className="asidelinks">
                <div className="nav-sidelink a" 
                onClick={ 
                  sidebarProps.label=="Customers"?
                  ()=>setSidebarProps({
                    label:"", linkArray:[]
                  }):
                  ()=>setSidebarProps({
                  label:"Customers", linkArray:customers, marginBottom:false
                })}>
                  <p>Customers</p>
                  <img src="/svg/aside/dropdown.svg" alt="dropdown" 
                  className={sidebarProps.label=="Customers"?'actDrop':''}/>
                </div>
                <div className="nav-sidelink a" onClick={
                  sidebarProps.label=="Business"?
                  ()=>setSidebarProps({
                    label:"", linkArray:[]
                  }):
                  ()=>setSidebarProps({
                  label:"Business", linkArray:business, marginBottom: false
                })}>
                  <p>Business</p>
                  <img src="/svg/aside/dropdown.svg" alt="dropdown" className={sidebarProps.label=="Business"?'actDrop':''}/>
                </div>
                <div className="nav-sidelink a" onClick={
                  sidebarProps.label=="Settings"?
                  ()=>setSidebarProps({
                    label:"", linkArray:[]
                  }):()=>setSidebarProps({
                  label:"Settings", linkArray:settings, marginBottom:false
                })}>
                  <p>Settings</p>
                  <img src="/svg/aside/dropdown.svg" alt="dropdown" className={sidebarProps.label=="Settings"?'actDrop':''}/>
                </div>
              </div> 
              {sidebarProps.label && <SideBarLink label={sidebarProps.label} 
              linkArray={sidebarProps.linkArray || []} marginBottom={false}/>}
              {/* <SideBarLink label="Customers" linkArray={customers}/>
              <SideBarLink label="Business" linkArray={business}/>
              <SideBarLink label="Business" linkArray={settings} marginBottom={false}/>*/}

            </div>
          }
            
        </div>
      </nav>
    );
}
  