// react hooks
import { useState } from "react";
import { useEffect } from "react";

// services
import CountryService from "./services/CountryService";

//components
import CountrySearch from "./components/CountrySearch";
import CountryList from "./components/CountryList";
import CountryInfo from "./components/CountryInfo";

// css
import "./App.css";

function App() {
	const [countries, setCountries] = useState(null);
	const [filteredCountries, setFilteredCountries] = useState(null);
	const [countryName, setCountryName] = useState("");
	const [selectedCountry, setSelectedCountry] = useState(null);

	// load all countries, there is no limiting country list by portions of name through api
	// will do a full load and cache
	// will use two arrays for this, one is all countries, another will filter through and set filtered countries
	useEffect(() => {
		CountryService.getAllCountries()
			.then((allCountries) => setCountries(allCountries))
			.catch((err) => alert("Issue loading countries, refresh page"));
	}, []);

	function handleFilterCountries(countryName) {
		let newFilteredCountries = countries?.filter((country) =>
			country.name.common.includes(countryName)
		);

		setCountryName(countryName);
		setFilteredCountries(newFilteredCountries);
	}

	function handleCountrySelect(country) {
		setSelectedCountry(country);
	}

	function handleCountryListDisplay() {
		if (filteredCountries?.length <= 10 && countryName.length > 0) {
			return (
				<CountryList
					countries={filteredCountries}
					handleCountrySelect={handleCountrySelect}
				/>
			);
		} else if (countryName.length > 0) {
			return <p>Too many countries to list, please specify filter</p>;
		}

		return <h2>Start searching for a country</h2>;
	}

	function countryInfoDisplay() {
		let countryToDisplay =
			filteredCountries?.length === 1 ? filteredCountries[0] : selectedCountry;

		if (countryToDisplay) {
			return <CountryInfo country={countryToDisplay} />;
		}

		return null;
	}

	return (
		<>
			<h1>Country App</h1>
			<div>
				<CountrySearch handleSearch={handleFilterCountries} />
			</div>
			<div>{handleCountryListDisplay()}</div>
			<div>{countryInfoDisplay()}</div>
		</>
	);
}

export default App;
