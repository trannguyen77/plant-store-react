import React, { useContext, useEffect, useState } from "react";
import "../../App.css";
import { ProductContext } from "../../context";
function SingleProductPage(props) {
  const context = useContext(ProductContext);
  const { allProducts } = context;
  
  const [product,setProduct] = useState();

  useEffect(()=>{
    getProduct();
  },[]);
  
  function getProduct () {
    const target = parseInt(props.match.params.id);
    let products = [...allProducts];
    const targetItem = products.find(item => item.id = target);
    setProduct(targetItem);
  }

  //Find product based on id
  //const product = getProduct();
  //console.log(product);
  //const {name} = product;
  

  return (
    <div className="page-container">
      <div className="section-container">
        <div className="row-flex">
          <div className="col-half">
            <h2>Hello col 1</h2>
          </div>
          <div className="col-half">
            {/*<h1>{product.name}</h1>*/}

          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleProductPage;
