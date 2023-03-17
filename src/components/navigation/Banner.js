import React from "react";
import PropTypes from "prop-types";

function Banner({ children, title, styleClass }) {
  return (
    <section>
      <div className='container-fluid'>
        <div className={`row align-items-center ${styleClass}`}>
          <div className='col text-center'>
            <h1 className='text-light text-uppercase display-3 letter-spacing text-slanted'>
              {title}
            </h1>
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}

Banner.propTypes = {
  title: PropTypes.string.isRequired,
  styleClass: PropTypes.object.isRequired,
  children: PropTypes.element.isRequired,
};

Banner.defaultProps = {
  title: "default title",
  styleClass: "default-banner",
};

export default Banner;
