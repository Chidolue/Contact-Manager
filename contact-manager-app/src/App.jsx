import ContactList from "./pages/ContactList";
import AddContact from "./pages/AddContact";
import EditPage from "./pages/EditPage";

import { useState } from "react";
import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";

import './App.css';

export default function App() {
	const saved = localStorage.getItem("contacts");
	const [contacts, setContacts] = useState(() => {
		return saved ? JSON.parse(saved) : [
		{
			id: 1, name: "Chidolue Ebube", email: "chidolueebube@gmail.com"
		},
		{
			id: 2, name: "Chidolue Chidumaga", email: "chidoluechidumaga@gmail.com"
		},
		{
			id: 3, name: "Chidolue Peace", email: "chidoluepeace@gmail.com"
		}
	]})

	useEffect(() => {
		localStorage.setItem("contacts", JSON.stringify(contacts));
	}, [contacts])

	function deleteContact (id) {
		setContacts(prev => prev.filter(contact => contact.id !== id));
	}

	return (
		<>
			<Routes>
				<Route path="/" element={<ContactList contacts={contacts} onDelete={deleteContact}/>}></Route>

				<Route path="/add" element={<AddContact setContacts={setContacts}/>}></Route>

				<Route path="/edit" element={<EditPage/>}></Route>
			</Routes>
		</>
	)
}