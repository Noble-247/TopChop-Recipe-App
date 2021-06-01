import React from "react";
import SingleRecipe from "./SingleRecipe";

const RecipeList = ({ recipes }) => {
  return (
    <React.Fragment>
      <div className='container py-3'>
        {/* Title */}
        <div className='col-10 mx-auto col-md-6 text-center text-uppercase mb-3'>
          <h2 className='text-slanted'>Recipe List</h2>
        </div>
        {/* End of title */}
        <div className='row'>
          {recipes.map((recipe) => (
            <SingleRecipe key={recipe.id} recipe={recipe} />
          ))}
        </div>
      </div>
    </React.Fragment>
  );
};

export default RecipeList;
