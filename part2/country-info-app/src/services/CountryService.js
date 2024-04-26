import RequestService from "./RequestService";

const countryServiceURL = "https://studies.cs.helsinki.fi/restcountries/api/";

class CountryService extends RequestService {
	constructor() {
		super(countryServiceURL);
	}

	getAllCountries() {
		return fetch(this.baseUrl + "/all")
			.then((resp) => resp.json())
			.then((jsonResp) => jsonResp)
			.catch((err) => Promise.reject(err));
	}

	getSingleCountryByName(name) {
		return fetch(this.baseUrl + `/name/${name}`)
			.then((resp) => resp.json())
			.then((jsonResp) => jsonResp)
			.catch((err) => Promise.reject(err));
	}
}

export default new CountryService();
