import Products from "../../components/Products/Products";
import ProductsFilter from "../../components/ProductsFilter/ProductsFilter";
import PropTypes from "prop-types";
import React from "react";


const HomePages = ({ data, addToCart, toFavourite, filter, onFilterSelect }) => {
    return (
        <section>
            <ProductsFilter filter={filter} onFilterSelect={onFilterSelect}/>
            <Products data={data} addToCart={addToCart} toFavourite={toFavourite} />
        </section>
    )
};


HomePages.propTypes = {
    data: PropTypes.arrayOf(PropTypes.object),
    toFavourite: PropTypes.func,
    addToCart: PropTypes.func
};

HomePages.defaultProps = {
    data: [],
    toFavourite: () => { },
    addToCart: () => { },
}



export default HomePages