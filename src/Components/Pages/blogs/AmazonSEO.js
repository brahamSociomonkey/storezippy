import React from "react";
import ResponsiveDisplayImg from "../../Utilities/mini-comps/ResponsiveDisplayImg";

const AmazonSEO = () => {
  const dirRoot = `/assets/pages/blogs/amazon-seo/`;

  // scroll to top
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="blog-page amazon-seo">
      <ResponsiveDisplayImg
        data={{
          img: `${dirRoot}hero-min.png`,
        }}
      />

      <article>
        <br />
        <h1 className="title heading primary-font">
          Amazon SEO: Tips and tricks to rank highly on Amazon searches
        </h1>
        <p>
          Written by <span className="author">Garima Mehta</span> | 4 mins Read
        </p>
        <div className="custom-hr"></div>
        <br />
        <br />
        <p>
          When it comes to SEO or search engine optimization, most people think
          of it in terms of ranking your website for Google, but if you're also
          selling on Amazon, you'll have a whole new SEO chore on your hands.
          <br />
          <br />
          Amazon is effectively a massive shopping platform and you must
          consider how your product listings will be discovered by customers in
          order to stay ahead of the competition.
        </p>

        <div className="points-container">
          <div className="point-item">
            <h2 className="secondary-font heading big-heading">
              The Amazon Search Engine
            </h2>

            <ResponsiveDisplayImg
              data={{ img: `${dirRoot}search-engine-min.png` }}
            />

            <p>
              The Amazon product ranking algorithm, sometimes known as A9, is at
              the heart of this online retail behemoth.
              <br />
              <br />
              There are a few features that the algorithm will look for in order
              for your listing to be effectively displayed to a potential
              customer. These characteristics appear to include: search phrase
              relevancy (or text match), sale performance history (or conversion
              rate), price, and availability.
              <br />
              <br />
              Other aspects include the quality and number of customer
              evaluations, photographs, fulfilment processes (especially
              Amazon's FBA) and promotion. Keep in mind that Amazon products
              typically appear in Google searches, so your efforts on Amazon may
              be acknowledged by Google as well.
            </p>
          </div>

          <div className="point-item">
            <h2 className="secondary-font heading big-heading">
              Defining Search Terms and Keywords
            </h2>

            <ResponsiveDisplayImg
              data={{ img: `${dirRoot}keywords-min.png` }}
            />

            <p>
              To get started, imagine yourself as one of your customers (which
              should hopefully come easily). Make a list of all the keywords and
              search terms that spring to your mind, remembering that this is
              different from web search, in that purchasing is the end goal and
              "what is" queries aren't as relevant in this scenario because they
              won't convert to sales.
              <br />
              <br />
              <strong>
                The next step is to find a list of comparable words and
                extensions using a keyword search tool. To get you started, here
                are a few options :
                <ul>
                  <li>SEMrush</li> <br />
                  <li>
                    Amazon.com — clear your cache and start typing your first
                    search term to see what comes up in the auto-fill, which is
                    based on Amazon users' queries.
                  </li>{" "}
                  <br />
                  <li>
                    Google Keyword Planner – this one will also offer you an
                    estimate of the search volume for each term.
                  </li>{" "}
                  <br />
                  <li>Keyword Inspector</li>
                </ul>
              </strong>
            </p>
          </div>

          <div className="point-item">
            <h2 className="secondary-font heading big-heading">
              Putting Amazon SEO into action
            </h2>

            <ResponsiveDisplayImg data={{ img: `${dirRoot}seo-min.png` }} />

            <p>
              The most effective technique to enhance organic traffic on Amazon
              is to strategically integrate keywords throughout your listing.
              Your listing has four parts, each of which requires a distinct
              strategy to search term optimization :
            </p>
          </div>

          <div className="point-item">
            <h2 className="secondary-font heading">1. Product title</h2>

            <ResponsiveDisplayImg
              data={{ img: `${dirRoot}product-title-min.png` }}
            />

            <p>
              Your product title is the first and most important search field,
              and it's definitely the most important ranking element when it
              comes to relevancy. It must be brief and distinct.
              <br /> <br />
              You must ensure that the title reads naturally and avoid
              overloading your title with keywords; not only will this appear
              spammy, but it may also violate Amazon's seller policy. Always
              keep in mind that you're writing for people! If you use a title
              format that includes the brand name, product name, major
              characteristics, and variation information (such as size or
              color), you'll be fine. It may also include the primary material
              or ingredient, the model number, and the quantity per package,
              depending on the category.
            </p>
          </div>

          <div className="point-item">
            <h2 className="secondary-font heading">2. Bullet Points</h2>

            <ResponsiveDisplayImg
              data={{ img: `${dirRoot}bullet-points-min.png` }}
            />

            <p>
              These should cover your product's top five selling factors, which
              can be features or benefits (or a mix of both). We suggest using
              one keyword per bullet point and avoiding wasting words by writing
              in fragments and being as concise and specific as possible.
              Prevent using phrases like "free delivery" and "sale" in your
              product title to avoid sounding overly salesy.
            </p>
          </div>

          <div className="point-item">
            <h2 className="secondary-font heading">3. Product Description</h2>

            <ResponsiveDisplayImg
              data={{ img: `${dirRoot}product-description-min.png` }}
            />

            <p>
              Here you can go more specific and use whole phrases and
              punctuation. Include some of your keyword extensions as well as
              all of your product's essential characteristics. This part is
              crucial not just for your search ranking, but also for your
              conversion rate; the more precise and detailed information you
              present, the more likely you are to win the sale which feeds back
              into the Amazon algorithm, thus improving your overall Amazon
              rating.
            </p>
          </div>

          <div className="point-item">
            <h2 className="secondary-font heading">4. Backend Search Items</h2>

            <ResponsiveDisplayImg
              data={{ img: `${dirRoot}backend-search-min.png` }}
            />

            <p>
              While we told you not to pack keywords into your Amazon title and
              description, this is the place to do it. Customers will never see
              it, yet it can have a significant impact on your Amazon sales
              ranking. You only have 250 characters (including spaces) to make
              the most of your search phrase optimization.
              <br />
              <br />
              Use this space to include typical variations of your keywords
              (such as two words instead of one and vice versa) as well as
              common misspellings; however, ‘commas’ should be avoided because
              they will eat up your character count. Simply use spaces to
              separate your terms.
              <br />
              <br />
              It's also a good idea to only use your keywords once — if you use
              them in your title, don't use them in your back end – at least,
              that's how it's supposed to work. Avoid using stemming or
              extensions like ing, ed, and others for repeating terms.
              <br />
              <br />
              Remember that exact phrase match is typically used to evaluate the
              relevance of your goods, so include a few versions of your long
              tail search terms, such as ‘stainless steel water bottle' and
              ‘water bottle stainless.' Every component of your listing is
              indexed, thus the more back-end search terms you have, the more
              content Amazon will index, and the more chances you'll have to
              boost your Amazon ranking.
            </p>
          </div>

          <div className="point-item">
            <h2 className="secondary-font heading big-heading">
              Driving traffic to your Amazon Listing
            </h2>

            <ResponsiveDisplayImg data={{ img: `${dirRoot}traffic-min.png` }} />

            <p>
              Rather than depending just on Amazon searches, you may also use
              additional internal and external marketing techniques to attract
              visitors to your listing. As a result, your Amazon ranking will
              improve as well. Internally, take advantage of Amazon PPC and
              promotions. Externally, become active on Google Adwords, Facebook
              (including advertising), and email direct marketing to your client
              database.
            </p>
          </div>

          <div className="point-item">
            <h2 className="secondary-font heading big-heading">
              Tips for Amazon SEO
            </h2>

            <ResponsiveDisplayImg data={{ img: `${dirRoot}traffic-min.png` }} />

            <p>
              <strong>
                <ul>
                  <li>
                    Don't just set it and forget it — do your homework, optimise
                    your listing, analyse the results, and then do it all over
                    again.
                  </li>{" "}
                  <br />
                  <li>
                    With Amazon's competition heating up, you can't afford to
                    miss out on any opportunities.
                  </li>{" "}
                  <br />
                  <li>
                    A9 is a simple algorithm, but it's still evolving, so it'll
                    be changing and updating all the time. And, like Google and
                    Facebook, it's out of your control, so it's better to remain
                    on top of developments and figure out what works and what
                    doesn't.
                  </li>{" "}
                  <br />
                  <li>
                    Amazon always prioritises the buyer, and you should do the
                    same. Amazon will recognise you if you approach Amazon SEO
                    in a relevant and appropriate manner.
                  </li>
                </ul>
              </strong>
            </p>
          </div>
        </div>
      </article>

      <p className="last-para">
        When it comes to Amazon SEO, the goal is to boost your visibility,
        sales, and ranking. Consider how your customers could look for you and
        remember the tips I mentioned above about keyword suggestions, and
        you'll be fine.
        <br />
        <br />
        <strong>Goodluck!!</strong>
      </p>
    </div>
  );
};

export default AmazonSEO;
