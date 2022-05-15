import './Header.css';
import {NavLink} from "react-router-dom";
import { ReactComponent as Cart } from "../../assets/cart.svg";
import { ReactComponent as StarIcon } from "../../assets/star_icon.svg";
import styles from '../Cart/Cart.module.scss'



const Header = ({data}) => {

    const filter = data.filter((item) => item.isinCart === true);
    const favourite = data.filter((item) => item.isFavourite === true);


    console.log(favourite);

    return (
        <nav className='nav'>
            <ul className='menu'>
                <li className='navLink'>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li className='navLink'>
                    <NavLink to="/favourite"><StarIcon className='starNumber'/>Favourite { favourite.length > 0 && <p className={styles.counter}> {favourite.reduce((acc, item) => (acc += item.count, acc), 0)} </p>}</NavLink>
                </li>
                <li className='navLink'>
                    <NavLink to="/cart"> <Cart className='cartNumber'/>Cart { filter.length > 0 && <p className={styles.counter}> {data.reduce((acc, item) => (acc += item.count, acc), 0)} </p>}</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Header