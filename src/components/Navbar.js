import { Link } from 'react-router-dom';
import logo from './logo.webp';
import './Navbar.css';

const Navbar = () => {
  const burger = document.getElementById('burgers');
  const navbar = document.querySelector('.navbar');
  const navList = document.querySelector('.nav-list');
  console.log(burger);
  // burger.addEventListener('click', () => {
    // navList.classList.toggle('v-class-resp');
    // navbar.classList.toggle('h-nav-resp');
  // });
    return (
        <>
            <nav className="navbar h-nav-resp">
            <img src={logo} alt="Logo" className="robo" />
                <ul className="nav-list v-class-resp">
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
                to='/Register'
                className='nav-links'
            >Register</Link></li>
                <li><Link
                to='/Contact'
                className='nav-links'
            >Contact</Link></li>
            <li><Link
                to='/Gallery'
                className='nav-links'
              >Gallery</Link></li>
                </ul>
          <div className="burger" id="burgers">
            <div className="line"></div>
            <div class="line"></div>
            <div className="line"></div>
          </div>
        </nav>
        </>
  )
}
const burger = document.getElementById('burgers');
console.log(burger);

export default Navbar