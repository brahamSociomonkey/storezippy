import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { PaymentRecFormContext } from "../Pages/PaymentReconcilation";
import CustomSelect from "../Utilities/mini-comps/CustomSelect";

function PaymentRecFrom() {
  const {
    paymentRecFormData,
    handleFromChange,
    handleInvalid,
    handleSubmit,
    message,
  } = useContext(PaymentRecFormContext);

  return (
    <div className="form-container">
      <form
        // action="https://formsubmit.co/braham@sociomonkey.com"
        method="POST"
        id="contact form"
        className="pageForm qotesform"
        onInvalid={handleInvalid}
        onSubmit={handleSubmit}
      >
        <input type="hidden" name="_captcha" value="false" />

        <input
          onChange={handleFromChange}
          name="Form Type"
          type="hidden"
          value="Quotes Form"
        />

        <div className="split-half">
          <div className="form-item">
            <label data-required={paymentRecFormData["firstName"]["required"]}>
              <span>{paymentRecFormData["firstName"]["label"]}</span>

              <input
                onChange={handleFromChange}
                name="firstName"
                type="text"
                required={paymentRecFormData["firstName"]["required"]}
                value={paymentRecFormData["firstName"]["value"]}
              />
            </label>
          </div>

          <div className="form-item">
            <label data-required={paymentRecFormData["lastName"]["required"]}>
              <span>{paymentRecFormData["lastName"]["label"]}</span>

              <input
                onChange={handleFromChange}
                name="lastName"
                type="text"
                required={paymentRecFormData["lastName"]["required"]}
                value={paymentRecFormData["lastName"]["value"]}
              />
            </label>
          </div>
        </div>

        <div className="split-half">
          <div className="form-item">
            <label data-required={paymentRecFormData["email"]["required"]}>
              <span>{paymentRecFormData["email"]["label"]}</span>

              <input
                onChange={handleFromChange}
                name="email"
                type="email"
                required={paymentRecFormData["email"]["required"]}
                value={paymentRecFormData["email"]["value"]}
              />
            </label>
          </div>

          <div className="form-item">
            <label data-required={paymentRecFormData["phone"]["required"]}>
              <span>{paymentRecFormData["phone"]["label"]}</span>

              <input
                onChange={handleFromChange}
                name="phone"
                type="tel"
                required={paymentRecFormData["phone"]["required"]}
                value={paymentRecFormData["phone"]["value"]}
              />
            </label>
          </div>
        </div>

        <div className="split-half">
          <div className="form-item">
            <label data-required={paymentRecFormData["company"]["required"]}>
              <span>{paymentRecFormData["company"]["label"]}</span>

              <input
                onChange={handleFromChange}
                name="company"
                type="text"
                required={paymentRecFormData["company"]["required"]}
                value={paymentRecFormData["company"]["value"]}
              />
            </label>
          </div>

          <div className="form-item">
            <label data-required={paymentRecFormData["platform"]["required"]}>
              <span>{paymentRecFormData["platform"]["label"]}</span>

              <input
                onChange={handleFromChange}
                name="platform"
                type="text"
                placeholder="Eg. Shopify, Wordpress"
                required={paymentRecFormData["platform"]["required"]}
                value={paymentRecFormData["platform"]["value"]}
              />
            </label>
          </div>
        </div>

        <div className="form-item">
          <label data-required={paymentRecFormData["siteUrl"]["required"]}>
            <span>{paymentRecFormData["siteUrl"]["label"]}</span>

            <input
              onChange={handleFromChange}
              name="siteUrl"
              type="url"
              required={paymentRecFormData["siteUrl"]["required"]}
              value={paymentRecFormData["siteUrl"]["value"]}
            />
          </label>
        </div>

        <div className="form-item">
          <label data-required={paymentRecFormData["comment"]["required"]}>
            <span>{paymentRecFormData["comment"]["label"]}</span>

            <textarea
              onChange={handleFromChange}
              name="comment"
              required={paymentRecFormData["comment"]["required"]}
              value={paymentRecFormData["comment"]["value"]}
            />
          </label>
        </div>

        <div className="form-item">
          <Link
            to="/polices"
            style={{ textDecoration: "underline", color: "#2077F5" }}
          >
            Privacy Policy
          </Link>
        </div>

        <div className="form-item form-submit">
          <button type="submit" className="btn">
            Submit
          </button>
        </div>

        <div className="form-item">
          <p className="rte">
            A fulfillment expert will get back to you shortly.
          </p>
        </div>

        <div className="form-item">
          <h2 className="primary-color tertiary-font heading">{message}</h2>
        </div>
      </form>
    </div>
  );
}

export default PaymentRecFrom;
