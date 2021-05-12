import React from 'react';
import { Link } from 'react-router-dom';
import BlogCard from './BlogCard/BlogCard';
import test_blogs from './Blogs.json';

import './Blog.css';

function Blog() {
    return (
        <div className="blogCardContainer">
            {test_blogs.map(blog => {
                return (
                    <Link to={`/blog/${blog.id}`}>
                        <BlogCard blog={blog}/>
                    </Link>
                )
            })}
        </div>
    );
}

export default Blog;