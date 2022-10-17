import { useEffect, useReducer, useState} from "react";
import useAxios from "../../hooks/useAxios";
import { INITIAL_STATE, paginatorReducer } from "../../reducer/paginatorReducer";
import Paginator from "../Paginator";
import Spinner from "../Spinner";
import AccordionForMobile from "./AccordionForMobile";
import FilterForm from "./FilterForm";
import "./Maintable.css";
import TableForPc from "./TableForPc";


export default function Maintable() {  
  
  let {error, response, loading}= useAxios({
    url:"/v1/users"
  })
  const [state, dispatch] = useReducer(paginatorReducer, INITIAL_STATE);
  
  useEffect(() => {
    if(response) {
      return dispatch({type:'USERS_FETCHED', payload:response})
    }
  }, [response]);

  if(loading){
    return <Spinner/>
  }
  return (
    <div className="maintableContainer">
      <TableForPc users={state.filteredUsers.slice(state.skip,state.take+state.skip)}/>
      <AccordionForMobile users={state.filteredUsers.slice(state.skip,state.take+state.skip)}/>
      {/* <FilterForm reset={()=>
          dispatch({type:'RESET'})}
        addFilter={(data)=>
          dispatch({type:'FILTER_APPLIED', payload:data})}
      /> */}
      <Paginator onPageClick={(
        {queryName, queryValue})=>
        dispatch({type:'QUERY_CHANGED', payload:{
          queryName, queryValue
        }})
      } currentPageIndex={state.skip} take={state.take}
        total={state.total}
      />
    </div>
  );
}

