import './Header.css';
import { NavLink } from "react-router-dom";
import { ReactComponent as Cart } from "../../assets/cart.svg";
import { ReactComponent as StarIcon } from "../../assets/star_icon.svg";
import styles from '../Cart/Cart.module.scss'
import PropTypes from "prop-types";



const Header = ({ data }) => {

    const filter = data.filter(item => item.isinCart);
    const favourite = data.filter(item => item.isFavourite);
    let sum = '';
    sum += favourite.length;
    let totalCount = data.reduce((acc, item) => (acc += item.count, acc), 0)


    return (
        <nav className='nav'>
            <ul className='menu'>
                <li className='navLink'>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li className='navLink'>
                    <NavLink to="/favourite"><StarIcon className='starNumber'/>Favourite { favourite.length > 0 && <p className={styles.counter}> {sum} </p>}</NavLink>
                </li>
                <li className='navLink'>
                    <NavLink to="/cart"> <Cart className='cartNumber'/>Cart {filter.length > 0 && <p className={styles.counter}> {totalCount} </p>} </NavLink>
                </li>
            </ul>
        </nav>
    )
};

Header.propTypes = {
    data: PropTypes.arrayOf(PropTypes.object)
};

Header.defaultProps = {
    data: []
}

export default Header