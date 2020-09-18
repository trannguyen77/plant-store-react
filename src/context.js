import React, { Component } from "react";
import products from './pages/products/products-data.json';

const ProductContext = React.createContext();
export default class ProductProvider extends Component {
  state = {
    allProducts: [],
    sortedProducts: [],
    featuredProducts: [],
  };

  //Get featured rooms
  componentDidMount() {
    let allProducts = products;
    let featuredProducts = allProducts.filter(product => product.featured === true);
    this.setState({
      allProducts,
      featuredProducts,
      sortedProducts: allProducts,
    })
  }
  render() {
    return (
      <ProductContext.Provider value={{...this.state}}>
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductContext, ProductProvider, ProductConsumer };
