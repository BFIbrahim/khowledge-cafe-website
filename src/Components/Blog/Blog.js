import React, { useEffect, useState } from 'react';

const Blog = () => {
    const [blog, setBlog] = useState()

    useEffect(() => {
        fetch('blog.json')
        .then(res => res.json())
        .then(data => setBlog(data))
    },[])
    return (
        <div>
            <h1>Hello world</h1>
        </div>
    );
};

export default Blog;