import React from "react";
import SingleRecipeName from "./SingleRecipeName";
import PropTypes from "prop-types";

const RecipeNameList = ({ recipeNames }) => {
  return (
    <ul className='list-group list-group-flush bg-dark text-dark'>
      <h4 className='text-slanted text-white'>Popular Foods</h4>
      {recipeNames.map((recipeName) => (
        <SingleRecipeName key={recipeName.id} recipeName={recipeName} />
      ))}
    </ul>
  );
};

RecipeNameList.propTypes = {
  recipeNames: PropTypes.array.isRequired,
};

export default RecipeNameList;
