import React from 'react';
import { connect } from "react-redux";

function Home(props) {
  return (
    <div className="w-full text-center">
      <h1>
        { JSON.stringify(props.products) }
      </h1>
    </div>
  );
}

const mapStateToProps = (state) => ({
  products: state.products, // Replace 'products' with your actual state property
});

export default connect(mapStateToProps)(Home);
