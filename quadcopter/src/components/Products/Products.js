import ProductItem from '../ProductItem/ProductItem';
import styles from './Products.module.scss'
import PropTypes from 'prop-types';
import React from 'react';
import {ReactComponent as Favor} from "../../assets/favourite.svg";


const Products = ({data, addToCart, toFavourite}) => {

    return (
        <>
            <ul className={styles.wrapper}>
                {data && data.map((item, index) => <li key={index}><ProductItem {...item} addToCart={addToCart} toFavourite={toFavourite}/></li>)}
            </ul>
            <p className={styles.favor}> {data.length === 0 && <Favor />} </p>


        </>
    )
};


Products.propTypes = {
    addToCart: PropTypes.func,
    data: PropTypes.arrayOf(PropTypes.object).isRequired,
    toFavourite: PropTypes.func
}

Products.defaultProps = {
    addToCart: () => {
    },
    toFavourite: () => {
    },

}


export default Products;
