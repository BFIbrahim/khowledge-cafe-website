import React from 'react';
import './SingleBlog.css'

const SingleProduct = (props) => {
    console.log(props.Blogs)
    return (
        <div className='Blogs-container'>
            <img src={props.Blogs.coverImage} alt="" />
            <div className='author-container'>
                <div className='author'>
                    <img src={props.Blogs.authorImage} alt="" />
                    <div className='ms-3'>
                        <b className='h6'>{props.Blogs.authorName}</b>
                        <p>{props.Blogs.publishDate}</p>
                    </div>
                </div>

                <div>
                    <p>{props.Blogs.readTime} min read</p>
                </div>
            </div>

            <div className='blog-title mb-2'>
                <h4>{props.Blogs.blogTitle}</h4>
                <a href="#">Mark As Read</a>
            </div>
        </div>
    );
};

export default SingleProduct;