import React from 'react';
import { Link } from 'react-router-dom';
import BlogCard from './BlogCard/BlogCard';
import test_blogs from './Blogs.json';

import './Blog.css';

function Blog() {
    return (
        <>
            <div className="blogCardContainer">
                {test_blogs.map((blog, index) => {
                    var element = ""

                    if(index % 3 === 0)
                        element = <Link to={`/blog/${blog.id}`}>
                            <BlogCard blog={blog} background="var(--sky-blue)"/>
                        </Link>
                    else if(index % 3 === 1)
                        element = <Link to={`/blog/${blog.id}`}>
                            <BlogCard blog={blog} background="var(--cyan)"/>
                        </Link>
                    else
                        element = <Link to={`/blog/${blog.id}`}>
                            <BlogCard blog={blog} background="var(--orange)"/>
                        </Link>
                    return element
                })}
            </div>
        </>
    );
}

export default Blog;