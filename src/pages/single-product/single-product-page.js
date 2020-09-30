import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../../contexts/CartContext";
import { ProductContext } from "../../contexts/ProductContext";

function SingleProductPage(props) {
  const productContext = useContext(ProductContext);
  const cartContext = useContext(CartContext);
  const targetId = parseInt(props.match.params.id);
  const [thisProduct, setThisProduct] = useState({});
  const { allProducts } = productContext;
  const { handleInputChange, addToCart, increase, decrease } = cartContext;

  //get product detail based on id
  const getProduct = (targetId) => {
    let tempProducts = [...allProducts];
    const newProduct = tempProducts.find((item) => item.id === targetId);
    setThisProduct(newProduct);
  };
  useEffect(() => {
    getProduct(targetId);
  });

  //render component
  if (thisProduct === undefined) {
    return <h1>loading</h1>;
  } else
    return (
      <>
        <h1>{thisProduct.name}</h1>
        <h2>{thisProduct.price}</h2>
        <p>{thisProduct.des}</p>

        <input
          type="number"
          defaultValue="0"
          min="1"
          onChange={handleInputChange}
        ></input>

        <button
          onClick={() => {
            addToCart(thisProduct);
          }}
        >
          Add
        </button>
      </>
    );
}

export default SingleProductPage;
