import React, { Component } from "react";
import Search from "../utilitie_components/Search";

class Recipes extends Component {
  render() {
    return (
      <div className='container'>
        <small>Hello from recipes page</small>
        <Search />
      </div>
    );
  }
}

export default Recipes;
