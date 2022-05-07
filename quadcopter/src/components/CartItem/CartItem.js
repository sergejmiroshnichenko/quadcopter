import PropTypes from "prop-types";

const CartItem = ({ name, count }) => {

    return(
        <div>
            <div>
                <span>{ name }</span>
            </div>
            <span>{ count }</span>
        </div>
    )
};


CartItem.propTypes = {
    name: PropTypes.string,
    count: PropTypes.number
}

CartItem.defaultProps = {
    name: '',
    count: null
}


export default CartItem;
