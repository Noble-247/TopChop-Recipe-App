import React, { Component } from "react";
import SingleRecipe from "./SingleRecipe";

class RecipeList extends Component {
  render() {
    const { recipes /* loading, errorMessage */ } = this.props;
    return (
      <React.Fragment>
        <div className='container py-3'>
          {/* Title */}
          <div className='col-10 mx-auto col-md-6 text-center text-uppercase mb-3'>
            <h1 className='text-slanted'>Recipe List</h1>
          </div>
          {/* End of title */}
          <div className='row'>
            {recipes.map((recipe) => (
              <SingleRecipe key={recipe.name} recipe={recipe} />
            ))}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default RecipeList;
