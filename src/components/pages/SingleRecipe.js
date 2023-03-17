import React from "react";
import { Link } from "react-router-dom";

function SingleRecipe({ recipe: { id, name, imageURL, originalUrl } }) {
  return (
    <div className='col-10 mx-auto col-md-6 col-lg-4 my-3'>
      <div className='card' style={{ height: "100%" }}>
        <img
          src={imageURL}
          style={{ height: "14rem" }}
          className='card-img-top'
          alt='recipe'
        />
        <div className='card-body text-capitalize'>
          <h6>{name}</h6>
        </div>
        <div className='card-footer'>
          <Link
            to={`/recipes/${id}`}
            className='btn btn-block btn-dark text-capitalize'
          >
            recipe details
          </Link>
          <a
            href={originalUrl}
            className='btn btn-block bg-orange mx-auto text-capitalize text-white'
            target='_blank'
            rel='noopener noreferrer'
          >
            recipe url
          </a>
        </div>
      </div>
    </div>
  );
}

export default SingleRecipe;
