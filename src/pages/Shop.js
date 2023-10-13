import React, { useState, useEffect } from 'react';
import { connect } from "react-redux";
import { appConstants } from "../enum/constants";

const Shop = (props) => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        setItems(props.items);
    }, [props.items]);

    const addToCart = (item) => {
        props.addToCart(item);
    }

    return (
        <div>
            <ul>
                {
                    items && items.length > 0 ? (
                            items.map(item => (
                                <li key={item.id}>
                                    <p>{JSON.stringify(item)}</p>
                                    {item.name} - ${item.newprice}
                                    <button onClick={() => addToCart(item)}>Add to Cart</button>
                                </li>
                            ))
                    ) : (<p>No items</p>)
                }
            </ul>
        </div>

    );
}

function mapStateToProps(state) {
  return {
        items: state.items.products
  }
}

function mapDispatchToProps(dispatch) {
    return {
        addToCart: (item) => dispatch({ type: appConstants.ADD_TO_CART, payload: item })
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Shop)