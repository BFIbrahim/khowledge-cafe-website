import React from 'react';
import './SingleProduct.css'

const SingleProduct = (props) => {
    console.log(props.Blogs)
    return (
        <div className='Blogs-container'>
            <img src={props.Blogs.coverImage} alt="" />
            
        </div>
    );
};

export default SingleProduct;