import React from "react";
import IconsGridContainer from "../Utilities/mini-comps/IconsGridContainer";
import ResponsiveDisplayImg from "../Utilities/mini-comps/ResponsiveDisplayImg";
import GetQuotesSection from "../Utilities/GetQuotesSection";
import animationObserver from "../Utilities/library/animationObserver";

const Integration = () => {
  // scroll to top
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  React.useEffect(() => {
    animationObserver();
  }, []);

  const dirRoot = `/assets/pages/integration/`;

  const dataForMarketPlace = [
    { title: "Ajio", img: `${dirRoot}icon-ajio-min.png` },
    { title: "amazon", img: `${dirRoot}icon-amazon-min.png` },
    { title: "flipkart", img: `${dirRoot}icon-flipkart-min.png` },
    { title: "firstcry", img: `${dirRoot}icon-firstcry-min.png` },
    { title: "fynd", img: `${dirRoot}icon-fynd-min.png` },
    { title: "grofers", img: `${dirRoot}icon-grofers-min.png` },
    { title: "limeroad", img: `${dirRoot}icon-limeroad-min.png` },
    { title: "myntra", img: `${dirRoot}icon-myntra-min.png` },
    { title: "nykaa", img: `${dirRoot}icon-nykaa-min.png` },
    { title: "paytm", img: `${dirRoot}icon-paytm-min.png` },
    { title: "shopclues", img: `${dirRoot}icon-shopclues-min.png` },
    { title: "smytten", img: `${dirRoot}icon-smytten-min.png` },
    { title: "snapdeal", img: `${dirRoot}icon-snapdeal-min.png` },
    { title: "tata-cliq", img: `${dirRoot}icon-tata-cliq-min.png` },
    { title: "myntra-ppmp", img: `${dirRoot}icon-myntra-ppmp-min.png` },
    { title: "amazon-flex", img: `${dirRoot}icon-amazon-flex-min.png` },
    { title: "nykaa-fashion", img: `${dirRoot}icon-nykaa-fashion-min.png` },
    {
      title: "amazon-fulfillment",
      img: `${dirRoot}icon-amazon-fulfillment-min.png`,
    },
    { title: "paytm-mall", img: `${dirRoot}icon-paytm-mall-min.png` },
    { title: "tata-cliq-luxury", img: `${dirRoot}icon-tata-cliq-luxury-min.png` },
    { title: "1mg", img: `${dirRoot}icon-1mg-min.png` },
  ];

  const dataForLogicticsPartners = [
    { title: "amazon", img: `${dirRoot}icon-amazon-logistics-min.png` },
    { title: "ante-air", img: `${dirRoot}icon-ante-air-min.png` },
    { title: "blowhorn", img: `${dirRoot}icon-blowhorn-min.png` },
    { title: "aramex", img: `${dirRoot}icon-aramex-min.png` },
    { title: "bluedart", img: `${dirRoot}icon-bluedart-min.png` },
    { title: "bookmypacket", img: `${dirRoot}icon-bookmypacket-min.png` },
    { title: "clickpost", img: `${dirRoot}icon-clickpost-min.png` },
    { title: "dotzot", img: `${dirRoot}icon-dotzot-min.png` },
    { title: "dtdc", img: `${dirRoot}icon-dtdc-min.png` },
    { title: "ecomexpress", img: `${dirRoot}icon-ecomexpress-min.png` },
    { title: "ekart", img: `${dirRoot}icon-ekart-min.png` },
    { title: "fedex", img: `${dirRoot}icon-fedex-min.png` },
    { title: "gati", img: `${dirRoot}icon-gati-min.png` },
    { title: "holisol", img: `${dirRoot}icon-holisol-min.png` },
    { title: "indiapost", img: `${dirRoot}icon-indiapost-min.png` },
    { title: "innovex", img: `${dirRoot}icon-innovex-min.png` },
    { title: "online-express", img: `${dirRoot}icon-online-express-min.png` },
    { title: "pickrr", img: `${dirRoot}icon-pickrr-min.png` },
    { title: "rivigo", img: `${dirRoot}icon-rivigo-min.png` },
    { title: "shadowfax", img: `${dirRoot}icon-shadowfax-min.png` },
    { title: "ship delight", img: `${dirRoot}icon-ship-delight-min.png` },
    { title: "shipox", img: `${dirRoot}icon-shipox-min.png` },
    { title: "ship-rocket", img: `${dirRoot}icon-ship-rocket-min.png` },
    { title: "shyplite", img: `${dirRoot}icon-shyplite-min.png` },
    { title: "v-express", img: `${dirRoot}icon-v-express-min.png` },
    { title: "vamaship", img: `${dirRoot}icon-vamaship-min.png` },
    { title: "wow-express", img: `${dirRoot}icon-wow-express-min.png` },
    { title: "express-bees", img: `${dirRoot}icon-express-bees-min.png` },
  ];

  const dataForEComWebStores = [
    { title: "bigcommerce", img: `${dirRoot}icon-bigcommerce-min.png` },
    { title: "cartrover", img: `${dirRoot}icon-cartrover-min.png` },
    { title: "cs-cart", img: `${dirRoot}icon-cs-cart-min.png` },
    { title: "magneto", img: `${dirRoot}icon-magneto-min.png` },
    { title: "martjack", img: `${dirRoot}icon-martjack-min.png` },
    { title: "opencart", img: `${dirRoot}icon-opencart-min.png` },
    { title: "presta-shop", img: `${dirRoot}icon-presta-shop-min.png` },
    { title: "shopify", img: `${dirRoot}icon-shopify-min.png` },
    { title: "woocommerce", img: `${dirRoot}icon-woocommerce-min.png` },
  ];

  return (
    <div id="page-integration">
      {/* hero  */}
      <div className="hero">
        <div className="content">
          <h1 className="primary-font heading">
            <div
              data-animname="fade-in-up"
              data-onetime="true"
              data-delay="0"
              style={{ color: "#FFB800" }}
            >
              Seamless
            </div>{" "}
            <div
              data-animname="fade-in-up"
              data-onetime="true"
              data-delay="0.2"
              style={{ color: "#FF8F3F" }}
            >
              Integrations
            </div>{" "}
            <div
              data-animname="fade-in-up"
              data-onetime="true"
              data-delay="0.4"
              style={{ color: "#fffff" }}
            >
              for your Growth
            </div>
          </h1>

          <br />
          <p data-animname="fade-in-up" data-onetime="true" data-delay="0.5">
            We support a diversity of popular integration platforms and prime
            technology solutions to accelerate your online growth and give you
            that extra competitive edge.
          </p>
        </div>

        <ResponsiveDisplayImg data={{ img: `${dirRoot}hero-min.png` }} />
      </div>

      {/* marketplace */}
      <div className="marketplace icons-section">
        <div className="heading-with-line-grid-container">
          <div
            data-animname="fade-in-up"
            data-onetime="true"
            data-delay="0"
            className="heading primary-font"
          >
            Marketplace
          </div>

          <div className="gradient-line"></div>
        </div>

        <br />
        <p
          data-animname="fade-in-up"
          data-onetime="true"
          data-delay="0.2"
          className="tertiary-font"
        >
          At StoreZippy we expand your digital footprint by providing seamless
          integrations with the most popular and useful eCommerce marketplaces.
        </p>

        <IconsGridContainer data={dataForMarketPlace} />
      </div>

      {/* logistics-partners */}
      <div className="logistics-partners icons-section">
        <div className="heading-with-line-grid-container">
          <div className="heading primary-font">Logistics Partners</div>

          <div className="gradient-line"></div>
        </div>

        <br />
        <p className="tertiary-font">
          Our vision is to provide a last mile fulfillment network by partnering
          with all top-notch shipping platforms.
        </p>

        <IconsGridContainer data={dataForLogicticsPartners} />
      </div>

      {/* ecom-web-stores */}
      <div className="ecom-web-stores icons-section">
        <div className="heading-with-line-grid-container">
          <div className="heading primary-font">ECommerce Web Stores</div>

          <div className="gradient-line"></div>
        </div>

        <br />
        <p className="tertiary-font">
          Essential webstore integrations to keep your eCommerce business up and
          running and help you scale up with ease.
        </p>

        <IconsGridContainer data={dataForEComWebStores} />
      </div>

      <br />
      <br />
      <div className="page-width">
        <div style={{ height: "12px" }} className="gradient-line"></div>
      </div>

      <br />
      <br />

      {/* get quote  */}
      <GetQuotesSection
        data={{
          img: `${dirRoot}quotes-min.png`,
          heading: `Join Hands with Storezippy today<br /><span style="color: #FF8F3F;">Try Us!</span>`,
        }}
      />
    </div>
  );
};

export default Integration;
