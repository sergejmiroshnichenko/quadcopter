import CartItem from '../CartItem/CartItem'
import styles from './Cart.module.scss'
import PropTypes from 'prop-types';



const Cart = ({data}) => {

    return (
        <div>
            <h2>Cart</h2>
            <>
                {data && data.map(item => <CartItem key={item.name} {...item} />)}
            </>
            <p className={styles.total}> {data.length > 0 ? 'Total: ' + data.reduce((acc, item) => (acc += item.price * item.count, acc), 0) + ' ₴' : 'Price : 0' + ' ₴'}</p>

            { data.length !== 0 && <p className={styles.counter}> {data.reduce((acc, item) => (acc += item.count, acc), 0)} </p> }

        </div>
    )
};


Cart.propTypes = {
    quadcopter: PropTypes.array.isRequired
}



export default Cart;
