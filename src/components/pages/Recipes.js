import React, { Component } from "react";
import Search from "../utilitie_components/Search";
import RecipeList from "./RecipeList";
import axios from "axios";

class Recipes extends Component {
  constructor(props) {
    super(props);

    this.state = {
      recipes: [],
      errorMessage: "",
      search: "",
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
  };

  async componentDidMount() {
    // this.setState({ loading: true });
    axios
      .get("https://a.nacapi.com/recipes")
      .then((response) => {
        console.log(response);
        this.setState({ recipes: response.data, loading: false });
      })
      .catch((error) => {
        console.log(error);
        this.setState({
          loading: false,
          errorMessage: error.message,
        });
      });
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
            <RecipeList
              recipes={this.state.recipes}
              errorMessage={this.state.errorMessage}
              loading={this.state.loading}
            />
          </div>
        )}
        {this.state.errorMessage && (
          <div className='container my-5'>
            <h2 className='text-danger text-center text-uppercase'>
              {this.state.errorMessage}
            </h2>
          </div>
        )}
      </React.Fragment>
    );
  }
}

export default Recipes;
