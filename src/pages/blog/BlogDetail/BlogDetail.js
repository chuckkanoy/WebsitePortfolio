import React, {useState, useEffect}from 'react';
import ReactMarkdown from 'react-markdown';
import { useParams } from 'react-router';
import test_blogs from '../Blogs.json';
import './BlogDetail.css';

export default function BlogDetail() {
    const [blogContent, setBlogContent] = useState("");
    const [date, setDate] = useState("");
    const [subject, setSubject] = useState("");

    var {blog} = useParams();

    useEffect(() => {
        test_blogs.forEach((test) => {
            if(test.id == blog) {
                blog = test;
                setDate(test.date);
                setSubject(test.subject);
            } 
        });

        fetch(blog.pathRoute).then(
            (response) => response.text()
        ).then(
            (text) => {
                setBlogContent(text);
            }
        )
    }, [blog]);

    return (
        <ReactMarkdown
        components={{
            code: ({node, ...props}) => <span style={{
                backgroundColor: 'white',
                color: '#ee82ee',
                padding: '0px',
                borderRadius: '4px',
            }} {...props} />,
            a: ({node, ...props}) => <a style={{
                color: '#ee82ee'
            }} {...props} />,
            blockquote: ({node, ...props}) => <div style={{
                backgroundColor: 'white',
                color: '#ee82ee',
                padding: '0px',
                borderRadius: '4px'
            }} {...props} />
        }}
        className="markdown">
            {`${subject}&emsp;&emsp;${date}\n${blogContent}`}
        </ReactMarkdown>
    );
}