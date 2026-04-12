import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddContact({setContacts}) {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    
    const navigate = useNavigate();

    function add(e) {
        e.preventDefault();

        if (!name.trim() || !email.trim()) {
            alert("Enter Name and Email");
            return;
        }

        if (!email.endsWith("@gmail.com")) {
            alert("Enter a valid Gmail Address");
            return;
        }

        const newStudent = {id: Date.now(), name, email};

        setContacts(prev => [...prev, newStudent])

        setName("");
        setEmail("");
        navigate("/");
    }

    return(
        <div className="addContact">
            <h1>Add Contact</h1>

            <form onSubmit={add}>
                <div className="name">
                    <label>Name:</label>
                    <input type="text" name="name" placeholder="Name" value={name} onChange={e => setName(e.target.value)} required/>
                </div>

                <div className="email">
                    <label>Email: </label>
                    <input type="text" name="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required/>
                </div>

                <button>Add</button> <br /><br />
            </form>
        </div>
    )
}