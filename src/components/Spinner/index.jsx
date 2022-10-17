import './Spinner.scss'

export default function Spinner() {
    
    return (
        <div style={{position:"relative", height:"400px"}}>
            <div className='spinnerparent'>
                <svg className='spinner' viewBox="0 0 50 50">
                    
                <circle className='path' cx="25" cy="25" r="20" fill="none" strokeWidth="9"></circle>
                </svg>
            </div>
        </div>

    )
}