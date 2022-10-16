import { Link } from "react-router-dom";
import sidebarLinks from "../../constants/sidebarLinks";
import './Sidebar.css'

export default function SideBarLink({linkArray, label, marginBottom=true}:{
  linkArray: Array<string>; marginBottom?:boolean; label?:string;
}) {
    return (
          <div className={marginBottom?'header':''}>
            <h4>{label}</h4>
            <div>
              {linkArray.map((link,index)=>
                <div key={index}  className="tab">
                  <img src={`/svg/aside/${link.toLowerCase().split(' ')[0]}.svg`} alt={`${link} icon`} />
                  <Link to={`/${link.toLowerCase().split(' ')[0]}`} className="a">
                    {link}
                  </Link>
                </div>  
              )}
            </div>
          </div>   
    );
}
  