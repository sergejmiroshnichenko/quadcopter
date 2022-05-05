import './ProductItem.css'
import { ReactComponent as StarIcon } from "../../assets/star_icon.svg";
import { ReactComponent as StarFavourite } from "../../assets/star_favourite.svg";
import { ReactComponent as Cart } from "../../assets/cart.svg";

import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from "react-bootstrap";
import { useState } from "react";
import Modal from '../Modal/Modal';


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

        <div className='product-flex'>

            {modal && <Modal name={name} price={price} closeModal={closeModal} addToCart={addToCart} />}
            <div onClick={drawFavourite} className="star-icon">
                {isFavourite ? <StarIcon /> : <StarFavourite className="star" />}
            </div>

            <img src={srs} alt="picture" width={200} height={200} />
            <p className='class-name'>{name}</p>
            <span>{code}</span>
            <span>{color}</span>
            <p className='price'>{price} ₴ </p>

            <div>
                <Button variant="outline-warning" onClick={() => {
                    openModal();
                }} >
                    <Cart className="cart" />
                    Add to cart
                </Button>
            </div>
        </div>

    )
}


export default ProductItem;
