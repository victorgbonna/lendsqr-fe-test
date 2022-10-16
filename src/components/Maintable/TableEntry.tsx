import { useState } from 'react';
import { Link, Router } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import './Maintable.css'

export default function TableEntry({user}:{user: any}) {
  const navigate = useNavigate();
  const [showOptions, setShowOptions]= useState(0)
    const [status, setStatus]= useState(
      user.key%4==0?'Pending':user.key%4==1?'Active':user.key%4==2?"Inactive":"Blacklisted"
    )

    const saveToLocalStorageB4redirect=(e:any)=>{
      e.preventDefault()
      window.localStorage.setItem('userId', JSON.stringify(user.id));
      console.log(user.id)
      navigate("/users/detail");
    }
    return (
      <tr style={{position:"relative"}}>
        <td>{user.orgName}</td>

        <td>{user.userName}</td>
        <td>{user.email}</td>
        <td>{user.phoneNumber}</td>

        {/* <td>{user.address}</td> */}
        <td>
          {new Date(user.createdAt).toLocaleDateString("en-us", {
            weekday: "short",
            year: "numeric",
            month: "short",
            day: "numeric",
          })}
        </td>
        <td>  
          <div className={status}>
            {status}
          </div>
        </td>
        <td style={{position:"relative"}}>
          <img src="/svg/table/3dots.svg" style={{
            cursor: "pointer"}} onClick={
              (showOptions==user.id)?()=>setShowOptions(0):
              ()=>setShowOptions(user.id)}/>
          {(showOptions==user.id) && 
          <div className='showDetails'>
            <Link to='/users/detail' onClick={saveToLocalStorageB4redirect}>
                <img src="/svg/table/view.svg" alt="view" />
                <p>View Details</p>
            </Link>
            <div onClick={()=> setStatus('Blacklisted')}>
              <img src="/svg/table/blacklist.svg" alt="blacklist" />
              <p>Blacklist User</p>
            </div>
            <div onClick={()=> setStatus('Active')}>
              <img src="/svg/table/activate.svg" alt="blacklist" />
              <p>Activate User</p>
            </div>
          </div>}
        </td>

      </tr>
    );
}
  