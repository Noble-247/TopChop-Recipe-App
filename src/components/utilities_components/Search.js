import React, { Component } from "react";
import { Link } from "react-router-dom";

class Search extends Component {
  render() {
    const { handleChange, handleSubmit, fetchRecipes, search } = this.props;
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
                <div className='input-group-append'>
                  <Link
                    to='/recipes'
                    className='btn bg-dark text-white text-capitalize'
                    onClick={fetchRecipes}
                  >
                    back to recipes list
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Search;
