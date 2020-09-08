import React, { useEffect } from 'react';
import './products.css';
import SingleProduct from './single-product';
import products from '../../products-data.json';

function Shop() {
  return (
    <div className='container'>
        <h1>All Products</h1>
        <div className='products-container'>
          {Object.keys(products).map((id)=>{
            return(
              <SingleProduct product={products[id]}/>
          )})}
        </div>
    </div>
  );
}

export default Shop;