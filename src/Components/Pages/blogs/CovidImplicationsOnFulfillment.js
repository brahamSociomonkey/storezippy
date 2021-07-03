import React from "react";
import ResponsiveDisplayImg from "../../Utilities/mini-comps/ResponsiveDisplayImg";

const CovidImplicationsOnFulfillment = () => {
  // scroll to top
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const imagesRoot = `/assets/pages/blogs/covid-implications-on-fulfillment/`;

  return (
    <div className="blog-page">
      <ResponsiveDisplayImg
        data={{
          img: `${imagesRoot}hero.png`,
        }}
      />

      <article className="blog-page-width">
        <br />
        <h1 className="title heading primary-font">
          Covid-19 implications on fulfillment operations
        </h1>
        <p>
          Written by <span className="author">Garima Mehta</span> | 4 mins Read
        </p>
        <div className="custom-hr"></div>
        <br />
        <br />

        <p>
          The <strong>novel coronavirus (Covid-19)</strong> has significantly
          impacted the global supply chain and has triggered market volatility
          causing steep declines in emerging economies. With its ripple effects
          in businesses everywhere, eCommerce fulfillment has been no exception.
          But here is the good news- despite some negative effects, Covid-19 has
          also affected the supply chain operations in a positive way. While
          some businesses and industries are getting knocked off by the virus,
          others are booming. Unprecedented and unforeseen growth has occurred
          in digital and ecommerce sectors amid the raging pandemic. Global
          e-commerce has jumped to <strong>$26.7 trillion</strong> fuelled by
          the impacts of covid-19 as per the latest statistics. <br />
          <br />
          As we continue to navigate our lives in today’s new normal of
          lockdowns, wearing masks and practicing social distancing, more and
          more consumers are switching to online shopping at the moment in order
          to avoid venturing out. This dramatic rise in eCommerce is also
          transforming the warehousing and fulfillment industry as it
          accordingly adapts and feels the effects of this eCommerce revolution.{" "}
          <br />
          <br />
          <strong>
            Now that we have an idea that the pandemic has both positive and
            negative implications on fulfillment operations, let’s have a deeper
            look at the ways eCommerce fulfillment has been impacted in the wake
            of Covid-19.
          </strong>
        </p>

        <div className="point">
          <h2 className="heading">1. Increased warehouse automation</h2>
          <div className="has-float-img">
            <img src={`${imagesRoot}forklift.png`} />
            <p>
              To have an upper hand in the era of new innovative technologies,
              the fulfillment centres are adopting warehouse automation to add
              value to their business operations and like many other things,
              Covid is speeding up their automation journey. Centres which are
              highly automated are least affected by the negative impacts of the
              pandemic shockwaves and hence to stay up and running, the industry
              is shifting towards the fully automated warehousing model.
            </p>
          </div>
        </div>

        <div className="point">
          <h2 className="heading">2. Need to keep buffer stock on hand</h2>
          <p>
            Prior to the pandemic, receiving goods just in time to keep
            inventory costs down was the best practice but ever since covid has
            gripped the globe, the supply chain hiccups have become common.
            Sellers have started to keep more stock on hand to avoid shortages
            which in turn calls for additional space in the warehouse to manage
            this buffer stock.
          </p>
        </div>

        <div className="point">
          <h2 className="heading">3. Increase in warehouse storage capacity</h2>
          <p>
            The pandemic drives the need for more warehouse capacity for all the
            obvious reasons - <br />
            <ul>
              <li>Increased levels of inventory</li>
              <li>Meeting surge in demand</li>
              <li>Additional space for social distancing</li>
            </ul>
          </p>

          <br />
          <br />
          <ResponsiveDisplayImg
            data={{
              img: `${imagesRoot}warehouse.png`,
            }}
          />
          <br />
        </div>

        <div className="point">
          <h2 className="heading">4. Increased reliance on 3PL providers</h2>
          <p>
            Covid-19 has triggered major setbacks for global supply chains
            making it crucial to place the fulfillment operations in the hands
            of experts. That’s why a lot of entrepreneurs in the eCommerce
            business are looking to outsource their supply chain management to a
            reliable 3PL so that they can get back the time to focus on
            efficiently running and expanding it. Also, since 3PL’s like
            StoreZippy have a strong network of their fulfillment centres, it
            allows them to keep the inventory close to their end customers -
            increasing efficiency and improving customer experience.
          </p>
        </div>

        <div className="point">
          <h2 className="heading">5. No more long term contracts</h2>
          <p>
            Second wave of Covid-19 has hit the nation harder than the first and
            one lesson we all have learnt while being on the roller coaster ride set
            by this pandemic is that the future is so uncertain and
            unpredictable. This is in turn making the companies hesitant to sign
            a long-term contract commitment. Same is the case with 3PL’s
            themselves when it comes to renting, leasing or co-sharing the
            warehouse space. 1-2 years contract term is likely to be the new
            standard.
          </p>

          <br />
          <br />
          <ResponsiveDisplayImg
            data={{
              img: `${imagesRoot}laptop.png`,
            }}
          />
          <br />
        </div>

        <div className="point">
          <h2 className="heading">6. The boom of ECommerce</h2>
          <p>
            Covid-19 has bolstered the growth of the eCommerce industry and has
            put it at the forefront of retail. According to Forbes, the pandemic
            has accelerated eCommerce growth to an extent which would have
            otherwise taken four to six years to achieve. This global shift
            towards online shopping has created a dire need for improved,
            accurate and efficient warehouse operations. Processes, technologies
            and workflow will all be impacted while trying to accommodate the
            surge in operational demands.
          </p>
        </div>

        <div className="point">
          <h2 className="heading">7. More investment in technology</h2>
          <p>
            To have improved efficiency, better accuracy and a secure business’
            future success in these tough times, there is a need to be equipped
            with the latest technology which simply means more investment in a
            WMS to stay ahead.
          </p>
        </div>

        <div className="point">
          <h2 className="heading">8. Decentralize warehouse locations</h2>
          <p>
            To offer same or next day delivery, companies need to decentralize
            their warehouses in order to be closer to their customers and
            decrease shipment costs. This is again where 3PL’s play a vital role
            as many seek to switch to outsource their warehousing and
            fulfillment needs to a reliable party logistics provider to minimise
            the risks associated with supply chain disruptions.
          </p>
        </div>

        <div className="point">
          <h2 className="heading">9. Focus on scalability</h2>
          <p>
            While some warehouses were overwhelmed with the online orders as the
            pandemic continued to spread across the globe, others were left with
            an abundance of dead stock. Such fluctuations in demands pose some
            serious challenges for those managing the warehouse and fulfillment
            centres. Thus, accommodating erratic demands require implementation
            of flexible and scalable strategies to adapt to these unusual times.
            Warehouses need systems and processes that allow them to easily
            handle the peaks (and valleys) in order demands.
          </p>
        </div>

        <div className="point">
          <h2 className="heading">10. Following safety guidelines</h2>
          <div className="has-float-img">
            <img src={`${imagesRoot}mask.png`} />
            <p>
              WHO has laid down a list of safety requirements and protocols
              which the warehousing and fulfillment industries must comply with.
              To prevent the spread of virus, every order needs to be packed and
              shipped with utmost care and only after proper sanitisation. This
              is important for the safety of everyone - the customers, warehouse
              employees and those responsible for delivery of orders to the end
              customers.
            </p>
          </div>
        </div>

        <p>
          There is absolutely no denying the fact that the eCommerce revolution
          has changed the traditional ways of how warehousing and fulfillment
          centres used to operate. As we navigate the storm ahead and settle our
          lives post Covid, the only thing that is certain is that everything is
          uncertain. Companies need to think ahead and have not one but multiple
          backup plans for the worst conditions. With an indeterminate future,
          warehouse and fulfillment centres need to be as adaptable, scalable
          and flexible as possible. To meet increasing consumer demands and
          revamp warehousing operations, the supply chain industries are
          shifting towards implementation of adequate strategies and policies.
          <br />
          <br />
          Although the implications of COVID pandemic on the industry are worthy
          to note and it is impossible to predict what the future holds for the
          eCommerce and fulfillment industry, those ready to adapt to the
          ongoing necessary changes in the sector will continue to grow and
          build customer loyalty.
        </p>
      </article>
    </div>
  );
};

export default CovidImplicationsOnFulfillment;
