import React from 'react';
import { Routes, Route } from 'react-router-dom';
import FavouritePages from '../pages/FavouritePages/FavouritePages';
import CartPages from '../pages/CartPages/CartPages';
import HomePages from '../pages/HomePages/HomePages'



const Routers = ({ data, setQuadcopter }) => {


    const toFavourite = (name) => {

        setQuadcopter((prev) => {
            const index = prev.findIndex(item => item.name === name);
            const newState = [...prev];
            newState[index] = {...newState[index], isFavourite : newState[index].isFavourite !== true};
            return newState;
        })
    }

    return (

        <Routes>
            <Route path="/"
                element = {<HomePages data={data} setCartItem={setQuadcopter} toFavourite={toFavourite}/>}
            />

            <Route path="/favourite"
                element = {<FavouritePages toFavourite={toFavourite} setCartItem={setQuadcopter} data={data.filter((item) => item.isFavourite)}/>}
            />

            <Route path="/cart"
                element = {<CartPages data={data.filter((item) => item.isinCart)} />}
            />
        </Routes>
    );
}
export default Routers;