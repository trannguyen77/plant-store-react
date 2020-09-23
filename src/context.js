import React, { Component } from "react";
import products from "./pages/products/products-data.json";

const ProductContext = React.createContext();
export default class ProductProvider extends Component {
  state = {
    allProducts: [],
    sortedProducts: [],
    featuredProducts: [],
    type: "All products",
    price: 0,
    minPrice: 0,
    maxPrice: 0,
  };

  componentDidMount() {
    //set initial products
    let allProducts = products;
    // get featured rooms
    let featuredProducts = allProducts.filter(
      (product) => product.featured === true
    );
    //get max-price for product filter component
    let maxPrice = Math.max(...products.map((item) => item.price));

    this.setState({
      allProducts,
      featuredProducts,
      sortedProducts: allProducts,
      price: maxPrice,
      maxPrice,
    });
  }

  //Product filter functions
  handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState(
      {
        [name]: value,
      },
      this.filterProduct
    );
  };

  filterProduct = () => {
    let { allProducts, type, price } = this.state;
    let temptProducts = [...allProducts];

    //filter by price
    temptProducts = temptProducts.filter((product) => product.price <= price);
    //filter by type
    if (type !== "All products") {
      temptProducts = temptProducts.filter((product) => product.type === type);
    }
    this.setState({ sortedProducts: temptProducts });
  };

  render() {
    return (
      <ProductContext.Provider
        value={{ ...this.state, handleChange: this.handleChange }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductContext, ProductProvider, ProductConsumer };
