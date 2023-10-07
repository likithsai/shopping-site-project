import React from 'react';
import { useSelector } from "react-redux";

function Home() {
  const products = useSelector((state) => state.products)

  return (
    <div className="w-full text-center">
      <h1>
        { JSON.stringify(products) }
      </h1>
    </div>
  );
}

export default Home;
