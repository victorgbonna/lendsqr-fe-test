import { useState } from 'react';
import './Maintable.css'

export default function TableEntry({user}:{user: any}) {
    const [showOptions, setShowOptions]= useState(false)
    const [status, setStatus]= useState(
      user.key%3==1?'Active':user.key%3==2?"Inactive":"Pending"
    )
    return (
      <tr>
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
        <td>
        <img src="/svg/table/3dots.svg" style={{
            cursor: "pointer"}}/>
        </td>
      </tr>
    );
}
  