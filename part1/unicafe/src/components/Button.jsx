const Button = ({ handleClick, type, text }) => {
	return (
		<button id={type} type="button" onClick={(e) => handleClick(e)}>
			{text}
		</button>
	);
};

export default Button;
