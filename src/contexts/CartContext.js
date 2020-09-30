import React, { Component } from "react";

const CartContext = React.createContext();

export default class CartProvider extends Component {
  state = {
    cart: [],
    itemQnt: 0,
    totalItemInCart: 0,
  };
  componentDidMount() {
    //get data in local storage
    let cart = this.state;
    let localCart = localStorage.getItem("cart");
    if (localCart !== null) {
      cart = JSON.parse(localCart);
    } else {
      cart = [];
    }
    this.setState({
      cart,
    });
  }

  //handle cart quantity input
  handleInputChange = (event) => {
    this.setState({ itemQnt: event.target.value });
  };
  /*count total product in cart
  countTotal = () => {
    console.log("counted");
  };*/

  addToCart = (item) => {
    let { itemQnt, cart } = this.state;
    let tempCart = [...cart];
    if (!cart.find((product) => item.id === product.id)) {
      tempCart.push(item);
      item.quantity = parseInt(itemQnt);
    } else {
      item.quantity += parseInt(itemQnt);
    }
    localStorage.setItem("cart", JSON.stringify(tempCart));
    this.setState({
      cart: tempCart,
    });
  };

  increase = (item) => {
    let { cart } = this.state;
    item.quantity += 1;
    localStorage.setItem("cart", JSON.stringify(cart));
    this.setState({
      cart,
    });
  };

  decrease = (item) => {
    let { cart } = this.state;
    item.quantity -= 1;
    localStorage.setItem("cart", JSON.stringify(cart));
    this.setState({
      cart,
    });
  };

  render() {
    return (
      <CartContext.Provider
        value={{
          ...this.state,
          handleInputChange: this.handleInputChange,
          addToCart: this.addToCart,
          increase: this.increase,
          decrease: this.decrease,
        }}
      >
        {this.props.children}
      </CartContext.Provider>
    );
  }
}
const CartConsumer = CartContext.Consumer;
export { CartContext, CartProvider, CartConsumer };
