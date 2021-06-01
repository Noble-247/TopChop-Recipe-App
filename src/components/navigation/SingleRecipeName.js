import React from "react";

const SingleRecipeName = ({ recipeName: { id, name } }) => {
  return (
    <React.Fragment>
      <li className='list-group-item'>
        {id} {"=>"} {name}
      </li>
    </React.Fragment>
  );
};

export default SingleRecipeName;
