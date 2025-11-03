import { useState } from "react";

import { Link, NavLink } from "react-router-dom";

import Logo from "../assets/images/svg/logo.svg?react";
import Search from "../assets/images/svg/search.svg?react";

import pagesList from "../constants/pagesList";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import type { IProduct } from "../Modules/Shop/Models/ShopModels";

const Header = () => {
  const dispatch = useAppDispatch();
  const cart = useAppSelector((state) => state.productSlice.cart);
  const cartCount = useAppSelector((state) => state.productSlice.cartCount);
  const [selectedProduct, setSelectedProduct] = useState<IProduct | null>(null);

  console.log(cartCount);
  return (
    <header className="header">
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
                    <NavLink className="navLink" to={page.path}>{page.name}</NavLink>
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
