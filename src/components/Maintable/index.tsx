import { useState} from "react";
import useAxios from "../../hooks/useAxios";
import Paginator from "../Paginator";
import Spinner from "../Spinner";
import "./Maintable.css";
import TableForPc from "./TableForPc";

export default function Maintable() {  
  let {error, response, loading}= useAxios({
    url:"/v1/users"
  })
  const [filteredUsers, setFilteredUsers]= useState(response || [])
  console.log({error, response})
  if(loading){
    return <Spinner/>
  }
  return (
    <div className="maintableContainer">
      <TableForPc users={filteredUsers}/>
      <Paginator/>
    </div>
  );
}

