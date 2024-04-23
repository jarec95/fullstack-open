class PhonebookService {
	url = "http://localhost:3000/persons";

	getPersons() {
		return fetch(this.url)
			.then((response) => response.json())
			.then((jsonResp) => {
				return jsonResp;
			});
	}

	addPerson(person) {
		let persons = [];
		let requestObj = {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(person),
		};

		this.getPersons().then((response) => {
			persons = response;
		});

		if (persons.find((alreadyIn) => alreadyIn.name === person.name)) {
			return Promise.reject(`${person.name} is already in the phonebook`);
		}

		return fetch(this.url, requestObj)
			.then((response) => response.json())
			.then((jsonResp) => jsonResp);
	}

	deletePerson(id) {
		let deleteUrl = `${this.url}/${id}`;
		let reqObj = {
			method: "DELETE",
		};

		return fetch(deleteUrl, reqObj)
			.then((delResp) => delResp.json())
			.then((jsonResp) => jsonResp);
	}

	updatePerson({ id, newNumber }) {
		const patchUrl = `${this.url}/${id}`;
		const reqObjt = {
			method: "PATCH",
			body: JSON.stringify({ number: newNumber }),
			headers: {
				"Content-Type": "application/json",
			},
		};

		return fetch(patchUrl, reqObjt).then((resp) => resp.json());
	}
}

export default new PhonebookService();
