import React from 'react';
import { Link } from 'react-router-dom';
import BlogCard from './BlogCard/BlogCard';
import test_blogs from './Blogs.json';

import './Blog.css';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';

function Blog() {
    return (
        <>
            <Header />
            <div className="blogCardContainer">
                {test_blogs.map(blog => {
                    return (
                        <Link to={`/blog/${blog.id}`}>
                            <BlogCard blog={blog}/>
                        </Link>
                    )
                })}
            </div>
            <Footer />
        </>
    );
}

export default Blog;