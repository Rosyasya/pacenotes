import React from "react";

const BlogCard = ( { title, description, date, img, alt } ) => {
    return (
        <div className='blogCard_container'>
            <div className="blogCard_img_container">
                <img src={img} alt={alt}/>
            </div>
            <h4>{date}</h4>
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    );
};

export default BlogCard;