import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Pages/Home";
import NotFoundPage from "./Pages/NotFoundPage";
import ScrollToTop from "./Utilities/ScrollToTop";
import Quotes from "./Pages/Quotes";
import Product from "./Pages/Product";
import Contact from "./Pages/Contact";
import Guide from "./Pages/Guide";
import PrivacyPolicy from "./Pages/polices/PrivacyPolicy";
import Blogs from "./Pages/Blogs";
import HowToStartSellingOnline from "./Pages/blogs/HowToStartSellingOnline";
import About from "./Pages/About";
import WhyUs from "./Pages/WhyUs";
import CovidImplicationsOnFulfillment from "./Pages/blogs/CovidImplicationsOnFulfillment";
import Integration from "./Pages/Integration";
import DifferenceBetweenPLs from "./Pages/blogs/DifferenceBetweenPLs";
import Pricing from "./Pages/Pricing";
import Guides from "./Pages/Guides";
import Guide2 from "./Pages/Guide2";
import TopProductsToSellOnline from "./Pages/blogs/TopProductsToSellOnline";

const Main = () => {
  return (
    <main>
      {/* <ScrollToTop /> */}

      <Switch>
        <Route exact path="/polices/privacy" component={PrivacyPolicy} />
        <Route exact path="/blogs" component={Blogs} />
        <Route
          exact
          path="/blogs/difference-between-1PL-2PL-3PL-4PL"
          component={DifferenceBetweenPLs}
        />
        <Route
          exact
          path="/blogs/how-to-start-selling-online"
          component={HowToStartSellingOnline}
        />
        <Route
          exact
          path="/blogs/top-15-products-to-sell-online-in-2021"
          component={TopProductsToSellOnline}
        />
        <Route
          exact
          path="/blogs/covid-implications-on-fulfillment"
          component={CovidImplicationsOnFulfillment}
        />
        <Route exact path="/integration" component={Integration} />
        <Route exact path="/guides/guide-2" component={Guide2} />
        <Route exact path="/guides/guide-1" component={Guide} />
        <Route exact path="/guides" component={Guides} />
        <Route exact path="/pricing" component={Pricing} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/product" component={Product} />
        <Route exact path="/quotes" component={Quotes} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/why-us" component={WhyUs} />
        <Route exact path="/" component={Home} />
        <Route path="*" component={NotFoundPage} />
      </Switch>
    </main>
  );
};

export default Main;
