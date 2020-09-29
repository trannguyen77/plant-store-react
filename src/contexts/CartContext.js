import React, { Component } from "react";
import { ProductContext } from "./ProductContext";

const CartContext = React.createContext();

export default class CartProvider extends Component {
  state = {
    cart: [],
    itemQnt: 0,
    totalItemInCart: 0,
  };
  static contextType = ProductContext;
  componentDidUpdate() {
    this.countTotal();
  }
  //handle cart quantity input
  handleInputChange = (event) => {
    this.setState({ itemQnt: event.target.value });
  };
  //count total product in cart
  countTotal = () => {
    console.log("counted");
  };

  addToCart = (item) => {
    let { itemQnt, cart } = this.state;
    let tempCart = [...cart];
    if (!cart.find((product) => item.id === product.id)) {
      tempCart.push(item);
      item.quantity = parseInt(itemQnt);
    } else {
      item.quantity += parseInt(itemQnt);
    }

    this.setState({
      cart: tempCart,
    });
  };
  render() {
    return (
      <CartContext.Provider
        value={{
          ...this.state,
          handleInputChange: this.handleInputChange,
          addToCart: this.addToCart,
        }}
      >
        {this.props.children}
      </CartContext.Provider>
    );
  }
}
const CartConsumer = CartContext.Consumer;
export { CartContext, CartProvider, CartConsumer };
