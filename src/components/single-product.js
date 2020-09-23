import React from "react";
import "../pages/products/products.css";
import { Link } from "react-router-dom";

function SingleProduct({ product }) {
  return (
      <div className="single-product-container">
        <Link to={`/shop/${product.id}`}>
        <img src={product.img} alt={product.id} className="product-img"></img>
        <div className="product-card">
          <div className="buy-btn">
            <span>+</span>
          </div>
          <h3>{product.name}</h3>
          <span className="product-type">{product.type}</span>
          <span className="product-price">${product.price}</span>
        </div>
        </Link>
      </div>
  );
}
export default SingleProduct;
