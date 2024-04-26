import { useState, useEffect } from "react";
import WeatherService from "../services/WeatherService";

export default function CountryWeather({ name, lat, long }) {
	// on launch call weather service to get weather info
	const [weatherInfo, setWeatherInfo] = useState(null);

	useEffect(() => {
		WeatherService.getWeather(lat, long).then((resp) => setWeatherInfo(resp));
	}, []);
	return (
		<div>
			<h2>Weather in {name}</h2>
			<p>
				{weatherInfo ? `Temperature: ${weatherInfo.temp}\u00B0C` : "Loading..."}
			</p>
		</div>
	);
}
