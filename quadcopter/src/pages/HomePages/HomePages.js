import Products from "../../components/Products/Products";
import PropTypes from "prop-types";




const HomePages = ({ data, addToCart, toFavourite }) => {
    return (
        <section>
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