import ProductItem from '../ProductItem/ProductItem';
import styles from './Products.module.scss'


const Products = ({ data, addToCart }) => {


    return (
        <ul className={styles.wrapper}>
            { data && data.map( item => <ProductItem key={item.code} {...item} addToCart={addToCart} />)}
        </ul>
    )
}

export default Products;
