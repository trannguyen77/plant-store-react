import React from 'react';
import './products.css';

function SingleProduct ({product}) {
    return(
            <div className='single-product-container'>
                <img src={product.img} className='product-img'></img>
                <div className='product-card'>
                    <div className='buy-btn'>
                        <span>+</span>
                    </div>
                            <h3>{product.name}</h3>
                            <span className='product-type'>{product.type}</span>
                            <span className='product-price'>${product.price}</span>
                    </div>
            </div>
    )
}
export default SingleProduct;