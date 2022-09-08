import "./ProductsFilter.css"
import 'bootstrap/dist/css/bootstrap.min.css';

const ProductsFilter = ({onFilterSelect, filter}) => {

    const buttonsData = [
        {name: "All", label: "All", background: "green"},
        {name: "orange", label: "orange", background: "#ffc107"},
        {name: "black", label: "black", background: "#212529"},
        {name: "white", label: "white", background: "#f8f9fa"},
        {name: "grey", label: "grey", background: "#6c757d"}
    ]

    const buttons = buttonsData.map(({name, label, background}) => {

        const current = filter === name;
        const clazz = current ? "current" : "btns"

        return (
            <button
                type="button"
                style={{backgroundColor: `2px solid ${background}`, fontWeight: 500}}
                className={`${clazz}`}
                key={name}
                onClick={() => onFilterSelect(name,background)}>
                {label}
            </button>
        )
    })

    return (
        <div className="btn-group">
            {buttons}
        </div>
    )
}

export default ProductsFilter