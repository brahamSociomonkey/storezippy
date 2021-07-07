import React from "react";
import IconsGridContainer from "../Utilities/mini-comps/IconsGridContainer";
import ResponsiveDisplayImg from "../Utilities/mini-comps/ResponsiveDisplayImg";
import GetQuotesSection from "../Utilities/GetQuotesSection";

const Integration = () => {
  // scroll to top
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const dirRoot = `/assets/pages/integration/`;

  const dataForMarketPlace = [
    { title: "Ajio", img: `${dirRoot}icon-ajio.png` },
    { title: "amazon", img: `${dirRoot}icon-amazon.png` },
    { title: "flipkart", img: `${dirRoot}icon-flipkart.png` },
    { title: "firstcry", img: `${dirRoot}icon-firstcry.png` },
    { title: "fynd", img: `${dirRoot}icon-fynd.png` },
    { title: "grofers", img: `${dirRoot}icon-grofers.png` },
    { title: "limeroad", img: `${dirRoot}icon-limeroad.png` },
    { title: "myntra", img: `${dirRoot}icon-myntra.png` },
    { title: "nykaa", img: `${dirRoot}icon-nykaa.png` },
    { title: "paytm", img: `${dirRoot}icon-paytm.png` },
    { title: "shopclues", img: `${dirRoot}icon-shopclues.png` },
    { title: "smytten", img: `${dirRoot}icon-smytten.png` },
    { title: "snapdeal", img: `${dirRoot}icon-snapdeal.png` },
    { title: "tata-cliq", img: `${dirRoot}icon-tata-cliq.png` },
    { title: "myntra-ppmp", img: `${dirRoot}icon-myntra-ppmp.png` },
    { title: "amazon-flex", img: `${dirRoot}icon-amazon-flex.png` },
    { title: "nykaa-fashion", img: `${dirRoot}icon-nykaa-fashion.png` },
    {
      title: "amazon-fulfillment",
      img: `${dirRoot}icon-amazon-fulfillment.png`,
    },
    { title: "paytm-mall", img: `${dirRoot}icon-paytm-mall.png` },
    { title: "tata-cliq-luxury", img: `${dirRoot}icon-tata-cliq-luxury.png` },
    { title: "1mg", img: `${dirRoot}icon-1mg.png` },
  ];

  const dataForLogicticsPartners = [
    { title: "amazon", img: `${dirRoot}icon-amazon-logistics.png` },
    { title: "ante-air", img: `${dirRoot}icon-ante-air.png` },
    { title: "blowhorn", img: `${dirRoot}icon-blowhorn.png` },
    { title: "aramex", img: `${dirRoot}icon-aramex.png` },
    { title: "bluedart", img: `${dirRoot}icon-bluedart.png` },
    { title: "bookmypacket", img: `${dirRoot}icon-bookmypacket.png` },
    { title: "clickpost", img: `${dirRoot}icon-clickpost.png` },
    { title: "dotzot", img: `${dirRoot}icon-dotzot.png` },
    { title: "dtdc", img: `${dirRoot}icon-dtdc.png` },
    { title: "ecomexpress", img: `${dirRoot}icon-ecomexpress.png` },
    { title: "ekart", img: `${dirRoot}icon-ekart.png` },
    { title: "fedex", img: `${dirRoot}icon-fedex.png` },
    { title: "gati", img: `${dirRoot}icon-gati.png` },
    { title: "holisol", img: `${dirRoot}icon-holisol.png` },
    { title: "indiapost", img: `${dirRoot}icon-indiapost.png` },
    { title: "innovex", img: `${dirRoot}icon-innovex.png` },
    { title: "online-express", img: `${dirRoot}icon-online-express.png` },
    { title: "pickrr", img: `${dirRoot}icon-pickrr.png` },
    { title: "rivigo", img: `${dirRoot}icon-rivigo.png` },
    { title: "shadowfax", img: `${dirRoot}icon-shadowfax.png` },
    { title: "ship delight", img: `${dirRoot}icon-ship-delight.png` },
    { title: "shipox", img: `${dirRoot}icon-shipox.png` },
    { title: "ship-rocket", img: `${dirRoot}icon-ship-rocket.png` },
    { title: "shyplite", img: `${dirRoot}icon-shyplite.png` },
    { title: "v-express", img: `${dirRoot}icon-v-express.png` },
    { title: "vamaship", img: `${dirRoot}icon-vamaship.png` },
    { title: "wow-express", img: `${dirRoot}icon-wow-express.png` },
    { title: "express-bees", img: `${dirRoot}icon-express-bees.png` },
  ];

  const dataForEComWebStores = [
    { title: "bigcommerce", img: `${dirRoot}icon-bigcommerce.png` },
    { title: "cartrover", img: `${dirRoot}icon-cartrover.png` },
    { title: "cs-cart", img: `${dirRoot}icon-cs-cart.png` },
    { title: "magneto", img: `${dirRoot}icon-magneto.png` },
    { title: "martjack", img: `${dirRoot}icon-martjack.png` },
    { title: "opencart", img: `${dirRoot}icon-opencart.png` },
    { title: "presta-shop", img: `${dirRoot}icon-presta-shop.png` },
    { title: "shopify", img: `${dirRoot}icon-shopify.png` },
    { title: "woocommerce", img: `${dirRoot}icon-woocommerce.png` },
  ];

  return (
    <div id="page-integration">
      {/* hero  */}
      <div className="hero">
        <div className="content">
          <h1 className="primary-font heading">
            <span style={{ color: "#FFB800" }}>Seamless</span> <br />
            <span style={{ color: "#FF8F3F" }}>Integrations</span> <br />
            for your Growth
          </h1>

          <br />
          <p>
            We support a diversity of popular integration platforms and prime
            technology solutions to accelerate your online growth and give you
            that extra competitive edge.
          </p>
        </div>

        <ResponsiveDisplayImg data={{ img: `${dirRoot}hero.png` }} />
      </div>

      {/* marketplace */}
      <div className="marketplace icons-section">
        <div className="heading-with-line-grid-container">
          <div className="heading primary-font">Marketplace</div>

          <div className="gradient-line"></div>
        </div>

        <br />
        <p className="tertiary-font">
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
          img: `${dirRoot}quotes.png`,
          heading: `Join Hands with Storezippy today<br /><span style="color: #FF8F3F;">Try Us!</span>`,
        }}
      />
    </div>
  );
};

export default Integration;
