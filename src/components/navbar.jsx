import { useContext, useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { UserContext } from "./userContext";
import { useNavigate } from "react-router-dom";

export default function Navbar(){

    const {userInfo, setUserInfo} = useContext(UserContext);
    const [redirect, setRedirect] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        fetch("http://localhost:4000/profile", {
            credentials: 'include',
        }).then(response => {
            response.json().then(userInfo => {
                setUserInfo(userInfo);
            });
        });
    }, []);

    function logout(){
        fetch('http://localhost:4000/logout', {
            credentials: 'include',
            method: 'POST',
        });
        setUserInfo(null);
        setRedirect(true);
    }

    if (redirect){
        navigate('/');
        setRedirect(false);
    }

    const username = userInfo?.username;

    return (
        <div className="navbar">
            <div className="leftNavbar">
                <Link to="/" className="link">Home</Link>
            </div>
            <div className="rightNavbar">
                {username && 
                    (<>
                        <Link to="/newpost" className="link">New Post</Link>
                        <a onClick={logout}>Logout</a>
                    </>)
                }
                {!username && <><Link to="/login" className="link">Login</Link>
                <Link to="/register" className="link">Register</Link></>}
                <Link to="/about"  className="link">About</Link>
            </div>
        </div>
    );
};