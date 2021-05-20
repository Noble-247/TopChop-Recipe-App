import React, { Component } from "react";
import SingleRecipeName from "./SingleRecipeName";

class RecipeNameList extends Component {
  render() {
    const { recipeNames } = this.props;
    return (
      <ul className='list-group list-group-flush bg-dark text-dark'>
        <h4 className='text-slanted text-white'>Popular Foods</h4>
        {recipeNames.map((recipeName) => (
          <SingleRecipeName key={recipeName.id} recipeName={recipeName} />
        ))}
      </ul>
    );
  }
}

export default RecipeNameList;
