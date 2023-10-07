import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import ProductDetail from "./ProductDetail";
import { Provider } from 'react-redux';
import store from '../redux/Store';
import { setProducts } from '../redux/Actions'; 

const App = () => {
    useEffect(() => {
      store.dispatch(setProducts([
        {
          id: 1,
          name: 'Product 1',
          price: 10.99,
          description: 'Description for Product 1',
        },
        {
          id: 2,
          name: 'Product 2',
          price: 19.99,
          description: 'Description for Product 2',
        },
      ]));
    }, []); 

    return (
        <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/product/:item" element={<ProductDetail />} />
                </Routes>
            </BrowserRouter>
        </Provider>
    )
}

export default App;