import { useNavigate } from "react-router-dom"

export default function ContactCard({ contact, onDelete }) {
    const navigate = useNavigate();
    
    return(
        <>
        <div className="contact">
            <div className="name-email">
                Name: {contact.name} <br />
                Email: {contact.email} 
            </div>

            <div>
                <span className="trash" onClick={() => onDelete(contact.id)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"  
                        fill="currentColor" viewBox="0 0 24 24" >
                        <path d="M17 6V4c0-1.1-.9-2-2-2H9c-1.1 0-2 .9-2 2v2H2v2h2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8h2V6zM9 4h6v2H9zM6 20V8h12v12z"/><path d="M9 10h2v8H9zM13 10h2v8h-2z"/>
                    </svg>
                </span>
                
                <span className="edit" onClick={() => navigate(`/edit/${contact.id}`)}>
                    <svg  xmlns="http://www.w3.org/2000/svg" width="24" height="24"  
                    fill="currentColor" viewBox="0 0 24 24" >
                    <path d="M5 21h14c1.1 0 2-.9 2-2v-7h-2v7H5V5h7V3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2"></path><path d="M7 13v3c0 .55.45 1 1 1h3c.27 0 .52-.11.71-.29l9-9a.996.996 0 0 0 0-1.41l-3-3a.996.996 0 0 0-1.41 0l-9.01 8.99A1 1 0 0 0 7 13m10-7.59L18.59 7 17.5 8.09 15.91 6.5zm-8 8 5.5-5.5 1.59 1.59-5.5 5.5H9z"></path>
                    </svg>
                </span>
            </div>

        </div>
        <hr className="hr"/>
        </>
    )
}