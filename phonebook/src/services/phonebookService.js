class PhonebookService {
    url = "http://localhost:3000/persons";

    getPersons() {
        return fetch(this.url).then(response => response.json())
            .then(jsonResp => {
                return jsonResp;
            })
    }

    addPerson(person) {
        let persons = [];
        let requestObj = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(person)
        }

        this.getPersons().then(response => { persons = response });

        if (persons.find(alreadyIn => alreadyIn.name === person.name)) {
            return Promise.reject(`${person.name} is already in the phonebook`);
        }

        return fetch(this.url, requestObj).then(response => {
            console.log(response);
        });
    }
}

export default new PhonebookService();