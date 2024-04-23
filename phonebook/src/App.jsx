import { useEffect, useState } from "react";

import PhonebookService from './services/phonebookService';

import ContactForm from "./Components/ContactForm/ContactForm";
import Filter from "./Components/Filter/Filter";
import ContactList from "./Components/ContactList/ContactList";

const App = () => {

	const [persons, setPersons] = useState([]);
	const [newName, setNewName] = useState("");
	const [newNumber, setNewNumber] = useState("");
	const [nameToFilterBy, setNameToFilterBy] = useState("");
	const [filterContacts, setFilterContacts] = useState(false);

	useEffect(() => {
        PhonebookService.getPersons().then(resp => {
            setPersons(resp);
        });
	}, []);

    // add new persons to the db
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
