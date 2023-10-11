import React, { Component } from "react";

class addItem extends Component {
  state = {
    product: "",
    price: "",
    quantity: 1,
  };

  handleChange = (e) => {
    console.log(e.target.id + ": " + e.target.value);
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.add(this.state);
    this.setState({
      product: "",
      price: "",
      quantity: 1,
    });
  };

  decreaseQuantity = (e) => {
    e.preventDefault();
    if (this.state.quantity > 1)
      this.setState({ quantity: --this.state.quantity });
  };
  increaseQuantity = (e) => {
    e.preventDefault();
    if (this.state.quantity < 100)
      this.setState({ quantity: ++this.state.quantity });
  };

  render() {
    return (
      <div className="item">
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.product}
            placeholder="Enter Product"
            id="product"
            onChange={this.handleChange}
            required
          />
          <input
            type="number"
            value={this.state.price}
            placeholder="Enter Price"
            id="price"
            onChange={this.handleChange}
            required
          />
          <div className="quantity-container" onChange={this.handleChange}>
            <button onClick={this.decreaseQuantity}>-</button>
            <input
              type="number"
              id="quantity"
              value={this.state.quantity}
            ></input>
            <button onClick={this.increaseQuantity}>+</button>
          </div>
          <input type="submit" value="Add" />
        </form>
      </div>
    );
  }
}

export default addItem;
