import React from "react";
import DarkSection from "../Utilities/DarkSection";
import GetQuotesSection from "../Utilities/GetQuotesSection";
import ResponsiveDisplayImg from "../Utilities/mini-comps/ResponsiveDisplayImg";
import Stats from "../Utilities/mini-comps/Stats";
import SliderContainer from "../Utilities/SliderContainer";
import ReactHtmlParser from "react-html-parser";
import animationObserver from "../Utilities/library/animationObserver";

const WhyUs = () => {
  const dataFroDropDown = [
    {
      icon: "/assets/pages/why-us/icon-marketing-inserts-min.png",
      title: "Marketing Inserts",
      des: "A convenient way to delight your customers with addition of custom inserts viz*. <br />1. Stickers <br />2. Brochures <br />3. Coupons <br />4. Product samples",
    },
    {
      icon: "/assets/pages/why-us/icon-claim-report-min.png",
      title: "Claim Filing Report",
      des: "Receive timely reports to file claims regarding any damage caused to your account from marketplaces or shipping providers.",
    },
    {
      icon: "/assets/pages/why-us/icon-bundling-min.png",
      title: "Bundling",
      des: "We create one unique SKU by putting many items together as one shippable package. <br />It keeps inventory moving at a steady rate.",
    },
    {
      icon: "/assets/pages/why-us/icon-packaging-min.png",
      title: "Custom Packaging",
      des: "We also provide custom packaging solutions tailored to your needs.",
    },
    {
      icon: "/assets/pages/why-us/icon-returns-min.png",
      title: "Returns Management",
      des: "Management of returns is an important part of what StoreZippy does. We efficiently and effectively handle your customer’s returns simplifying the reverse logistics process.",
    },
    {
      icon: "/assets/pages/why-us/icon-payment-min.png",
      title: "Payment Reconciliation",
      des: "Our robust payment reconciliation system gives you better insights into your financial data at the ease of a single click and lets you track your payments easily across scenarios like overcharged shipping, marketplace refunds, overcharged commission etc.",
    },
  ];

  // scroll to top
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  React.useEffect(() => {
    animationObserver();
  }, []);

  return (
    <div id="why-us">
      <div className="hero">
        <ResponsiveDisplayImg
          data={{
            img: "/assets/pages/why-us/hero-new.png",
            mobImg: "/assets/pages/why-us/hero-mob.png",
          }}
        />
      </div>

      <div className="fulfillment-needs">
        <h1
          data-animname="fade-in-up"
          data-onetime="true"
          data-delay="0"
          className="offset-heading primary-font heading-rounded"
        >
          A One stop Window for all your Fulfillment needs
        </h1>

        <div className="basic-grid-container">
          {[
            "customer-centric-focus-min.png",
            "f-assured-min.png",
            "personalised-sols-min.png",
            "surveillence-min.png",
            "eco-friendly.png",
            "negotiated-shipping.png",
          ]?.map((image, index) => (
            <div
              data-animname="fade-in-up"
              data-onetime="true"
              data-delay={index / 10}
              className="grid-item"
              key={index}
            >
              <img
                src={`/assets/pages/why-us/${image}`}
                alt={`/assets/pages/why-us/${image}`}
              />
            </div>
          ))}
        </div>
      </div>

      {/* dark  */}
      <DarkSection
        data={{
          img: "/assets/pages/home/man-on-laptop-min.png",
        }}
      />
      <br />

      {/* Stats */}
      <Stats
        data={{
          heading: "Proven Track Record",
          img: "/assets/pages/why-us/status-min.png",
          mobImg: "/assets/pages/why-us/status-mob-min.png",
        }}
      />

      <div className="hr-gradient-line"></div>

      {/* distributed */}
      <div className="distributed">
        <div className="basic-grid-container">
          <div className="content">
            <h1
              data-animname="fade-in-up"
              data-onetime="true"
              data-delay="0"
              className="offset-heading primary-font heading-rounded"
            >
              Distributed Inventory
            </h1>

            <p data-animname="fade-in-up" data-onetime="true" data-delay="0.2">
              We keep your inventory distributed so that customers in the close
              proximity to one of our many fulfillment centres are eligible for
              same/next day dispatch.
            </p>
          </div>

          {/* <ResponsiveDisplayImg
            data={{
              img: "/assets/pages/why-us/map-india-min.png",
            }}
          /> */}

          <div className="video-container">
            <video
              muted
              autoPlay
              loop
              controls
              src="/assets/pages/why-us/video.m4v"
            ></video>
          </div>
        </div>
      </div>

      {/* slider area  */}
      <SliderContainer
        dataForSlider={[
          {
            img: "/assets/pages/why-us/slider-1-min.png",
            mobImg: "/assets/pages/why-us/slider-1-mob.png",
          },
          {
            img: "/assets/pages/why-us/slider-2-min.png",
            mobImg: "/assets/pages/why-us/slider-2-mob.png",
          },
          {
            img: "/assets/pages/why-us/slider-3-min.png",
            mobImg: "/assets/pages/why-us/slider-3-mob.png",
          },
        ]}
      />

      {/* dropdowns  */}
      <div className="dropdowns-section">
        <h1
          data-animname="fade-in-up"
          data-onetime="true"
          data-delay="0"
          className="offset-heading primary-font heading-rounded"
        >
          Value Added Services
        </h1>

        <div className="dropdowns">
          {dataFroDropDown?.map(({ title, des, icon }, index) => (
            <div className="dropdown-item" key={index}>
              <details>
                {ReactHtmlParser(des)}

                <summary
                  data-animname="fade-in-up"
                  data-onetime="true"
                  data-delay={index / 10}
                >
                  <div>
                    <img className="icon" src={icon} alt={icon} />
                  </div>
                  {ReactHtmlParser(title)}

                  <div>
                    <img
                      src="/assets/pages/why-us/icon-arrow-down-min.png"
                      alt="/assets/pages/why-us/icon-arrow-down-min.png"
                      className="arrow"
                    />
                  </div>
                </summary>
              </details>
            </div>
          ))}
        </div>
      </div>

      {/* get quote  */}
      <GetQuotesSection
        data={{
          img: "/assets/pages/why-us/try-us-min.png",
          heading: `Looking for Fulfillment Centre solutions?<br /><span style="color: #FF8F3F;">Try Us!</span>`,
        }}
      />
    </div>
  );
};

export default WhyUs;
