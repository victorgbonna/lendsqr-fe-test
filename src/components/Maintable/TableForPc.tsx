import TableEntry from "./TableEntry";
import './Maintable.scss'
import React from "react";

export default function TableForPc({users, setShowFilter}
  :{users:Array<Object>, setShowFilter:() => void}) {
  
  const cols=[
    "ORGANIZATION", "USERNAME", "EMAIL", "PHONE NUMBER",
    "DATE JOINED", "STATUS", ""
  ]
  return (
    
    <table className="table pc">
    <thead>
        <tr>
        {cols.map((col, index) => (
            <th key={index}>
              <div style={{display:"flex", columnGap:"3px"}}>
                <p>{col}</p> 
                {(index!==6) && 
                <img src="/svg/table/bar.svg" 
                  onClick={setShowFilter}
                  style={{cursor:"pointer"}}
                  alt="bar icon"/>}
              </div>
              
            </th>
        ))}
        </tr>
    </thead> 
    <tbody>
        {users.map((user={}, key) => {
        let userWithIndex= {...user, key}
        return (
            <TableEntry key={key} user={userWithIndex}/>
        );
        })}
    </tbody>
    </table>
    
  );
}

