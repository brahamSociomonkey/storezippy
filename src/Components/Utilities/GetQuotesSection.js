import React from "react";
import ResponsiveDisplayImg from "./mini-comps/ResponsiveDisplayImg";
import { HashLink as Link } from "react-router-hash-link";
import ReactHtmlParser from "react-html-parser";

const GetQuotesSection = ({ data }) => {
  const { heading, img } = data;

  return (
    <section className="quotes">
      <div className="basic-grid-container">
        <div
          data-animname="fade-in-up"
          data-onetime="true"
          data-delay=".1"
          className="content-container"
        >
          <h2 className="heading primary-color primary-font">
            {ReactHtmlParser(heading)}
          </h2>

          <Link className="btn" to="/quotes">
            Get Quotes
          </Link>
        </div>

        <ResponsiveDisplayImg
          data={{
            img,
          }}
        />
      </div>
    </section>
  );
};

export default GetQuotesSection;
