import Products from "../../components/Products/Products";
import PropTypes from "prop-types";
import styles from "../../components/Products/Products.module.scss";
import {ReactComponent as Favor} from "../../assets/favourite.svg";
import React from "react";



const FavouritePages = ({ data, toFavourite, addToCart }) => {
    return (
        <div>
            <Products data={data} toFavourite={toFavourite} addToCart={addToCart} />
            <p className={styles.favor}> {data.length === 0 && <Favor />} </p>
        </div>
    )
};

FavouritePages.propTypes = {
    data: PropTypes.arrayOf(PropTypes.object).isRequired,
    toFavourite: PropTypes.func,
    addToCart: PropTypes.func
}

FavouritePages.defaultProps = {
    toFavourite: () => { },
    addToCart: () => { }
}


export default FavouritePages;