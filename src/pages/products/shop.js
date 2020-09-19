import React from "react";
import "./products.css";
import ProductFilter from "../../components/product-filter";
import ProductList from "../../components/product-list";
import { ProductConsumer } from "../../context";

function ProductPage() {
  return (
  <ProductConsumer>
    {(value) => {
      const { sortedProducts, allProducts} = value;
      return (
        <div className="page-container">
          <h1 className="page-title">All Products</h1>
          <ProductFilter products={allProducts}/>
          <ProductList products={sortedProducts}/>
        </div>
      );
    }}
  </ProductConsumer>
  )}

export default ProductPage;
