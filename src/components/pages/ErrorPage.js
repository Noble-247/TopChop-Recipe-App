import React, { Component } from "react";
import { Link } from "react-router-dom";
import Banner from "../navigation/Banner";

class ErrorPage extends Component {
  render() {
    return (
      <div className='container-fluid'>
        <Banner title='404' styleClass='error-banner'>
          <h2 className='text-light text-uppercase'>
            You are in the wrong place
          </h2>
          <Link to='/' className='text-uppercase btn btn-secondary btn-lg mt-3'>
            Return to home page
          </Link>
        </Banner>
      </div>
    );
  }
}

export default ErrorPage;
