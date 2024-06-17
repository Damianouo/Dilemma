import { NavLink, Link, useLocation, useSubmit } from "react-router-dom";
import { LoginSvg, MenuSvg, WebIconSvg } from "../svgs/NavSvgs";
import { routes } from "../routes";
import { useState } from "react";
import { useSelector } from "react-redux";

const dropDownRoutes = [{ label: "Home", path: "/" }, ...routes];

const Navbar = () => {
  const submit = useSubmit();
  const user = useSelector((state) => state.user);

  function handleLogin() {
    window.location.href = "http://localhost:8080/auth/google";
  }

  function handleLogout() {
    submit(null, { method: "post", action: "/" });
  }

  return (
    <nav className="flex w-full bg-white text-base shadow-md" id="navbar">
      {/* icon & title */}
      <Link
        to="/"
        className="navBtn bg-primary-400 text-2xl font-bold text-white hover:bg-primary-500"
      >
        <WebIconSvg size="h-6 w-6" />
        <span>Dilemma</span>
      </Link>

      {/* nav links */}
      <NavbarLinks />

      {/* login, logout button */}
      {user.isLogin ? (
        <>
          <div className="navBtn">
            <LoginSvg size="h-6 w-6" />
            <p>{user.info.email}</p>
          </div>
          <button onClick={handleLogout} className="navBtn">
            <LoginSvg size="h-6 w-6" />
            <span>Logout</span>
          </button>
        </>
      ) : (
        <button onClick={handleLogin} className="navBtn">
          <LoginSvg size="h-6 w-6" />
          <span>Login</span>
        </button>
      )}
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
            <NavLink to={route.path} className="navLink">
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
          {dropDownRoutes.map((route) => (
            <NavLink
              onClick={handleMenuUp}
              to={route.path}
              key={route.label}
              className={`navLink block whitespace-nowrap transition-all ${menuUp ? "py-2" : "py-0"}`}
            >
              {route.label}
            </NavLink>
          ))}
        </ul>
      </div>

      {/* current path name */}
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
