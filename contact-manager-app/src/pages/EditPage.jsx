import { useState } from "react";

export default function EditPage() {
    const [name, setName] = useState("");

    function test() {
        setName("Yo");
    }
    return (
        <>
            <h1>Edit Contact</h1>

            <form>
                <div>
                    <label>Name:</label>
                    <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} required/>
                </div>
                    
                <div className="email">
                    <label>Email: </label>
                    <input type="text" name="email" required/>
                </div>

                <button onClick={test}>Done</button>
                <button>Cancel</button>
            </form>
        </>
    )
}