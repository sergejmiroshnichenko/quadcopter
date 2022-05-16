import Products from "../../components/Products/Products";
import PropTypes from "prop-types";



const HomePages = ({ data, setCartItem, toFavourite }) => {

    const addToCart = (name, price) => {
        setCartItem((prev) => {
            const index = prev.findIndex(item => item.name === name);
            if (index === -1) {
                return [...prev, {name, price, count: 1}]
            } else {
                const newState = [...prev]
                newState[index].count += 1;
                newState[index].isinCart = true;
                // localStorage.setItem('cart', JSON.stringify(newState))
                return newState;
            }
        })
    }

    return(
        <section>
            <Products data={data} addToCart={addToCart} toFavourite={toFavourite} />
        </section>
    )
};


HomePages.propTypes = {
    data: PropTypes.arrayOf(PropTypes.object),
    toFavourite: PropTypes.func,
    setCartItem: PropTypes.func
};

HomePages.defaultProps = {
    data: [],
    toFavourite: () => {},
    setCartItem: () => {}
}



export default HomePages