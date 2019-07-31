import React from "react";
import Flip from "react-reveal/Flip";
import blog03 from "../../images/blog03.jpg";

// Components
import Description from "../../Components/ui/Description";
import Galery from "../../Components/ui/Galery";
import Footer from "../../Components/footer";

const WorkWithUs = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <Flip left>
              <Description
                title="Work With Us"
                info="If you have a project you would like to discuss with us and feel we would be a great match for you, please get in touch via either the form below, by phone or by email – we’d love to hear from you."
              />
            </Flip>
          </div>
          <div className="col-md-6">
            <Flip right>
              <Galery src={blog03} alt="discktop" title="discktop" />
            </Flip>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default WorkWithUs;
