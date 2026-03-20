export default function ContactCard({ contact}) {
    return(
        <div style={{paddingLeft: "1rem"}}>
           <br /> <hr />
            Name: {contact.name} <br />
            Email: {contact.email} <br />
        </div>
    )
}