import styles from './App.module.scss';
import {useState, useEffect} from "react";
import Products from "../Products/Products";
import Cart from "../Cart/Cart";



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




    return (
        <div className={styles.App}>
            <Cart quadcopter={cartItem}/>
            {loading && 'Loading...'}
            <Products data={quadcopter} setCartItem={setCartItem}/>
        </div>
    );
}




export default App;
