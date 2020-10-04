import React, { Component } from "react";
import { ProductContext } from "../contexts/ProductContext";
import SingleProduct from "./single-product";

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
      </div>
    );
  }
}

export default FeaturedProducts;
