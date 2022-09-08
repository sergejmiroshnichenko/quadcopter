import React from 'react';
import {Routes, Route} from 'react-router-dom';
import FavouritePages from '../pages/FavouritePages/FavouritePages';
import CartPages from '../pages/CartPages/CartPages';
import HomePages from '../pages/HomePages/HomePages'
import PropTypes from "prop-types";


const AppRoutes = ({data, setQuadcopter, onFilterSelect, filter}) => {

    // const [cartItem, setCartItem] = useState([]);

    const addToCart = (name, price) => {

        // const newState = [...cartItem];
        // // let addCartItem = [...newState, {name, price, count: 1}];
        // console.log(addCartItem)
        // setCartItem(addCartItem)
        // const index = newState.findIndex(item => item.name === name);
        // console.log(index)
        // if (index === -1) {
        //     let addCartItem = [...newState, {name, price, count: 1}];
        //     console.log(newState[index].count += 1);
        // } else {
        //
        // }


        // if (index === -1) {
        //     console.log([...newState, {name, price, count: 1}]);
        // } else {
        //     addCartItem[index].count += 1;
        //
        //     console.log(newState);
        // }


        setQuadcopter((prev) => {
            const index = prev.findIndex(item => item.name === name);
            if (index === -1) {
                return [...prev, { name, price, count: 1 }]
            } else {
                const newState = [...prev];
                console.log(newState)
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
            newState[index] = {...newState[index], isFavourite: newState[index].isFavourite !== true};
            return newState;
        })
    }


    return (
        <Routes>
            <Route path="/"
                   element={<HomePages addToCart={addToCart}
                                       data={data}
                                       toFavourite={toFavourite}
                                       onFilterSelect={onFilterSelect}
                                       filter={filter}/>}
            />

            <Route path="/favourite"
                   element={<FavouritePages addToCart={addToCart} toFavourite={toFavourite}
                                            data={data.filter(item => item.isFavourite)}/>}
            />

            <Route path="/cart"
                   element={<CartPages data={data.filter(item => item.isinCart)} setQuadcopter={setQuadcopter}/>}
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
    setQuadcopter: () => {
    },
}


export default AppRoutes;