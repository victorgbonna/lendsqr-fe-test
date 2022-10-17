import { useRef, useState } from 'react';
import './Maintable.scss'

export default function FilterForm(
        {hideForm, addFilter, reset, exFilterData}
    ) {
    const [filterForm, setFilterForm]= useState({...exFilterData})
    const filterAction=()=>{
        let dataToBeFiltered={}
        const {userName, orgName, email, phoneNumber}= filterForm
        console.log({userName, orgName, email, phoneNumber})
        for (const key in filterForm) {
            // console.log({key})
            if(filterForm[key]){
                // console.log({keyin:key})
                dataToBeFiltered[key]=filterForm[key]
            }            
        }
        console.log({dataToBeFiltered})
        // return
        if (Object.keys(dataToBeFiltered)){
            addFilter(dataToBeFiltered)
        }
        hideForm()
    }
    const resetAction=()=>{
        setFilterForm({
            orgName:"",
            email:"",
            phoneNumber:"",
            userName:""
        })
        reset()
        hideForm()
    }
    return (
    <div className='filterForm'>
        <div>
            <p>Organization</p>
            <select name='orgName' onChange={(e)=>setFilterForm({
                ...filterForm, orgName:e.target.value
            })} value={filterForm.orgName} defaultValue={''}>
                <option value="">Any</option>
                <option value="accusamus-minima-repudiandae">accusamus-minima</option>
                <option value="aliquam-velit-ab">aliquam-velit-ab</option>
                <option value="natus-harum-unde">natus-harum-unde</option>
                <option value="quas-et-ut">quas-et-ut</option>
            </select>
        </div>
        <div>
            <p>Username</p>
            <input type="text" onChange={(e)=>setFilterForm({
                ...filterForm, userName:e.target.value
            })} value={filterForm.userName}/>
        </div>
        <div>
            <p>Email</p>
            <input type="text" onChange={(e)=>setFilterForm({
                ...filterForm, email:e.target.value
            })} value={filterForm.email}/>
        </div>
        <div>
            <p>Date</p>
            <input type="date" name='date'/>
        </div>
        <div>
            <p>Phone Number</p>
            <input type="text" name='phone' onChange={(e)=>setFilterForm({
                ...filterForm, phoneNumber:e.target.value
            })} value={filterForm.phoneNumber}/>
        </div>
        <div>
            <p>Status</p>
            <select name='status' defaultValue={''}>
                <option value="">Any</option>
                <option value="Pending">Pending</option>
                <option value="Inactive">Inactive</option>
                <option value="Active">Active</option>
                <option value="Blacklisted">Blacklisted</option>
            </select>
        </div>
        <div className='btnsection'>
            <button className='reset' onClick={resetAction}>Reset</button>
            <button className='filter' onClick={filterAction}>Filter</button>
        </div>
    </div>
    );
}
