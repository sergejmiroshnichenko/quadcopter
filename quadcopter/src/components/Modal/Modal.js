import Button from '../Button/Button'
import './Modal.css';
import { ReactComponent as Pop } from "../../assets/krest.svg";


const Modal = ({ closeModal, addToCart, name, price }) => {
    return (
        <div className='background'>
            <div className='modalBlock'>
                <div className='content'>
                    <div className='modalTitle'>
                        <h3>Conformation</h3>
                        <Pop onClick={closeModal} />
                    </div>
                    <p className='modalQuestion'>
                        Are you sure you want to buy this quadcopter ?
                    </p>
                    <div className='buttonBlock'>
                        <Button text='Ok' className='btn btn-success' onClick={() => {
                            closeModal();
                            addToCart(name, price);
                        }} />
                        <Button text='Cancel' className='btn btn-danger' onClick={closeModal} />
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Modal