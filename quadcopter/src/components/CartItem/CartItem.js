const CartItem = ({ name, count }) => {

    // console.log('name:',name, 'count:',count)
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
