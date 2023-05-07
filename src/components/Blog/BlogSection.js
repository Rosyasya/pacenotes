import React from "react";
import blogImage from '../../images/blogImage.png'
import blogMain from '../../images/blogmain.png'
import BlogCard from "./BlogCard/BlogCard";

const BlogSection = () => {
    return (
        <div className='blog_wrapper'>
            <div className="blog_container">
                <div className="blog_container__main">
                    <div className="blog_container_img__main">
                        <img src={blogMain} alt="people"/>
                    </div>
                    <div className="blog_container_info__main">
                        <h4>29 Jun 2022</h4>
                        <h2>Marketing Lessons from the CPG Industry: Insights from a Fractional CMO</h2>
                        <p>Learn practical tips and strategies for marketing in the CPG industry from a Fractional CMO with years of experience</p>
                    </div>
                </div>
                <div className="blog_card_container">
                    <BlogCard title='Exploring Success and Challenges in the CPG/DTC Industry: A First-Hand Account' description='Get an exclusive look into the world of consumer packaged goods (CPG) and direct-to-consumer (DTC) marketing from a seasoned industry professional.' date='29 Jun 2022' img={blogImage} />
                    <BlogCard title='Exploring Success and Challenges in the CPG/DTC Industry: A First-Hand Account' description='Get an exclusive look into the world of consumer packaged goods (CPG) and direct-to-consumer (DTC) marketing from a seasoned industry professional.' date='29 Jun 2022' img={blogImage} />
                    <BlogCard title='Exploring Success and Challenges in the CPG/DTC Industry: A First-Hand Account' description='Get an exclusive look into the world of consumer packaged goods (CPG) and direct-to-consumer (DTC) marketing from a seasoned industry professional.' date='29 Jun 2022' img={blogImage} />
                    <BlogCard title='Exploring Success and Challenges in the CPG/DTC Industry: A First-Hand Account' description='Get an exclusive look into the world of consumer packaged goods (CPG) and direct-to-consumer (DTC) marketing from a seasoned industry professional.' date='29 Jun 2022' img={blogImage} />
                    <BlogCard title='Exploring Success and Challenges in the CPG/DTC Industry: A First-Hand Account' description='Get an exclusive look into the world of consumer packaged goods (CPG) and direct-to-consumer (DTC) marketing from a seasoned industry professional.' date='29 Jun 2022' img={blogImage} />
                    <BlogCard title='Exploring Success and Challenges in the CPG/DTC Industry: A First-Hand Account' description='Get an exclusive look into the world of consumer packaged goods (CPG) and direct-to-consumer (DTC) marketing from a seasoned industry professional.' date='29 Jun 2022' img={blogImage} />
                    <BlogCard title='Exploring Success and Challenges in the CPG/DTC Industry: A First-Hand Account' description='Get an exclusive look into the world of consumer packaged goods (CPG) and direct-to-consumer (DTC) marketing from a seasoned industry professional.' date='29 Jun 2022' img={blogImage} />
                    <BlogCard title='Exploring Success and Challenges in the CPG/DTC Industry: A First-Hand Account' description='Get an exclusive look into the world of consumer packaged goods (CPG) and direct-to-consumer (DTC) marketing from a seasoned industry professional.' date='29 Jun 2022' img={blogImage} />
                </div>
            </div>
        </div>
    );
};

export default BlogSection;