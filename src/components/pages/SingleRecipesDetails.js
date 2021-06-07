import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Sidebar from "../navigation/Sidebar";
import Spinner from "../utilities_components/Spinner";

class SingleRecipesDetails extends Component {
  constructor(props) {
    super(props);
    const id = this.props.match.params.id;
    //console.log(id);
    this.state = {
      recipe: {
        name: "",
        ingredients: [],
        steps: [],
        imageURL: "",
        originalURL: "",
      },
      id,
      loading: true,
      errorMessage: {
        nameError: "",
      },
    };
  }

  componentDidMount() {
    axios
      .get(`https://a.nacapi.com/recipes/${this.state.id}`)
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
        // console.log(response.data.name);
        // console.log(response.data.ingredients);
        // console.log(response.data.steps);
        // console.log(response.data.timers);
        // console.log(response.data.imageURL);
        // console.log(response.data.originalURL);
      })
      .catch((error) => {
        console.log(error);
        this.setState({
          errorMessage: {
            nameError: "failed to fetch the specified recipe details!!",
          },
          loading: false,
        });
      });
  }

  render() {
    const { /* id, */ loading, recipe, errorMessage } = this.state;

    const { name, ingredients, steps, imageURL, originalURL } =
      this.state.recipe;

    // const conditionalMarginBottom = {
    //   marginBottom: (recipe.ingredients = [] ? "29vh" : "0vh"),
    // };

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
                  src={imageURL}
                  className='d-block w-100'
                  style={{ maxHeight: "30rem" }}
                  alt='recipe'
                />
                <h5 className='text-uppercase text-slanted mt-3 text-orange'>
                  {name}
                </h5>
              </div>

              <div className='col-10 mx-auto col-md-5'>
                <a
                  href={originalURL}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='btn btn-block btn-dark text-capitalize'
                >
                  Recipe url
                </a>
                <ul className='list-group mt-4'>
                  <h4 className='mt-1 mb-4'>Ingredients</h4>
                  {ingredients.map((item, index) => {
                    return (
                      <li key={index} className='list-group-item text-slanted'>
                        {item.quantity} {item.name}
                      </li>
                    );
                  })}
                </ul>
                <ul className='list-group mt-4'>
                  <h4 className='mt-1 mb-4'>Steps</h4>
                  {steps.map((item, index) => {
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
}

export default SingleRecipesDetails;
