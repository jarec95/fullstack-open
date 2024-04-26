export default function Input({ onChange, type, value, name }) {
	return <input name={name} type={type} onChange={onChange} value={value} />;
}
