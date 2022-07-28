import React from 'react';

import './BlogCard.css'

export default function BlogCard(props) {
    return (
        <div className="blogCard">
            <ul className="blockCardList" style={{backgroundColor: props.background}}>
                <li>{props.blog.title}</li>
                <li>{props.blog.subject}</li>
                <li>{props.blog.date}</li>
            </ul>
        </div>
    );
}