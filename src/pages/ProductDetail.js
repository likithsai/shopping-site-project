import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { connect } from "react-redux";
import ImgCarousal from "../component/ImgCarousal"; // Import the Carousel component
import { appConstants } from "../enum/constants";

const ProductDetail = (props) => {
    const { id } = useParams();
    const [item, setItem] = useState([]);
    const [loading, setLoading] = useState(true); // Add loading state

    useEffect(() => {
        setTimeout(() => {
            setItem(props.items);
            setLoading(false); // Set loading to false when data is loaded
        }, 1000);
    }, [props.items]);

    return (
        <>
        {
            loading ? ( // Display loading skeleton when loading is true
                <div className="container mx-auto p-4 animate-pulse">
                    <div className="sticky top-0">
                        <section role="main" className="flex flex-col md:flex-row gap-4 items-start">
                            <div className="w-64 h-48 bg-gray-300 rounded-md"></div> {/* Loading image skeleton */}
                            <div className="md:ml-8 mt-4 md:mt-0 w-full">
                                <div className="h-6 w-3/4 bg-gray-300 rounded-md mb-2"></div> {/* Loading title skeleton */}
                                <div className="h-4 w-1/2 bg-gray-300 rounded-full mb-2"></div> {/* Loading category skeleton */}
                                <div className="flex items-center mt-4">
                                    <div className="h-8 w-24 bg-gray-300 rounded-md mr-2"></div> {/* Loading price skeleton */}
                                    <div className="h-4 w-16 bg-gray-300 rounded-md"></div> {/* Loading old price skeleton */}
                                </div>
                                <div className="mt-6 flex space-x-4">
                                    <div className="h-12 w-24 bg-gray-300 rounded-md"></div> {/* Loading Buy Now button skeleton */}
                                    <div className="h-12 w-24 bg-gray-300 rounded-md"></div> {/* Loading Add to Cart button skeleton */}
                                </div>
                            </div>
                        </section>
                    </div>
                    <div className="mt-8">
                        <div className="h-4 w-3/4 bg-gray-300 rounded-md mb-2"></div> {/* Loading description title skeleton */}
                        <div className="h-4 w-3/4 bg-gray-300 rounded-md mb-4"></div> {/* Loading description skeleton */}
                        <div className="h-4 w-2/3 bg-gray-300 rounded-md mb-4"></div> {/* Loading description skeleton */}
                        <div className="h-4 w-4/5 bg-gray-300 rounded-md mb-4"></div> {/* Loading description skeleton */}
                    </div>
                </div>
            ) : (
                item.filter(itm => itm.id === id).map(itm => (
                    <div className="container mx-auto p-4 gap-2" key={itm.id}>
                        <div className="sticky top-0">
                            <section role="main" className="grid md:grid-cols-2 gap-4 items-start">
                                <ImgCarousal images={itm.images} />
                                <div className="md:ml-8 mt-4 md:mt-0">
                                    <h1 className="text-3xl font-semibold mb-2">{itm.name}</h1>
                                    <span className="bg-blue-500 text-white py-1 px-2 rounded-full text-sm mt-2 inline-block">Category Name</span>
                                    <div className="flex items-center mt-4">
                                        <span className="text-2xl font-semibold text-green-600">{itm.oldprice}</span>
                                        <span className="text-lg text-gray-600 ml-2 line-through">{itm.oldprice}</span>
                                    </div>
                                    <div className="mt-6 space-x-4">
                                        <button className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 transition duration-300 ease-in-out">Buy Now</button>
                                        <button className="bg-green-500 text-white px-6 py-3 rounded-md hover:bg-green-600 transition duration-300 ease-in-out" onClick={() => props.addToCart(item)}>Add to Cart</button>
                                    </div>
                                </div>
                            </section>
                        </div>
                        <div className="mt-8">
                            <h2 className="text-lg font-semibold mb-2 font-bold">Product Description</h2>
                            <p className="text-gray-800"> { itm.descriptiondetail } </p>
                        </div>
                    </div>
                ))
            )
        }
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
)(ProductDetail);
