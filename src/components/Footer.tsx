import { Link } from "react-router-dom";
import Logo from "../assets/images/svg/logo.svg?react";

const Footer = () => {
  return (
    <footer id="footer" className="footer">
      <div className="container">
        <div className="row">
          <ul className="policy">
            <li>
              <Link to="/">Privacy policy</Link>
            </li>
            <li>
              <Link to="/">Terms of service</Link>
            </li>
          </ul>
          <Link to="/">
            <Logo className="logo" color="#f2695c"/>
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
      </div>
    </footer>
  );
};

export default Footer;
