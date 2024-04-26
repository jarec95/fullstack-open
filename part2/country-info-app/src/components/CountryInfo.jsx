import CountryWeather from "./CountryWeather";

// display common name
// capital
// area
// languages
// flag
// weather

export default function CountryInfo({ country }) {
	function createLanguageListItems() {
		let listItems = [];
		for (let lang in country.languages) {
			listItems.push(<li key={lang}>{country.languages[lang]}</li>);
		}
		return listItems;
	}
	return (
		<div>
			<h2>{country.name.common}</h2>
			<p>{country.capital[0]}</p>
			<p>{country.borders.area}</p>
			<div>
				<h3>languages</h3>
				<ul>{createLanguageListItems()}</ul>
			</div>
			<div>
				<img
					height={250}
					width={500}
					src={country.flags.svg}
					alt={country.flags.alt}
				/>
			</div>
			<div>
				<CountryWeather
					name={country.capital[0]}
					lat={country.capitalInfo.latlng[0]}
					long={country.capitalInfo.latlng[1]}
				/>
			</div>
		</div>
	);
}
