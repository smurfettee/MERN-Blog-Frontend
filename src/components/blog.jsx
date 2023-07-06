import { Link } from "react-router-dom";
import {formatISO9075} from "date-fns";

export default function Blog({_id, title, summary,  updatedAt, author}){

    return (  
        <div className="textBox">
            <Link to={`/post/${_id}`} className="link">
                <h2>{title}</h2>
            </Link>
            <p>{summary}</p>
            <p className="info">
                <a>{author.username}</a>
                <time>{formatISO9075(new Date(updatedAt))}</time>
            </p>
        </div>
    );

}