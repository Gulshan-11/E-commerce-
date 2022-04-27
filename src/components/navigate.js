import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from '../pages/home';
import About from '../pages/about';
import Contacts from '../pages/contacts';
import Login from '../pages/login';
import Products from '../pages/products';
import { AnimatePresence } from 'framer-motion';


const Navigate = () => {
    const location = useLocation();
    return (
        <AnimatePresence exitBeforeEnter initial={false}>
            <Routes location={location} key = {location.pathname}>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/contacts' element={<Contacts />} />
                <Route path='/login' element={<Login />} />
                <Route path='/products' element={<Products />} />
            </Routes>
        </AnimatePresence>
    )
}

export default Navigate;