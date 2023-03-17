import { Fragment, useState, useEffect } from "react";
import Search from "../utilities_components/Search";
import RecipeList from "./RecipeList";
import axios from "axios";
import Sidebar from "../navigation/Sidebar";
import Spinner from "../utilities_components/Spinner";

function Recipes() {
  const [recipes, setRecipes] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [search, setSearch] = useState("");
  /*  const [searchError, setSearchError] = useState(""); */
  const [loading, setLoading] = useState(true);

  function handleChange(event) {
    setSearch(event.target.value);
  }

  function fetchRecipes() {
    axios
      .get("https://a.nacapi.com/recipes")
      .then((response) => {
        console.log(response);
        console.log(response.data.length);
        setRecipes(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
        setErrorMessage(error.message);
      });
  }

  useEffect(() => {
    fetchRecipes();
  }, []);

  function handleSubmit(event) {
    event.preventDefault();

    const filteredData = recipes.filter((recipe) => {
      return recipe.name.toLowerCase().includes(search.toLowerCase());
    });

    if (recipes.name === []) {
      setRecipes("Sorry, but your search did not return any result");
    } else {
      setRecipes(...filteredData);
    }
  }

  return (
    <Fragment>
      <div className='container'>
        {/* <small>Hello from recipes page</small> */}
        <Search
          search={search}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          fetchRecipes={fetchRecipes}
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
    </Fragment>
  );
}

export default Recipes;
