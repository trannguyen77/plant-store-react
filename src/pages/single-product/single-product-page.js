import React, { useContext, useEffect, useState } from "react";
import { ProductContext } from "../../context";
import './single-product-page.css';
import CartQuantity from '../../components/theme-components/cart-quantity';

function SingleProductPage(props) {
  const context = useContext(ProductContext);
  const targetId = parseInt(props.match.params.id);
  const [thisProduct, setThisProduct] = useState({});
  const { allProducts } = context;

  //get product detail based on id
  function getProduct(targetId) {
    let tempProducts = [...allProducts];
    const newProduct = tempProducts.find((item) => item.id === targetId);
    setThisProduct(newProduct);
  }
  useEffect(() => {
    getProduct(targetId);
    console.log(targetId);
    console.log(thisProduct);
  });

  //render component
  if (thisProduct === undefined) {
    return <h1>loading</h1>;
  } else
    return (
      <div className="page-container">
        <div className="product-row-flex">
          <div className="col-one-third">
            <img src={thisProduct.img} alt={thisProduct.name}></img>
          </div>
          <div className="col-two-third">
            <div className="product-text-wrapper">
              <h1>{thisProduct.name}</h1>
              <h2>Price: {thisProduct.price}</h2>
              <h2>Description:</h2>
              <p>{thisProduct.des}</p>
              <CartQuantity/>
            </div>
          </div>
        </div>
      </div>
    );
}

export default SingleProductPage;
