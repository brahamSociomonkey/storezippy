import React from "react";
import ResponsiveDisplayImg from "../../Utilities/mini-comps/ResponsiveDisplayImg";

const DifferenceBetweenPLs = () => {
  // scroll to top
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const dirRoot = `/assets/pages/blogs/difference-between-1PL-2PL-3PL-4PL/`;

  return (
    <div className="blog-page">
      <ResponsiveDisplayImg
        data={{
          img: `${dirRoot}hero.png`,
        }}
      />

      <article className="blog-page-width">
        <br />
        <h1 className="title heading primary-font">
          Difference between 1PL, 2PL, 3PL and 4PL
        </h1>
        <p>
          Written by <span className="author">Garima Mehta</span> | 2 mins 17
          sec Read
        </p>
        <div className="custom-hr"></div>
        <br />
        <br />

        <p>
          So you are interested in outsourcing your fulfillment needs? Well,
          that’s a great idea. But before you do that, it’s important to
          understand the difference between 1PL, 2PL, 3PL and 4PL. Ecommerce
          industry is dominating the world and with so many options on the table
          for party logistics, choosing the one best suitable for your business
          needs might become complicated and overwhelming. But we are here to
          make the concept fairly simple for you to understand and help you
          choose the right one. <br /> <br />
          We have outlined some key points you must know about different types
          of logistics options. Let’s learn in detail about the difference
          between 1PL, 2PL, 3PL and 4PL.
        </p>

        <div className="point">
          <h2 className="heading primary-color">
            1. 1PL (First party logistics)
          </h2>

          <br />
          <img src={`${dirRoot}1pl.png`} alt="" />
          <br />

          <p>
            This is the base model for businesses of small scale and startups.
            It involves only two parties - a sender and a receiver. Sender is
            the manufacturer/distributor who ships the goods and the receiver is
            the customer who receives it.
            <br />
            <br />
            Anyone having goods moved from point A to point B without the
            involvement of a second party is considered as 1PL.
          </p>
        </div>

        <div className="point">
          <h2 className="heading primary-color">
            2. 2PL (Second Party Logistics)
          </h2>

          <br />
          <img src={`${dirRoot}2pl.png`} alt="" />
          <br />

          <p>
            2PL’s involve a second party for the transportation of goods from
            point A to point B via road, rail, sea or air. They own or lease
            specialized means of transportation to cater to their business
            needs. A courier company offering services to transfer
            goods/products from you to your customers is an example of a 2PL.
            <br />
            <br />
            2PL definitely provides you the flexibility in terms of what segment
            of the supply chain you want to outsource but it is not a full
            service logistics solution.
          </p>
        </div>

        <div className="point">
          <h2 className="heading primary-color">
            3. 3PL (Third Party Logistics)
          </h2>

          <br />
          <img src={`${dirRoot}3pl.png`} alt="" />
          <br />

          <p>
            3PL’s gained popularity in the 1990’s. Back then, their main
            functions were restricted to warehousing and transportation. But by
            the late 2000’s 3PL’s started to dominate most people’s preferences
            as they expanded their services by including order fulfillment,
            labelling, packaging, assembly, kitting, returns management etc. to
            their operations. They provide end to end comprehensive fulfillment
            solutions for your business needs. A 3PL will receive the products,
            store them and pick,pack and ship orders to the customers.
            <br />
            <br />
            They have certain advantages over other logistics service providers
            -
            <ul>
              <li>Flexibility of location</li>
              <li>Cost-effective</li>
              <li>Save you your valuable time</li>
              <li>Access to expertise</li>
              <li>Latest technology</li>
              <li>Provides scalability</li>
            </ul>
            For example : StoreZippy is one such 3PL service provider which is
            automated, tech-enabled and highly secure with a strong network of
            warehouses in strategic locations keeping your inventory close to
            your customers.
          </p>
        </div>

        <div className="point" style={{ marginBottom: "0" }}>
          <h2 className="heading primary-color">
            2. 4PL (Fourth Party Logistics)
          </h2>

          <br />
          <img src={`${dirRoot}4pl.png`} alt="" />
          <br />

          <p>
            Fourth party logistics is a model in which the complete supply chain
            management and logistics are outsourced to one service provider.
            4PL’s often engage with a 3PL to manage the logistics part..
            Although their services are best tailored to match your business
            needs, yet outsourcing to a 4PL means giving up almost the entire
            control of your supply chain.
          </p>
        </div>

        <div className="">
          <h1
            className="heading primary-color"
            style={{ color: "#002862", fontSize: "clamp(55px, 10vw, 60px)" }}
          >
            Which one should I choose?
          </h1>
          <p>
            I wish I could tell you that a particular logistics service provider
            is the best one for you but trust me it all depends on what segment
            of your supply chain you want to outsource and what your specific
            business needs are. However, there is no denial about the fact that
            3PL is the most preferred and the most popular amongst all and that
            too for all the good reasons. 3PL’s help you save a lot of your
            valuable time which you can use to focus on expanding your core
            business. They can be your one stop solution for warehousing,
            packaging, transportation and order fulfillment needs.
            <br /> <br />
            If you are looking for a reliable and scalable 3PL, get in touch
            with us and let us know how we can help you grow your business. Hop
            onto our website{" "}
            <a href="https://storezippy.com/" target="_blank" style={{color: "currentcolor", border: "none"}}>https://storezippy.com/</a> to know more
            about us and the services we offer.
          </p>
          <br />
        </div>
      </article>
    </div>
  );
};

export default DifferenceBetweenPLs;
