import React, { useState } from "react";
import ReactHtmlParser from "react-html-parser";
import animationObserver from "../Utilities/library/animationObserver";
import ResponsiveDisplayImg from "../Utilities/mini-comps/ResponsiveDisplayImg";
import sendFormData from "../Utilities/library/sendFormData";
import PaymentRecFrom from "../forms/PaymentRecFrom";
export const PaymentRecFormContext = React.createContext();

const PaymentReconcilation = () => {
  const dirRoot = `/assets/pages/payment-reconcilation/`;

  const dataFroDropDown = [
    {
      icon: `${dirRoot}icon-overcharged-commission.png`,
      title: "Overcharged Commission fees",
      des: "This fee is determined by the product's category and is computed as a percentage of the total price of each unit. A per-item minimum referral fee applies to specific categories of products. We assist you in identifying commissions that have been charged incorrectly and give statistics for the same.",
    },
    {
      icon: `${dirRoot}icon-overcharged-shipping.png`,
      title: "Overcharged shipping",
      des: "The order may fall into categories such as - small, standard, oversize, etc. based on parameters such as product dimension, weight, and delivery, and the marketplaces charge shipping costs accordingly. If the marketplace has mistakenly categorised the goods and hence charges you incorrectly, we can assist you in resolving overcharged shipping expenses.",
    },
    {
      icon: `${dirRoot}icon-pick-pack.png`,
      title: "Pick-Pack overcharged fees",
      des: "The expense of physically getting the item, packaging it, and sending it is included. We give a report for all orders for which the marketplace incorrectly captured the measurements, resulting in improper costs.",
    },
    {
      icon: `${dirRoot}icon-transport-damage.png`,
      title: "Transportation damages without reimbursement",
      des: "The marketplaces must compensate the sellers for any damage to the merchandise that occurred while it was being transported by their linked carrier. This, however, does not happen. We can assist you with a report for the same, which you can use to file claims and receive compensation for.",
    },
    {
      icon: `${dirRoot}icon-reimbursement.png`,
      title: "Reimbursement not provided in the event of a replacement",
      des: "It's possible that the seller hasn't received payment for all items dispatched as part of an order or for a replacement order placed by the buyer or both. We keep track of all of these transactions and generate a report for orders for which the seller has received less or no payment. <br/><br/> Manually performing this task is prone to error, and you risk missing out on timely notification of the issue to the channel. You'll need an automated system that performs reconciliation and generates a report for you.",
    },
  ];

  const [paymentRecFormData, setPaymentRecFromData] = useState({
    formType: { value: "Payment Reconcilation Form", name: "From Type" },
    firstName: { value: "", required: true, label: "First Name" },
    lastName: { value: "", required: true, label: "Last Name" },
    email: { value: "", required: true, label: "Email" },
    comment: { value: "", required: true, label: "Comment" },
    phone: { value: "", required: true, label: "Phone" },
    company: { value: "", required: true, label: "Company Name" },
    platform: {
      value: "",
      required: false,
      label: "Current Ecom Platform ",
    },
    siteUrl: { value: "", required: false, label: "Company Website URL" },
  });

  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(() => "Connecting to the server..");
    sendFormData(paymentRecFormData, setMessage);

    setTimeout(() => {
      setMessage(() => "");
    }, 6000);
  };

  const handleInvalid = (e) => {
    console.log("Form not filled properly");
  };

  const handleFromChange = (e) => {
    const { name, value } = e.target;

    setPaymentRecFromData((prevData) => ({
      ...prevData,
      [name]: { ...prevData[name], name, value },
    }));
  };

  // scroll to top
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  React.useEffect(() => {
    animationObserver();
  }, []);

  return (
    <div id="payment-reconcilation">
      <div className="hero">
        <div className="content">
          <h1 className="primary-font heading">Payment Reconciliation</h1>

          <p>
            <strong>
              Struggling to recover lost money from online marketplaces?
              Storezippy’s powerful payment reconciliation tool is the solution.
            </strong>
            <br />
            <br />
            While being an ever-growing business, eCommerce is also the most
            vulnerable. You may end up losing hard-earned profits without even
            knowing it if you do not do payment reconciliation the right way.
          </p>
        </div>

        <ResponsiveDisplayImg data={{ img: `${dirRoot}hero.png` }} />
      </div>

      {/* dropdowns  */}
      <div className="dropdowns-section">
        <br />
        <br />
        <div className="des">
          <p>
            Our robust reconciliation system allows you to have better insights
            into the financial data at the touch of a click. Tracking payments
            for every order received is so easy with our robust tool enabling
            you to check individual payment heads in the following scenarios -
          </p>
        </div>
        <br />

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

      <div className="leakages">
        <h1 className="heading primary-font-60px">
          Marketplaces from where you can recover leakages
          <div className="gradient-line"></div>
        </h1>

        <div className="icons-section">
          <div className="icons-grid-container">
            {["myntra", "paytm", "snapdeal", "flipkart", "amazon.in"].map(
              (img, index) => (
                <div key={index} className="icon-item">
                  <img src={`${dirRoot}icon-${img}.png`} alt={img} />
                  <strong className="title">{img}</strong>
                </div>
              )
            )}
          </div>
        </div>
      </div>

      <div className="form-section">
        <h1 className="heading primary-font-60px">
          Make the right move
          <div className="gradient-line"></div>
        </h1>

        <div className="basic-grid-container">
          <PaymentRecFormContext.Provider
            value={{
              paymentRecFormData,
              handleFromChange,
              handleSubmit,
              handleInvalid,
              message,
            }}
          >
            <PaymentRecFrom />
          </PaymentRecFormContext.Provider>

          <ResponsiveDisplayImg
            data={{
              img: `${dirRoot}support.png`,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default PaymentReconcilation;
