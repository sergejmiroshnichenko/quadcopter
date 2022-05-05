import './App.css';
import {useState, useEffect} from "react";
import Products from "./components/Products/Products";
import Cart from "./components/Cart/Cart";





function App() {

    const [quadcopter, setQuadcopter] = useState([]);
    const [cartItem, setCartItem] = useState([]);


    const fetchItem = async () => {
        try {
            const product = await fetch('./db.json');
            const data = await product.json();
            setQuadcopter(data.quadcopter);
        } catch (e) {
            console.error('error fetching data from server')
        }
    };

    useEffect(() => {
        fetchItem();
    }, []);


    // useEffect( () => {
    //     (async () => {
    //         const fetchItem = await fetch('./db.json')            /*   variant # 2   */
    //             .then(fetchItem => fetchItem.json())
    //         setQuadcopter(fetchItem.quadcopter)
    //     }) ()
    // }, [])



    const addToCart = (name, price) => {
        // console.log('name:', name, 'price:', price)
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
        <div className="App">
            <header className="App-header">
                <Cart quadcopter={cartItem}/>
                <Products  data={quadcopter} addToCart={addToCart} />
            </header>
        </div>
    );
}

export default App;

