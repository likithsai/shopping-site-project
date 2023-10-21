import React, { useState, useEffect } from 'react';
import { connect } from "react-redux";
import { appConstants } from "../enum/constants";
import Cards from '../component/Cards';

const Shop = (props) => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setItems(props.items);
            setLoading(false);
        }, 2000);
    }, [props.items]);

    const addToCart = (item) => {
        props.addToCart(item);
    }

    return (
        <>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mx-auto'>
            {loading ? (
                // Render loading skeleton while loading is true
                Array.from({ length: 4 }, (_, index) => (
                    <div key={index} className="animate-pulse bg-gray-200 rounded-md">
                        <div className="w-full h-32 bg-gray-300 mb-2 rounded-md"></div> {/* Loading image skeleton */}
                        <div className="p-4 flex flex-col gap-2">
                            <div className="h-4 w-4/5 bg-gray-300 rounded-md mb-2"></div> {/* Loading title skeleton */}
                            <div className="h-4 w-1/2 bg-gray-300 rounded-full mb-2"></div> {/* Loading description skeleton */}
                            <div className="flex items-center justify-between mb-2 w-full">
                                <div className="h-8 w-20 bg-gray-300 rounded-md mb-2"></div> {/* Loading price skeleton */}
                                <div className="h-8 w-20 bg-gray-300 rounded-md mb-2"></div> {/* Loading price skeleton */}
                            </div>
                        </div>
                    </div>
                ))
            ) : (
                items && items.length > 0 ? (
                    items.map((item, index) => (
                        <Cards key={index} id={item.id} title={item.name} images={item.images} desc={item.description} oldprice={item.oldprice} newprice={item.newprice} onClick={() => addToCart(item)} />
                    ))
                ) : (
                    <p>No items</p>
                )
            )}
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
