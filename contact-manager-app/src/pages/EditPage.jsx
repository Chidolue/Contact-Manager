import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function EditPage({ contacts, setContacts }) {
	const { id } = useParams();
	const navigate = useNavigate();

	const contact = contacts.find(c => c.id === Number(id));

	const [name, setName] = useState(contact?.name || "");
	const [email, setEmail] = useState(contact?.email || "");

	function handleSubmit(e) {
		e.preventDefault();

		const updatedContacts = contacts.map(c => {
			if (c.id === Number(id)) {
				return { ...c, name, email };
			}
			return c;
		});

		setContacts(updatedContacts);
		navigate("/");
	}

	return (
		<>
			<h1>Edit Contact</h1>

			<form onSubmit={handleSubmit}>
				<input value={name} onChange={(e) => setName(e.target.value)} />
				<input value={email} onChange={(e) => setEmail(e.target.value)} />

				<button type="submit">Done</button>
				<button type="button" onClick={() => navigate("/")}>
					Cancel
				</button>
			</form>
		</>
	);
}