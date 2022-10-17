import { Link } from 'react-router-dom';
import './Logo.scss'

export default function Logo() {
    return (
    <Link to='/' className='logo'>
        <img src="/svg/union.svg" alt="Lendr logo" />
        <h3>Lendsqr</h3>
    </Link>
    );
}
  