const Button = ({className, style, text, onClick}) => {
    return(
        <>
            <button className={className} style={style} onClick={onClick}> {text}  </button>
        </>
    )
}

export default Button;