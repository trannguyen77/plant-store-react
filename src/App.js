import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import ProductContext from "./context";
//Import Font Awesome
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faBars,
  faShoppingBag,
  faSearch,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
//Import components
import NavBar from "./components/navigation/navbar";
import Footer from "./components/footer";
import Home from "./pages/home/home";
import Cart from "./pages/cart/shopping-cart-container";
import Search from "./pages/search/search.js";
import ProductPage from "./pages/products/shop";
import SingleProductPage from './pages/single product/single-product-page';

function App() {
  //add font to global library
  library.add(faBars, faShoppingBag, faSearch, faTimes);

  return (
    <ProductContext>
      <Router>
        <div className="App">
          <NavBar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/shop" exact component={ProductPage} />
            <Route path="/cart" component={Cart} />
            <Route path="/search" component={Search} />
            <Route path='/shop/:id' component={SingleProductPage}/>
          </Switch>
          <Footer />
        </div>
      </Router>
    </ProductContext>
  );
}

export default App;
