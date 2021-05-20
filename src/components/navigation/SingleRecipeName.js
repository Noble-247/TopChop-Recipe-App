import React, { Component } from "react";

class SingleRecipeName extends Component {
  render() {
    const { id, name } = this.props.recipeName;
    return (
      <React.Fragment>
        <li className='list-group-item'>
          {id} {"=>"} {name}
        </li>
      </React.Fragment>
    );
  }
}

export default SingleRecipeName;
