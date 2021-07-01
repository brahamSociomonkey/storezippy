import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import DarkSection from "../Utilities/DarkSection";
import GetQuotesSection from "../Utilities/GetQuotesSection";
import HeroSlider from "../Utilities/HeroSlider";
// import { Link } from "react-router-dom";
import animationObserver from "../Utilities/library/animationObserver";
import HeadingWithLine from "../Utilities/mini-comps/HeadingWithLine";
import ResponsiveDisplayImg from "../Utilities/mini-comps/ResponsiveDisplayImg";
import Stats from "../Utilities/mini-comps/Stats";

const Home = () => {
  React.useEffect(() => {
    animationObserver();
  }, []);

  // scroll to top
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div id="home" title="home">
      {/* hero  */}
      <HeroSlider
        data={[
          {
            img: "/assets/pages/home/hero-img-1-min.png",
            mobImg: "/assets/pages/home/hero-img-mob-1-min.png",
            textData: {
              color: "#fff",
              heading:
                "<span style='color: #2CDEF8; margin-right: 1rem' data-animname='fade-in-up'            data-onetime='true' data-delay='.1'>Reliable.</span><span style='color: #FFCA41; margin-right: 1rem' data-animname='fade-in-up'            data-onetime='true' data-delay='.2'>Flexible.</span><span style='color: #FF8F3F; margin-right: 1rem' data-animname='fade-in-up'            data-onetime='true' data-delay='.3'>Scalable.</span>",
              content: "India’s most cost-effective fulfillment solution",
              buttonText: "Get Quotes",
              buttonURL: "/quotes",
            },
          },
        ]}
      />

      {/* quotes  */}
      <section className="quotes">
        <div className="basic-grid-container page-width">
          <div
            data-animname="fade-in-up"
            data-onetime="true"
            data-delay=".1"
            className="grid-item grid-item-1"
          >
            <div className="txt-container">
              <p className="rte">
                When logistics becomes the most critical part of your business
                to deal with, partnering with warehouse services is a wise idea.
                If you’re looking for a comprehensive fulfillment solution, then
                STOREZIPPY is the place to go.
                <br />
                <br />
                {/* We pride ourselves on tailoring a warehousing solution to help
                our clients achieve their storage, fulfilment and distribution
                goals.
                <br />
                <br />
                We don't want to think of ourselves just as a warehousing
                service provider but as your active business partner.
                <br />
                <br /> */}
              </p>

              <Link className="btn" to="/quotes">
                Get Quotes
              </Link>
            </div>
          </div>
          <div
            data-animname="fade-in-up"
            data-onetime="true"
            data-delay=".3"
            className="grid-item grid-item-2"
          >
            <div className="img-container">
              <img
                src="/assets/pages/home/forklift-vector-min.png"
                alt="image"
              />
            </div>
          </div>
        </div>
      </section>

      {/* display img  */}
      <section className="info-img-conatiner">
        <ResponsiveDisplayImg
          data={{
            img: "/assets/pages/home/info-img-min.png",
            mobImg: "/assets/pages/home/info-img-min.png",
          }}
        />
      </section>

      {/* video area  */}
      <section className="video-area">
        <div className="basic-grid-container">
          <ResponsiveDisplayImg
            data={{
              img: "assets/pages/home/video.jpg",
            }}
          />
          <div
            data-animname="fade-in-up"
            data-onetime="true"
            data-delay=".1"
            className="grid-item"
          >
            <div className="txt-container">
              <h2 className="primary-font heading">
                It’s time to outsource your fulfillment needs
              </h2>

              <p className="rte">
                Download the free guide today and get a jump start on your 3PL
                Service Provider.
              </p>

              <Link className="btn" to="/guide">
                Download
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* procedure */}
      <section className="procedure page-width">
        <HeadingWithLine
          data={{ heading: "From Online Store to your Customer’s door" }}
        />

        <ResponsiveDisplayImg
          data={{
            img: "/assets/pages/home/procedure-min.png",
            mobImg: "/assets/pages/home/procedure-mob-min.png",
          }}
        />
      </section>

      {/* dark  */}
      <DarkSection
        data={{
          img: "/assets/pages/home/man-on-laptop-min.png",
        }}
      />
      <br />

      {/* display img */}
      <div className="displayImg-container page-width">
        <ResponsiveDisplayImg
          data={{
            img: "/assets/pages/home/ui-dashboard-min.png",
          }}
        />
        <div className="btn-container" style={{ textAlign: "center" }}>
          <Link className="btn" to="/">
            How it works ?
          </Link>
        </div>
      </div>
      <br />
      <br />
      <br />

      {/* warehouse  */}
      <section className="warehouse page-width">
        <div className="basic-grid-container">
          <ResponsiveDisplayImg
            data={{
              img: "/assets/pages/home/warehouse-min.png",
            }}
          />

          <div
            data-animname="fade-in-up"
            data-onetime="true"
            data-delay=".1"
            className="content-container"
          >
            <h2 className="heading primary-color primary-font">
              Warehouse Solutions with a personalised service
            </h2>
            <p className="rte sub-text">Be rest assured!</p>
            <p className="rte">
              When you choose us for your warehousing services, you can be
              assured that you are investing in a company dedicated to
              efficiently cater to all your warehousing needs.
            </p>
          </div>
        </div>
      </section>

      {/* package  */}
      <section className="package page-width">
        <div className="basic-grid-container page-width">
          <div
            data-animname="fade-in-up"
            data-onetime="true"
            data-delay=".1"
            className="content-container"
          >
            <h2 className="heading primary-color primary-font">
              The Complete Package
            </h2>
            <p className="rte">
              From start-ups to well-established companies, we store your goods,
              pick your orders and schedule shipments for your customers.
            </p>

            <Link className="btn" to="/quotes">
              Get Quotes
            </Link>
          </div>

          <ResponsiveDisplayImg
            data={{
              img: "/assets/pages/home/forklift-vector-min.png",
            }}
          />
        </div>
      </section>

      {/* stats    */}
      <Stats
        data={{
          heading: "Your Business is in safe hands",
          img: "/assets/pages/home/stats-min.png",
        }}
      />

      {/* animated tape  */}
      <section className="animated-logos-stripe">
        <div className="page-width">
          <HeadingWithLine
            data={{
              heading: "We work with",
            }}
          />
        </div>

        <ResponsiveDisplayImg
          data={{
            img: "/assets/pages/home/logo-stripe-min.png",
          }}
        />
      </section>

      <div className="gradient-line-classic"></div>
      <br />

      {/* get quote  */}
      <GetQuotesSection
        data={{
          img: "/assets/pages/home/quotes-min.png",
          heading: `Looking for Fulfillment Center solutions?<br /><span style="color: #FF8F3F;">Try Us!</span>`,
        }}
      />
    </div>
  );
};

export default Home;
