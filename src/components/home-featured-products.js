import React, { Component } from "react";
import { ProductContext } from "../contexts/ProductContext";
import { Link } from "react-router-dom";
import SingleProduct from "./single-product";
import Button from "./template-components";

class FeaturedProducts extends Component {
  static contextType = ProductContext;
  render() {
    let { featuredProducts } = this.context;
    return (
      <div className="page-container">
        <h2 className="section-title"> Featured Products</h2>
        <div className="products-container">
          {featuredProducts.map((product) => {
            return <SingleProduct product={product} key={product.id} />;
          })}
        </div>
        <div className="all-product">
          <Link to="/shop">
            <Button btnLabel="All Products" align="center" />
          </Link>
        </div>
      </div>
    );
  }
}

export default FeaturedProducts;
