import RequestService from "./RequestService";

const weatherServiceURL =
	"https://api.open-meteo.com/v1/forecast?latitude=&longitude=&current=temperature_2m";

class WeatherService extends RequestService {
	constructor() {
		super(weatherServiceURL);
	}

	getWeather(lat, long) {
		return fetch(this.#formatURL(lat, long))
			.then((resp) => resp.json())
			.then((respJson) => {
				console.log(respJson);
				let weatherInfo = {
					temp: respJson.current.temperature_2m,
				};

				return weatherInfo;
			})
			.catch((err) => Promise.reject(err));
	}

	#formatURL(lat, long) {
		let latToken = "latitude=";
		let longToken = "longitude=";

		let formattedString = this.baseUrl.replace(latToken, `${latToken + lat}`);
		console.log(formattedString);
		formattedString = formattedString.replace(longToken, `${longToken + long}`);
		return formattedString;
	}
}

export default new WeatherService();
