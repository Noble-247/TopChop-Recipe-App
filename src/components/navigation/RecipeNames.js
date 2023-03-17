import { Fragment, useEffect, useState } from "react";
import axios from "axios";
import RecipeNameList from "./RecipeNameList";
import Spinner from "../utilities_components/Spinner";

function RecipeNames() {
  const [recipeNames, setRecipeNames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    axios
      .get("https://a.nacapi.com/recipes")
      .then((response) => {
        console.log(response);
        const data = response.data;
        console.log(data[0].name);
        setRecipeNames(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setErrorMessage(error.message);
        setLoading(false);
      });
  }, []);

  return (
    <Fragment>
      <div>{loading && <Spinner />}</div>
      <div>
        {recipeNames && (
          <div>
            <RecipeNameList recipeNames={recipeNames} />
          </div>
        )}
        {errorMessage && <div>{errorMessage}</div>}
      </div>
    </Fragment>
  );
}

export default RecipeNames;
