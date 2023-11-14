import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">Carvi</div>
        <ul className="nav-links">
          <li><a href="/Home">Home</a></li>
          <li><a href="/About">About</a></li>
          <li><a href="/Services">Services</a></li>
          <li><a href="/Contact">Contact</a></li>
        </ul>
        <div className="profile-name">Hello, Dracula</div>
      </div>
    </nav>
  );
};

export default Navbar;