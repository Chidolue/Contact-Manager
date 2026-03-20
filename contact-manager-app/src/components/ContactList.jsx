import ContactCard from "./ContactCard";

export default function ContactList({contacts}) {
    return(
        <div>
            {contacts.map((contact) => (
                <ContactCard key={contact.id} contact={contact}/>
            ))}
        </div>
    )
}