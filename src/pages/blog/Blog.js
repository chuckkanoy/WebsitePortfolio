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
                            <BlogCard blog={blog} background="#7494EA"/>
                        </Link>
                        // element = <ProjectCard project={individual} key={individual.id} 
                        //     backgroundColor="#7494EA"/>
                    else if(index % 3 === 1)
                        element = <Link to={`/blog/${blog.id}`}>
                            <BlogCard blog={blog} background="#49BEAA"/>
                        </Link>
                        // element = <ProjectCard project={individual} key={individual.id} 
                        //     backgroundColor="#49BEAA"/>
                    else
                        element = <Link to={`/blog/${blog.id}`}>
                            <BlogCard blog={blog} background="#EE6C4D"/>
                        </Link>
                        // element = <ProjectCard project={individual} key={individual.id} 
                        //     backgroundColor="#EE6C4D"/>
                    return element
                })}
            </div>
        </>
    );
}

export default Blog;