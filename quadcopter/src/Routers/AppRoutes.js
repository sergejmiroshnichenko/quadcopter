import React from 'react';
import { Routes, Route } from 'react-router-dom';
import FavouritePages from '../pages/FavouritePages/FavouritePages';
import CartPages from '../pages/CartPages/CartPages';
import HomePages from '../pages/HomePages/HomePages'
import PropTypes from "prop-types";



const AppRoutes = ({ data, setQuadcopter }) => {

    const addToCart = (name, price) => {
        setQuadcopter((prev) => {
            const index = prev.findIndex(item => item.name === name);
            if (index === -1) {
                return [...prev, { name, price, count: 1 }]
            } else {
                const newState = [...prev]
                newState[index].count += 1;
                newState[index].isinCart = true;
                return newState;
            }
        })
    }

    const toFavourite = (name) => {
        setQuadcopter((prev) => {
            const index = prev.findIndex(item => item.name === name);
            const newState = [...prev];
            newState[index] = { ...newState[index], isFavourite: newState[index].isFavourite !== true };
            return newState;
        })
    }


    return (
        <Routes>
            <Route path="/"
                element={<HomePages addToCart={addToCart}  data={data}  toFavourite={toFavourite} />}
            />

            <Route path="/favourite"
                element={<FavouritePages addToCart={addToCart}  toFavourite={toFavourite}  data={data.filter((item) => item.isFavourite)} />}
            />

            <Route path="/cart"
                element={<CartPages data={data.filter((item) => item.isinCart)} setQuadcopter={setQuadcopter} />}
            />
        </Routes>
    )
};


AppRoutes.propTypes = {
    data: PropTypes.arrayOf(PropTypes.object),
    setQuadcopter: PropTypes.func,
};

AppRoutes.defaultProps = {
    data: [],
    setQuadcopter: () => { },
}


export default AppRoutes;