import React, {useState} from 'react';

const Form = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const makeUser = (e) => {
        e.preventDefault();
        const freshUser = {
            firstName,
            lastName,
            email,
            password,
        };
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
    };

    return(
        <form onSubmit= { makeUser }>
            <div>
                <label>First Name</label>
                <input type="text" onChange={ (e) => setFirstName(e.target.value)} />
            </div>
            {
                firstName && firstName.length < 2  ?
                <p>First name must be at least two (2) characters long!</p> :
                ""
            }
            <div>
                <label>Last Name:</label>
                <input type="text" onChange={ (e) => setLastName(e.target.value)} />
            </div>
            {
                lastName && lastName.length < 2 ? <p>Last name must be at least two (2) characters long!</p> : ""
            }
            <div>
                <label>Email:</label>
                <input type="email" onChange={ (e) => setEmail(e.target.value)} />
            </div>
            {
                email && email.length < 5 ? <p>Email must be at least five (5) characters long!</p> : ""
            }
            <div>
                <label>Password:</label>
                <input type="password" onChange={ (e) => setPassword(e.target.value)} />
            </div>
            {
                password && password.length < 8 ? <p>Password must be at least eight (8) characters long!</p> : ""
            }
            <input type="submit" value= "Make User" />
        <div>
            <p><strong>User Name:</strong> {firstName} {lastName}</p>
            <p><strong>Email:</strong> { email }</p>
            <p><strong>Password</strong> { password }</p>
        </div>
        </form> 
    );
};

export default Form;