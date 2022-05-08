import Button from '../Button/Button'
import styles from './Modal.module.scss';
import {ReactComponent as Cross} from "../../assets/cross.svg";
import {useEffect} from "react";
import PropTypes from 'prop-types';


const Modal = ({closeModal, addToCart, name, price }) => {


    useEffect(() => {
        document.body.classList.add('scroll-lock', 'scroll-lock-ios');
        return () => {
            document.body.classList.remove('scroll-lock', 'scroll-lock-ios');
        }
    }, [])

    return (
        <div className={styles.background}>
            <div className={styles.content}>
                <div className={styles.title}>
                    <h3 className={styles.confirmation}>Confirmation</h3>
                    <Cross onClick={closeModal}/>
                </div>
                <div className={styles.block}>
                    <p className={styles.question}> Are you sure you want to buy : </p>
                    <p className={styles.answer}> {name} - {price + ' ₴'} ?</p>
                </div>

                <div className={styles.btnBlock}>
                    <Button text='Ok'  className={styles.btnSuccess} onClick={() => {
                        closeModal();
                        addToCart(name, price);
                    }}/>
                    <Button text='Cancel' className={styles.btnDanger}  onClick={closeModal}/>
                </div>
            </div>
        </div>
    )
};


Modal.propTypes = {
    closeModal: PropTypes.func,
    addToCart: PropTypes.func,
    name: PropTypes.string,
    price: PropTypes.number
}

Modal.defaultProps = {
    closeModal: () => {},
    addToCart: () => {},
    name: '',
    price: null
}


export default Modal;