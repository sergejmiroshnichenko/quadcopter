const CartItem = ({ name, count }) => {

    return(
        <div>
            <div>
                <span>{ name }</span>
            </div>
            <span>{ count }</span>
        </div>
    )
}

export default CartItem;
