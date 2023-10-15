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
import Login from "./Login";

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
                <div>
                    <Header></Header>

                    <nav class="flex px-4 lg:px-6 py-2.5 lg:hidden sticky w-full m-auto  bg-gray-50" aria-label="Breadcrumb">
                        <ol class="inline-flex items-center space-x-1 md:space-x-3">
                            <li class="inline-flex items-center">
                                <a href="#" class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
                                    <svg class="w-3 h-3 mr-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z"/>
                                    </svg>
                                    Home
                                </a>
                            </li>
                            <li aria-current="page">
                                <div class="flex items-center">
                                    <svg class="w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
                                    </svg>
                                    <span class="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400">Flowbite</span>
                                </div>
                            </li>
                        </ol>
                    </nav>
                    
                    <main className="flex-1 overflow-y-scroll gap-2 bg-gray-50">
                        <div className='px-4 py-2.5'>
                            <div className="w-full mx-auto max-w-screen-xl">
                            <Routes>
                                <Route path="/" element={<Home />} />
                                <Route path="/home" element={<Home />} />
                                <Route path="/shop" element={<Shop />} />
                                <Route path="/cart" element={<Cart />} />
                                <Route path="/product/:item" element={<ProductDetail />} />
                                <Route path="/login" element={<Login />} />
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