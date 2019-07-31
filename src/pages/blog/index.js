import React from 'react';
import blog01 from "../../images/blog01.jpg";
import blog02 from "../../images/blog02.jpg";
import blog03 from "../../images/blog03.jpg";

// Components
import Cart from './Cart';
import Footer from '../../Components/footer';

const Blog = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                     <Cart 
                        src={blog01} 
                        alt="blog01" 
                        title="blog01" 
                        info="If you’re looking to create a website for your business, then you’ve probably come across the term content management system, or CMS,..."
                        name="A guide to content management systems"  
                        />
                </div>
                <div className="col-md-6">
                     <Cart 
                        src={blog02} 
                        alt="blog02" 
                        title="blog02" 
                        info="There’s a popular saying in the world of web design and creation: Content is king. That’s because no matter how good your..."
                        name="Writing great content for your website"  
                        />
                </div>
                <div className="col-md-6">
                     <Cart 
                        src={blog03} 
                        alt="blog03" 
                        title="blog03" 
                        info="The days of weighing up whether or not you need a website for your business are long gone. These days, if you..."
                        name="Creating a website for your business"  
                        />
                </div>
            </div>
            <Footer />
        </div>
    )
};

export default Blog;