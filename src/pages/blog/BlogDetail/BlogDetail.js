import React, {useState, useEffect}from 'react';
import { useNavigate, useParams } from 'react-router';
import test_blogs from '../Blogs.json';
import './BlogDetail.css';

export default function BlogDetail() {
    const [blogContent, setBlogContent] = useState("");
    const [date, setDate] = useState("");
    const [subject, setSubject] = useState("");

    var {blog} = useParams();
    var history = useNavigate();

    useEffect(() => {
        var pathRoute = "";

        test_blogs.forEach((test) => {
            if(test.id === blog) {
                pathRoute = test.pathRoute;
                setDate(test.date);
                setSubject(test.subject);
            }
        });

        if(pathRoute === "") history.push('/blog');

        fetch(pathRoute).then(
            (response) => response.text()
        ).then(
            (text) => {
                setBlogContent(text);
            }
        )
    }, [blog, history]);

    return (
        <>
            <div className = "markdown" dangerouslySetInnerHTML= {
                {__html: `${subject}&emsp;&emsp;${date}\n${blogContent}`}
            } />
        </>
    );
}