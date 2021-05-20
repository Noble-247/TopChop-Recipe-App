import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <div className='container-fluid bg-dark py-3 text-white text-center'>
        <small>
          &copy; TopChops Solutions 2021
          <br />
          Designed by {""}
          <a
            href='http://https://noble-247.github.io/Emmanuel'
            target='_blank'
            rel='noopener noreferrer'
            className='text-orange'
          >
            Emmanuel
          </a>
        </small>
      </div>
    );
  }
}

export default Footer;
