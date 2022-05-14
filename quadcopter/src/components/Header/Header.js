import './Header.css';
import {NavLink} from "react-router-dom";
import { ReactComponent as Cart } from "../../assets/cart.svg";
import { ReactComponent as StarIcon } from "../../assets/star_icon.svg";


const Header = () => {
    return (
        <nav className='nav'>
            <ul className='menu'>
                <li className='navLink'>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li className='navLink'>
                    <NavLink to="/favourite"><StarIcon className='starNumber'/>Favourite</NavLink>
                </li>
                <li className='navLink'>
                    <NavLink to="/cart"><Cart className='cartNumber'/>Cart</NavLink>
                </li>
            </ul>
        </nav>

    )
}

export default Header