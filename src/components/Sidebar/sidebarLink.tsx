import { Link } from "react-router-dom";
import './Sidebar.scss'

export default function SideBarLink({onClick,linkArray, label, marginBottom=true}:{
  onClick?:()=>void, linkArray: Array<string>; marginBottom?:boolean; label?:string;
}) 
  {
    return (
          <div className={marginBottom?'header':''}>
            {marginBottom && <h4>{label}</h4>}
            <div>
              {linkArray.map((link,index)=>
                <div key={index}  className="tab">
                  <img src={`/svg/aside/${link.toLowerCase().split(' ')[0]}.svg`} alt={`${link} icon`} />
                  <Link onClick={onClick} to={`/${link.toLowerCase().split(' ')[0]}`} className="a">
                    {link}
                  </Link>
                </div>  
              )}
            </div>
          </div>   
    );
}
  