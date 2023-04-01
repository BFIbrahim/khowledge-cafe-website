import React from 'react';
import './SingleBlog.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'

const SingleProduct = (props) => {

    const addBlog = props.addBlogToSideCard

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
                    <p>{props.Blogs.readTime} min read <button className='btn' onClick={() => addBlog(props.Blogs, props.Blogs.blogTitle, props.Blogs.readTime) }><FontAwesomeIcon icon={faBookmark}/></button></p>
                </div>
            </div>

            <div className='blog-title mb-2'>
                <h4>{props.Blogs.blogTitle}</h4>
                <button className='btn'><a href="#">Mark As Read</a></button>
            </div>
        </div>
    );
};

export default SingleProduct;