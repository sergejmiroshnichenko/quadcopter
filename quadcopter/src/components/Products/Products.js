import ProductItem from '../ProductItem/ProductItem';
import styles from './Products.module.scss'
// import PropTypes from 'prop-types';
import React from 'react';


const Products = ({ data, addToCart, toFavourite }) => {

    return (
        <ul className={styles.wrapper}>
            { data && data.map( (item,index) => <li key={index}> <ProductItem {...item} addToCart={addToCart} toFavourite={toFavourite}/> </li> )}
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
