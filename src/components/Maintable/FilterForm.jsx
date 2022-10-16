import { useRef, useState } from 'react';
import './Maintable.css'

export default function FilterForm({unShowForm, addFilter, reset}) {
    const [filterForm, setFilterForm]= useState({})
    const filterAction=()=>{
        let dataToBeFiltered={}
        for (const key in filterForm) {
            if(filterForm[key]){
                dataToBeFiltered[key]=FilterForm[key]
            }            
        }
        if (Object.keys(dataToBeFiltered)){
            addFilter(dataToBeFiltered)
        }
        // unShowForm()
    }
    const resetAction=(e)=>{
        setFilterForm({})
        reset()
        // unShowForm()
    }
    return (
    <div className='filterForm'>
        <div>
            <p>Organization</p>
            <select name='orgName' defaultValue={''}>
                <option value="">Any</option>
                <option value="accusamus-minima-repudiandae">accusamus-minima</option>
                <option value="aliquam-velit-ab">aliquam-velit-ab</option>
                <option value="natus-harum-unde">natus-harum-unde</option>
                <option value="quas-et-ut">quas-et-ut</option>
            </select>
        </div>
        <div>
            <p>Username</p>
            <input type="text" />
        </div>
        <div>
            <p>Email</p>
            <input type="text" name='email'/>
        </div>
        <div>
            <p>Date</p>
            <input type="date" name='date'/>
        </div>
        <div>
            <p>Phone Number</p>
            <input type="text" name='phone'/>
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
