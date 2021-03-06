import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.webp';
import './Navbar.css';

const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
    return (
        <>
            <nav className="navbar">
            <a href="/"><img src={logo} alt="Logo" className="robo" onClick={closeMobileMenu}/></a>
            <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>      
          <ul className={click ? 'nav-menu active' : 'nav-list'}>
                <li><Link
                to='/'
                className='nav-links' onClick={closeMobileMenu}
                >Home</Link></li>
                <li><Link
                to='/About'
                className='nav-links' onClick={closeMobileMenu} 
              >About</Link></li>
              <li><Link
                to='/Events'
                className='nav-links' onClick={closeMobileMenu}
              >Events</Link></li>
              <li><Link
                to='/Members'
                className='nav-links' onClick={closeMobileMenu}
            >Members</Link></li>
            <li><Link
                to='/RegisterIntra'
                className='nav-links' onClick={closeMobileMenu}
            >Register for Intra</Link></li>
            <li><Link
                to='/RegisterInter'
                className='nav-links' onClick={closeMobileMenu}
            >Register for Inter</Link></li>
                <li><Link
                to='/Contact'
                className='nav-links' onClick={closeMobileMenu}
            >Contact</Link></li>
            <li><Link
                to='/Gallery'
                className='nav-links' onClick={closeMobileMenu}
              >Gallery</Link></li>
                </ul>
        </nav>
        </>
  )
}
export default Navbar