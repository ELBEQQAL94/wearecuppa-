import React from "react";
import Work from "../../images/our_work.jpg";
import project01 from "../../images/project01.jpg";
import project02 from "../../images/project02.jpg";
import project03 from "../../images/project03.jpg";
import project04 from "../../images/project04.jpg";
import Flip from "react-reveal/Flip";
import Slide from "react-reveal/Slide";


// Components
import Galery from "../../Components/ui/Galery";
import Description from "../../Components/ui/Description";
import ProjectCart from "../../Components/ui/ProjectCart";
import Footer from '../../Components/footer';


const OurWork = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <Flip left>
            <Description
              title="Our Work"
              info="Hard work, passion and dedication goes into every project we work on. Take a look at our collection of recent work to see for yourself."
            />
          </Flip>
        </div>
        <div className="col-md-6">
          <Flip right>
            <Galery src={Work} alt="our work" title="our work" />
          </Flip>
        </div>
      </div>

      <div className="row">
        <div className="col-md-6">
          <Slide left duration={500}>
            <ProjectCart
              src={project01}
              title="project-one"
              alt="project-one"
            />
          </Slide>
        </div>
      </div>

      <div className="row">
        <div className="col">
          <Slide right duration={1000}>
            <ProjectCart
              src={project02}
              alt="project-two"
              title="project-two"
            />
          </Slide>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 delusion_div" />

        <div className="col-md-6">
          <Slide left duration={1500}>
            <ProjectCart
              src={project03}
              alt="project-three"
              title="project-three"
            />
          </Slide>
        </div>
      </div>

      <div className="row">
        <div className="col">
          <Slide right duration={2000}>
            <ProjectCart
              src={project04}
              alt="project-four"
              title="project-four"
            />
          </Slide>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default OurWork;
