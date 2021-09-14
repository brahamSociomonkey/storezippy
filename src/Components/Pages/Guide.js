import React, { useState, useEffect } from "react";
import GuideForm from "../forms/GuideForm";
import MailchimpGuideForm from "../forms/MailchimpGuideForm";
import sendFormData from "../Utilities/library/sendFormData";
import HeadingWithLine from "../Utilities/mini-comps/HeadingWithLine";
import ResponsiveDisplayImg from "../Utilities/mini-comps/ResponsiveDisplayImg";
import SectionImgContentGrid from "../Utilities/mini-comps/SectionImgContentGrid";
// import MailchimpSubscribe from "react-mailchimp-subscribe";
import animationObserver from "../Utilities/library/animationObserver";
export const GuideFormContext = React.createContext();

const Guide = () => {
  const [guideFormData, setGuideFormData] = useState({
    formType: { value: "Guide Form", name: "From Type" },
    firstName: { value: "", required: true, label: "First Name" },
    lastName: { value: "", required: true, label: "Last Name" },
    email: { value: "", required: true, label: "Email" },
    phone: { value: "", required: true, label: "Phone" },
    company: { value: "", required: true, label: "Company Name" },
    platform: {
      value: "",
      required: false,
      label: "Current Ecom Platform ",
    },
    siteUrl: { value: "", required: false, label: "Company Website URL" },
    MO_SHIPS: {
      value: "",
      required: true,
      label: "Current Monthly Shipments",
    },
  });

  const [message, setMessage] = useState("");

  // const AddSubscriber = (response) => {
  //   const url =
  //     "https://storezippy.us6.list-manage.com/subscribe/post?u=0ac89d59bb2dc464d014be5f5&id=e4c9b16a6f";

  //   const data = {};

  //   for (const key in response) {
  //     if (Object.hasOwnProperty.call(response, key)) {
  //       const element = response[key];
  //       const { name, value } = element;

  //       if (value) data[name] = value;
  //     }
  //   }

  //   return (
  //     <MailchimpSubscribe
  //       url={url}
  //     />
  //   );
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(() => "Connecting to the server..");
    sendFormData(guideFormData, setMessage);
    // AddSubscriber(guideFormData);
  };

  const handleInvalid = (e) => {
    console.log("Form not filled properly");
  };

  const handleFromChange = (e) => {
    const { name, value } = e.target;

    setGuideFormData((prevData) => ({
      ...prevData,
      [name]: { ...prevData[name], name, value },
    }));
  };

  const monthlyShipmentsOptions = [
    {
      value: "",
      content: "Select Monthly Shipments",
    },
    {
      value: "New Store, I'm not currently shipping",
      content: "New Store, I'm not currently shipping",
    },
    {
      value: "1-200",
      content: "1-200",
    },
    {
      value: "201-500",
      content: "201-500",
    },
    {
      value: "501-1000",
      content: "501-1,000",
    },
    {
      value: "5001-10000",
      content: "5001-10,000",
    },
    {
      value: "10,000+",
      content: "10,000+",
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
    <div id="guide-1">
      <SectionImgContentGrid
        data={{
          sectionClassName: "hero page-width",
          heading: "The Ultimate Guide to Order Fulfillment 2021",
          text: "Determining the right fulfillment strategy for your business can be nerve wracking. That’s why we have created a free all-in-one guide on <strong>“Order Fulfillment”</strong> to help you with a seamless fulfillment process.<br /><ul>This Order Fulfillment guide will help you learn:<br /><li>What is order fulfillment and the steps involved.</li> <li>Different order fulfillment options.</li> <li>Why outsource?</li><li>Important factors while choosing the right 3PL.</li></ul>",
          img: "/assets/pages/guides/guide-1/hero.png",
          mobImg: "/assets/pages/guides/guide-1/hero-mob.png",
        }}
      />

      <div className="page-width">
        <div className="basic-grid-container guide-grid-container">
          <div>
            <br />
            <br />
            <br />
            <HeadingWithLine
              data={{
                heading: "You are just a step away!",
              }}
            />

            <br />
            <br />
            <br />

            <GuideFormContext.Provider
              value={{
                guideFormData,
                handleFromChange,
                handleSubmit,
                handleInvalid,
                monthlyShipmentsOptions,
                message,
              }}
            >
              {/* <GuideForm /> */}
              <MailchimpGuideForm />
            </GuideFormContext.Provider>
          </div>
          <div className="images-area">
            <ResponsiveDisplayImg
              data={{
                img: "/assets/pages/guides/guide-1/dude.png",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Guide;
