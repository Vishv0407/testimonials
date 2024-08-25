import Testimonials from "./components/Testimonials";
import reviews from "./data";

import React from "react";

const App = () => {
  return (
    <div className="container">
      <div className="head">
        <h1>Our Testimonials</h1>
        <div className="underLine"></div>
      </div>
      <Testimonials reviews = {reviews}></Testimonials>
    </div>
  );
};

export default App;
