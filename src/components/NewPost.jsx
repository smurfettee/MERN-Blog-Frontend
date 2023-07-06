import { useState } from "react";
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';
import { useNavigate } from "react-router-dom";

export default function NewPost(){

    const [title, setTitle] = useState(null);
    const [summary, setSummary] = useState(null);
    const [content, setContent] = useState(null);
    const [redirect, setRedirect] = useState(false);
    const navigate = useNavigate();

    async function createNewPost(ev) {
        ev.preventDefault();
        const data = new FormData;
        data.set('title', title);
        data.set('summary', summary);
        data.set('content', content);
        const response = await fetch('http://localhost:4000/post', {
            method: 'POST',
            body: data,
            credentials: 'include',
        });
        if (response.ok){
            setRedirect(true);
        }
    }

    if (redirect) {
        return navigate("/");
    }

    return (
        <div className="formContainer">
            <form onSubmit={createNewPost}>
                <button>Create Post</button>
                <input 
                    type="title" 
                    placeholder="Title"
                    value={title}
                    onChange={ev => setTitle(ev.target.value)}/>
                <input 
                    type="summary" 
                    placeholder="Summary"
                    value={summary}
                    onChange={ev => setSummary(ev.target.value)}/>
                <ReactQuill
                    value={content}
                    onChange={ev => setContent(ev)}/>
            </form>
        </div>
    );
}