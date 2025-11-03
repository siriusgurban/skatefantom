import About from "../Modules/About/View/About";
import NotFound from "../Modules/Additionals/View/NotFound";
import Login from "../Modules/Auth/View/Login";
import Register from "../Modules/Auth/View/Register";
import Blog from "../Modules/Blog/View/Blog";
import Home from "../Modules/Home/View/Home";
import Shop from "../Modules/Shop/View/Shop";
import ShopDetails from "../Modules/Shop/View/ShopDetails";
import Videos from "../Modules/Videos/View/Videos";
import Rsoty from "../Modules/Rsoty/View/Rsoty";

const pages = [
  {
    id: "home",
    name: "Home",
    path: "/",
    is_visible: true,
    element: <Home />,
    isOpened: true,
  },
  {
    id: "about",
    name: "About",
    path: "/about/",
    is_visible: true,
    element: <About />,
    isOpened: true,
  },
  {
    id: "blog",
    name: "Blog",
    path: "/blog",
    is_visible: true,
    element: <Blog />,
    isOpened: true,
  },
  {
    id: "videos",
    name: "Videos",
    path: "/videos/",
    is_visible: true,
    element: <Videos />,
    isOpened: true,
  },
  {
    id: "shop",
    name: "Shop",
    path: "/shop/",
    is_visible: true,
    element: <Shop />,
    isOpened: true,
  },
  {
    id: "shop-details",
    name: "Shop Details",
    path: "/shop-details/:id",
    is_visible: true,
    element: <ShopDetails />,
    isOpened: false,
  },
  {
    id: "rsoty",
    name: "Rsoty",
    path: "/rsoty",
    is_visible: true,
    element: <Rsoty />,
    isOpened: true,
  },
  {
    id: "login",
    name: "Login",
    path: "/login",
    is_visible: true,
    element: <Login />,
    isOpened: false,
  },
  {
    id: "register",
    name: "Register",
    path: "/register",
    is_visible: true,
    element: <Register />,
    isOpened: false,
  },
  {
    id: "notFound",
    name: "Not Found",
    path: "*",
    is_visible: true,
    element: <NotFound />,
    isOpened: false,
  },
];

export default pages;
