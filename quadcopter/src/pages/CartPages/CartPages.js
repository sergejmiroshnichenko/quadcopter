import Cart from '../../components/Cart/Cart';
import PropTypes from "prop-types";


const CartPages = ({ data }) => {

    return (
        <section>
            <Cart data={data}/>
        </section>
    )
};


CartPages.propTypes = {
    data: PropTypes.arrayOf(PropTypes.object)
};


CartPages.defaultProps = {
    data: []
}


export default CartPages;