import styles from './ProductItem.module.scss'
import { ReactComponent as StarIcon } from "../../assets/star_icon.svg";
import { ReactComponent as StarFavourite } from "../../assets/star_favourite.svg";
import { ReactComponent as Cart } from "../../assets/cart.svg";

import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from "react-bootstrap";
import { useState } from "react";
import Modal from '../Modal/Modal';
import PropTypes from 'prop-types'


const ProductItem = ({ name, price, srs, code, color, addToCart }) => {

    const [isFavourite, SetIsFavourite] = useState([]);
    const [modal, setModal] = useState(false);

    const drawFavourite = () => {
        if (!isFavourite) {
            SetIsFavourite(true)
        } else if (isFavourite) {
            SetIsFavourite(false)
        }
    }

    const openModal = () => {
        setModal(true)
    }

    const closeModal = () => {
        setModal(false)
    }

    return (

        <div className={styles.productFlex}>

            {modal && <Modal name={name} price={price} closeModal={closeModal} addToCart={addToCart} />}

            <div onClick={drawFavourite} className={styles.starIcon}>
                {isFavourite ? <StarIcon /> : <StarFavourite className={styles.star} />}
            </div>

            <img src={srs} alt="pic" width={200} height={200} />
            <p className={styles.className}>{name}</p>
            <span>{code}</span>
            <span>{color}</span>
            <p className={styles.price}>{price} ₴ </p>

            <div>
                <Button variant="outline-warning" onClick={() => openModal()}> <Cart className={styles.cart} /> Add to cart </Button>
            </div>
        </div>

    )
};


ProductItem.propTypes = {
    name: PropTypes.string,
    price: PropTypes.number,
    srs: PropTypes.string.isRequired,
    code: PropTypes.number,
    color: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    addToCart: PropTypes.func
}

ProductItem.defaultProps = {
    name: '',
    price: null,
    code: null,
    color: '',
    addToCart: () => {}
}


export default ProductItem;
