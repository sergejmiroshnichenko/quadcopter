import PropTypes from 'prop-types';

const Button = ({ className, text, type, onClick }) => {
    return (
        <>
            <button className={className} type={type} onClick={onClick}> { text } </button>
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