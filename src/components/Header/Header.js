import React from 'react';

import './Header.css';

export const Header = () => {
  return(
    <div className="container">
    <div className="row">

      <nav className="navbar navbar-expand-lg navbar-light navbar__header">
      <a className="navbar-brand" href="#">Star DB</a>
  
    <ul className="navbar-nav navbar__list">
      <li className="nav-item">
        <a className="nav-link" href="#">People</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Planets</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Starships</a>
      </li>
    </ul>
   </nav>
    </div>
    </div>
  );
}