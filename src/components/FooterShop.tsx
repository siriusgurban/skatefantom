import { Link } from "react-router-dom";
import LogoFooter from "../assets/images/svg/logo-footer.svg?react";

const FooterShop = () => {
  return (
    <footer id="footer" className="footer">
      <div className="container">
        <div className="row">
          <div className="footer_wrapper">
            <ul className="policy">
              <li>
                <Link to="/">Privacy policy</Link>
              </li>
              <li>
                <Link to="/">Terms of service</Link>
              </li>
              <li>
                <Link to="/">Return and Exchange Policy</Link>
              </li>
            </ul>
            <Link to="/">
              <LogoFooter className="logo" />
            </Link>
            <ul className="social">
              <li>
                <Link to="/" target="_blank">
                  instagram
                </Link>
              </li>
              <li>
                <Link to="/" target="_blank">
                  youtube
                </Link>
              </li>
              <li>
                <Link to="/" target="_blank">
                  contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="email">
            <input type="email" placeholder="Email" />
          </div>
        </div>
      </div>
      <div className="footer_bottom">
        <span>© 2025</span>
      </div>
    </footer>
  );
};

export default FooterShop;
