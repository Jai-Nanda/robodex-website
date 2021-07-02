import { Link } from 'react-router-dom';
import logo from './logo.webp';
import './Navbar.css';

const Navbar = () => {
    return (
        <>
            <nav className="navbar">
            <img src={logo} alt="Logo" className="robo" />
                <ul className="nav-list">
                <li><Link
                to='/'
                className='nav-links'
                >Home</Link></li>
                <li><Link
                to='/About'
                className='nav-links'
              >About</Link></li>
              <li><Link
                to='/Events'
                className='nav-links'
              >Events</Link></li>
              <li><Link
                to='/Members'
                className='nav-links'
              >Members</Link></li>
                <li><Link
                to='/Contact'
                className='nav-links'
            >Contact</Link></li>
            <li><Link
                to='/Gallery'
                className='nav-links'
              >Gallery</Link></li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar