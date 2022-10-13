import { Link } from "react-router-dom";
import Logo from "../Logo";
import './NavBar.css'

export default function NavBar() {
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

        </div>
      </nav>
    );
}
  