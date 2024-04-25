export default function Notification({ type, msg }) {
	const ERROR_TYPE = "error";
	const borderColor = type === ERROR_TYPE ? "red" : "green";

	const style = {
		width: "25em",
		padding: ".5em",
		border: "5px solid",
		borderColor: borderColor,
		position: "fixed",
		bottom: "88%",
		right: "50%",
	};

	return (
		<div style={style}>
			<p>{msg}</p>
		</div>
	);
}
