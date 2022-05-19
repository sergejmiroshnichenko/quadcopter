import CartItem from '../CartItem/CartItem'
import styles from './Cart.module.scss'
import PropTypes from 'prop-types';
import { ReactComponent as Basket } from "../../assets/cart_empty.svg";



const Cart = ({ data, setQuadcopter }) => {



    const increase = (name) => {
        setQuadcopter((prev) => {
            return prev.map((product) => {
                if(product.name === name){
                    return {
                        ...product,
                        count: product.count + 1
                    }
                }
                return product
            })
        })
    }

    const decrease = (name) => {
        setQuadcopter((prev) => {
            return prev.map((product) => {
                if(product.name === name){
                    return {
                        ...product,
                        count: product.count > 1 ? --product.count : 1
                    }
                }
                return product
            })
        })
    }


    return (
        <>
            <div className={styles.flex}>
                {data && data.map(item => <CartItem key={item.name} {...item} increase={increase} decrease={decrease}/>)}
            </div>

            <p className={styles.total}> {data.length > 0 ? 'Total: ' + data.reduce((acc, item) => (acc += item.price * item.count, acc), 0) + ' ₴' : <Basket/>} </p>
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
