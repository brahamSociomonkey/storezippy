import React from "react";
import animationObserver from "../Utilities/library/animationObserver";
import ResponsiveDisplayImg from "../Utilities/mini-comps/ResponsiveDisplayImg";
import ReactHtmlParser from "react-html-parser";

const FAQS = () => {
  const dirRoot = `/assets/pages/faqs/`;

  const dataFroDropDown = [
    {
      title: "Where is storezippy based?",
      des: "We are based in Delhi and currently our fulfillment centers are in Delhi, Bangalore, Mumbai and Calcutta.",
    },
    {
      title: "How is StoreZippy different from other fulfillment companies?",
      des: "Storezippy is not like just any other traditional fulfillment service provider, we specifically cater to the unique needs of all eCommerce businesses. <br /> <br /> We are committed to help you grow and expand with ease. StoreZippy’s platform is a tech-enabled, integrated solution that improves accuracy, efficiency and lets you track real time data through our single unified dashboard.",
    },
    {
      title: "What are the benefits of outsourcing fulfillment to StoreZippy?",
      des: "Outsourcing your fulfillment services to us will help you keep your inventory closer to your customers, give you the advantage of reduced shipping rates, help you save on shipping time and also you will no longer have the burden of storing, picking, packing, shipping and managing your returns. This means you will get more time to focus on your core business expansion, strategy planning and exploring the ever-changing market.",
    },
    {
      title: "Is my business too small to work with StoreZippy?",
      des: "Our fulfillment centres generally ship minimum 1000 orders per month but if your current orders are any less than this, you can get in touch with us and we can give you a customised quote tailored to your specific needs.",
    },
    {
      title: "Which shipping partners do you work with?",
      des: "We work with all major shipping partners to ensure quick and safe delivery to your customers. Check the <a style='all: revert; color: currentColor; text-decoration: underline' href='/integration'>integrations page</a> on our website to know about all the carriers we are integrated with.",
    },
    {
      title: "Do you do custom packaging?",
      des: "Yes. We offer a range of value added services including gift wrapping, kitting, bundling, custom packaging. Get in touch to know more about our services.",
    },
    {
      title: "StoreZippy is integrated with which online shopping platforms?",
      des: "We are seamlessly integrated with all major online marketplaces like Amazon, Flipkart, PayTm, Myntra, Nykaa etc. Please visit our <a style='all: revert; color: currentColor; text-decoration: underline' href='/integration'>integrations page</a> to check the entire list of our integrated online marketplaces.",
    },
    {
      title: "Do you ship pan-India?",
      des: "Yes, we do! We will ship anywhere in India where your parcel needs to be delivered.",
    },
    {
      title: "Do you have a minimum contract period?",
      des: "No. with us you will have the access to warehousing services as and when required without the need of long term commitments. (One month notice)",
    },
    {
      title: "Do you provide us with the overall account reports?",
      des: "Yes, we will provide all the inventory and sales reports about your business fortnightly, we are working towards building a real time dashboard for our clients which will keep them updated with the account metrics..",
    },
    {
      title: "Do you handle returns?",
      des: "Yes, we do process returns. Please get in touch to discuss, if this is essential to your business.",
    },
    {
      title: "Do you have minimum monthly order quantities?",
      des: "No we manage any no. of orders.",
    },
    {
      title: "How does the storage fee work?",
      des: "It varies with the space your inventory occupies & its age.",
    },
    {
      title:
        "What is the difference between standard and non-standard receiving?",
      des: "Fulfilment of following conditions is mandatory in case of standard receiving : <ul ><li>Every item sent to SFC must bear a correct & legible barcode</li><li>Single or multiple units of the same SKU should be there in each carton</li><li>All items must be QC accepted</li></ul> SKUs arriving will be considered non standard in the following cases:  <ul><li>SKUs mixed up within a box and not labelled </li><li>SKUs without proper barcodes & QC rejected SKUs</li></ul>",
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
    <div id="faqs">
      <div className="hero">
        <div className="grid-container">
          <div className="content">
            <h1 className="heading">
              Quick Answers to Frequently Asked Questions
            </h1>

            <p>
              Storezippy is here to answer and clear all the doubts you have.
            </p>
          </div>

          <ResponsiveDisplayImg data={{ img: `${dirRoot}hero-min.png` }} />
        </div>
      </div>

      {/* dropdowns  */}
      <div className="dropdowns-section">
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
                  {icon && (
                    <div>
                      <img className="icon" src={icon} alt={icon} />
                    </div>
                  )}

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
    </div>
  );
};

export default FAQS;
