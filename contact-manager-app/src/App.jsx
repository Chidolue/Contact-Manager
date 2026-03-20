import ContactList from "./components/ContactList";
import ContactCard from "./components/ContactCard";
import AddContact from "./components/AddContact";

import './App.css';

export default function App() {
	const contacts = [
		{
			id: 1, name: "Chidolue Ebube", email: "chidolueebube@gmail.com"
		},
		{
			id: 2, name: "Chidolue Chidumaga", email: "chidoluechidumaga@gmail.com"
		},
		{
			id: 3, name: "Chidolue Peace", email: "chidoluepeace@gmail.com"
		}
	]

	return (
		<>
			<AddContact/>
			<ContactList contacts={contacts} />
		</>
	)
}