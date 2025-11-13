import { useEffect, useState } from "react";

import { Link, NavLink } from "react-router-dom";

import Logo from "../assets/images/svg/logo.svg?react";
import Search from "../assets/images/svg/search.svg?react";
import Shop from "../assets/images/svg/shop.svg?react";
import Profil from "../assets/images/svg/profil.svg?react";

import pagesList from "../constants/pagesList";

const HeaderShop = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="row">
          <div className="logoWrapper">
            <div className="logo">
              <Link to="/">
                <Logo />
              </Link>
            </div>
            <nav className="navBar">
              <ul className="navList">
                {pagesList
                  .filter(
                    (item) =>
                      item.isOpened && item.id !== "home" && item.id !== "rsoty"
                  )
                  .map((page) => (
                    <li className="navItem" key={page.id}>
                      <NavLink className="navLink" to={page.path}>
                        {page.name}
                      </NavLink>
                    </li>
                  ))}
              </ul>
            </nav>
          </div>
          <div className="sideContent">
            <div className="search">
              <Search />
            </div>
            <div className="search">
              <Profil />
            </div>
            <div className="search">
              <Shop />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderShop;
