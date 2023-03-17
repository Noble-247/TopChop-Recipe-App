import { Fragment } from "react";

function SingleRecipeName({ recipeName: { id, name } }) {
  return (
    <Fragment>
      <li className='list-group-item'>
        {id} {"=>"} {name}
      </li>
    </Fragment>
  );
}

export default SingleRecipeName;
