import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddContact({setContacts}) {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    
    function add(e) {
        e.preventDefault();

        if (!email.endsWith("@gmail.com")) {
            alert("Enter a valid Gmail Address");
            return;
        }

        const newStudent = {id: Date.now(), name, email};

        setContacts(prev => [...prev, newStudent])

        setName("");
        setEmail("");
    }

    const navigate = useNavigate();

    function toHome() {
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

                <button onClick={toHome}>Add</button> <br /><br />
            </form>
        </div>
    )
}