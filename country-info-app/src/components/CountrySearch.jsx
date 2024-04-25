import { useState } from "react";

export default function CountrySearch({ handleSearch }) {
	const [inputValue, setInputValue] = useState("");

	function handleChange(el) {
		let newCountryName = el.target.value;
		setInputValue(newCountryName);
		handleSearch(newCountryName);
	}

	return (
		<form>
			<label htmlFor="countryName">Search for a country</label>
			<input type="text" onChange={handleChange} value={inputValue} />
		</form>
	);
}
