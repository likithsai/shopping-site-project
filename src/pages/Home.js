import React from 'react';
import { useSelector } from "react-redux";

function Home() {
  const products = useSelector((state) => state.items).products

  return (
    <div className="w-full text-center">
    { JSON.stringify(products) }
    {/* { products.map((itm) => <p>{itm.name}</p>)} */}
    </div>
  );
}

export default Home;
