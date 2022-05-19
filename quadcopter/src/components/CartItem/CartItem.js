import PropTypes from "prop-types";
import styles from './CartItem.module.scss';
import {ReactComponent as Plus} from "../../assets/icon_plus.svg";
import {ReactComponent as Minus} from "../../assets/icon_minus.svg";
import {ReactComponent as CartDelete} from "../../assets/delete_cart.svg";
// import {ReactComponent as IconLimited} from "../../assets/icon_limited.svg";




const CartItem = ({ name, srs, code, color, price, count, increase, decrease }) => {



    return (
        <div className={styles.cartItem}>
            <button className={styles.delete}><CartDelete/></button>
            <img className={styles.images} src={srs} alt=""/>
            <div>
                <p className={styles.name}>{name}</p>
                <p className={styles.code}>{code}</p>
                <p>{color}</p>
                <p className={styles.price}>{price + ' ₴'}</p>
            </div>
            <div className={styles.flex}>
                <div>
                    <button className={styles.minus} onClick={() => decrease(name)} ><Minus/></button>
                </div>
                <div className={styles.blockCount}>
                    <p className={styles.count}>{count}</p>
                </div>

                <div>
                    <button className={styles.plus} onClick={() => increase(name)} ><Plus/></button>
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
