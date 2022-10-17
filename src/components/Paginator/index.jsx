import { usePagination } from '../../hooks/usePagination';
// import Select from '../Select';
import './Paginator.scss'
import React from 'react'
import Select from '../Select';

export default function Paginator({take,total, onPageClick, currentPageIndex, siblingCount=1}) {
    const pageNums=Array.from({length: 100}, (_, i) => i+1);
    const pageNum= Math.ceil(total/take)
    const paginationRange = usePagination({
        currentPageIndex,
        total,
        siblingCount,
        take
    });
    //return no pagination if the total of users are not up to 10
    if(total<=10){
        return null
    }

    return (
    <div className='pagdiv'>
        <div className='flex'>
            <p>showing</p>
            <Select value={take} options={pageNums} onChange={(take)=>onPageClick({queryName:"take", queryValue:take})}/>
            <p>out of 100</p>
        </div>
        <div className='flex'>
            <img style={!currentPageIndex?{visibility:"hidden"}:null} 
                onClick={()=>onPageClick({queryName:"skip", queryValue:(currentPageIndex-1)*take})}
                src="/svg/table/prevbtn.svg" alt="prev icon" />

            {paginationRange.map((pInd,ind)=>
                <React.Fragment key={ind}>
                {(pInd === 'skip')?
                    <p>...</p>:
                    <p style={{cursor:"pointer"}} onClick={pInd===currentPageIndex+1?null:()=>onPageClick({queryName:"skip", queryValue:(pInd-1)*take})}
                        className={pInd===currentPageIndex+1?'currentpagp':'pagp'}>{pInd}</p>                        
                }
                </React.Fragment>
            )}
            <img src="/svg/table/nextbtn.svg" 
                alt="next icon" 
                style={currentPageIndex===pageNum-1?{visibility:"hidden"}:null} 
                onClick={()=>onPageClick({queryName:"skip", queryValue:(currentPageIndex+1)*take})}/>
        </div>       
    </div>
    )
}
