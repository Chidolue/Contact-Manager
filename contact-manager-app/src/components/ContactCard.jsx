export default function ContactCard({ contact }) {
    return(
        <>
        <hr className="hr"/>
        <div className="contact">
            <div className="name-email">
                Name: {contact.name} <br />
                Email: {contact.email} 
            </div>

            <div className="trash">
                <svg  xmlns="http://www.w3.org/2000/svg" width="24" height="24"  
                    fill="darkred" viewBox="0 0 24 24" >
                    <path d="M17 6V4c0-1.1-.9-2-2-2H9c-1.1 0-2 .9-2 2v2H2v2h2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8h2V6zM9 4h6v2H9zM6 20V8h12v12z"/><path d="M9 10h2v8H9zM13 10h2v8h-2z"/>
                </svg>
            </div>

        </div>
        </>
    )
}