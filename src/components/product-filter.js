import React, { useContext } from "react";
import { ProductContext } from "../context";
import "./product-filter.css";

//Get unique value in filter
const getUnique = (items, value) => {
  return [...new Set(items.map((item) => item[value]))];
};

function ProductFilter({ products }) {
  //Get value to filter type
  let types = getUnique(products, "type");
  types = ["All products", ...types];
  types = types.map((item, index) => (
    <option key={index} value={item}>
      {item}
    </option>
  ));

  const context = useContext(ProductContext);
  const { handleChange, type, price, minPrice, maxPrice } = context;
  return (
    <div className="filter-container">
      <form>
      <div className="form-field">
        <label htmlFor="type">Product type:</label>
        <select
          className="form-select"
          name="type"
          id="type"
          value={type}
          onChange={handleChange}
        >
          {types}
        </select>
      </div>
      {/*Price range*/}
      <div className="form-field">
        <label htmlFor="price">Max price: ${price}</label>
        <input
          type="range"
          name="price"
          id="price"
          min={minPrice}
          max={maxPrice}
          value={price}
          onChange={handleChange}
          className="range-input"
        ></input>
      </div>
      </form>
  </div>
  );
}

export default ProductFilter;
