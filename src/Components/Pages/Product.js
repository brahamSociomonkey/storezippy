import React from "react";
import ResponsiveDisplayImg from "../Utilities/mini-comps/ResponsiveDisplayImg";
import SectionImgContentGrid from "../Utilities/mini-comps/SectionImgContentGrid";
import animationObserver from "../Utilities/library/animationObserver";
import { Link } from "react-router-dom";

const Product = () => {
  const dirRoot = `/assets/pages/product/`;

  const dataForSteps = [
    {
      heading: "Talk to our expert.",
      content:
        "Our expert will offer a solution tailored exactly to your business needs after a deeper understanding of your business and expectations.",
      img: `${dirRoot}expert-talk.png`,
    },
    {
      heading: "Onboarding.",
      content:
        "Our team will help you set up the account, integrate with the marketplaces and complete the onboarding process.",
      img: `${dirRoot}onboarding.png`,
    },
    {
      heading: "Ship your inventory to us.",
      content: "You ship the inventory directly to our fulfillment center.",
      img: `${dirRoot}ship-inventory.png`,
    },
    {
      heading: "We Receive and do quality check.",
      content:
        "We receive your inventory in our fulfillment center and do the quality check post receival before storing in the warehouse.",
      img: `${dirRoot}quality-check.png`,
    },
    {
      heading: "Pick, pack and ship.",
      content:
        "Once you start receiving online orders, our in house expert team will carefully pick and pack your orders as per the packing norms. After this, the order is dispatched via optimum shipping partner.",
      img: `${dirRoot}pick-pack.png`,
    },
    {
      heading: "Robust returns management.",
      content:
        "We have a seamless returns management system in place. This is an important part of what StoreZippy does.",
      img: `${dirRoot}robust-returns.png`,
    },
  ];

  React.useEffect(() => {
    animationObserver();
  }, []);

  // scroll to top
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div id="product" title="product">
      {/* hero  */}

      <SectionImgContentGrid
        data={{
          sectionClassName: "hero",
          heading: "Struggling with Order Fulfillment?",
          text: "<span style='color: #FF8F3F'>Don’t worry!</span> <br /> We make it simple for you.",
          img: "/assets/pages/product/hero.png",
        }}
      />

      <div className="mini-quotes">
        <p data-animname="fade-in-up"
                  data-onetime="true"
                  data-delay="0">
          We believe that there is a dire need to undergo digital transformation
          to have an upper hand in the era of new innovative technologies.
          Reform your fulfillment process with digitization at StoreZippy.
        </p>

        <Link  data-animname="fade-in-up"
                  data-onetime="true"
                  data-delay="0.2" className="btn" to="/quotes">
          Get Quotes
        </Link>
      </div>

      {/* steps */}
      <section className="steps">
        <h2 data-animname="fade-in-up"
                  data-onetime="true"
                  data-delay="0" className="heading main-heading primary-font">
          Let’s visualise the Fulfillment Process together...
        </h2>

        {dataForSteps?.map(({ heading, content, img }, index) => (
          <div className={`step step-${index + 1}`} key={index}>
            <div className="txt-container">
              <h3 className="heading tertiary-font">{heading}</h3>

              <p className="rte">{content}</p>
            </div>

            <ResponsiveDisplayImg
              data={{
                img,
              }}
            />
          </div>
        ))}
      </section>

      {/* <br />
      <br />
      <div className="basic-grid-container page-width">
        <div className="content-container width-45ch">
          <h2 className="primary-color primary-font heading text-with-line">
            We support a Diversity of Integrations Platform
          </h2>
        </div>

        <div className="img-container">
          <ResponsiveDisplayImg
            data={{
              img: "/assets/pages/product/logos-combined.png",
            }}
          />
        </div>
      </div>
      <br />
      <br /> */}
      {/* inventory management */}
      {/* <SectionImgContentGrid
        data={{
          sectionClassName: "inventory page-width",
          heading: "Inbound Inventory Management",
          text: "Once you ship your inventory to our warehouse centre, we perform thorough quality checks, count the inbound stock and report discrepancies, if any, to you without any delays.",
          img: "/assets/pages/product/inventory.png",
          imgRight: false,
        }}
      /> */}

      {/* inventory management dashboard */}
      {/* <SectionImgContentGrid
        data={{
          sectionClassName: "inventory-dashboard page-width",
          heading: "Inventory Storage Management",
          text: "After checking the stock, we add it to our system and allocate an appropriate location in the warehouse. The scalability of STORE ZIPPY’s system makes us suitable for a large number of businesses.",
          img: "/assets/pages/product/inventory-dashboard.png",
          mobImg: "/assets/pages/product/inventory-dashboard-mob.png",
          imgRight: true,
        }}
      /> */}

      {/* report */}
      {/* <SectionImgContentGrid
        data={{
          sectionClassName: "report page-width",
          heading: "Reporting",
          text: "To manage your stock within our warehouse, our system outputs a standard suite of reports. These reports are shared with you so that you have a clear visibility into the operations and performance.",
          img: "/assets/pages/product/report.png",
          mobImg: "/assets/pages/product/report-mob.png",
          imgRight: false,
        }}
      /> */}

      {/* dispatch */}
      {/* <SectionImgContentGrid
        data={{
          sectionClassName: "dispatch page-width",
          heading: "One Day Dispatch",
          text: "STORE ZIPPY prioritizes your business need of getting things where they need to be as quickly as possible. That’s why we offer a same day delivery service for the orders placed before 10am. What’s more? You will be able to track the progress online via our live dashboard.",
          img: "/assets/pages/product/dispatch.png",
          imgRight: true,
        }}
      /> */}

      {/* returns */}
      {/* <SectionImgContentGrid
        data={{
          sectionClassName: "returns page-width",
          heading: "Returns Management",
          text: "Management of returns is an important part of what STORE ZIPPY does. First and foremost, we do a thorough check of the returned stock. After the check, as per your guidelines, we will either return the items back to the stock or arrange it to be returned to you. ",
          img: "/assets/pages/product/returns.png",
          mobImg: "/assets/pages/product/returns-mob.png",
          imgRight: false,
        }}
      /> */}

      {/* warehouse */}
      <SectionImgContentGrid
        data={{
          sectionClassName: "warehouse",
          heading: "Your On Demand Digital Warehouse Partner",
          text: "Download the free guide today and get a jump start on your 3PL Service Provider.",
          img: "/assets/pages/product/download.png",
          urlTo: "/guide",
          urlText: "Download",
          imgRight: true,
        }}
      />
    </div>
  );
};

export default Product;
