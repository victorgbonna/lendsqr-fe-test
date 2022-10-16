import React, { useMemo } from 'react';
import styles from '../../styles/helper/Paginator.module.css'
import Option from './option';
import { usePagination } from './usePagination';


export default function Paginator({take,total, onPageClick, currentPag, siblingCount=1}) {
    const pageNum= Math.ceil(total/take)
    const pageNums=Array.from({length: 20}, (_, i) => i+1);

    const paginationRange = usePagination({
        currentPag,
        total,
        siblingCount,
        take
    });
    if(total<=6){
        return null
    }

    return (
    <div className={styles.pagdiv}>
        <div className={styles.pagination} style={{marginTop:'45px'}}>
            
            {/* {pageNum>1 && */}
            <>
            <div onClick={currentPag!==0?()=>onPageClick(currentPag-1, take):null} className={styles.arrow}  style={currentPag!==0?{cursor:"pointer"}:null}>
         
                <svg width="13" height="8" viewBox="0 0 13 8" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.148767 3.18447C0.148919 3.1843 0.149046 3.18409 0.149223 3.18392L2.7987 0.168842C2.99719 -0.0570274 3.31823 -0.0561869 3.5158 0.170814C3.71335 0.397785 3.71259 0.7649 3.51411 0.990799L1.73525 3.01508H12.4737C12.7537 3.01508 12.9807 3.27466 12.9807 3.5949C12.9807 3.91513 12.7537 4.17472 12.4737 4.17472H1.73527L3.51408 6.199C3.71257 6.4249 3.71333 6.79201 3.51578 7.01898C3.3182 7.24601 2.99714 7.24679 2.79867 7.02095L0.149198 4.00588C0.149045 4.0057 0.148918 4.0055 0.148741 4.00533C-0.0498476 3.77867 -0.0492144 3.41037 0.148767 3.18447Z" 
                    fill={currentPag!==0?"#000070":"#C4C4C4"}/>
                </svg>
                <p style={currentPag!==0?{marginLeft:"8px", color:"#000070"}:{marginLeft:"8px"}}>Prev</p>
            </div>
                <div className={styles.pag}>
                    {paginationRange.map((pInd,ind)=>
                        <React.Fragment key={ind}>
                        {(pInd === 'skip')?
                            <li>&#8230;</li>:
                            <p onClick={pInd===currentPag+1?null:()=>onPageClick(pInd-1, take)}
                             className={pInd===currentPag+1?styles.pagp:undefined}>{pInd}</p>                        
                        }
                        </React.Fragment>
                    )}
                </div>            
            <div
                onClick={currentPag!==pageNum-1?()=>onPageClick(currentPag+1, take):null} className={styles.arrow}  style={currentPag!==pageNum-1?{cursor:"pointer"}:null}
            >
                <p style={currentPag!==pageNum-1?{color:"#000070",marginRight:"8px"}:{marginRight:"8px"}}>Next</p>
                <svg width="14" height="8" viewBox="0 0 14 8" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.1701 3.18447C13.1699 3.1843 13.1698 3.18409 13.1696 3.18392L10.5201 0.168842C10.3217 -0.0570274 10.0006 -0.0561869 9.80304 0.170814C9.60549 0.397785 9.60625 0.7649 9.80474 0.990799L11.5836 3.01508H0.845192C0.565144 3.01508 0.338135 3.27466 0.338135 3.5949C0.338135 3.91513 0.565144 4.17472 0.845192 4.17472H11.5836L9.80477 6.199C9.60628 6.4249 9.60552 6.79201 9.80307 7.01898C10.0006 7.24601 10.3217 7.24679 10.5202 7.02095L13.1697 4.00588C13.1698 4.0057 13.1699 4.0055 13.1701 4.00533C13.3687 3.77867 13.3681 3.41037 13.1701 3.18447Z" fill={currentPag!=pageNum-1?"#000070":"#C4C4C4"}/>
                </svg>
            </div>
            </>
            {/* } */}

            <div style={{display:"flex", columnGap:"8px", 
            alignItems:"center"}} className={styles.pc}>
                <p className={styles.rowsper}>Rows per page</p>
                <Option 
                showAtTop={true}
                inputClass="formipt2" labelClass="forminp"
                options={
                        pageNums.slice(5).map((pageNum)=>(
                            {label:pageNum, value:parseInt(pageNum)}
                        )
                    )
                }
                label={'Select'} value={take} 
                onChange={(take)=>onPageClick(currentPag, take)}/>
            </div>
        </div>
        <div style={{display:"flex", columnGap:"8px", 
        alignItems:"center", marginTop:"30px"}} className={styles.mobile}>
            <p className={styles.rowsper}>Rows per page</p>
            <Option 
            showAtTop={true}
            inputClass="formipt2" labelClass="forminp"
            options={
                    pageNums.slice(5).map((pageNum)=>(
                        {label:pageNum, value:parseInt(pageNum)}
                    )
                )
            }
            label={'Select'} value={take} 
            onChange={(take)=>onPageClick(currentPag, take)}/>
        </div>
        
    </div>
    )
}
