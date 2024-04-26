import Input from "../Input";

export default function Filter({ handleFilter, nameToFilterBy }) {
	return (
		<div>
			filter contacts by name:
			<Input
				type="text"
				name="filter"
				onChange={handleFilter}
				value={nameToFilterBy}
			/>
		</div>
	);
}
