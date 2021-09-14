import React from "react";
import ResponsiveDisplayImg from "../../Utilities/mini-comps/ResponsiveDisplayImg";

const EcomSEO = () => {
  const dirRoot = `/assets/pages/blogs/ecom-seo/`;

  // scroll to top
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="blog-page ecom-seo">
      <ResponsiveDisplayImg
        data={{
          img: `${dirRoot}hero-min.png`,
        }}
      />

      <article>
        <br />
        <h1 className="title heading primary-font">
          ECommerce SEO- Simple process for more sales
        </h1>
        <p>
          Written by <span className="author">Garima Mehta</span> | 4 mins Read
        </p>
        <div className="custom-hr"></div>
        <br />
        <br />
        <p>
          In 2020, massive growth in eCommerce and online purchasing has made
          the online market more competitive than ever before. How can you
          compete in Google's limited search results with so many large brands?
          How can you get your small internet store to rank higher than the big
          boys?
          <br />
          <br />
          This is where an effective eCommerce SEO strategy can assist you in
          attracting more qualified traffic and increasing sales.
          <br />
          <br />
          Fortunately, implementing an efficient eCommerce SEO strategy isn't as
          difficult as you would assume. It becomes pretty straightforward when
          you break it down into actionable steps.
        </p>

        <div className="points-container">
          <div className="point-item">
            <h2 className="secondary-font heading big-heading">
              Troubleshoot your existing website
            </h2>

            <ResponsiveDisplayImg
              data={{ img: `${dirRoot}troubleshoot-min.png` }}
            />

            <p>
              You may have had no idea what you were doing when you originally
              set up your store's website. Or perhaps you hired an SEO "expert"
              who was just as clueless as you.
              <br /> <br />
              Whatever the situation may be, these are minor issues, yet they
              can have a significant impact on your site's rankings.
              Fortunately, the majority of these are simple to correct. Your
              site will serve as a solid basis for the rest of your eCommerce
              SEO campaign once you've fixed them. It will help you rank higher
              and avoid you from having to go back to problems you should have
              addressed earlier.
            </p>
          </div>

          <div className="point-item">
            <h2 className="secondary-font heading big-heading">
              Keyword Research
            </h2>

            <ResponsiveDisplayImg
              data={{ img: `${dirRoot}keywords-min.png` }}
            />

            <p>
              It's time to do keyword research after troubleshooting and making
              the necessary improvements.
              <br /> <br />
              Your eCommerce SEO plan will be structured by keyword research.
              You'll have a better sense of what you're aiming to rank for, and
              you'll be able to tailor your content to those keywords.
              <br /> <br />
              <strong>Key characteristics of keyword research:</strong>
            </p>
          </div>

          <div className="point-item">
            <h2 className="secondary-font heading">1. Search Volume</h2>

            <p>
              Of course, you want keywords with a high volume of searches. It's
              a waste of effort to optimise for unpopular keywords because your
              customers aren't searching for them.
            </p>
          </div>

          <div className="point-item">
            <h2 className="secondary-font heading">2. Intent</h2>

            <p>
              The keywords you use must also have a business purpose. Let's take
              an obvious example to demonstrate this concept:
              <br /> <br />
              Let's pretend you're a baker who sells homemade bread. Someone
              looking to buy your goods is unlikely to look for “how to make
              homemade bread tips.” “Handmade bread for sale,” “where to buy
              homemade bread,” and similar phrases would be better to target.
            </p>
          </div>

          <div className="point-item">
            <h2 className="secondary-font heading">3. Relevancy</h2>

            <p>
              Your keywords must be extremely relevant to the pages to which
              they link. If someone searches for "kayaks for sale" and clicks on
              your page in the results, they will most likely see kayaks for
              sale. If they don't, they'll hit the back arrow and look for a
              competitor who is more straightforward. Worse, a high bounce rate
              doesn't just result in fewer conversions; it can also have an
              impact on your ranking.
            </p>
          </div>

          <div className="point-item">
            <h2 className="secondary-font heading">4. Competition Level</h2>

            <p>
              Let's face it: as a small business, you won't be able to compete
              with the industry's largest names. Perhaps someday, but not today.
              As a result, make sure the keywords you select have a reasonable
              level of competition—the more particular and hyper-focused, the
              better.
            </p>
          </div>

          <div className="point-item">
            <h2 className="secondary-font heading big-heading">
              Create high quality category pages
            </h2>

            <p>
              You may start implementing the relevant keywords throughout your
              site, including your category pages, once you've found the right
              ones.
              <br />
              <br />
              Your site will be more organised if you use category pages. If you
              own a shoe store, for example, you might have a category page
              dedicated to sports shoes. This page acts as a home for all of
              your sports shoes while also informing Google that you sell them.
              <br />
              <br />
              Many eCommerce SEO initiatives overlook the need of developing
              high-quality category pages. They frequently underestimate its
              importance, which is unfortunate given how beneficial this easy
              step can be to your SEO.
            </p>
          </div>

          <div className="point-item">
            <h2 className="secondary-font heading big-heading">
              Optimise Product Pages
            </h2>

            <p>
              Many stores fail to establish category pages because they are too
              focused on using the wrong strategies to optimise product pages.
              Despite their efforts, their product sites fall short.
              <br /> <br />
              If your product pages aren't ranking or aren't converting, it's
              time to reconsider your strategy.
              <br /> <br />
              The procedure is fairly similar to how category pages are created:
              <br />
              <strong>
                <ul>
                  <li>
                    You must make sure that the title tag and meta description
                    are the right length, and that you employ keywords, among
                    other things.
                  </li>
                  <li>
                    Keywords must also be included in the textual content, as
                    well as an explanation of the page's purpose (for the sake
                    of both Google and your customers).
                  </li>
                  <li>
                    The URL, canonical URL, heading tags, and other elements
                    should all be optimised.
                  </li>
                </ul>
              </strong>
              While basic optimisation strategies are applicable to product and
              category pages, there is no one-size-fits-all approach. They serve
              various functions and hence necessitate different techniques. Here
              are three key points to remember while optimising your product
              pages:
            </p>
          </div>

          <div className="point-item">
            <h2 className="secondary-font heading">1. Product Images</h2>

            <p>
              People want to know exactly what they're getting when they buy
              something online. Professional-quality product photographs that
              display the item from various angles are important. It boosts the
              user's confidence and raises the likelihood of them closing the
              deal. As a result, while developing your product pages, make sure
              you include stunning images that convey the value of your product.
            </p>
          </div>

          <div className="point-item">
            <h2 className="secondary-font heading">
              2. Answer FAQ’s within the content
            </h2>

            <p>
              A successful product page also requires well-written content.
              There must be a snippet of the product description which covers
              every information that the user needs to know. This makes them
              become a more informed buyer.
            </p>
          </div>

          <div className="point-item">
            <h2 className="secondary-font heading">3. Reviews</h2>

            <p>
              Last but not least, good eCommerce SEO dictates that customer
              reviews be easily accessible. Buyers frequently seek for
              third-party evaluations, but on-site reviews are also beneficial.
              They instil trust in your users and dispel any doubts they may
              have.
            </p>
          </div>

          <div className="point-item">
            <h2 className="secondary-font heading big-heading">
              Add internal links
            </h2>

            <p>
              After you've optimised your product pages, it's time to put them
              to work. Internal linking is a great technique to accomplish this.
              <br /> <br />
              Internal links will assist you in boosting your eCommerce SEO
              approach. Internal links allow Google to properly organise and
              rank your pages when it detects them.
              <br /> <br />
              These internal links are also an excellent approach to promote
              your products to potential customers.
            </p>
          </div>

          <div className="point-item">
            <h2 className="secondary-font heading big-heading">
              Use link-building techniques
            </h2>

            <p>
              Internal links are simple to add, as you've seen. You have a lot
              of items to advertise and understand how they work together.
              <br /> <br />
              However, you must also concentrate on longer-term link-building
              techniques. These tactics entail incorporating external links into
              your website and obtaining links from other websites to your
              pages.
              <br /> <br />
              Backlinks, often known as external links, are an important part of
              eCommerce SEO. They drive new traffic to your site and increase
              your Google trustworthiness.
            </p>
          </div>

          <div className="point-item">
            <h2 className="secondary-font heading big-heading">
              The bottom line
            </h2>

            <p>
              When most people hear the word "SEO," they cringe. However, as an
              eCommerce business, you can't afford to ignore it. Accepting it as
              critical to your success is the first step. Then, with the
              assistance of this comprehensive blog, you'll be well on your way
              to developing a successful eCommerce SEO plan. It's simple to get
              started on your campaign with our 6-step procedure. We keep you
              from being overwhelmed by dividing down the task into manageable
              bits.
              <br /> <br />
              Yes, you have a significant amount of work ahead of you. But, at
              the end of the day, it's all about designing your website with
              search engines and your clients in mind. You'll increase traffic
              and conversions and have a more profitable eCommerce store if you
              appeal to these audiences.
            </p>
          </div>
        </div>
      </article>
    </div>
  );
};

export default EcomSEO;
