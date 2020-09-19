import React from 'react';
import SingleProduct from './single-product';
import '../pages/products/products.css';

function ProductList({products}) {
    if (products.length === 0){
        return (
            <h2>
                No Products Found.
            </h2>
        );
    }

    return (
        <div className='products-container'>
           {
                products.map(product =>{
                    return <SingleProduct product={product} key={product.id}/>
                })
            }
        </div>
    )
    

}

export default ProductList;