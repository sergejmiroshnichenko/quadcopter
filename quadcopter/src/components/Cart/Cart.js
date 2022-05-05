import CartItem from '../CartItem/CartItem'
import './Cart.css'

const Cart = ({ quadcopter }) => {
    return(
        <div>
            <h2>Cart</h2>
            <div>
                {quadcopter && quadcopter.map(item => <CartItem {...item}/>)}
            </div>
            <p className='total'> { quadcopter.length > 0 ? 'Total: ' + quadcopter.reduce((acc, item) => (acc += item.price * item.count, acc), 0) + ' ₴' : 'Price : 0' + ' ₴' }</p>

        </div>
    )
}

export default Cart;
