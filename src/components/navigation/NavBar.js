import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className='navbar navbar-expand-sm navbar-light bg-light'>
      <div className='container'>
        <Link to='/' className='navbar-brand d-flex'>
          <i className='fas fa-hamburger fa-1x text-orange'></i>
          <span className='font-weight-bold logo-text text-slanted'>Top</span>
          <span className='text-orange font-weight-bold logo-text text-slanted'>
            Chops
          </span>
        </Link>
        <div className='collapse navbar-collapse show ml-sm-5'>
          <ul className='navbar-nav'>
            <li className='nav-item'>
              <Link className='nav-link' to='/'>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/recipes'>
                Recipes
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
