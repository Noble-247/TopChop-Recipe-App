import React, { Component } from "react";
import Banner from "../navigation/Banner";
import { Link } from "react-router-dom";
import Footer from "../navigation/Footer";

class Home extends Component {
  render() {
    return (
      <div className='container-fluid'>
        <Banner title='Amazing Recipes'>
          <Link to='recipes' className='btn btn-secondary btn-lg mt-3'>
            Search Recipes
          </Link>
        </Banner>
        <Footer />
      </div>
    );
  }
}

export default Home;
