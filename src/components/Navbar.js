import React, {useState} from 'react'    //raf
import {Link, NavLink} from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <>
      <nav>
        <Link to="/" className="title"> Photo Gallery </Link>

        <div className="menu" onClick={() =>{
          setMenuOpen(!menuOpen)
        }}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul className={menuOpen ? "open" : ""}>
          <li> 
            <NavLink to="/home"> Home </NavLink>
          </li>

          <li> 
            <NavLink to="/services"> Services </NavLink>
          </li>

          <li> 
            <NavLink to="/gallery"> Gallery </NavLink>
          </li>

          <li> 
            <NavLink to="/contact"> Contact </NavLink>
          </li>

        </ul>
      </nav>
    </>
  )
}

export default Navbar
