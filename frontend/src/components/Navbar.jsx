import { NavLink, Link, useLocation, useNavigate } from "react-router-dom";
import { LoginSvg, MenuSvg, WebIconSvg } from "../svgs/NavSvgs";
import { routes } from "../routes";
import { useState } from "react";

const Navbar = () => {
  const navigate = useNavigate();

  function handleLogin() {
    window.location.href = "http://localhost:8080/auth/google";
  }

  async function handleLogout() {
    try {
      const response = await fetch("http://localhost:8080/auth/logout", {
        method: "POST",
        credentials: "include",
      });
      if (response.ok) {
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <nav className="flex w-full bg-white text-base shadow-md" id="navbar">
      {/* icon & title */}
      <Link
        to="/"
        className="padding flex h-full items-center gap-2 bg-primary-400 text-2xl 
            font-bold text-white transition-colors hover:bg-primary-500"
      >
        <WebIconSvg size="h-6 w-6" />
        <span>Dilemma</span>
      </Link>

      {/* nav links */}
      <NavbarLinks />

      {/* login, logout button */}
      <button
        onClick={handleLogin}
        className="padding flex  content-center items-center gap-2 px-4 
        transition-colors hover:bg-primary-50"
      >
        <LoginSvg size="h-6 w-6" />
        <span>Login</span>
      </button>
      <button
        onClick={handleLogout}
        className="padding flex  content-center items-center gap-2 px-4 
        transition-colors hover:bg-primary-50"
      >
        <LoginSvg size="h-6 w-6" />
        <span>Logout</span>
      </button>
    </nav>
  );
};

export default Navbar;

const NavbarLinks = () => {
  const [menuUp, setMenuUp] = useState(false);
  const { pathname } = useLocation();

  function handleMenuUp() {
    setMenuUp((prev) => !prev);
  }

  return (
    <ul className="flex flex-1">
      {/* routes mapping */}
      <ul className="hidden md:flex">
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
      </ul>
      {/* drop down navbar */}
      <div className="relative ml-4 flex items-center justify-center md:hidden">
        <MenuSvg
          onClick={handleMenuUp}
          size="h-6 w-6"
          customStyles="cursor-pointer hover:text-primary-400"
        />
        <ul
          className={`absolute left-full top-full z-10 bg-zinc-100  transition-all
      ${menuUp ? "opacity-100" : "pointer-events-none -translate-y-4 opacity-0"}`}
        >
          <NavLink
            onClick={handleMenuUp}
            to="/"
            key="home"
            className={`padding block whitespace-nowrap transition-all  hover:text-primary-400
          ${menuUp ? "py-2" : "py-0"}`}
          >
            Home
          </NavLink>

          {[
            ...routes.map((route) => (
              <NavLink
                onClick={handleMenuUp}
                to={route.path}
                key={route.label}
                className={`padding block whitespace-nowrap transition-all  hover:text-primary-400
          ${menuUp ? "py-2" : "py-0"}`}
              >
                {route.label}
              </NavLink>
            )),
          ]}
        </ul>
      </div>
      {pathname && (
        <span className="padding self-center md:hidden">
          {pathname === "/"
            ? "Home"
            : routes.filter((route) => route.path === pathname)[0]?.label}
        </span>
      )}
    </ul>
  );
};
