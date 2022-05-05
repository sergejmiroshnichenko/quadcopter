import ProductItem from '../ProductItem/ProductItem';
import './Products.css'


const Products = ({ data, addToCart }) => {

    return (
        <ul className="wrapper">
            { data && data.map( item => <ProductItem key={item.code} {...item} addToCart={addToCart} />)}
        </ul>
    )
}

export default Products;
