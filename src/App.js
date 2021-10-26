import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { Navigation, Footer, Home, Demo, Demo2 } from "./components";

function App () {
  return (
    <Router>
    <Navigation />
    <Switch>
      <Route path="/" exact component={() => <Home />} />
      <Route path="/demo" exact component={() => <Demo />} />
      <Route path="/demo2" exact component={() => <Demo2 />} />
    </Switch>

    <Footer />
    </Router>
  );
}



export default App;