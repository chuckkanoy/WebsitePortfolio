import React from 'react';

import './BlogCard.css'

export default function BlogCard({blog}) {
    return (
        <div className="blogCard">
            <ul className="blockCardList">
                <li>{blog.title}</li>
                <li>{blog.subject}</li>
                <li>{blog.date}</li>
            </ul>
        </div>
    );
}