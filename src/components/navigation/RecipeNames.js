import React, { Component } from "react";
import axios from "axios";
import RecipeNameList from "./RecipeNameList";
/* "https://a.nacapi.com/recipes" */

class RecipeNames extends Component {
  state = {
    recipeNames: [],
    loading: true,
    errorMessage: "",
  };

  componentDidMount() {
    axios
      .get("https://a.nacapi.com/recipes")
      .then((response) => {
        console.log(response);
        const data = response.data;
        console.log(data[0].name);
        this.setState({ recipeNames: data, loading: false });
      })
      .catch((error) => {
        console.log(error);
        this.setState({
          errorMessage: "Error: could not popular recipes!",
          loading: "",
        });
      });
  }

  render() {
    return (
      <React.Fragment>
        <div>
          {this.state.loading && (
            <h4 className='text-capitalize text-center'>Loading......</h4>
          )}
        </div>
        <div>
          {this.state.recipeNames && (
            <div>
              <RecipeNameList recipeNames={this.state.recipeNames} />
            </div>
          )}
          {this.state.errorMessage && <div>{this.state.errorMessage}</div>}
        </div>
      </React.Fragment>
    );
  }
}

export default RecipeNames;
