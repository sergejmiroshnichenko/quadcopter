import Cart from '../../components/Cart/Cart'


const CartPages = ({data}) => {
    console.log(data)
    return(
        <section>
            <Cart data={data}/>

        </section>
    )
}



export default CartPages;