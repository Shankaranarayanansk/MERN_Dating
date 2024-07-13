import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
 
  return (
    <nav>
      <h1>My Dev_Dating App</h1>
      <ul>
        <Link to="/" >Home</Link>
        
        <Link to="/about"  >About</Link>
        <Link to="/users"  >Users</Link>
        <Link to="/contact"  >Contact</Link>
      </ul>
    </nav>
  );
};

export default Navbar;
