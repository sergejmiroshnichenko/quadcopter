import CartItem from '../CartItem/CartItem'
import styles from './Cart.module.scss'
import PropTypes from 'prop-types';


const Cart = ({ data }) => {

    return (
        <>
            <div className={styles.flex}>
                {data && data.map(item => <CartItem key={item.name} {...item} />)}
            </div>

            <div>
                <p className={styles.total}> {data.length > 0 ? 'Total: ' + data.reduce((acc, item) => (acc += item.price * item.count, acc), 0) + ' ₴' : 'Price : 0 ₴'} </p>
            </div>
        </>
    )
};


Cart.propTypes = {
    data: PropTypes.arrayOf(PropTypes.object)
};

Cart.defaultProps = {
    data: []
}


export default Cart;
