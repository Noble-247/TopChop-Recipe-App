import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Sidebar from "../navigation/Sidebar";
import Spinner from "../utilities_components/Spinner";
import { useParams } from "react-router-dom";

function SingleRecipesDetails() {
  const { id } = useParams();

  const [recipe, setRecipe] = useState({
    name: "",
    ingredients: [],
    steps: [],
    imageURL: "",
    originalURL: "",
  });
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState({ nameError: "" });

  useEffect(() => {
    axios
      .get(`https://a.nacapi.com/recipes/${id}`)
      .then((response) => {
        console.log(response);
        this.setState({
          loading: false,
          recipe: {
            name: response.data.name,
            ingredients: response.data.ingredients,
            steps: response.data.steps,
            imageURL: response.data.imageURL,
            originalURL: response.data.originalURL,
          },
          errorMessage: "",
        });
        setLoading(false);
        setRecipe({
          name: response.data.name,
          ingredients: response.data.ingredients,
          steps: response.data.steps,
          imageURL: response.data.imageURL,
          originalURL: response.data.originalURL,
        });
        setErrorMessage("");
      })
      .catch((error) => {
        console.log(error);
        setErrorMessage({
          nameError: "failed to fetch the specified recipe details!!",
        });
        setLoading(false);
      });
  }, [id]);

  return (
    <div style={{ marginBottom: "29vh" }}>
      {loading && (
        <div className='container my-5'>
          <Spinner />
        </div>
      )}
      {recipe && (
        <div className='container my-5'>
          <div className='row'>
            <div className='col-10 mx-auto col-md-4'>
              <Link
                to='/recipes'
                className='btn btn bg-orange btn-block mb-5 text-capitalize text-white'
              >
                back to recipes list
              </Link>
              <img
                src={recipe.imageURL}
                className='d-block w-100'
                style={{ maxHeight: "30rem" }}
                alt='recipe'
              />
              <h5 className='text-uppercase text-slanted mt-3 text-orange'>
                {recipe.name}
              </h5>
            </div>

            <div className='col-10 mx-auto col-md-5'>
              <a
                href={recipe.originalURL}
                target='_blank'
                rel='noopener noreferrer'
                className='btn btn-block btn-dark text-capitalize'
              >
                Recipe url
              </a>
              <ul className='list-group mt-4'>
                <h4 className='mt-1 mb-4'>Ingredients</h4>
                {recipe.ingredients.map((item, index) => {
                  return (
                    <li key={index} className='list-group-item text-slanted'>
                      {item.quantity} {item.name}
                    </li>
                  );
                })}
              </ul>
              <ul className='list-group mt-4'>
                <h4 className='mt-1 mb-4'>Steps</h4>
                {recipe.steps.map((item, index) => {
                  return (
                    <li key={index} className='list-group-item text-slanted'>
                      {item}
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className='col-10 mx-auto col-md-3 mt-5 pt-5'>
              <Sidebar />
            </div>
          </div>
        </div>
      )}
      {errorMessage && (
        <div className='container my-5'>
          <h2 className='text-uppercase text-danger text-center'>
            {errorMessage.nameError}
          </h2>
        </div>
      )}
    </div>
  );
}

export default SingleRecipesDetails;
