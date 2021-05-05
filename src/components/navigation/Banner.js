import React from "react";

function Banner({ children, title, styleClass }) {
  return (
    <section>
      <div className='container'>
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

Banner.defaultProps = {
  title: "default title",
  styleClass: "default-banner",
};

export default Banner;
