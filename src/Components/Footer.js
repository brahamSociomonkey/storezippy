import React, { useState } from "react";
import { Link } from "react-router-dom";
import sendFormData from "./Utilities/library/sendFormData";
import FooterLinksGenerator from "./Utilities/mini-comps/FooterLinksGenerator";
import IconLink from "./Utilities/mini-comps/IconLink";

const Footer = () => {
  const dataForCompany = {
    heading: "Company",
    linksData: [
      { text: "About", to: "/about" },
      { text: "Why Us?", to: "/why-us" },
      { text: "Get in Touch", to: "/contact" },
      { text: "Careers", to: "/careers" },
      { text: "Fulfillment Centers", to: "/fddsf" },
      { text: "Technology", to: "/technology" },
    ],
  };
  const dataForExplore = {
    heading: "Product",
    linksData: [
      { text: "How it works?", to: "/product" },
      { text: "Partners and Integrations", to: "/" },
      { text: "Pricing", to: "/" },
      { text: "Payment Reconciliation", to: "/payment-reconcilation" },
    ],
  };
  const dataForBrowse = {
    heading: "Resources",
    linksData: [
      { text: "Guides", to: "/guide" },
      { text: "Case Studies", to: "/" },
      { text: "Frequently Asked Questions", to: "/" },
      { text: "Blogs", to: "/blogs" },
    ],
  };
  const dataForPolices = {
    heading: "Legal",
    linksData: [
      { text: "Terms and Conditions", to: "/polices/terms-conditions" },
      { text: "Privacy Policy", to: "/polices/privacy" },
    ],
  };

  const [newsLetterFormData, setNewsLetterFormData] = useState({
    formType: { value: "NewsLetter SignUp Form", name: "From Type" },
    email: { value: "", required: true, label: "Email" },
  });

  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(() => "Connecting to the server..");
    sendFormData(newsLetterFormData, setMessage);

    setTimeout(() => {
      setMessage(() => "");
    }, 6000);
  };

  const handleInvalid = (e) => {
    console.log("Form not filled properly");
  };

  const handleFromChange = (e) => {
    const { name, value } = e.target;

    setNewsLetterFormData((prevData) => ({
      ...prevData,
      [name]: { ...prevData[name], name, value },
    }));
  };

  return (
    <footer className="txt-center">
      <div className="gradient-line"></div>

      <div className="grid-container links-container">
        <div className="grid-item address-area">
          <Link className="logo-container" to="/">
            <img src="/assets/logo.png" alt="logo"></img>
          </Link>
          <br />
          <br />
          <div className="rte">
            <address>
              Kharsa no- 72/16 & 25, Swaran Park, Mundka, New Delhi 110041
            </address>
          </div>
          <br />
          <div className="icon-link">
            <div className="icon">
              <img src="/assets/icon-mail.png" alt="mail icon" />
            </div>
            <div className="link">
              <a href="mailto:info@storezippy.com">info@storezippy.com</a>
            </div>
          </div>
          <div className="icon-link">
            <div className="icon">
              <img src="/assets/icon-phone.png" alt="phone icon" />
            </div>
            <div className="link">
              <a href="tel: 9999332820"> 9999332820</a>
            </div>
          </div>
        </div>

        <div className="grid-item">
          <FooterLinksGenerator data={dataForCompany} />
        </div>

        <div className="grid-item">
          <FooterLinksGenerator data={dataForExplore} />
        </div>

        <div className="grid-item">
          <FooterLinksGenerator data={dataForBrowse} />
        </div>

        <div className="grid-item">
          <FooterLinksGenerator data={dataForPolices} />
        </div>

        <div className="grid-item">
          <h3 className="heading">Follow us on:</h3>
          <div className="social-icons-container">
            <div className="social-link-item">
              <a href="/" target="_blank">
                <img src="/assets/icon-insta.png" alt="insta icon" />
              </a>
            </div>
            <div className="social-link-item">
              <a href="/" target="_blank">
                <img src="/assets/icon-fb.png" alt="fb icon" />
              </a>
            </div>
            <div className="social-link-item">
              <a href="/" target="_blank">
                <img src="/assets/icon-yt.png" alt="yt icon" />
              </a>
            </div>
          </div>
        </div>

        <div className="grid-item">
          <h3 className="heading">Subscribe our newsletter:</h3>
          <div className="form-container">
            <form
              method="POST"
              id="contact form"
              className="pageForm qotesform"
              onInvalid={handleInvalid}
              onSubmit={handleSubmit}
            >
              <div className="form-item">
                <input
                  onChange={handleFromChange}
                  name="email"
                  type="email"
                  required={newsLetterFormData["email"]["required"]}
                  value={newsLetterFormData["email"]["value"]}
                />
                <button type="submit">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.0519 14.8285L13.4661 16.2427L17.7087 12L13.4661 7.7574L12.0519 9.17161L13.8803 11H6.34318V13H13.8803L12.0519 14.8285Z"
                      fill="currentColor"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M1 19C1 21.2091 2.79086 23 5 23H19C21.2091 23 23 21.2091 23 19V5C23 2.79086 21.2091 1 19 1H5C2.79086 1 1 2.79086 1 5V19ZM5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21Z"
                      fill="currentColor"
                    />
                  </svg>
                </button>
              </div>
            </form>
            <p className="heading">{message}</p>
          </div>
        </div>
      </div>

      <div className="gradient-line"></div>
      <p className="rte txt-center" style={{ margin: "1rem" }}>
        Copyright © 2021 EMount Ventures Pvt. Ltd. All rights reserved{" "}
      </p>
    </footer>
  );
};

export default Footer;
