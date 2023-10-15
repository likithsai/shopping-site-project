import React from 'react';
import { connect } from "react-redux";
import { appConstants } from "../enum/constants";

const Cart = (props) => {
    const removeFromCart = (itemId) => {
        props.removeFromCart(itemId);
    }

    return (
        <div>
        {
            props.cart && props.cart.length > 0 ? (
                props.cart.map(cartItem => (
                    <li key={cartItem.id}>
                        <p>{ JSON.stringify(cartItem)}</p>
                        {cartItem.name} - ${cartItem.newprice}
                        <button onClick={() => removeFromCart(cartItem.id)}>Remove from Cart</button>
                    </li>
                ))
            ) : (<p>No Cart Items</p>)
        }
        </div>
    );
}

function mapStateToProps(state) {
    return {
        cart: state.cart
    }
}

function mapDispatchToProps(dispatch) {
    return {
        removeFromCart: (itemId) => dispatch({ type: appConstants.REMOVE_FROM_CART, payload: itemId })
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Cart);