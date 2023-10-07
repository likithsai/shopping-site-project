import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import ProductDetail from "./ProductDetail";
import { Provider } from 'react-redux';
import store from '../redux/Store';
import { setData } from '../redux/Actions'; 
import data from '../assets/data/data.json';

const App = () => {
    useEffect(() => {
      store.dispatch(setData(data));
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