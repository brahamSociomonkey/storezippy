import React from "react";
import DarkSection from "../Utilities/DarkSection";
import GetQuotesSection from "../Utilities/GetQuotesSection";
import HeroSlider from "../Utilities/HeroSlider";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import animationObserver from "../Utilities/library/animationObserver";
import IconsGridContainer from "../Utilities/mini-comps/IconsGridContainer";
import ResponsiveDisplayImg from "../Utilities/mini-comps/ResponsiveDisplayImg";
import Stats from "../Utilities/mini-comps/Stats";
import ReactHtmlParser from "react-html-parser";

const Home = () => {
  const dirRoot = `/assets/pages/home/phase-2/`;

  const dataForIntegrationIcons = [
    { icon: `${dirRoot}icon-prime-min.png` },
    { icon: `${dirRoot}icon-shopify-min.png` },
    { icon: `${dirRoot}icon-two-days-delivery-min.png` },
    { icon: `${dirRoot}icon-f-assured-min.png` },
    { icon: `${dirRoot}icon-woocommerce-min.png` },
    { icon: `${dirRoot}icon-next-day-min.png` },
  ];

  const testimonialSliderSettings = {
    dots: true,
    infinite: true,
    speed: 300,
    arrows: false,
    cssEase: "ease",
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };

  const dataForTestimonials = [
    {
      logo: "/assets/pages/home/phase-2/logo-coconut-people-min.png",
      content:
        "Their service has been extremely exceptional. They go above and beyond the call of their duty. Looking forward to a long-term partnership.",
      person: "Mr. Arjun Marweena",
      personInfo: "Founder, The Coconut People",
    },
    {
      logo: "/assets/pages/home/phase-2/logo-crayliving-min.png",
      content:
        "StoreZippy is the third fulfillment company I have used but the first to get it right. They always exceed my expectations and are very easy to work with. They have reduced my total operations cost by 35%. Thanks for all the support",
      person: "Mr. Ashish Kathuria",
      personInfo: "Founder, Cray Living",
    },
    {
      logo: "/assets/pages/home/phase-2/logo-dadev-min.png",
      content:
        "StoreZippy has been the optimum solution for shipping honey to my customers. The order fulfillment has been very smooth for us since the beginning of working with them.",
      person: "Mr. Nitesh Poonia",
      personInfo: "Founder, Dadev honey",
    },
  ];

  const dataForScaleUpPoints = [
    {
      icon: "/assets/pages/home/phase-2/icon-operating-cost-min.png",
      text: "Reduce your operating costs by <strong>25%</strong>",
    },
    {
      icon: "/assets/pages/home/phase-2/icon-upgrade-min.png",
      text: "Improve your <strong>NPS</strong>",
    },
    {
      icon: "/assets/pages/home/phase-2/icon-checklist-min.png",
      text: "Reduce your inventory holding by <strong>39%</strong>",
    },
    {
      icon: "/assets/pages/home/phase-2/icon-cart-min.png",
      text: "Lower cart abandonment rate by <strong>18%</strong>",
    },
    {
      icon: "/assets/pages/home/phase-2/icon-fulfillment-min.png",
      text: "<strong>360°</strong> fulfillment solution",
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
                "<span style='color: #2CDEF8; margin-right: 1rem' data-animname='fade-in-up'            data-onetime='true' data-delay='.1'>Reliable.</span><span style='color: #FFCA41; margin-right: 1rem' data-animname='fade-in-up' data-onetime='true' data-delay='.2'>Flexible.</span><span style='color: #FF8F3F; margin-right: 1rem' data-animname='fade-in-up' data-onetime='true' data-delay='.3'>Scalable.</span>",
              content: "India’s most cost-effective fulfillment solution",
              buttonText: "Get Quotes",
              buttonURL: "/quotes",
            },
          },
        ]}
      />

      {/* brand dna  */}
      <div className="brand-dna">
        <ResponsiveDisplayImg
          data={{
            img: "/assets/pages/home/phase-2/brand-dna-min.png",
            mobImg: "/assets/pages/home/phase-2/brand-dna-mob-min.png",
          }}
        />
      </div>

      {/* dashboard  */}
      <div className="dashboard">
        <ResponsiveDisplayImg
          data={{
            img: "/assets/pages/home/phase-2/dashboard-min.png",
            mobImg: "/assets/pages/home/phase-2/dashboard-mob-min.png",
          }}
        />
      </div>

      {/* integration */}
      <div className="integration">
        <div className="heading-with-line-grid-container">
          <div
            data-animname="fade-in-up"
            data-onetime="true"
            data-delay="0"
            className="heading primary-font"
          >
            Everything is in place for you
          </div>

          <div className="gradient-line"></div>
        </div>

        <p data-animname="fade-in-up" data-onetime="true" data-delay=".05">
          Use <strong>prime-like</strong> and quick{" "}
          <strong>delivery badges</strong> to reassure your customers with
          StoreZippy.
        </p>

        <div
          data-animname="fade-in-up"
          data-onetime="true"
          data-delay=".1"
          className="icons-grid-container"
        >
          {dataForIntegrationIcons?.map(({ icon }, index) => (
            <div className="icon-item" key={index}>
              <img src={icon} alt={icon} />
            </div>
          ))}
        </div>
      </div>

      {/* safe hands    */}
      <Stats
        data={{
          heading: "Your Business is in safe hands",
          img: "/assets/pages/home/stats-min.png",
          mobImg: "/assets/pages/home/stats-mob-min.png",
        }}
      />

      {/* quotes and outsource  */}
      <section className="quotes outsource">
        <div className="basic-grid-container">
          <div
            data-animname="fade-in-up"
            data-onetime="true"
            data-delay=".1"
            className="grid-item grid-item-1"
          >
            <div className="txt-container">
              <div className="heading">
                <h2
                  data-animname="fade-in-up"
                  data-onetime="true"
                  data-delay="0"
                  className=""
                >
                  Just do what’s best and outsource the rest!
                </h2>
              </div>
            </div>
          </div>
          <div
            data-animname="fade-in-up"
            data-onetime="true"
            data-delay=".1"
            className="grid-item grid-item-2"
          >
            <div className="txt-container">
              <div className="heading">
                <p>It’s time to switch to a 3PL partner.</p>
              </div>

              <Link className="btn" to="/quotes">
                Get Quotes
              </Link>
            </div>
          </div>
          <div
            data-animname="fade-in-up"
            data-onetime="true"
            data-delay=".3"
            className="grid-item grid-item-3"
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

      {/* download guide   */}
      <section className="guide-download">
        <div className="basic-grid-container">
          <ResponsiveDisplayImg
            data={{
              img: "/assets/pages/home/phase-2/download-min.png",
            }}
          />

          <div className="txt-content">
            <h2
              data-animname="fade-in-up"
              data-onetime="true"
              data-delay="0.1"
              className="heading primary-font"
            >
              Download our free guide today and get a jump-start on your 3PL
              service provider.
            </h2>

            <Link
              data-animname="fade-in-up"
              data-onetime="true"
              data-delay="0.2"
              to="/guides/guide-1"
              className="btn"
            >
              Download
            </Link>
          </div>
        </div>
      </section>

      {/* testimonials */}
      <section className="testimonials">
        <div className="heading-with-line-grid-container">
          <div
            data-animname="fade-in-up"
            data-onetime="true"
            data-delay="0"
            className="heading primary-font"
          >
            Don’t just trust our words!
          </div>

          <div className="gradient-line"></div>
        </div>

        <Slider
          data-animname="fade-in-up"
          data-onetime="true"
          data-delay="0.3"
          {...testimonialSliderSettings}
          className="testimonials-container testimonials-slider-container"
        >
          {dataForTestimonials?.map(
            ({ logo, content, person, personInfo }, index) => (
              <div className="testimonial-item-container" key={index}>
                <div className="testimonial-item">
                  <img className="logo" src={logo} alt={logo} />
                  <br />
                  <hr />
                  <div className="content">{content}</div>
                  <br />
                  <div className="person">
                    <strong>{person}</strong>
                  </div>
                  <div className="personInfo">{personInfo}</div>
                  <hr />
                  <br />
                  <img
                    className="quotation"
                    src="/assets/pages/home/phase-2/quotation-min.png"
                    alt=""
                  />
                </div>
              </div>
            )
          )}
        </Slider>
      </section>

      {/* scale up  */}
      <div className="scale-up">
        <div className="heading-with-line-grid-container">
          <div className="heading primary-font">Scale up with us</div>

          <div>
            <div className="gradient-line"></div>
          </div>
        </div>

        <div className="points-container">
          {dataForScaleUpPoints?.map(({ icon, text }, index) => (
            <div className="point-item" key={index}>
              <img src={icon} alt={icon} />
              <div className="text">{ReactHtmlParser(text)}</div>
            </div>
          ))}
        </div>

        <div className="link-container">
          <Link to="/product" className="btn">
            How it works?
          </Link>
        </div>
      </div>

      {/* know us  */}
      <div className="know-us">
        <div className="grid-container">
          <div className="content">
            <h2 className="heading">Know us Better!</h2>

            <div>
              Your springboard to zoom into the competitive world of E-commerce
              and fulfillment. It was founded to accelerate your online growth
              and bring your commerce dreams to reality.
              <p>Be rest assured!</p>
            </div>

            <Link to="/about" className="btn">
              Our Story
            </Link>
          </div>

          <ResponsiveDisplayImg
            data={{
              img: "/assets/pages/home/phase-2/know-us-min.png",
            }}
          />
        </div>
      </div>

      {/* zippy  */}
      <div className="zippy">
        <ResponsiveDisplayImg
          data={{ img: "/assets/pages/home/phase-2/zippy-new-min.png" }}
        />
      </div>

      {/* expert  */}
      <div className="expert">
        <div className="grid-container">
          <ResponsiveDisplayImg
            data={{
              img: "/assets/pages/home/phase-2/expert-min.png",
            }}
          />

          <div className="content">
            <h2 className="heading">Expert help is at hand</h2>

            <div>
              Let us take the burden of warehousing and fulfillment off your
              shoulders.
            </div>

            <Link to="/quotes" className="btn">
              Get Quotes
            </Link>
          </div>
        </div>
      </div>

      {/* animated tape  */}
      {/* <section className="animated-logos-stripe">
        <div className="page-width">
          
          <div className="heading-with-line-grid-container">
          <div className="heading primary-font">
            We work with
          </div>

          <div className="gradient-line"></div>
        </div>
        </div>

        <ResponsiveDisplayImg
          data={{
            img: "/assets/pages/home/logo-stripe-min.png",
          }}
        />
      </section> */}
    </div>
  );
};

export default Home;
