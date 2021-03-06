import React, { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import HamIcon from "./Utilities/mini-comps/HamIcon";
import { useIntercom } from "react-use-intercom";
import ReactHtmlParser from "react-html-parser";

const Header = () => {
  const headerRef = useRef(null);
  const detailsRef = useRef(null);
  const hamMenuRef = useRef(null);
  const dropDownNavRef = useRef(null);
  const { show } = useIntercom();

  const dataForNavDropdown = {
    resources: {
      headingText: "Mastering <strong>Ecommerce</strong> with Store Zippy",
      links: [
        {
          icon: "/assets/icon-guide.png",
          text: "Guides",
          url: "/guides",
        },
        {
          icon: "/assets/icon-blogging.png",
          text: "Blogs",
          url: "/blogs",
        },
        {
          icon: "/assets/icon-case-studies.png",
          text: "Case Studies",
          url: "/case-studies",
        },
        {
          icon: "/assets/icon-faq.png",
          text: "Frequently Asked Questions",
          url: "/faq",
        },
      ],
    },
  };

  const [currentDropDown, setCurrentDropDown] = useState(null);

  const handleHamClick = (e) => {
    if (!e) return;

    const target = e.target.closest(".ham-menu svg");
    headerRef.current.classList.toggle("hide");

    if (headerRef.current.classList.contains("hide")) {
      // target.classList.add("opened");
      // target.setAttribute("aria-expanded", target.classList.contains("opened"));

      hamMenuRef.current.classList.remove("open");
    } else {
      // target.classList.remove("opened");
      // target.setAttribute("aria-expanded", target.classList.contains("opened"));
      hamMenuRef.current.classList.add("open");
    }

    if (detailsRef.current) {
      detailsRef.current.open = false;
    }
  };

  const animateHamIcon = () => {
    if (headerRef.current.classList.contains("hide")) {
      hamMenuRef.current.classList.remove("open");
    } else {
      hamMenuRef.current.classList.add("open");
    }
  };

  const handleCustomersClick = (e) => {
    handleLinkClick();
    show();
  };

  const handleLinkClick = (e) => {
    if (window.innerWidth <= 650) {
      headerRef.current.classList.add("hide");
    }

    handleHamClick();
    animateHamIcon();
    toggleDropDown(e);
    changeDropdDown(e);
  };

  const handleDropDownLinkClick = (e) => {
    toggleDropDown(e);
    changeDropdDown(e);
  };

  const handleDropDownLinkMouseEnter = (e) => {
    changeDropdDown(e);
    // showDropDown();
  };

  const handleHeaderMouseLeave = (e) => {
    hideDropDown();
    changeDropdDown(e);
  };

  const changeDropdDown = (e) => {
    const { dropDown } = e.target.dataset;

    if (!dropDown) {
      setCurrentDropDown(() => null);
    }

    setCurrentDropDown(() => dataForNavDropdown[dropDown]);
  };

  const toggleDropDown = () => {
    dropDownNavRef.current.classList.toggle("active");
  };

  const showDropDown = () => {
    dropDownNavRef.current.classList.add("active");
  };

  const hideDropDown = () => {
    dropDownNavRef.current.classList.remove("active");
  };

  useEffect(() => {
    if (window.innerWidth <= 650) {
      headerRef.current.classList.add("hide");
    }
  }, [window.innerWidth]);

  useEffect(() => {
    const onlyForPc = document.querySelectorAll(".only-show-for-pc");
    const onlyForMob = document.querySelectorAll(".only-show-for-mob");

    const deleteAll = (elements) => elements.forEach((ele) => ele.remove());

    if (window.innerWidth > 750) {
      deleteAll(onlyForMob);
    } else {
      deleteAll(onlyForPc);
    }
  }, []);

  return (
    <>
      <div className="mobile-header">
        <div className="nav-link-item">
          <Link onClick={handleLinkClick} className="logo-container" to="/">
            <img src="/assets/logo.png" alt="logo" />
          </Link>
        </div>

        <HamIcon data={{ handleHamClick, hamMenuRef }} />
      </div>

      <header ref={headerRef} onMouseLeave={handleHeaderMouseLeave}>
        <nav>
          <div className="nav-links-group">
            <Link onClick={handleLinkClick} className="logo-container" to="/">
              <img src="/assets/logo.png" alt="logo"></img>
            </Link>
          </div>
          <div className="nav-links-group">
            <ul className="main-links-container">
              <li>
                <Link
                  onClick={handleLinkClick}
                  className="main-link"
                  to="/about"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  onClick={handleLinkClick}
                  className="main-link"
                  to="/why-us"
                >
                  Why Us?
                </Link>
              </li>
              <li>
                <Link
                  onClick={handleLinkClick}
                  className="main-link"
                  to="/product"
                >
                  How it Works?
                </Link>
              </li>
              <li>
                <Link
                  onClick={handleLinkClick}
                  className="main-link"
                  to="/pricing"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <button
                  onMouseEnter={handleDropDownLinkMouseEnter}
                  onClick={handleDropDownLinkClick}
                  // onToStart=""
                  className="main-link has-drop-down only-show-for-pc"
                >
                  <div className="title" data-drop-down="resources">
                    Resources
                    <i className="gg-chevron-down"></i>
                  </div>
                </button>

                <details
                  ref={detailsRef}
                  className="only-show-for-mob main-link has-drop-down"
                >
                  <summary>
                    <div className="title" data-drop-down="resources">
                      Resources
                      <i className="gg-chevron-down"></i>
                    </div>
                  </summary>
                  <ul>
                    {dataForNavDropdown["resources"]["links"]?.map(
                      ({ text, url }, index) => (
                        <li className="link-item" key={index}>
                          <Link onClick={handleLinkClick} to={url}>
                            {text}
                          </Link>
                        </li>
                      )
                    )}
                  </ul>
                </details>
              </li>
              <li>
                <Link
                  onClick={handleLinkClick}
                  className="main-link"
                  to="/integration"
                >
                  Integration
                </Link>
              </li>
            </ul>
          </div>
          <div className="nav-links-group">
            <div className="customers-group">
              {/* <span>
                <Link onClick={handleCustomersClick} className="icon" to="#">
                  <img src="/assets/icon-customers.png" alt="customers"></img>
                </Link>
              </span>
              <span>
                <Link onClick={handleLinkClick} className="icon" to="/">
                  <img src="/assets/icon-search.png" alt="search"></img>
                </Link>
              </span> */}
              <span>
                <Link onClick={handleLinkClick} className="btn" to="/quotes">
                  Get Started
                </Link>
              </span>
            </div>
          </div>
        </nav>
        <aside className="dropdown-nav" ref={dropDownNavRef}>
          {currentDropDown && (
            <div className="dropdown-grid-container">
              <div className="heading-container">
                <h2>{ReactHtmlParser(currentDropDown["headingText"])}</h2>
              </div>

              <div className="links-container">
                {currentDropDown["links"]?.map(({ icon, text, url }, index) => (
                  <Link
                    className="link-item"
                    key={index}
                    to={url}
                    onClick={handleLinkClick}
                  >
                    <div className="icon">
                      <img src={icon} alt={icon} />
                    </div>
                    <div className="link">{text}</div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </aside>
      </header>
    </>
  );
};

export default Header;
