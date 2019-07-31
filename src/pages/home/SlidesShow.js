import React from "react";
import work from "../../images/our_work.jpg";
import blog02 from "../../images/blog02.jpg";
import blog01 from "../../images/blog01.jpg";

const SlidesShow = () => {
  return (
    <div className="slides">
      <h1>website services to help you succeed</h1>
      <div
        id="carouselExampleSlidesOnly"
        className="carousel slide"
        data-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={work} className="img-thumbnail d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img
              src={blog01}
              className="img-thumbnail d-block w-100"
              alt="blog"
            />
          </div>
          <div className="carousel-item">
            <img
              src={blog02}
              className="img-thumbnail d-block w-100"
              alt="blog"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlidesShow;
