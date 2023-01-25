import React, {useState, useEffect}from 'react';
import ReactMarkdown from 'react-markdown';
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
            <ReactMarkdown
            components={{
                code: ({node, ...props}) => <span style={{
                    backgroundColor: '#fce3cb',
                    color: '#494947',
                    fontWeight: 'bold',
                    padding: '1px',
                    borderRadius: '4px',
                }} {...props} />,
                a: ({node, ...props}) => <a style={{
                    color: '#fce3cb'
                }} {...props} >{}</a>,
                blockquote: ({node, ...props}) => <div style={{
                    backgroundColor: 'white',
                    color: '#fce3cb',
                    padding: '0px',
                    borderRadius: '4px'
                }} {...props} />
            }}
            className="markdown">
                {`${subject}&emsp;&emsp;${date}\n${blogContent}`}
            </ReactMarkdown>
        </>
    );
}