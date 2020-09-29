import React, { useContext, useEffect, useState } from "react";
import { ProductContext } from "../../context";

function SingleProductPage(props) {
  const context = useContext(ProductContext);
  const targetId = parseInt(props.match.params.id);
  const [thisProduct, setThisProduct] = useState({});
  const { allProducts } = context;

  //get product detail based on id
  function getProduct(targetIds) {
    let tempProducts = [...allProducts];
    const newProduct = tempProducts.find((item) => (item.id = targetIds));
    setThisProduct(newProduct);
  }
  useEffect(() => {
    getProduct(targetId);
  });

  //render component
  if (thisProduct === undefined) {
    return <h1>loading</h1>;
  } else return <h1>{thisProduct.name}</h1>;
}

export default SingleProductPage;
