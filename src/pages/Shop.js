import React, { useState, useEffect } from 'react';
import { connect } from "react-redux";
import { appConstants } from "../enum/constants";
import Cards from '../component/Cards';

const Shop = (props) => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            setItems(props.items);
        }, 0);
    }, [props.items]);

    const addToCart = (item) => {
        props.addToCart(item);
    }

    return (
        <>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mx-auto'>
            {
                items && items.length > 0 ? (
                    items.map((item, index) => (
                        <Cards key={index} id={item.id} title={item.name} images={item.images} desc={item.description} oldprice={item.oldprice} newprice={item.newprice} onAddToCartClick={() => addToCart(item)} />
                    ))
                ) : (
                    <p>No items</p>
                )
            }
            </div>
        </>
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
