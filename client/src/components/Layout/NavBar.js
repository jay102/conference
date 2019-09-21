import React from 'react';
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar navbar-dark bg-dark mb-5">
      <span className="navbar-brand mb-0 h3 ">Intelligent Innovations</span>
      <ul className="nav justify-content-end">
        <li className="nav-item"><NavLink className="white" to="/">Attend | </NavLink></li>
        <li className="nav-item"><NavLink className="white" to="/speak"> Speak</NavLink></li>
        <li className="nav-item"><NavLink className="white" to="/confirmed">| Attendees</NavLink></li>
      </ul>
    </nav>
  );
}

export default Navbar;