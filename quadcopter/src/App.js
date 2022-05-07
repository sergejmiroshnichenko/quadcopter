import styles from './App.module.scss';
import {useState, useEffect} from "react";
import Products from "./components/Products/Products";
import Cart from "./components/Cart/Cart";



const App = () => {

    const [quadcopter, setQuadcopter] = useState([]);
    const [cartItem, setCartItem] = useState([]);
    const [loading, setLoading] = useState(true);



    useEffect(() => {
    const fetchData = async () => {
        try {
            const response = await fetch('./db.json');
            const data = await response.json();
            setQuadcopter(data.quadcopter);
        } catch (e) {
            console.error('error fetching data from server')
        }

        setLoading(false);
    }

    fetchData();

    }, []);


    // useEffect( () => {
    //     (async () => {
    //         const fetchItem = await fetch('./db.json')            /*   variant # 2   */
    //             .then(fetchItem => fetchItem.json())
    //         setQuadcopter(fetchItem.quadcopter)
    //     }) ()
    // }, [])


    const addToCart = (name, price) => {

        setCartItem((prev) => {
            const index = prev.findIndex(item => item.name === name);
            if (index === -1) {
                return [...prev, {name, price, count: 1}]
            } else {
                const newState = [...prev]
                newState[index].count += 1
                return newState
            }
        })
    }

    return (
        <div className={styles.App}>
            <Cart quadcopter={cartItem}/>
            {loading && 'Loading...'}
            <Products data={quadcopter} addToCart={addToCart}/>
        </div>
    );
}




export default App;

