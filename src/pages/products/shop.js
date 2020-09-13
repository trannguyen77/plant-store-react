import React, { useEffect } from 'react';
import './products.css';
import SingleProduct from './single-product';
import products from '../../products-data.json';

function ProductPage() {
  return (
    <div className='page-container'>
        <h1 className='page-title'  style={{textAlign: 'center'}}>All Products</h1>
        <div className='products-container'>
          {Object.keys(products).map((id)=>{
            return(
              <SingleProduct product={products[id]}/>
          )})}
        </div>
    </div>
  );
}

export default ProductPage;