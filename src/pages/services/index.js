import React from "react";
import Discktop from "../../images/diskctop.jpg";
import Flip from "react-reveal/Flip";
import Slide from "react-reveal/Slide";
import WebDesign from "../../images/responsive-design.png";
import WebDev from "../../images/web-dev.png";
import WebMang from "../../images/managment.jpg";

// Components
import Galery from "../../Components/ui/Galery";
import Description from "../../Components/ui/Description";
import Cart from "../../Components/ui/Cart";
import Footer from '../../Components/footer';

const Services = () => {
  return (
    <>
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <Flip left>
            <Description
              title="Web Services Kent"
              info="Between us, we have the skills and knowledge required to get you and your business set up online. We are passionate about what we do, resulting in delivering a beautifully designed, solidly built website that will serve your business well and last for years to come."
            />
          </Flip>
        </div>
        <div className="col-md-6">
          <Flip right>
            <Galery src={Discktop} alt="discktop" title="discktop" />
          </Flip>
        </div>
      </div>

      <div className="row">
        <div className="col-md-6">
          <Slide left duration={500}>
            <Cart
              title="Web Design"
              info="With an impeccable eye for detail, 
            We are commited to providing knockout 
            web design that not only looks 
            great but is user-friendly 
            and functional too."
              icon={WebDesign}
              alt="web design"
              titleImg="web design"
            />
          </Slide>
        </div>
      </div>

      <div className="row">
        <div className="col">
          <Slide right duration={1000}>
          <Cart
            title="Web Development"
            info="With an impeccable eye for detail, 
            We are commited to providing knockout 
            web design that not only looks 
            great but is user-friendly 
            and functional too."
            icon={WebDev}
            alt="web development"
            titleImg="web development"
          />
          </Slide>
          
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 delusion_div" />

        <div className="col-md-6">
          <Slide left duration={1500}>
          <Cart
            title="Content Managment Integration"
            info="With an impeccable eye for detail, 
            We are commited to providing knockout 
            web design that not only looks 
            great but is user-friendly 
            and functional too."
            icon={WebMang}
            alt="managment"
            titleImg="managment"
          />
          </Slide>
          
        </div>
      </div>

      <div className="row">
        <div className="col">
          <Slide right duration={2000}>
          <Cart
            title="E-commerce Website"
            info="With an impeccable eye for detail, 
            We are commited to providing knockout 
            web design that not only looks 
            great but is user-friendly 
            and functional too."
            icon={WebDesign}
            alt="ecommerce web site"
            titleImg="ecommerce web site"
          />
          </Slide>
          
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default Services;
