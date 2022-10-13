import { Link } from "react-router-dom";
import './Button.css'

export default function Button(
    {
        label, variants,onClick, disabled
    }: {
    label:string; disabled:boolean;
    variants: object; onClick?: (e?:any)=>void;
    }
) {
    return (
        <>
        <button disabled={disabled} onClick={onClick} style={{...variants, width:"100%"}}>
            {label}
        </button>
        </>
    );
}
  