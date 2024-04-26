export default function CountryList({ countries, handleCountrySelect }) {
	let countryListItems = countries.map((country) => {
		return (
			<li key={country.id}>
				{country.name.common}{" "}
				<button onClick={() => handleCountrySelect(country)}>Show</button>{" "}
			</li>
		);
	});

	return <ul>{countryListItems}</ul>;
}
