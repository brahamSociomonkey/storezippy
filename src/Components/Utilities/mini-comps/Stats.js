import React from "react";
import HeadingWithLine from "./HeadingWithLine";
import ResponsiveDisplayImg from "./ResponsiveDisplayImg";

const Stats = ({ data }) => {
  const { heading, img } = data;

  return (
    <section className="stats">
      <HeadingWithLine data={{ heading }} />
      <br />
      <br />
      <ResponsiveDisplayImg
        data={{
          img,
        }}
      />
    </section>
  );
};

export default Stats;
