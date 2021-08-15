import React from "react";
import { BrowserRouter as Router, Route} from "react-router-dom";
import Home from "./Home";

const App = () => {
  return (
    <React.Fragment>
      <Router>
        <Route exact path="/">
          <Home />
        </Route>
      </Router>
    </React.Fragment>
  );
};

export default App;
