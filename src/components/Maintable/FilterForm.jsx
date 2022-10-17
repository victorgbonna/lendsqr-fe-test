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

        if (Object.keys(dataToBeFiltered).length){
            addFilter(dataToBeFiltered)
            hideForm()
        }
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
            })} value={filterForm.userName} placeholder="username"/>
        </div>
        <div>
            <p>Email</p>
            <input type="text" placeholder='email' onChange={(e)=>setFilterForm({
                ...filterForm, email:e.target.value
            })} value={filterForm.email}/>
        </div>
        <div>
            <p>Date From</p>
            <input placeholder='date from' type="number" min="1900" max="2099" step="1"  
            onChange={(e)=>setFilterForm({
                ...filterForm, date:e.target.value
            })} value={filterForm.date}/>
        </div>
        <div>
            <p>Phone Number</p>
            <input type="text" name='phone' onChange={(e)=>setFilterForm({
                ...filterForm, phoneNumber:e.target.value
            })} value={filterForm.phoneNumber} placeholder="phone"/>
        </div>
        <div>
            <p>Status &#40;inactive&#41;</p>
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
