import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./container/Header";
import './App.css';

import ProductDetails from "./container/ProductDetails";
import ProductPage from "./container/ProductListing";



function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Switch>
          <Route path="/" exact component={ProductPage} />
          <Route path="/product/:productId" component={ProductDetails} />
          <Route>404 Not Found!</Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;