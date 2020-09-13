import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
//Import Font Awesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBars,faShoppingBag,faSearch,faTimes } from '@fortawesome/free-solid-svg-icons';
//Import components
import NavBar from "./components/navigation/navbar";
import Home from "./containers/home/home";
import Shop from "./containers/products/shop";
import Blog from "./containers/blog/blog";
import Contact from "./containers/contact/contact";
import Cart from "./containers/cart/shopping-cart-container";
import Search from './containers/search/search.js'

function App() {
  //add font to global library
  library.add(faBars,faShoppingBag,faSearch,faTimes);
  
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/shop" component={Shop} />
          <Route path="/blog" component={Blog} />
          <Route path="/cart" component={Cart} />
          <Route path="/search" component={Search} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
