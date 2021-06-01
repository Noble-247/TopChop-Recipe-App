import React, { Component } from "react";
import Search from "../utilities_components/Search";
import RecipeList from "./RecipeList";
import axios from "axios";
import Sidebar from "../navigation/Sidebar";

import Spinner from "../utilities_components/Spinner";
class Recipes extends Component {
  constructor(props) {
    super(props);

    this.state = {
      recipes: [],
      errorMessage: "",
      search: "",
      searchError: "",
      loading: true,
    };
  }

  handleChange = (event) => {
    this.setState({
      search: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { recipes, search } = this.state;

    const filteredData = recipes.filter((recipe) => {
      return recipe.name.toLowerCase().includes(search.toLowerCase());
    });

    this.setState({
      recipes: filteredData, //run the get request again?
      search: "",
    });
  };

  fetchRecipes = () => {
    axios
      .get("https://a.nacapi.com/recipes")
      .then((response) => {
        console.log(response);
        console.log(response.data.length);
        if (response.data.length === 0) {
          this.setState({
            searchError: "Sorry, but your search did not return any result",
          });
        } else {
          this.setState({ recipes: response.data, loading: false });
        }
      })
      .catch((error) => {
        console.log(error);
        this.setState({
          loading: false,
          errorMessage: error.message,
        });
      });
  };

  componentDidMount() {
    // this.setState({ loading: true });
    this.fetchRecipes();
  }

  render() {
    const { search, errorMessage, searchError, recipes, loading } = this.state;
    return (
      <React.Fragment>
        <div className='container'>
          {/* <small>Hello from recipes page</small> */}
          <Search
            search={search}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            fetchRecipes={this.fetchRecipes}
          />
        </div>
        {loading && (
          <div className='container my-5'>
            <Spinner />
          </div>
        )}
        {recipes && (
          <div className='container my-4'>
            <div className='row'>
              <div className='col-sm-12 col-md-9'>
                <RecipeList recipes={recipes} />
              </div>
              <div className='col-sm-12 col-md-3 py-3 mt-5'>
                <Sidebar />
              </div>
            </div>
          </div>
        )}
        {errorMessage && (
          <div className='container my-5'>
            <h2 className='text-danger text-center text-uppercase'>
              {errorMessage}
            </h2>
          </div>
        )}
        {searchError && (
          <div className='container my-5'>
            <h2 className='text-danger text-center text-uppercase'>
              {searchError}
            </h2>
          </div>
        )}
      </React.Fragment>
    );
  }
}

export default Recipes;
