import Main from "../../components/Main/Main";
import BlogSection from "../../components/Blog/BlogSection";

const Blog = () => {
    return (
        <>
            <Main title='Welcome to my blog!' description='In this blog, I share my thoughts on the latest marketing trends, provide practical tips and advice on how to improve your marketing strategy, and offer insights into the latest technologies and tools that can help you succeed.' />
            <BlogSection />
        </>
    );
};

export default Blog;