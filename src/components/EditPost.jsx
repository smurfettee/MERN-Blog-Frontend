import { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';
import { useNavigate, useParams } from "react-router-dom";

export default function EditPost(){

    const [title, setTitle] = useState(null);
    const [summary, setSummary] = useState(null);
    const [content, setContent] = useState(null);
    const [redirect, setRedirect] = useState(false);
    const navigate = useNavigate();
    const {id} = useParams();

    useEffect(() => {
        fetch(`http://localhost:4000/post/${id}`)
        .then(response => {
            response.json().then(postinfo => {
                setTitle(postinfo.title);
                setContent(postinfo.content);
                setSummary(postinfo.summary);
            })
        })
    }, []);

    async function updatePost(ev) {
        ev.preventDefault();
        console.log(title,  summary, content);

        await fetch(`http://localhost:4000/post/${id}`, {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({'title': title, 'summary': summary, 'content': content}),
            credentials: 'include',
        });

        setRedirect(true);
    }

    if (redirect) {
        return navigate("/");
    }

    return (
        <div className="formContainer">
            <form onSubmit={updatePost}>
                <button>Edit Post</button>
                <input 
                    type="title" 
                    placeholder="Title"
                    value={title || ""}
                    onChange={ev => setTitle(ev.target.value)}/>
                <input 
                    type="summary" 
                    placeholder="Summary"
                    value={summary || ""}
                    onChange={ev => setSummary(ev.target.value)}/>
                <ReactQuill
                    value={content || ""}
                    onChange={ev => setContent(ev)}/>
            </form>
        </div>
    );
}