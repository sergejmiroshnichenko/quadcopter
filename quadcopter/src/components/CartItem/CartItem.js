import PropTypes from "prop-types";
import styles from './CartItem.module.scss'


const CartItem = ({name, count, srs, price}) => {

    return (
        <div>
            <div>
                <img className={styles.images} src={srs} alt=""/>
            </div>

                <div>
                    <p className={styles.name}>{name}</p>
                    <p className={styles.price}>{price + ' ₴'}</p>
                </div>
                <div className={styles.blockCount}>
                    <p className={styles.count}>{count}</p>
                </div>
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
