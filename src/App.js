import { useEffect, useState } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import Home from "./components/pages/Home";
import Recipes from "./components/pages/Recipes";
import SingleRecipesDetails from "./components/pages/SingleRecipesDetails";
import ErrorPage from "./components/pages/ErrorPage";
import NavBar from "./components/navigation/NavBar";
import Footer from "./components/navigation/Footer";
import SiteUnderConstruction from "./components/pages/SiteUnderConstruction";

function App() {
  const [mainContent, setMainContent] = useState(false);
  const [isUnderConstruction, setIsUnderConstruction] = useState(true);

  useEffect(() => {
    setIsUnderConstruction(true);
    setMainContent(false);
  }, []);

  function showMainContent() {
    setMainContent(true);
    setIsUnderConstruction(false);
  }

  return (
    <Router>
      {isUnderConstruction && (
        <section>
          <SiteUnderConstruction showMainContent={showMainContent} />
        </section>
      )}
      {mainContent && (
        <section>
          <NavBar />
          <main>
            <Switch>
              <Route path='/' exact component={Home} />
              <Route path='/recipes' exact component={Recipes} />
              <Route path='/recipes/:id' component={SingleRecipesDetails} />
              <Route path='*' component={ErrorPage} />
              <Route path='/recipes/*' component={ErrorPage} />
            </Switch>
          </main>
          <footer>
            <Footer />
          </footer>
        </section>
      )}
    </Router>
  );
}

export default App;
