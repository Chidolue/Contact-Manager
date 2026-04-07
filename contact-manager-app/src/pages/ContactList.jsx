import ContactCard from "../components/ContactCard";

import { useNavigate } from "react-router-dom";

export default function ContactList({contacts, onDelete}) {
    const navigate = useNavigate();

    function toAdd() {
        navigate("/add");
    }

    return(
        <div>
            <h2 style={{marginLeft: "1rem"}}>Contacts</h2>
            {contacts.map((contact) => (
                <ContactCard key={contact.id} contact={contact} onDelete={onDelete}/>
            ))}
            <button onClick={toAdd} className="add" >Add Contact</button>
        </div>
    )
}