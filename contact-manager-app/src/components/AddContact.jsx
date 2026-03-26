export default function AddContact({add}) {

    return(
        <div className="addContact">
            <h1>Add Contact</h1>

            <form onSubmit={add}>
                <div className="name">
                    <label>Name:</label>
                    <input type="text" name="name" placeholder="Name" />
                </div>

                <div className="email">
                    <label>Email: </label>
                    <input type="text" name="email" placeholder="Email" />
                </div>

                <button>Add</button> <br /><br />
            </form>
        </div>
    )
}