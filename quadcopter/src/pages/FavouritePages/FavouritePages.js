import Products from "../../components/Products/Products";


const FavouritePages = ({data, toFavourite}) => {



    return (
        <div>
            <Products data={data} toFavourite={toFavourite} />
        </div>
    )
}

export default FavouritePages;