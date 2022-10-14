import './Button.css'

export default function Button(
    {
        label, variants,onClick, disabled
    }: {
    label:string; disabled:boolean;
    variants: string; onClick?: (e?:any)=>void;
    }
) {
    return (
        <>
        <button disabled={disabled} onClick={onClick} className={variants}>
            {label}
        </button>
        </>
    );
}
  