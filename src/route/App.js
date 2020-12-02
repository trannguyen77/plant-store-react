import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import ProductContext from "../contexts/ProductContext";
import CartContext from "../contexts/CartContext";
//Import Font Awesome
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faBars,
  faShoppingBag,
  faSearch,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
//Import components
import ScrollToTop from "../utils/ScrollToTopRouter";
import NavBar from "../components/navigation/navbar";
import Footer from "../components/footer";
import Home from "../pages/home/home";
import Cart from "../pages/cart/shopping-cart-container";
import Search from "../pages/search/search";
import ProductPage from "../pages/products/shop";
import SingleProductPage from "../pages/single-product/single-product-page";

function App() {
  //add icon to global library
  library.add(faBars, faShoppingBag, faSearch, faTimes);

  return (
    <ProductContext>
      <CartContext>
        <Router>
          <ScrollToTop>
            <div className="App">
              <NavBar />
              <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/shop" exact component={ProductPage} />
                <Route path="/shop/:id" component={SingleProductPage} />
                <Route path="/cart" component={Cart} />
                <Route path="/search" component={Search} />
              </Switch>
              <Footer />
            </div>
          </ScrollToTop>
        </Router>
      </CartContext>
    </ProductContext>
  );
}

export default App;
