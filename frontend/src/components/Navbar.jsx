import { NavLink, Link, useLocation } from "react-router-dom";
import { LoginSvg, MenuSvg, WebIconSvg } from "../svgs/NavSvgs";
import { routes } from "../routes";
import { useState } from "react";

const Navbar = () => {
  const [menuUp, setMenuUp] = useState(false);
  const { pathname } = useLocation();
  function handleMenuUp() {
    setMenuUp((prev) => !prev);
  }
  return (
    <nav className="flex bg-white text-base shadow-md" id="navbar">
      {/* icon & title */}

      <Link
        to="/"
        className="padding flex h-full items-center gap-2 bg-primary-400 text-2xl 
            font-bold text-white transition-colors hover:bg-primary-500"
      >
        <WebIconSvg size="h-6 w-6" />
        <span>Dilem</span>
      </Link>

      <ul className="flex flex-1">
        {/* routes mapping */}
        <div className="hidden md:flex">
          {routes.map((route) => (
            <li className="flex h-full" key={route.label}>
              <NavLink
                to={route.path}
                className=" padding content-center transition-colors hover:text-primary-400"
              >
                {route.label}
              </NavLink>
            </li>
          ))}
        </div>
        {/* menu */}
        <div className="relative ml-4 flex items-center justify-center  md:hidden">
          <MenuSvg
            onClick={handleMenuUp}
            size="h-6 w-6"
            customStyles="cursor-pointer hover:text-primary-400"
          />
          <div
            className={`absolute left-full top-full z-10 bg-zinc-100  transition-all
            ${menuUp ? "opacity-100" : "pointer-events-none -translate-y-4 opacity-0"}`}
          >
            <NavLink
              key="home"
              onClick={handleMenuUp}
              className={`padding block content-center whitespace-nowrap transition-all  hover:text-primary-400
                ${menuUp ? "py-2" : "py-0"}`}
              to="/"
            >
              Home
            </NavLink>

            {[
              ...routes.map((route) => (
                <NavLink
                  onClick={handleMenuUp}
                  to={route.path}
                  key={route.label}
                  className={`padding block content-center whitespace-nowrap transition-all  hover:text-primary-400
                ${menuUp ? "py-2" : "py-0"}`}
                >
                  {route.label}
                </NavLink>
              )),
            ]}
          </div>
        </div>
        {pathname && (
          <span className="padding self-center md:hidden">
            {pathname === "/"
              ? "Home"
              : routes.filter((route) => route.path === pathname)[0]?.label}
          </span>
        )}
      </ul>
      {/* login button */}
      <NavLink
        to="/login"
        className="padding flex  content-center items-center gap-2 px-4 
        transition-colors hover:bg-primary-50"
      >
        <LoginSvg size="h-6 w-6" />
        <span>Login</span>
      </NavLink>
    </nav>
  );
};

export default Navbar;
