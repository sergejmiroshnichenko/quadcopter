import PropTypes from "prop-types";
import styles from './CartItem.module.scss';
import {ReactComponent as Plus} from "../../assets/icon_plus.svg";
import {ReactComponent as Minus} from "../../assets/icon_minus.svg";


const CartItem = ({name, count, srs, code, color, price}) => {

    return (
        <div className={styles.cartItem}>
            <img className={styles.images} src={srs} alt=""/>
            <div>
                <p className={styles.name}>{name}</p>
                <p className={styles.code}>{code}</p>
                <p>{color}</p>
                <p className={styles.price}>{price + ' ₴'}</p>
            </div>
            <div className={styles.flex}>
                <div>
                    <button className={styles.minus}><Minus/></button>
                </div>
                <div className={styles.blockCount}>
                    <p className={styles.count}>{count}</p>
                </div>

                <div>
                    <button className={styles.plus}><Plus/></button>
                </div>

            </div>
        </div>
    )
};


CartItem.propTypes = {
    name: PropTypes.string,
    count: PropTypes.number,
    price: PropTypes.number,
    srs: PropTypes.string
}

CartItem.defaultProps = {
    name: '',
    count: null,
    price: null,
    srs: ''
}


export default CartItem;
