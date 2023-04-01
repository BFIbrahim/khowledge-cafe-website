import React, { useEffect, useState } from 'react';
import SingleBlog from '../SingleBlog/SingleBlog';
import './Blog.css'

const Blog = () => {

    const [blogs, setBlogs] = useState([])
    const [singleBlog, setsingleBlog] = useState([])
    const [addedBlogs, setAddedBLog] = useState([])
    const [newreadTime, setnewReadTime] = useState(0)

    useEffect(() => {
        fetch('blog.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])

    const setReadTime = (readTime) => {
        
        const result = JSON.parse(newreadTime + readTime)
        setnewReadTime(result)
    }

    const addBlogToSideCard = (Blog, blogTitle) => {
        const newCard = [...singleBlog, Blog]
        setsingleBlog(newCard)

        const newaddedCard = [...addedBlogs, blogTitle]
        setAddedBLog(newaddedCard)
        
    }

    return (
        <div className='main row mt-3'>
            <div className='blog col-md-8'>
                {
                    blogs.map(blog => <SingleBlog
                        key={blog.id}
                        Blogs={blog}
                        addBlogToSideCard={addBlogToSideCard}
                        setReadTime = {setReadTime}
                    ></SingleBlog>)
                }
            </div>

            <div className='sidecard col-md-4'>
                <div className='readTime'>
                    <h5>Spent Time On read: {newreadTime} min read</h5>
                </div>

                <div className='bookmark-list-container'>
                    <div>
                        <h5>Bookmarked Blogs: {singleBlog.length}</h5>

                    </div>

                    <div className='bookmarked-Blog'>
                        {
                            addedBlogs.map(addedBlog => <h6>{addedBlog}</h6>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;