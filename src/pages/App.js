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
import Cart from "./Cart";

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
                <div className="flex flex-col h-screen">
                    <Header></Header>
                    <main className="flex-1 overflow-y-scroll gap-2 bg-gray-50">
                        <div className='px-4 py-2.5'>
                            <div className="w-full mx-auto max-w-screen-xl">
                            <Routes>
                                <Route path="/" element={<Home />} />
                                <Route path="/home" element={<Home />} />
                                <Route path="/shop" element={<Shop />} />
                                <Route path="/cart" element={<Cart />} />
                                <Route path="/product/:item" element={<ProductDetail />} />
                            </Routes>
                            </div>
                        </div>
                    </main>
                    <Footer></Footer>
                </div>
            </BrowserRouter>
        </Provider>
    )
}

export default App;