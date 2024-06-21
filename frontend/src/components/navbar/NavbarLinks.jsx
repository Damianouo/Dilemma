import { NavLink } from "react-router-dom";
import { routes } from "../../routes";
import { twMerge as tm } from "tailwind-merge";
import { navItemClass, navLinkClass } from "./cssClass";
const NavbarLinks = () => {
  return (
    <ul className="hidden flex-1 md:flex">
      {routes.map((route) => (
        <li className="flex h-full" key={route.label}>
          <NavLink to={route.path} className={tm(navLinkClass, navItemClass)}>
            {route.label}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default NavbarLinks;
