import React from "react";
import Banner from "../navigation/Banner";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <Banner title='Amazing Recipes'>
        <Link to='recipes' className='btn btn-secondary btn-lg mt-3'>
          Search Recipes
        </Link>
      </Banner>
    </div>
  );
}

export default Home;
