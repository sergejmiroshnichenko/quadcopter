import Button from '../Button/Button'
import './Modal.css';
import {ReactComponent as Cross} from "../../assets/cross.svg";


const Modal = ({closeModal, addToCart, name, price}) => {
    return (
        <div className='background'>
            <div className='content'>
                <div className='modalTitle'>
                    <h3>Confirmation</h3>
                    <Cross onClick={closeModal}/>
                </div>
                <div className='block'>
                    <p className='modalQuestion'> Are you sure you want to buy : </p>
                    <p className='modalAnswer'> {name} - {price+' ₴'}  ?</p>
                </div>



                <div className='buttonBlock'>
                    <Button text='Ok' className='btn btn-success' onClick={() => {
                        closeModal();
                        addToCart(name, price);
                    }}/>
                    <Button text='Cancel' className='btn btn-danger' onClick={closeModal}/>
                </div>
            </div>
        </div>
    )
}


export default Modal