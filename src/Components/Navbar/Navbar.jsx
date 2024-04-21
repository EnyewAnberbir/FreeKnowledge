import React, { useState } from 'react';
import { Link } from 'react-scroll';
import "./Navbar.css";
import logo from "../../assets/logo.jpeg";
// import menu_icon from "../../assets/menu.png";

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  const toggleMenu = () => {
    setMobileMenu(prevState => !prevState);
  };

  return (
    <nav className='container'>
      <img className="imagelogo" src={logo} alt="Logo" />
      <ul className={mobileMenu ? "" : "hide-mobile-menu"}>
        <li><Link to="hero" smooth={true} offset={0} duration={500}>Home</Link></li>
        <li><Link to="program" smooth={true} offset={-260} duration={500}>Program</Link></li>
        <li><Link to="about" smooth={true} offset={-150} duration={500}>About us</Link></li>
        <li><Link to="campus" smooth={true} offset={-260} duration={500}>Campus</Link></li>
        <li><Link to="test" smooth={true} offset={-260} duration={500}>Testimonials</Link></li>
        <li><Link to="contact" smooth={true} offset={-260} duration={500}>Contact us</Link></li>
      </ul>
      {/* <img src={menu_icon} alt="Menu" className='menu-icon' onClick={toggleMenu} /> */}
    </nav>
  );
};

export default Navbar;
