import { useEffect, useState } from "react";
import Blog from "./blog";

export default function IndexComp(){

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:4000/post').then(response => {
            response.json().then(postss => {
                setPosts(postss);
            });
        });
    }, []);

    return (
        <>
            {posts.length > 0 && posts.map( post => (
                <Blog {...post} />
            ))}
        </>
    );
}