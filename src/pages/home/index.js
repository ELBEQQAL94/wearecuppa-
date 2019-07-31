import React from "react";
import Work from "../../images/our_work.jpg";

// Components
import BusInfo from "./BusInfo";
import Prof from "./Prof";
import SlidesShow from "./SlidesShow";
import Overlay from "./Overlay";
import Galery from "../../Components/ui/Galery";
import OurWork from "./OurWork";
import Footer from "../../Components/footer";

const Home = () => (
  <>
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <BusInfo />
        </div>
        <div className="col-md-6">
          <Galery src={Work} alt="our work" title="our work" />
        </div>
      </div>

      <div className="row">
        <div className="col">
          <Prof />
        </div>
      </div>

      <div className="row">
        <div className="col-md-6">
          <Overlay
            title="CKA Telecoms"
            info="Telecoms company providing businesses in kent and the south east with city-standard solution, locally."
            path={Work}
          />
        </div>
        <div className="col-md-6">
          <Overlay
            title="CKA Telecoms"
            info="Telecoms company providing businesses in kent and the south east with city-standard solution, locally."
            path={Work}
          />
        </div>
        <div className="col-md-6">
          <Overlay
            title="CKA Telecoms"
            info="Telecoms company providing businesses in kent and the south east with city-standard solution, locally."
            path={Work}
          />
        </div>
        <div className="col-md-6">
          <Overlay
            title="CKA Telecoms"
            info="Telecoms company providing businesses in kent and the south east with city-standard solution, locally."
            path={Work}
          />
        </div>
        <div className="col-md-6">
          <Overlay
            title="CKA Telecoms"
            info="Telecoms company providing businesses in kent and the south east with city-standard solution, locally."
            path={Work}
          />
        </div>
        <div className="col-md-6">
          <Overlay
            title="CKA Telecoms"
            info="Telecoms company providing businesses in kent and the south east with city-standard solution, locally."
            path={Work}
          />
        </div>
        <div className="col-md-6">
          <Overlay
            title="CKA Telecoms"
            info="Telecoms company providing businesses in kent and the south east with city-standard solution, locally."
            path={Work}
          />
        </div>
        <div className="col-md-6">
          <Overlay
            title="CKA Telecoms"
            info="Telecoms company providing businesses in kent and the south east with city-standard solution, locally."
            path={Work}
          />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <SlidesShow />
        </div>
      </div>

      <div className="row">
        <div className="col-md-6">
          <OurWork />
        </div>
        <div className="col-md-6">
          <Prof />
        </div>
      </div>
    </div>
    <Footer />
  </>
);

export default Home;
