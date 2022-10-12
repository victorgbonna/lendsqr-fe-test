import { Link } from "react-router-dom";
import './Button.css'

export default function Button(
    {
        redirectTo,type,label, 
        variants,onClick, disabled
    }: {
    redirectTo?: string, type: string; label:string; disabled:boolean;
    variants: object; onClick: (e:any)=>void;
    }
) {
    return (
        <>
        {type==="link"?
            <Link to={redirectTo || '/'}>
                <a style={{...variants, width:"100%"}}>
                    {label}
                </a>
            </Link>
        :type=="button"?
            <button disabled={disabled} onClick={onClick} style={{...variants, width:"100%"}}>
                {label}
            </button>
        :null}
        </>
    );
}
  