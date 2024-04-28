import React from 'react';
import './style.scss'; // Adjust the path as necessary

const Navbar = () => {
 return (
    <nav className="navbar">
      <div className="navbar-content">
        <div className="navbar-logo">
          <img src="https://upload.wikimedia.org/wikipedia/en/f/fe/Baloncesto_Superior_Nacional.png" alt="Logo" />
        </div>
      </div>
    </nav>
 );
};

export default Navbar;