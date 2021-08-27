import React from "react";
import ResponsiveDisplayImg from "../Utilities/mini-comps/ResponsiveDisplayImg";

const Careers = () => {
  const dirRoot = `/assets/pages/careers/`;

  return (
    <div id="careers">
      <div className="hero">
        <ResponsiveDisplayImg
          data={{
            img: `${dirRoot}hero-min.png`,
            mobImg: `${dirRoot}hero-mob-min.png`,
          }}
        />
      </div>

      <div className="content">
        <p>
          We believe our employees are our most important assets who work in
          tandem with the vision of our organisation. We are growing to be
          India’s one of the best order fulfillment companies by building a team
          of people passionate to be a part of our growth journey.
          <br />
          <br />
          If you are willing to join our detail-oriented team where exceeding
          expectations and doing smart work (also hard work but mostly smart
          work) is ingrained in our DNA, click below :
        </p>

        <a href="#" target="_blank" className="btn" rel="">
          Apply now
        </a>
      </div>
    </div>
  );
};

export default Careers;
