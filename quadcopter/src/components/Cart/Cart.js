import CartItem from '../CartItem/CartItem'
import styles from './Cart.module.scss'
import PropTypes from 'prop-types';



const Cart = ({quadcopter}) => {

    return (
        <div>
            <h2>Cart</h2>
            <>
                {quadcopter && quadcopter.map(item => <CartItem key={item.name} {...item}/>)}
            </>
            <p className={styles.total}> {quadcopter.length > 0 ? 'Total: ' + quadcopter.reduce((acc, item) => (acc += item.price * item.count, acc), 0) + ' ₴' : 'Price : 0' + ' ₴'}</p>

            { quadcopter.length !== 0 && <p className={styles.counter}> {quadcopter.reduce((acc, item) => (acc += item.count, acc), 0)} </p> }

        </div>
    )
};


Cart.propTypes = {
    quadcopter: PropTypes.array.isRequired
}



export default Cart;
