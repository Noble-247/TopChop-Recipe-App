import React, { Component } from "react";
import Search from "../utilities_components/Search";
import RecipeList from "./RecipeList";
import axios from "axios";
import Footer from "../navigation/Footer";
import Sidebar from "../navigation/Sidebar";

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
    return (
      <React.Fragment>
        <div className='container'>
          {/* <small>Hello from recipes page</small> */}
          <Search
            search={this.state.search}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            fetchRecipes={this.fetchRecipes}
          />
        </div>
        {this.state.loading && (
          <div className='container my-5'>
            <h2 className='text-orange text-center text-uppercase'>
              Loading......
            </h2>
          </div>
        )}
        {this.state.recipes && (
          <div className='container my-4'>
            <div className='row'>
              <div className='col-sm-12 col-md-9'>
                <RecipeList recipes={this.state.recipes} />
              </div>
              <div className='col-sm-12 col-md-3 py-3 mt-5'>
                <Sidebar />
              </div>
            </div>
          </div>
        )}
        {this.state.errorMessage && (
          <div className='container my-5'>
            <h2 className='text-danger text-center text-uppercase'>
              {this.state.errorMessage}
            </h2>
          </div>
        )}
        {this.state.searchError && (
          <div className='container my-5'>
            <h2 className='text-danger text-center text-uppercase'>
              {this.state.searchError}
            </h2>
          </div>
        )}
        <div className='footer-section'>{/* <Footer /> */}</div>
      </React.Fragment>
    );
  }
}

export default Recipes;
