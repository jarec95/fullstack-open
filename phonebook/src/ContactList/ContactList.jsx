export default function ContactList({
	persons,
	filterContacts,
	nameToFilterBy,
}) {
	return (
		<>
			<h2>Numbers</h2>
			<ul>
				{persons.map((person) => {
					if (filterContacts) {
						if (person.name.includes(nameToFilterBy)) {
							return (
								<li key={person.name}>
									{person.name}: {person.number}
								</li>
							);
						}
					} else {
						return (
							<li key={person.name}>
								{person.name}: {person.number}
							</li>
						);
					}
				})}
			</ul>
		</>
	);
}
