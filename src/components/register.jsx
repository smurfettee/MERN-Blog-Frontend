import { useState } from "react";

export default function Register(){

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    async function Register(ev){
        ev.preventDefault();
        const response = await fetch('http://localhost:4000/register', {
            method: 'POST',
            body: JSON.stringify({username, password}),
            headers: {'Content-Type': 'application/json'},
        });

        if (response.status == 200){
            alert("Registration successful");
        }else{
            alert("Registration failed");
        }
    }

    return (
        <div className="outsideContainer">
            <div className="loginContainer">
                <label htmlFor="username">Username</label>
                <input id="username" value={username} onChange={ev => setUsername(ev.target.value)}></input>
                <label htmlFor="password">Password</label>
                <input id="password" value={password} onChange={ev => setPassword(ev.target.value)}></input>
                <button id="register" onClick={Register}>Register</button>
            </div>
        </div>
    )

}