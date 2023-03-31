import React, { useEffect, useState } from 'react';
import SingleProduct from '../SingleProduct/SingleProduct';

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
                blogs.map(blog => <SingleProduct 
                    key = {blog.id}
                    Blogs = {blog}
                ></SingleProduct>)
            }
        </div>
    );
};

export default Blog;