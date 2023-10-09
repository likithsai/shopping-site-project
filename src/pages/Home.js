import React from 'react';
import { connect } from "react-redux";

const Home = (props) => {

  return (
    <div className='px-4 py-2.5'>
      <div className="w-full mx-auto max-w-screen-xl">
      { JSON.stringify(props.items.products) }
      {/* { props.items.products.map((itm) => <p>{itm.name}</p>)} */}
      </div>
    </div>
  );
}

function mapStateToProps(state, ownProps) {
  return {
       items: state.items
  }
}

export default connect(
  mapStateToProps
)(Home)
