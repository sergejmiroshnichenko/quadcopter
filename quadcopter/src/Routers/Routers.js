import React from 'react';
import {Routes, Route} from 'react-router-dom';
import FavouritePages from '../pages/FavouritePages/FavouritePages';
import CartPages from '../pages/CartPages/CartPages';
import HomePages from '../pages/HomePages/HomePages'

const Routers = () => {
    return (

        <Routes>
            <Route path="/"
                element = {<HomePages/>}
            />

            <Route path="/favourite"
                element = {<FavouritePages/>}
            />

            <Route path="/cart"
                element = {<CartPages/>}
            />
        </Routes>
    );
}
export default Routers;