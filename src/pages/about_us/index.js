import React from "react";
import aboutus from "../../images/about-us.jpg";
import person01 from "../../images/person01.jpg";
import person02 from "../../images/person02.jpeg";
import Flip from "react-reveal/Flip";

// Components
import Galery from "../../Components/ui/Galery";
import Description from "../../Components/ui/Description";
import TeamCart from "./TeamCart";
import Agency from "./Agency";
import Footer from "../../Components/footer";

const AboutUs = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <Flip left>
            <Description
              title="About Us"
              info="We are an enthusiastic and driven web design team who work together to deliver beautiful and engaging websites that will meet your individual requirements and help bring your business to life online."
            />
          </Flip>
        </div>
        <div className="col-md-6">
          <Flip right>
            <Galery src={aboutus} alt="about us" title="about us" />
          </Flip>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <Agency />
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <TeamCart
            src={person01}
            alt="person01"
            title="person01"
            info="Co-founder & Web Developer"
            name="Ben Senior"
          />
        </div>
        <div className="col-md-6">
          <TeamCart
            src={person02}
            alt="person02"
            title="person02"
            info="Co-founder & Web Designer"
            name="Faye Senior"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;
