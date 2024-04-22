import Input from "../Components/Input";

export default function ContactForm({
	handleSubmit,
	handleChange,
	newName,
	newNumber,
}) {
	return (
		<>
			<h2>Add new Contact</h2>
			<form onSubmit={handleSubmit}>
				<div>
					name: <Input name="name" onChange={handleChange} value={newName} />
				</div>
				<div>
					number:
					<Input name="number" onChange={handleChange} value={newNumber} />
				</div>
				<div>
					<button type="submit">add</button>
				</div>
			</form>
		</>
	);
}
