import { NavLink, useLocation } from "react-router-dom";
import { routes } from "../../routes";
import { twMerge as tm } from "tailwind-merge";
import { navItemClass, navLinkClass } from "./cssClass";
import NavDropDown from "./NavDropDown";
const NavbarLinks = () => {
  const { pathname } = useLocation();

  return (
    <ul className="flex flex-1">
      {/* routes mapping */}
      <ul className="hidden md:flex">
        {routes.map((route) => (
          <li className="flex h-full" key={route.label}>
            <NavLink to={route.path} className={tm(navLinkClass, navItemClass)}>
              {route.label}
            </NavLink>
          </li>
        ))}
      </ul>

      {/* drop down navbar */}
      <NavDropDown />

      {/* current path name */}
      {pathname && (
        <span className="self-center p-2 md:hidden">
          {pathname === "/"
            ? "Home"
            : routes.filter((route) => route.path === pathname)[0]?.label}
        </span>
      )}
    </ul>
  );
};

export default NavbarLinks;
