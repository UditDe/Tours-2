import React from "react";
import Tour from "./Tour";
const Tours = ({ tours, removeTours }) => {
  return (
    <section>
      <div className="title">
        <h1>Our Tours</h1>
        <div className="underline"></div>
      </div>
      <div className="item">
        {tours.map((eachTour) => {
          return <Tour key={eachTour.id} {...eachTour} removeTours= {removeTours}></Tour>;
        })}
      </div>
    </section>
  );
};

export default Tours;
