import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '/src/assets/HPlogobw.png';
import Staff from '../pages/Staff';
import Students from '../pages/Students';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand text-white" href="#">
            <img src={logo} id="nav-logo" alt="HarryPoter Logo"/>
          </a>
          <button className="navbar-toggler" type="button" onClick={toggleMenu}>
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={`collapse navbar-collapse ${menuOpen ? 'show' : ''}`} id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <NavLink className="nav-link active text-white fs-4" aria-current="page" to="">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-white fs-4" to="/characters" href="#">Characters</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-white fs-4" to="/staff">Staff</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-white fs-4" to="/students" >Students</NavLink>
              </li>
            </ul>
            <div className="d-flex align-items-center">
              <button type="button" className="btn btn-info me-3" onClick={toggleMenu}>
                Login
              </button>
              <NavLink className="text-white d-flex align-items-center me-3" to="/favorites">
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-heart-fill text-danger me-2" viewBox="0 0 22 22">
    <path d="M7.183.016C3.04-.503.344 2.643.344 5.965c0 3.05 2.452 5.332 5.6 8.453 1.562 1.496 3.14 2.777 4.057 3.314a.6.6 0 0 0 .686 0c.916-.537 2.495-1.818 4.057-3.314 3.148-3.121 5.6-5.403 5.6-8.453C15.656 2.642 12.96-.502 8.817.016c-.3.077-.558-.227-.44-.523a6.162 6.162 0 0 1 1.142-1.95C10.64-.805 12.268.07 12.95.707c.268.268.71.268.978 0 .682-.637 2.31-1.512 3.436-.754.507.327 1.56.803 2.627.803 1.69 0 3.287-1.153 4.542-1.71C15.418 7.98 16 6.394 16 5.965 16 2.643 13.304-.503 9.161.016c-.118.03-.27-.134-.21-.273a6.168 6.168 0 0 1 1.142-1.95C10.64-.805 12.268.07 12.95.707c.268.268.71.268.978 0 .682-.637 2.31-1.512 3.436-.754.507.327 1.56.803 2.627.803 1.69 0 3.287-1.153 4.542-1.71C15.418 7.98 16 6.394 16 5.965c0-3.05-2.452-5.332-5.6-8.453-3.153-3.018-5.85-.498-5.933-.451z"/>
  </svg>
</NavLink>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;