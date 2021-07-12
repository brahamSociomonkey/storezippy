import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import GetQuotesSection from "../Utilities/GetQuotesSection";
import ResponsiveDisplayImg from "../Utilities/mini-comps/ResponsiveDisplayImg";

const Pricing = () => {
  const dirRoot = `/assets/pages/pricing/`;

  const [priceState, setPriceState] = useState({
    order: "1000-2999",
    weight: "10Kg+",
  });

  const priceData = {
    "1000-2999": {
      "0-1Kg": "15",
      "1-2Kg": "17",
      "2-3Kg": "19",
      "3-5Kg": "22",
      "5-10Kg": "25",
      "10Kg+": null,
    },
    "3000-9999": {
      "0-1Kg": "13",
      "1-2Kg": "15",
      "2-3Kg": "17",
      "3-5Kg": "20",
      "5-10Kg": "23",
      "10Kg+": null,
    },
    "10,000+": {
      "0-1Kg": "11",
      "1-2Kg": "13",
      "2-3Kg": "15",
      "3-5Kg": "18",
      "5-10Kg": "21",
      "10Kg+": null,
    },
  };

  const [cost, setCost] = useState(null);

  useEffect(() => {
    setCost(() => {
      const { order, weight } = priceState;

      return priceData[order][weight];
    });
  }, [priceState]);

  const handleButtonClick = (e) => {
    const {
      name,
      dataset: { type },
    } = e.target.closest("button");
    setPriceState((prev) => ({ ...prev, [type]: name }));
  };

  // scroll to top
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div id="page-pricing">
      {/* hero  */}
      <div className="hero">
        <div className="content">
          <h1 className="heading">Store Zippy Fulfillment Pricing</h1>

          <br />
          <p>
            We understand the importance of having price transparency and that’s
            why StoreZippy offers{" "}
            <strong>
              optimum pricing for every stage of your business with no hidden
              costs.
            </strong>{" "}
            No matter your business type or size, feel free to connect to us and
            talk through your fulfillment requirements.
          </p>
        </div>

        <ResponsiveDisplayImg data={{ img: `${dirRoot}hero.png` }} />
      </div>

      <div className="founder">
        <div className="basic-grid-container">
          <ResponsiveDisplayImg
            data={{
              img: `${dirRoot}founder.png`,
              mobImg: `${dirRoot}founder-mob.png`,
            }}
          />

          <div className="content">
            <p>
              Storezippy’s pricing is clear which means they will tell you
              exactly what your costs will be and then be rest assured, they are
              not going to play mind games with you. You can blindly trust them
              for their quotes and the quality of service they provide.
            </p>
          </div>
        </div>
      </div>

      <div className="info-cards">
        <div className="info-card">
          <img src={`${dirRoot}/icon-personalized.png`} alt="" />
          <h2>Personalized for you</h2>
          <p>
            We can provide customized solutions for your unique needs (like
            kitting, bundling etc.) at an additional cost. All quotes are
            tailored to suit every client’s different requirements.
          </p>
        </div>

        <div className="info-card">
          <img src={`${dirRoot}/icon-traditional.png`} alt="" />
          <h2>Not just a traditional 3PL</h2>
          <p>
            StoreZippy is not just a pick, pack and ship warehouse. We offer
            cutting edge technology, scalability and flexibility to boost your
            growth and help you expand with ease.
          </p>
        </div>

        <div className="info-card">
          <img src={`${dirRoot}/icon-arms.png`} alt="" />
          <h2>Your extended arm</h2>
          <p>
            We ensure that our clients not only achieve their business goals
            with us but also see us as their strategic partner so that we are an
            extension of you.
          </p>
        </div>
      </div>

      <div className="calculator">
        <div className="heading-with-line-grid-container">
          <h1 className="heading">
            Calculate my <br /> Fulfillment cost
          </h1>
          <div className="gradient-line"></div>
        </div>

        <div className="calculator-container">
          <div className="orders steps-container">
            <h2>STEP 1</h2>
            <hr />
            <p>My number of orders per month</p>

            <div className="buttons-container">
              {["1000-2999", "3000-9999", "10,000+"].map((item, index) => (
                <button
                  className={item === priceState.order ? "active" : ""}
                  name={item}
                  key={index}
                  data-type="order"
                  onClick={handleButtonClick}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          <div className="weight steps-container">
            <h2>STEP 2</h2>
            <hr />
            <p>My average product weight</p>

            <div className="buttons-container">
              {["0-1Kg", "1-2Kg", "2-3Kg", "3-5Kg", "5-10Kg", "10Kg+"].map(
                (item, index) => (
                  <button
                    className={item === priceState.weight ? "active" : ""}
                    name={item}
                    key={index}
                    data-type="weight"
                    onClick={handleButtonClick}
                  >
                    <img src={`${dirRoot}parcel-box.png`} alt="" />
                    {item}
                  </button>
                )
              )}
            </div>

            <hr />
            <div className="cost-container">
              <h2 className="heading">Per Order Cost - </h2>

              <div className={`cost ${cost ? "" : "has-link"}`}>
                {cost ? (
                  `${cost} INR`
                ) : (
                  <Link className="" to="quotes">
                    Request a Quote
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* get quote  */}
      <GetQuotesSection
        data={{
          img: `${dirRoot}quotes.png`,
          heading: `No storage fee for the first 60 days!!<br /><span style="color: #FF8F3F;">So what’s your next move?</span>`,
        }}
      />
    </div>
  );
};

export default Pricing;
