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
      loading: false,
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
    this.setState({ loading: true });

    const response = await axios.get("https://a.nacapi.com/recipes");
    console.log(response);

    this.setState({ recipes: response.data, loading: false });
  }

  render() {
    return (
      <div className='container'>
        <small>Hello from recipes page</small>
        <Search
          search={this.state.search}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        <RecipeList
          recipes={this.state.recipes}
          errorMessage={this.state.errorMessage}
          loading={this.state.loading}
        />
      </div>
    );
  }
}

export default Recipes;
