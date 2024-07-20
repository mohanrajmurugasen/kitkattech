import React from "react";

import Slider from "../../Slider/Slider";

import MiddleBanner from "../../Middlebanner/Middlebanner";
import CourseContent from "../../Course/Course";
import Flip from "../../Flip/Flip";
import KnownUs from "../../Known/Exitknown";
import "./Home.css";

const Home = () => {
  return (
    <div className="commonHome">
      <Slider />
      <KnownUs />
      <MiddleBanner />
      <CourseContent />
      <Flip />
    </div>
  );
};
export default Home;
