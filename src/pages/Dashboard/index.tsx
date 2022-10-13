export default function Dashboard() {
  const customers=[
    'Users', 'Guarantors','Loans', 'Decision Models', 'Savings', 
    'Loan Requests', 'Whitelist', 'Karma']
  const business=[
    'Organization', 'Loan Products', 'Savings Products',
     'Fees and Charges','Transactions', 'Services','Service Account',
     'Settlements', 'Reports'
  ]
  const settings=[
    'Preferences', 'Fees, and Pricing', 'Audit Logs'
  ]

    return (
      <aside className="">
      <div>
        <img src="/svg/aside/briefcase.svg" alt="briefcase" />
        <p>Switch Organization</p>
        <img src="/svg/aside/dropdown.svg" alt="dropdown" />
      </div>
      <div>
        <img src="/svg/aside/home.svg" alt="home" />
        <p>Dashboard</p>
      </div>
      <div>

      </div>
      <div className="aside-showOnlyOnPc">
        <div>
          <h4>CUSTOMERS</h4>
          <div>
            {customers.map((link,index)=>
              <div key={index}>
                <img src={`/svg/aside/${link.toLowerCase().split(' ')[0]}.svg`} alt={`${link} icon`} />
                <p>{link}</p>
              </div>  
            )}
          </div>
        </div>
        <div>
          <h4>BUSINESS</h4>
          <div>
            {business.map((link,index)=>
              <div key={index}>
                <img src={`/svg/aside/${link.toLowerCase().split(' ')[0]}.svg`} alt={`${link} icon`} />
                <p>{link}</p>
              </div>  
            )}
          </div>
        </div>
        <div>
          <h4>SETTINGS</h4>
          <div>
            {settings.map((link,index)=>
              <div key={index}>
                <img src={`/svg/aside/${link.toLowerCase().split(' ')[0]}.svg`} alt={`${link} icon`} />
                <p>{link}</p>
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
  