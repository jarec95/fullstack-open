import { useEffect, useState } from "react";

import PhonebookService from "./services/phonebookService";

import ContactForm from "./Components/ContactForm/ContactForm";
import Filter from "./Components/Filter/Filter";
import ContactList from "./Components/ContactList/ContactList";
import phonebookService from "./services/phonebookService";

const App = () => {
	const [persons, setPersons] = useState([]);
	const [newName, setNewName] = useState("");
	const [newNumber, setNewNumber] = useState("");
	const [nameToFilterBy, setNameToFilterBy] = useState("");
	const [filterContacts, setFilterContacts] = useState(false);

	useEffect(() => {
		PhonebookService.getPersons().then((resp) => {
			setPersons(resp);
		});
	}, []);

	// add new persons to the db
	function handleSubmit(e) {
		e.preventDefault();

		let newPerson = {};

		if (newName.length > 0) {
			if (isInPhonebookAlready(newName) && newNumber.length > 0) {
				const id = persons.find((person) => person.name === newName)?.id;
				if (
					id &&
					window.confirm(
						`${newName} already exists, would you like to update their number?`
					)
				)
					phonebookService
						.updatePerson({ id, newNumber })
						.then((updatedPerson) => {
							let updatedPersons = persons.map((person) => {
								if (person.id === updatedPerson.id) {
									person = updatedPerson;
								}

								return person;
							});

							setPersons(updatedPersons);
						});
			} else if (isInPhonebookAlready(newName)) {
				alert("That person already exists");
			} else {
				newPerson.name = newName;
				newPerson.number = newNumber;
				phonebookService.addPerson(newPerson).then((newPerson) => {
					setPersons([...persons, newPerson]);
				});
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

	function handleDelete(personId) {
		if (window.confirm("Are you sure you want to remote this person?"))
			phonebookService.deletePerson(personId).then((resp) => {
				const newPersons = persons.filter((person) => person.id !== personId);
				setPersons(newPersons);
			});
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
				handleDelete={handleDelete}
			/>
		</div>
	);
};

export default App;
