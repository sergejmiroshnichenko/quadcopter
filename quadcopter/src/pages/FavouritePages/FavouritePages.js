import Products from "../../components/Products/Products";
import PropTypes from "prop-types";



const FavouritePages = ({ data, toFavourite, addToCart }) => {
    return (
        <div>
            <Products data={data} toFavourite={toFavourite} addToCart={addToCart} />
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