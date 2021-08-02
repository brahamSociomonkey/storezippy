import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import GetQuotesSection from "../Utilities/GetQuotesSection";
import ResponsiveDisplayImg from "../Utilities/mini-comps/ResponsiveDisplayImg";

const Pricing = () => {
  const dirRoot = `/assets/pages/pricing/`;

  const [priceState, setPriceState] = useState({
    order: "1000-2999",
    weight: "10Kg+",
    packaging: "Parcel Box",
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
    "packaging-cost": {
      "0-1Kg": {
        "Paper Bag": "3",
        "Parcel Box": "5",
        "Bubble Wrap": "2",
      },
      "1-2Kg": {
        "Paper Bag": "4",
        "Parcel Box": "9",
        "Bubble Wrap": "3",
      },
      "2-3Kg": {
        "Paper Bag": "5",
        "Parcel Box": "12",
        "Bubble Wrap": "5",
      },
      "3-5Kg": {
        "Paper Bag": null,
        "Parcel Box": "20",
        "Bubble Wrap": "6",
      },
      "5-10Kg": {
        "Paper Bag": null,
        "Parcel Box": "25",
        "Bubble Wrap": "7",
      },
      "10Kg+": null,
    },
  };

  const [cost, setCost] = useState(null);
  const [packagingCost, setPackagingCost] = useState(null);

  useEffect(() => {
    setPackagingCost(() => {
      const { weight, packaging } = priceState;

      return priceData["packaging-cost"]?.[weight]?.[packaging];
    });
  }, [priceState]);

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
          <div className="input-container">
            <div className="orders steps-container">
              <div className="title">
                <h2>
                  STEP 1 :<p> My number of orders per month</p>
                </h2>
              </div>

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
              <div className="title">
                <h2>
                  STEP 2 :<p> My average product weight</p>
                </h2>
              </div>

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
                      <img src={`${dirRoot}Parcel Box.png`} alt="" />
                      {item}
                    </button>
                  )
                )}
              </div>
            </div>

            <div className="packaging steps-container">
              <div className="title">
                <h2>
                  STEP 3 :<p> Choose your packaging</p>
                </h2>
              </div>

              <div className="buttons-container">
                {["Parcel Box", "Paper Bag", "Bubble Wrap"].map(
                  (item, index) => (
                    <button
                      className={item === priceState.packaging ? "active" : ""}
                      name={item}
                      key={index}
                      data-type="packaging"
                      onClick={handleButtonClick}
                    >
                      <img src={`${dirRoot}${item}.png`} alt="" />
                      {item}
                    </button>
                  )
                )}
              </div>
            </div>
          </div>

          <div className="output-container">
            <div className="img-container">
              <img src={`${dirRoot}hero.png`} alt={`${dirRoot}hero.png`} />
            </div>

            <div className="orders">
              <h2>{priceState.order}</h2>
              <p>Monthly Orders</p>
              <hr />
            </div>

            <div className={`fulfillment-cost ${cost ? "" : "has-link"}`}>
              <h2>Fulfillment Cost</h2>
              {cost ? (
                <>
                  <p className="cost">{`${cost} INR`}</p>
                </>
              ) : (
                <Link className="cost" to="quotes">
                  Request a Quote
                </Link>
              )}
            </div>

            <div className="packaging-cost">
              <h2>Packaging Cost</h2>

              {packagingCost ? (
                <>
                  <p className="cost">{`${packagingCost} INR`}</p>
                </>
              ) : (
                <Link className="cost" to="quotes">
                  Request a Quote
                </Link>
              )}
            </div>

            <div className="note">
              Note: <br /> This is a tentative cost for your order, to know the
              exact cost please get in touch with our team.
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
