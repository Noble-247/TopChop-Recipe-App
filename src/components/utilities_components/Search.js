import React, { Component } from "react";

class Search extends Component {
  render() {
    const { handleChange, handleSubmit, search } = this.props;
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
                Types Recipes Seperated by Commas
              </label>
              <div className='input-group'>
                <input
                  type='text'
                  name='search'
                  id='search'
                  className='form-control'
                  placeholder='chicken,onion,carrots'
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
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Search;
