import { useEffect, useState } from "react";

import ContactForm from "./ContactForm/ContactForm";
import Filter from "./Filter/Filter";
import ContactList from "./ContactList/ContactList";

const App = () => {
	const url = "http://localhost:3001/persons";

	const [persons, setPersons] = useState([]);
	const [newName, setNewName] = useState("");
	const [newNumber, setNewNumber] = useState("");
	const [nameToFilterBy, setNameToFilterBy] = useState("");
	const [filterContacts, setFilterContacts] = useState(false);

	useEffect(() => {
		fetch(url)
			.then((response) => {
				return response.json();
			})
			.then((personJson) => setPersons(personJson));
	}, []);

	function handleSubmit(e) {
		e.preventDefault();

		let newPerson = {};

		if (newName.length > 0) {
			if (isInPhonebookAlready(newName)) {
				alert("That person already exists");
			} else {
				newPerson.name = newName;
				newPerson.number = newNumber;
				setPersons([...persons, newPerson]);
			}
		}
	}

	function handleChange(e) {
		let inputName = e.target.name;
		let inputValue = e.target.value;

		switch (inputName) {
			case "name":
				setNewName(inputValue);
				break;
			case "number":
				setNewNumber(inputValue);
				break;
			case "filter":
				setNameToFilterBy(inputValue);
				if (nameToFilterBy.length > 0) {
					setFilterContacts(true);
				} else {
					setFilterContacts(false);
				}
				break;
			default:
				break;
		}
	}

	function isInPhonebookAlready(name) {
		return persons.find((person) => person.name === name);
	}

	console.log("Rendered");
	return (
		<div>
			<h2>Phonebook</h2>
			<Filter handleFilter={handleChange} nameToFilterBy={nameToFilterBy} />
			<ContactForm
				handleSubmit={handleSubmit}
				handleChange={handleChange}
				newName={newName}
				newNumber={newNumber}
			/>
			<ContactList
				persons={persons}
				nameToFilterBy={nameToFilterBy}
				filterContacts={filterContacts}
			/>
		</div>
	);
};

export default App;
