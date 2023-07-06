import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"
import {formatISO9075} from "date-fns";
import { UserContext } from "./userContext";

export default function PostPage() {

    const [postInfo, setPostInfo] = useState(null);
    const {userInfo} = useContext(UserContext);
    const {id} = useParams();
    
    useEffect(() => {
        fetch(`http://localhost:4000/post/${id}`).then(response => {
            response.json().then(info => {
                setPostInfo(info);
            });
        });
        
    }, []);

    return  (postInfo &&
        <div className="pageContainer">
            <div className="pageWrapper">
                <h1>{postInfo.title}</h1>
                <div className="blogInfo">
                    <b><p>{postInfo.author.username}</p></b>
                    <b><p>{formatISO9075(new Date(postInfo.createdAt))}</p></b>
                </div>
                {userInfo.id && (userInfo.id === postInfo.author._id) && (
                    <div className="editWrapper">
                        <Link className="editButton" to={`/edit/${postInfo._id}`}>
                            Edit this post
                        </Link>
                    </div>
                )}
                <div className="content" dangerouslySetInnerHTML={{__html:postInfo.content}}/>
            </div>
        </div>
    )
}