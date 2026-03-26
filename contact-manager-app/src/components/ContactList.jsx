import ContactCard from "./ContactCard";

export default function ContactList({contacts}) {
    return(
        <div>
            <h2 style={{marginLeft: "1rem", paddingBottom: "0.5rem"}}>Contacts</h2>
            {contacts.map((contact) => (
                <ContactCard key={contact.id} contact={contact}/>
            ))}
        </div>
    )
}