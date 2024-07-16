import { NavLink } from "react-router-dom";
import { routes } from "../../routes";

const NavbarLinks = () => {
  return (
    <ul className="hidden flex-1 md:flex">
      {routes.map((route) => (
        <li className="flex h-full" key={route.label}>
          <NavLink to={route.path} className="navItem content-center">
            {route.label}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default NavbarLinks;
