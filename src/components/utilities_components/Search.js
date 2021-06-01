import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Search = ({ handleChange, handleSubmit, fetchRecipes, search }) => {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-10 mx-auto col-md-8 mt-5 text-center'>
          <h1 className='text-slanted text-capitalize'>
            Search Recipes with
            <strong className='text-orange'>TopChops </strong>
          </h1>
          <form className='mt-4'>
            <label htmlFor='search' className='text-capitalize'>
              <strong>
                Enter the recipe name to get a target recipe <br />
                Click back to recipes list to return to the main recipes list
              </strong>
            </label>
            <div className='input-group'>
              <input
                type='text'
                name='search'
                id='search'
                className='form-control'
                placeholder='Enter the recipe name eg Strawberry Toast'
                value={search}
                onChange={handleChange}
              />
              <div className='input-group-append'>
                <button
                  type='submit'
                  className='bg-orange text-white btn'
                  onClick={handleSubmit}
                >
                  <i className='fas fa-search'></i>
                </button>
              </div>
            </div>
            <div>
              <Link
                to='/recipes'
                className='btn bg-dark btn-block text-white text-capitalize'
                onClick={fetchRecipes}
              >
                Click here to return to the recipes list after viewing search
                results
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

Search.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  fetchRecipes: PropTypes.func.isRequired,
  search: PropTypes.string.isRequired,
};

export default Search;
