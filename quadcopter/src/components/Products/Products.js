import ProductItem from '../ProductItem/ProductItem';
import styles from './Products.module.scss'
import PropTypes from 'prop-types';
import React from 'react';


const Products = ({data, addToCart, toFavourite}) => {

    return (
        <ul className={styles.wrapper}>
            {data && data.map((item, index) => <li key={index}><ProductItem {...item}
                                                                            addToCart={addToCart}
                                                                            toFavourite={toFavourite}/></li>)}
        </ul>
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
