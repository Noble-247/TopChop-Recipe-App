import React, { Component } from "react";
import RecipeNames from "./RecipeNames";

class Sidebar extends Component {
  render() {
    return (
      <div className='bg-dark text-white p-2'>
        <RecipeNames />
      </div>
    );
  }
}

export default Sidebar;
