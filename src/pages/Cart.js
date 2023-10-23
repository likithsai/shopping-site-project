import React, { useEffect, useState } from 'react';
import { connect } from "react-redux";
import { appConstants } from "../enum/constants";
import { BsTrash } from "react-icons/bs";

const Cart = (props) => {
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            setCartItems(props.cartItem || []);
        }, 0);
    }, [props.cartItem]);

    const removeFromCart = (itemId) => {
        props.removeFromCart(itemId);
    }

    return (
        <div>
            <div class="container mx-auto flex flex-col gap-2">
                <div className='flex items-center justify-between sticky top-0'>
                    <h1 class="text-2xl font-semibold mb-4">Your Shopping Cart</h1>
                    <button class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Checkout</button>
                </div>
                <div className='flex flex-col gap-2'>
                    {
                        cartItems && cartItems.length > 0 ? (
                            cartItems.map((itm, index) => (
                                <>
                                    <div key={itm.id}
                                        className={`flex items-center justify-between py-2`}>
                                        <div className='flex items-center'>
                                            <div class="w-16 h-16">
                                                <img src={itm.images[0].src} alt={itm.images[0].alt} class="w-full h-full object-cover rounded" />
                                            </div>
                                            <div class="ml-4 flex-1">
                                                <h2 class="text-lg font-semibold">{ itm.name }</h2>
                                                <p class="text-gray-500">{ itm.description }</p>
                                            </div>
                                        </div>
                                        <div className='flex items-center gap-4'>
                                            <div className='flex items-center gap-2'>
                                                <div>{itm.newprice}</div>
                                                <p className="text-xs font-medium text-gray-500 line-through">{ itm.oldprice }</p>  
                                            </div>
                                            <div>
                                                <button class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600" onClick={() => removeFromCart(itm.id)}><BsTrash class="fas fa-trash" /></button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={`border ${ index === itm.length - 1 ? 'border-none' : 'border-gray-200' }`} />
                                </>
                            ))
                        ) : (<p>No Cart Items</p>)
                    }
                </div>
            </div>
        </div>
    );
}

function mapStateToProps(state) {
    return {
        cartItem: state.cart
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