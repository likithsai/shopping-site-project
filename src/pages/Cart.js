import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { appConstants } from "../enum/constants";
import { BsTrash } from "react-icons/bs";

const Cart = (props) => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    setCartItems(props.cartItem || []);
  }, [props.cartItem]);

  const removeFromCart = (itemId) => {
    props.removeFromCart(itemId);
  };

  // Calculate the total price
  const total = cartItems.reduce((acc, item) => acc + item.newprice, 0);

  return (
    <div className="container mx-auto flex flex-col gap-2">
      {cartItems.length > 0 && (
        <div
          className="p-8 text-center flex flex-col items-center justify-between shadow rounded-lg gap-4 sticky top-0 bg-gray-100"
        >
            <h2 className="text-2xl">Your total is</h2>
            <h1 className="text-3xl font-bold">${total.toFixed(2)}</h1>
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover-bg-blue-600">Proceed to Checkout</button>
        </div>
      )}
      <div className="flex flex-col gap-2">
        {cartItems && cartItems.length > 0 ? (
          cartItems.map((itm, index) => (
            <div
              key={index}
              className={`rounded py-4 flex w-full items-center justify-between ${
                index === cartItems.length - 1 ? "" : "border-b border-gray-200"
              }`}
            >
              <div className="flex items-center">
                <div className="w-16 h-16">
                  <img
                    src={itm.images[0].src}
                    alt={itm.images[0].alt}
                    className="w-full h-full object-cover rounded"
                  />
                </div>
                <div className="ml-4 flex-1">
                  <h2 className="text-lg font-semibold">{itm.name}</h2>
                  <p className="text-gray-500">{itm.description}</p>
                </div>
              </div>
              <div className="flex items-center justify-between mt-2 gap-4">
                <div className="flex items-center gap-2">
                  <div>${itm.newprice}</div>
                  <p className="text-xs font-medium text-gray-500 line-through">
                    ${itm.oldprice}
                  </p>
                </div>
                <div>
                  <button
                    className="bg-blue-500 text-white px-4 py-2 rounded hover-bg-blue-600"
                    onClick={() => removeFromCart(itm.id)}
                  >
                    <BsTrash className="fas fa-trash" />
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No Cart Items</p>
        )}
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    cartItem: state.cart,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    removeFromCart: (itemId) =>
      dispatch({ type: appConstants.REMOVE_FROM_CART, payload: itemId }),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
