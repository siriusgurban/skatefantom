import { useEffect, useState } from "react";

import { Link, NavLink } from "react-router-dom";

import Logo from "../assets/images/svg/logo.svg?react";
import Search from "../assets/images/svg/search.svg?react";

import pagesList from "../constants/pagesList";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  const changeHeaderBackground = () => {
    if (window.scrollY >= 60) {
      // Change 80 to your desired scroll threshold
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeHeaderBackground);
    return () => {
      window.removeEventListener("scroll", changeHeaderBackground);
    };
  }, []);

  return (
    <header className={`header ${scrolled && "header-scrolled"}`}>
      <div className="container">
        <div className="row">
          <div className="logo">
            <Link to="/">
              <Logo />
            </Link>
          </div>
          <nav className="navBar">
            <ul className="navList">
              {pagesList
                .filter((item) => item.isOpened && item.id !== "home")
                .map((page) => (
                  <li className="navItem" key={page.id}>
                    <NavLink className="navLink" to={page.path}>
                      {page.name}
                    </NavLink>
                  </li>
                ))}
            </ul>
          </nav>
          <div className="search">
            <Search />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
