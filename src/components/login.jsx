import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "./userContext";

export default function Login(){

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [redirect, setRedirect] = useState(false);
    const navigate = useNavigate();
    const {setUserInfo} = useContext(UserContext);
    useEffect(() => {
        setRedirect(true);
    }, [redirect]);

    async function Login(ev){
        ev.preventDefault();
        const response = await fetch('http://localhost:4000/login', {
            method: 'POST',
            body: JSON.stringify({username, password}),
            headers: {'Content-Type': 'application/json'},
            credentials: 'include',
        });

        if (response.ok){
            response.json().then(userInfo => {
                setUserInfo(userInfo);
                setRedirect(true);
            })
            
        }else {
            alert("Wrong credentials");
        }

        if (redirect){
            return navigate("/");
        }
    }

    return (
        <div className="outsideContainer">
            <div className="loginContainer">
                <label htmlFor="username">Username</label>
                <input id="username" value={username} onChange={ev => setUsername(ev.target.value)}></input>
                <label htmlFor="password">Password</label>
                <input id="password" value={password} onChange={ev => setPassword(ev.target.value)}></input>
                <button id="login" onClick={Login}>Login</button>
            </div>
        </div>
    );

}