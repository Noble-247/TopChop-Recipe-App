import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className='navbar navbar-expand-sm navbar-light bg-light'>
      <div className='container'>
        <Link to='/' className='navbar-brand'>
          <i className='fas fa-hamburger fa-1x text-orange'></i>
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
