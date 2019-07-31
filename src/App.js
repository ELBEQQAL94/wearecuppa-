import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";

// Components
import Header from "./Components/header";

// our pages
import Blog from "./pages/blog";
import AboutUs from "./pages/about_us";
import OurWork from "./pages/our_work";
import Services from "./pages/services";
import WorkWithUs from "./pages/work_with_us";
import Home from "./pages/home";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Route exact path="/" component={Home} />
        <Route exact path="/services" component={Services} />
        <Route exact path="/our-work" component={OurWork} />
        <Route exact path="/about-us" component={AboutUs} />
        <Route exact path="/blog" component={Blog} />
        <Route exact path="/work-with-us" component={WorkWithUs} />
      </Router>
    </>
  );
}

export default App;
