import React, {useState, useContext} from 'react';
import {ProductContext} from '../../context';

function SingleProductPage(props) {
    const context = useContext(ProductContext);
    const [product,setProduct] = useState();
    const {allProducts} = context;

    return (
        <div>
            <h1>Hello from product</h1>
        </div>
    );
}

export default SingleProductPage;