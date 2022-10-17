import { Link } from "react-router-dom";
import useAxios from "../../hooks/useAxios";
import Button from "../../components/Button";
import Spinner from "../../components/Spinner";
import "./UserDetail.scss";
// import './Sidebar.css'


// Get all users https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users 
// Get user details by id https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users/:id 

export default function UserDetail() {
  const userId=JSON.parse(window.localStorage.getItem('userId')) ?? 1
  
  let {error, response, loading}= useAxios({
    url:"/v1/users/"+userId
  })
  
  console.log({error, response})
  if(loading){
    return <Spinner/>
  }
    return (
      <div className="dashboard">
        <Link className="flex" to="/users">
          <img src="/svg/detail/arrow-right.svg" alt="arrow left" />
          <p>Back to Users</p>
        </Link>
        <div className="flex" style={{justifyContent:"space-between"}}>
          <h3>User Details</h3>
          <div style={{columnGap:'20px', display:"flex", alignItems:"center"}}>
            <Button disabled={false} variants="btn1" label="BLACKLIST USER" onClick={()=>null}/>
            <Button disabled={false} variants="btn2" label="WHITELIST USER" onClick={()=>null}/>
          </div>
        </div>
        <div className="profileContainer">
          <div className="flex profile">
            <img src={response.profile.avatar} alt="profile icon" />
            <div className="basic">
              <h5>{response.profile.firstName+' '+response.profile.lastName}</h5>
              <p>{response.profile.phoneNumber}</p>
            </div>
            <div className="rating">
              <h6>Users Tier</h6>
              <div className="flex" style={{marginBottom:0}}>
                <img src="/svg/detail/star-show.svg" alt="Rating" />
                <img src="/svg/detail/star-dim.svg" alt="Rating show" />
                <img src="/svg/detail/star-dim.svg" alt="Rating show" />
              </div>
            </div>
            <div className="bankStatus">
              <h5>&#8358;{response.accountBalance}</h5>
              <p>{response.accountNumber+'/Providus Bank'}</p>
            </div>
          </div>
          <div className="flex profileTabs">
            {['General Details', 'Documents', 'Bank Details',
              'Loans', 'Savings', 'App and System'
            ].map((link, index)=>
              <h4 className={!index?'active':''} key={index}>
                {link}
              </h4>
            )}
          </div>
        </div>
        <div className="fullContainer">
            <div className="category">
              <h4 className="cath4">Personal Information</h4>
              <div className="class">
                <div className="detail">
                  <p>FULL NAME</p>
                  <h4>{response.profile.firstName+' '+response.profile.lastName}</h4>
                </div>
                <div className="detail">
                  <p>PHONE NUMBER</p>
                  <h4>{response.phoneNumber}</h4>
                </div>
                <div className="detail">
                  <p>EMAIL ADDRESS</p>
                  <h4>{response.email}</h4>
                </div>
                <div className="detail">
                  <p>BVN</p>
                  <h4>{response.profile.bvn}</h4>
                </div>
                <div className="detail">
                  <p>GENDER</p>
                  <h4>{response.profile.gender}</h4>
                </div>
                <div className="detail">
                  <p>MARITAL STATUS</p>
                  <h4>{response.marital || 'Single'}</h4>
                </div>
                <div className="detail">
                  <p>CHILDREN</p>
                  <h4>{response.noOfChildren || '0'}</h4>
                </div>
                <div className="detail">
                  <p>TYPE OF RESIDENCE</p>
                  <h4>{'Apartment'}</h4>
                </div>
              </div>

            </div>
            <div className="category">
              <h4 className="cath4">Employment Status</h4>
              <div className="class">
                <div className="detail">
                  <p>LEVEL OF EMPLOYMENT</p>
                  <h4>{response.education.level}</h4>
                </div>
                <div className="detail">
                  <p>EMPLOYMENT STATUS</p>
                  <h4>{response.education.employmentStatus}</h4>
                </div>
                <div className="detail">
                  <p>SECTOR OF EMPLOYMENT</p>
                  <h4>{response.education.sector}</h4>
                </div>
                <div className="detail">
                  <p>DURATION OF EMPLOYMENT</p>
                  <h4>{response.education.duration}</h4>
                </div>
                <div className="detail">
                  <p>OFFICE EMAIL</p>
                  <h4>{response.education.officeEmail}</h4>
                </div>
                <div className="detail">
                  <p>MONTHLY INCOME</p>
                  <h4>&#8358;{response.education.monthlyIncome[0]+'-'}&#8358;{response.education.monthlyIncome[1]}</h4>                </div>
                <div className="detail">
                  <p>LOAN REPAYMENT</p>
                  <h4>{response.education.loanRepayment}</h4>
                </div>
              </div>

            </div>
            <div className="category">
              <h4 className="cath4">Socials</h4>
              <div className="class">
                <div className="detail">
                  <p>TWITTER</p>
                  <h4>{response.socials.twitter}</h4>
                </div>
                <div className="detail">
                  <p>FACEBOOK</p>
                  <h4>{response.socials.facebook}</h4>
                </div>
                <div className="detail">
                  <p>INSTAGRAM</p>
                  <h4>{response.socials.instagram}</h4>
                </div>
              </div>
            </div>
            <div>
              <h4 className="cath4">Guarantor</h4>
              <div className="class">
                <div className="detail">
                  <p>FULL NAME</p>
                  <h4>{response.guarantor.firstName+' '+response.guarantor.lastName}</h4>
                </div>
                <div className="detail">
                <p>PHONE NUMBER</p>
                  <h4>{response.guarantor.phoneNumber}</h4>
                </div>
                <div className="detail">
                  <p>EMAIL ADDRESS</p>
                  <h4>{response.guarantor.address}</h4>
                </div>
                <div className="detail">
                  <p>RELATIONSHIP</p>
                  <h4>{'Sister'}</h4>
                </div>
              </div>

            </div>
        </div>
      </div>
    );
}
  