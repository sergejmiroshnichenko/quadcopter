import Products from "../../components/Products/Products";


const FavouritePages = ({data, toFavourite, setCartItem}) => {

    const addToCart = (name, price) => {
        setCartItem((prev) => {
            const index = prev.findIndex(item => item.name === name);
            if (index === -1) {
                return [...prev, {name, price, count: 1}]
            } else {
                const newState = [...prev]
                newState[index].count += 1;
                newState[index].isinCart = true;
                // localStorage.setItem('cart', JSON.stringify(newState))
                return newState;
            }
        })
    }

    return (
        <div>
            <Products data={data} toFavourite={toFavourite} addToCart={addToCart}/>
        </div>
    )
}

export default FavouritePages;