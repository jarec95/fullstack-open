/*
 	every request has a url
 
	every has a get request
 
*/

class RequestService {
	baseUrl = "";

	constructor(url) {
		this.baseUrl = url;
	}

	// following basic REST principles where dummyurl.come/thing returns all things
	// if the url has changes or their are requirements per different services
	// takes config object to change behavior
	getAll(config) {
		return fetch(this.baseUrl)
			.then((resp) => resp.json())
			.then((jsonResp) => jsonResp)
			.catch((err) => Promise.reject(err));
	}

	// follows REST convention url/{resource}/{singleResource}
	// either id or name or whatever
	getSingle(config) {
		return fetch(this.baseUrl + entity);
	}
}

export default RequestService;
