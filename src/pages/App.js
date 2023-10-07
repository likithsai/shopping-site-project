import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import ProductDetail from "./ProductDetail";
import { Provider } from 'react-redux';
import store from '../redux/Store';
import axios from "axios";
import { setData } from '../redux/Actions'; 
const JSON_DATA = "data/data.json";

const App = () => {
    useEffect(() => {
      axios.get(JSON_DATA)
        .then((res) => store.dispatch(setData(res.data)))
        .catch(err => console.log(err))
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