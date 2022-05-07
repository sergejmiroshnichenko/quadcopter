import PropTypes from 'prop-types';

const Button = ({className, style, text, onClick}) => {
    return (
        <>
            <button className={className} style={style} onClick={onClick}> {text}  </button>
        </>
    )
};


Button.propTypes = {
    className: PropTypes.string,
    text: PropTypes.string,
    onClick: PropTypes.func
}

Button.defaultProps = {
    className: '',
    text: '',
    onClick: () => {}
}



export default Button;