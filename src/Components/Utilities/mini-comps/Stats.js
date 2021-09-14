import React from "react";
import HeadingWithLine from "./HeadingWithLine";
import ResponsiveDisplayImg from "./ResponsiveDisplayImg";

const Stats = ({ data }) => {
  const { heading, img, mobImg } = data;

  return (
    <section className="stats">
      <HeadingWithLine
        data-animname="fade-in-up"
        data-onetime="true"
        data-delay=".0"
        data={{ heading }}
      />
      <br />
      <br />
      <ResponsiveDisplayImg
        data={{
          img,
          mobImg,
        }}
      />
    </section>
  );
};

export default Stats;
