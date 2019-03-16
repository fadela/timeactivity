import React, { Component } from 'react';
import {Link} from 'react-router-dom';

const Nav = () => {
  return ( 
    <div>
               <nav className="navbar navbar-expand-lg navbar-light ">
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <h3 className="navbar-brand">Time Activity</h3>

  <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
      <li className="nav-item">
        <Link className="nav-link" to="/">Home </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/timer">Timer</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/countdown">Countdown</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/counters">Counter</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/todoapp">TodoApp</Link>
      </li>
    </ul>
    <span className="navbar-text my-2 my-lg-0">
      <h5>Created by <a href="https://github.com/fadela">fadela</a></h5>
    </span>
  </div>
</nav>
            </div>
   );
}
 
export default Nav;
 