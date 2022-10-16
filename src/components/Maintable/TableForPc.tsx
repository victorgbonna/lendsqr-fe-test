import { useState} from "react";
import TableEntry from "./TableEntry";
import './Maintable.css'

export default function TableForPc({users}:{users:Array<Object>}) {
  // console.log({ orgs });

  const [actAcc, setActAcc] = useState(0);
  const [showAcc, setShowAcc] = useState(false);

  // const displayAcc = (index) => {
  //   console.log("displayed");
  //   setActAcc(index);
  //   setShowAcc(true);
  // };
  // const hideAcc = () => {
  //   console.log("clicked");
  //   setShowAcc(false);
  //   setActAcc(-1);
  // };
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
                {(index!==6) && <img src="/svg/table/bar.svg" alt="bar icon"/>}
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

