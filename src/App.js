import React, { Component } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Home from "./components/pages/Home";
import Recipes from "./components/pages/Recipes";
import SingleRecipesDetails from "./components/pages/SingleRecipesDetails";
import ErrorPage from "./components/pages/ErrorPage";
import NavBar from "./components/navigation/NavBar";

class App extends Component {
  render() {
    return (
      <Router>
        <main>
          {/* Navbar */}
          <NavBar />
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/recipes' exact component={Recipes} />
            <Route path='/recipes/:id' component={SingleRecipesDetails} />
            <Route path='*' component={ErrorPage} />
          </Switch>
        </main>
      </Router>
    );
  }
}

export default App;
