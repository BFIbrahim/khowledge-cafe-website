import React, { useEffect, useState } from 'react';
import SingleBlog from '../SingleBlog/SingleBlog';

const Blog = () => {
    const [blogs, setBlogs] = useState([])

    useEffect(() => {
        fetch('blog.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])
    
    return (
        <div>
            {
                blogs.map(blog => <SingleBlog 
                    key = {blog.id}
                    Blogs = {blog}
                ></SingleBlog>)
            }
        </div>
    );
};

export default Blog;