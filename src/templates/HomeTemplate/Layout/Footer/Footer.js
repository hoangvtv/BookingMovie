import React from "react";
import "./Footer.css";
import { useSelector } from "react-redux";
import _ from "lodash";

export default function Footer() {
  const { movieTheates } = useSelector((state) => state.MovieTheateReducer);

  const movieTheateLst = _.map(movieTheates, (movieTheate) =>
    _.pick(movieTheate, ["maHeThongRap", "tenHeThongRap", "logo"])
  );

  return (
    <footer>
      <div className="footer-gray">
        <div className="footer-custom">
          <div className="footer-lists">
            <div className="footer-list-wrap">
              <h6 className="ftr-hdr">Order Toll Free</h6>
              <ul className="ftr-links-sub">
                <li>800-952-5592</li>
              </ul>
              <h6 className="ftr-hdr">International</h6>
              <ul className="ftr-links-sub">
                <li>
                  <a href="http://www.art.fr" rel="nofollow">
                    France
                  </a>
                </li>
                <li>
                  <a href="https://www.art.co.uk" rel="nofollow">
                    United Kingdom
                  </a>
                </li>
              </ul>
            </div>
            {/*/.footer-list-wrap*/}
            <div className="footer-list-wrap">
              <h6 className="ftr-hdr">Customer Service</h6>
              <ul className="ftr-links-sub">
                <li>
                  <a href="/help/talktous.html" rel="nofollow">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="/help/placingorders.html" rel="nofollow">
                    Ordering
                  </a>
                </li>
                <li>
                  <a href="/help/shipping.html" rel="nofollow">
                    Shipping &amp; Delivery
                  </a>
                </li>
                <li>
                  <a href="/help/shippingreturns.html" rel="nofollow">
                    Returns
                  </a>
                </li>
                <li>
                  <a href="/help/international-shipping.html" rel="nofollow">
                    International Orders
                  </a>
                </li>
                <li>
                  <a href="/~/egift-cards/" rel="nofollow">
                    Gift Cards
                  </a>
                </li>
                <li>
                  <a href="/help/faq.html" rel="nofollow">
                    FAQs
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer-list-wrap">
              <h6 className="ftr-hdr">About Art.com</h6>
              <ul className="ftr-links-sub">
                <li>
                  <a
                    href="/asp/aboutus/default-asp/_/posters.htm"
                    rel="nofollow"
                  >
                    Our Company
                  </a>
                </li>
                <li>
                  <a href="http://corporate.art.com/careers" rel="nofollow">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="/asp/landing/artistrising" rel="nofollow">
                    Artist Rising
                  </a>
                </li>
                <li>
                  <a href="/~/art-for-business" rel="nofollow">
                    Business &amp; Trade Sales
                  </a>
                </li>
                <li>
                  <a href="http://affiliates.art.com/index.aspx" rel="nofollow">
                    Affiliate Program
                  </a>
                </li>
                <li>
                  <a href="/catalog" rel="nofollow">
                    <strong>Shop Our Catalog</strong>
                  </a>
                </li>
                <li>
                  <a href="http://blog.art.com" rel="nofollow">
                    ART.COM BLOG
                  </a>
                </li>
              </ul>
            </div>
            {/*/.footer-list-wrap*/}
            <div className="footer-list-wrap">
              <h6 className="ftr-hdr">My Account</h6>
              <ul className="ftr-links-sub">
                <li className="ftr-Login">
                  <span className="link login-trigger">Access My Account</span>
                </li>
                <li>
                  <span className="link">Track My Order</span>
                </li>

                <li className="ftr-Login">
                  <span className="link ftr-access-my-account">
                    Access My Account
                  </span>
                </li>
                <li>
                  <span className="link">Track My Order</span>
                </li>
              </ul>
            </div>
            {/*/.footer-list-wrap*/}
          </div>
          {/*/.footer-lists*/}
          <div className="footer-email">
            <h6 className="ftr-hdr">
              Sign up for exclusive offers and inspiration
            </h6>
            <div id="ftr-email" className="ftr-email-form">
              <form
                id="ftrEmailForm"
                method="post"
                action="http://em.art.com/pub/rf"
              >
                <div className="error">Please enter a valid email address</div>
                <input
                  type="text"
                  name="email_address_"
                  id="ftrEmailInput"
                  className="input"
                  placeholder="Enter email address"
                />
                {/*
                 */}
                <input type="submit" className="button" defaultValue="SUBMIT" />
                <input type="hidden" name="country_iso2" defaultValue />
                <input type="hidden" name="language_iso2" defaultValue="en" />
                <input
                  type="hidden"
                  name="site_domain"
                  defaultValue="art.com"
                />
                <input
                  type="hidden"
                  name="email_acq_source"
                  defaultValue="01-000001"
                />
                <input
                  type="hidden"
                  name="email_acq_date"
                  defaultValue
                  id="ftr-email-date"
                />
                <input type="hidden" name="brand_id" defaultValue="ART" />
                <input
                  type="hidden"
                  name="_ri_"
                  defaultValue="X0Gzc2X%3DWQpglLjHJlYQGnp51yrMf2qXdC9tjU8pzgMtwfYzaVwjpnpgHlpgneHmgJoXX0Gzc2X%3DWQpglLjHJlYQGnyLSq2fzdkuzdzglHMsUhgeNzaSgkk"
                />
              </form>
            </div>
            {/*/.ftr-email-form*/}
            <div className="ftr-email-privacy-policy mb-3" />
          </div>

          <div className="col-span-6 text-center md:text-left md:col-span-3">
            <p className="text-lg font-medium text-black ">PARTNER</p>
            <div className="grid grid-cols-3 " style={{ color: "#fff" }}>
              {movieTheateLst.map((movieTheateLs, index) => {
                return (
                  <div key={index}>
                    <img src={movieTheateLs.logo} style={{ width: 50 }} />
                  </div>
                );
              })}
            </div>
          </div>

          {/*/.footer-email*/}
          <div className="footer-social">
            <h6 className="ftr-hdr">Follow Us</h6>
            <ul>
              <li>
                <a href="https://www.facebook.com/art.com" title="Facebook">
                  <img
                    width={24}
                    height={24}
                    alt="Like us on Facebook"
                    src="http://cache1.artprintimages.com/images/jump_pages/rebrand/footer/fb.png"
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://plus.google.com/108089796661280870153"
                  title="Google+"
                >
                  <img
                    width={24}
                    height={24}
                    alt="Follow us on Google+"
                    src="http://cache1.artprintimages.com/images/jump_pages/rebrand/footer/gplus.png"
                  />
                </a>
              </li>
              <li>
                <a href="https://pinterest.com/artdotcom/" target="_blank">
                  <img
                    width={24}
                    height={24}
                    alt="Follow us on Pinterest"
                    src="http://cache1.artprintimages.com/images/jump_pages/rebrand/footer/pin-badge.png"
                  />
                </a>
              </li>
              <li>
                <a target="_blank" href="http://instagram.com/artdotcom/">
                  <img
                    width={24}
                    height={24}
                    alt="Follow us on Instagram"
                    src="http://cache1.artprintimages.com/images/jump_pages/rebrand/footer/instagram-badge.png"
                  />
                </a>
              </li>
              <li>
                <a href="https://www.twitter.com/artdotcom" title="Twitter">
                  <img
                    width={67}
                    alt="Follow us on Twitter"
                    src="http://cache1.artprintimages.com/images/jump_pages/rebrand/footer/twitter.png"
                  />
                </a>
              </li>
            </ul>
          </div>
          {/*/.footer-social*/}
          <div className="footer-legal">
            <p>
              © Art.com Inc. All Rights Reserved. |{" "}
              <a href="/help/privacy-policy.html" rel="nofollow">
                Privacy Policy
              </a>{" "}
              |{" "}
              <a href="/help/terms-of-use.html" rel="nofollow">
                Terms of Use
              </a>{" "}
              |{" "}
              <a href="/help/terms-of-sale.html" rel="nofollow">
                Terms of Sale
              </a>
            </p>
            <p>
              Art.com, You+Art, and Photos [to] Art are trademarks or registered
              trademarks of Art.com Inc.
            </p>
            <p>
              Various aspects of this website are covered by issued US patent
              No. 7,973,796 and other pending patent applications.
            </p>
          </div>
          {/*/.footer-legal*/}
          <div className="footer-payment">
            <ul>
              <li className="ftr-stella">
                <span title="Stella Service" />
              </li>
              <li>
                <span>
                  <img
                    border={0}
                    alt="HACKER SAFE certified sites prevent over 99.9% of hacker crime."
                    src="https://images.scanalert.com/meter/www.art.com/31.gif"
                  />
                </span>
              </li>
              <li className="ftr-bbb">
                <span title="BBB" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
