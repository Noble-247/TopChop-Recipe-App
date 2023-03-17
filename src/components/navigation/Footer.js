import React from "react";

function Footer() {
  return (
    <div className='container-fluid bg-dark py-3 text-white text-center'>
      <small>
        &copy; TopChops Solutions 2021
        <br />
        Designed by {""}
        <a
          href='https://noble-247.github.io/Emmanuel'
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

export default Footer;
