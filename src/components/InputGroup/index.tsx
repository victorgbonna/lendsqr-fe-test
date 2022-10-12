import { useState } from "react";

export default function InputGroup(
    {
        type="text",hasError, placeholder, variants,
         onChange, value
      }: {
        type: string; placeholder:string;
        hasError:string; value:string;
        variants: object; onChange: (e:any)=>void;
      }
    ) {
    const [showPassword,setShowPassword]=useState(false)
    return (
      <div>
        {type==="text"?
            <input style={{...variants, width:"100%"}} placeholder={placeholder}/>
        :type==="password"?
            <div style={{display:"flex", alignItems:"center"}}>
                <input style={{...variants,minWidth:'100%', flexBasis:"100%"}} type={showPassword?'text':'password'} 
                onChange={onChange}  value={value} placeholder={placeholder}/>
            <small style={{zIndex:"23", height :"100%", marginLeft:'-50px', cursor:"pointer"}} onClick={()=>setShowPassword(!showPassword)}>{showPassword?'hide':'show'}</small>
        </div>
        :null}
        {hasError && <div className="errordiv" style={{visibility:hasError?'visible':'hidden'}}>
        <svg width="15" height="15" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.8 1.61298L19.501 12.774C20.464 14.377 19.991 16.486 18.444 17.484C17.9248 17.8202 17.3196 17.9993 16.701 18H3.298C1.477 18 0 16.47 0 14.581C0 13.942 0.173 13.317 0.498 12.774L7.2 1.61298C8.162 0.00998032 10.196 -0.48102 11.743 0.51698C12.171 0.79298 12.533 1.16798 12.8 1.61298ZM10.58 2.45198C10.4576 2.37324 10.3205 2.32013 10.1769 2.29586C10.0334 2.27159 9.88647 2.27667 9.74496 2.31078C9.60346 2.34489 9.47033 2.40734 9.35364 2.49434C9.23694 2.58135 9.13909 2.6911 9.066 2.81698L2.365 13.98C2.25615 14.1619 2.19877 14.37 2.199 14.582C2.199 15.212 2.691 15.722 3.299 15.722H16.7C16.906 15.722 17.107 15.662 17.281 15.55C17.5307 15.3841 17.7067 15.1283 17.7725 14.8358C17.8383 14.5433 17.7886 14.2368 17.634 13.98L10.933 2.81698C10.8451 2.67 10.7247 2.54514 10.581 2.45198H10.58ZM10 14C9.73478 14 9.48043 13.8946 9.29289 13.7071C9.10536 13.5196 9 13.2652 9 13C9 12.7348 9.10536 12.4804 9.29289 12.2929C9.48043 12.1053 9.73478 12 10 12C10.2652 12 10.5196 12.1053 10.7071 12.2929C10.8946 12.4804 11 12.7348 11 13C11 13.2652 10.8946 13.5196 10.7071 13.7071C10.5196 13.8946 10.2652 14 10 14ZM10 4.99998C10.2652 4.99998 10.5196 5.10534 10.7071 5.29287C10.8946 5.48041 11 5.73476 11 5.99998V9.99998C11 10.2652 10.8946 10.5196 10.7071 10.7071C10.5196 10.8946 10.2652 11 10 11C9.73478 11 9.48043 10.8946 9.29289 10.7071C9.10536 10.5196 9 10.2652 9 9.99998V5.99998C9 5.73476 9.10536 5.48041 9.29289 5.29287C9.48043 5.10534 9.73478 4.99998 10 4.99998Z" fill="#E11D48"/>
        </svg>
        <p>{hasError}</p>
        </div>}
      </div>
    );
}
  