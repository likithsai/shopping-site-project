import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import ProductDetail from "./ProductDetail";
import { Provider } from 'react-redux';
import store from '../redux/Store';
import axios from "axios";
import { setData } from '../redux/Actions';
import Header from "../component/Header";
import Footer from "../component/Footer";
import Shop from "../pages/Shop";
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
                <div class="flex flex-col h-screen">
                    <Header></Header>
                    <main class="flex-1 overflow-y-scroll gap-2 bg-gray-50">
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/shop" element={<Shop />} />
                            <Route path="/product/:item" element={<ProductDetail />} />
                        </Routes>
                    </main>
                    <Footer></Footer>
                </div>
            </BrowserRouter>
        </Provider>
    )
}

export default App;