import React from "react";
import { Link } from 'react-router-dom';

export const Navigation = () => {
  return (
    <ul className="navbar-nav mr-auto">
        <li><Link to={'/'} className="nav-link">Home</Link></li>
        <li><Link to={'/game'} className="nav-link">Game</Link></li>
    </ul>
  );
};