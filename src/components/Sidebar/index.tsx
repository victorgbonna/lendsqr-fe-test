import { Link } from "react-router-dom";
import Logo from "../Logo";
import './Sidebar.css'

export default function SideBar() {
  const customers=[
    'Users', 'Guarantors','Loans', 'Decision Models', 'Savings', 
    'Loan Requests', 'Whitelist', 'Karma']
  const business=[
    'Organization', 'Loan Products', 'Savings Products',
     'Fees and Charges','Transactions', 'Services','Service Account',
     'Settlements', 'Reports'
  ]
  const settings=[
    'Preferences', 'Fees and Pricing', 'Audit Logs'
  ]

    return (
      <aside className="asideParent">
        <div className="tab first active">
          <img src="/svg/aside/briefcase.svg" alt="briefcase" />
          <p>Switch Organization</p>
          <img src="/svg/aside/dropdown.svg" alt="dropdown" />
        </div>
        <div className="tab first">
          <img src="/svg/aside/home.svg" alt="home" />
          <p>Dashboard</p>
        </div>
  
        <div className="aside-showOnlyOnPc">
          <div className="header">
            <h4>CUSTOMERS</h4>
            <div>
              {customers.map((link,index)=>
                <div key={index}  className="tab activeTab">
                  <img src={`/svg/aside/${link.toLowerCase().split(' ')[0]}.svg`} alt={`${link} icon`} />
                  <Link to={`/${link.toLowerCase().split(' ')[0]}`} className="a">
                    {link}
                  </Link>
                </div>  
              )}
            </div>
          </div>
          <div className="header">
            <h4>BUSINESS</h4>
            <div>
              {business.map((link,index)=>
                <div key={index}  className="tab">
                <img src={`/svg/aside/${link.toLowerCase().split(' ')[0]}.svg`} alt={`${link} icon`} />
                <Link to={`/${link.toLowerCase().split(' ')[0]}`} className="a">
                  {link}
                </Link>
              </div>  
              )}
            </div>
          </div>
          <div>
            <h4>SETTINGS</h4>
            <div>
              {settings.map((link,index)=>
                <div key={index}  className="tab">
                  <img src={`/svg/aside/${link.toLowerCase().split(' ')[0]}.svg`} alt={`${link} icon`} />
                  <Link to={`/${link.toLowerCase().split(' ')[0]}`} className="a">
                    {link}
                  </Link>
              </div>    
              )}
            </div>
          </div>          
        </div>        
        <div className="aside-showOnlyOnMobile">

        </div>
      </aside>
    );
}
  