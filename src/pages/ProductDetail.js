import React from "react";
import { useParams } from 'react-router-dom';

const ProductDetail = (props) => {
    const { item } = useParams();

    return (
        <div>
            <p>{ item }</p>
        </div>
    );

}

export default ProductDetail;