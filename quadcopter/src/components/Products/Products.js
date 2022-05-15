import ProductItem from '../ProductItem/ProductItem';
import styles from './Products.module.scss'
// import PropTypes from 'prop-types';
import React from 'react';


const Products = ({ data, addToCart, toFavourite }) => {

    // const addToCart = (name, price) => {
    //
    //     setCartItem((prev) => {
    //         const index = prev.findIndex(item => item.name === name);
    //         if (index === -1) {
    //             return [...prev, {name, price, count: 1}]
    //         } else {
    //             const newState = [...prev]
    //             newState[index].count += 1
    //             return newState
    //         }
    //     })
    // }

    return (
        <ul className={styles.wrapper}>
            { data && data.map( (item,index) => <li> <ProductItem key={index} {...item} addToCart={addToCart} toFavourite={toFavourite}/> </li> )}
        </ul>
    )
};


// Products.propTypes = {
//     data: PropTypes.arrayOf(PropTypes.object).isRequired,
//     setCartItem: PropTypes.func
// }
//
// Products.defaultProps = {
//     setCartItem: () => {}
// }


export default Products;
