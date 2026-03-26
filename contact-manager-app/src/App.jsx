import ContactList from "./components/ContactList";
import AddContact from "./components/AddContact";

import { useState } from "react";

import './App.css';

export default function App() {
	const [contacts, setContacts] = useState([
		{
			id: 1, name: "Chidolue Ebube", email: "chidolueebube@gmail.com"
		},
		{
			id: 2, name: "Chidolue Chidumaga", email: "chidoluechidumaga@gmail.com"
		},
		{
			id: 3, name: "Chidolue Peace", email: "chidoluepeace@gmail.com"
		}
	])

	function addContact(e) {
		e.preventDefault();

		const newStudent = {id: Date.now(), name, email};

		setContacts([prev => [...prev, newStudent]])
	}

	return (
		<>
			<AddContact add={addContact}/>
			<ContactList contacts={contacts}/>
		</>
	)
}