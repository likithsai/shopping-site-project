import React, { useState, useEffect } from 'react';
import { connect } from "react-redux";

const Shop = (props) => {
    const [items, setItems] = useState({});

    useEffect(() => {
        setItems(props.items);
    }, [props.items]);

    return (
        <p>{ JSON.stringify(items) }</p>
    );
}

function mapStateToProps(state) {
  return {
       items: state.items
  }
}

export default connect(
    mapStateToProps
)(Shop)