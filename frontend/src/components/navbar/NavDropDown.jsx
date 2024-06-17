import { useState } from "react";
import { NavLink } from "react-router-dom";
import { twMerge as tm } from "tailwind-merge";
import DropDown from "../UI/DropDown";
import DropDownUl from "../UI/DropDownUl";
import { MenuSvg } from "../svgs/NavSvgs";
import { dropDownRoutes } from "../../routes";
import { navItemClass, navLinkClass } from "./cssClass";
import Button from "../UI/Button";
const NavDropDown = () => {
  const [menuShow, setMenuShow] = useState(false);

  function handleMenuShow(event) {
    event.stopPropagation();
    setMenuShow((prev) => !prev);
  }

  return (
    <DropDown className="ml-4 md:hidden">
      <Button className="bg-transparent" onClick={handleMenuShow}>
        <MenuSvg className="h-8 w-8 cursor-pointer " />
      </Button>
      <DropDownUl className="left-full" state={menuShow}>
        {dropDownRoutes.map((route) => (
          <li key={route.label}>
            <NavLink
              onClick={handleMenuShow}
              to={route.path}
              className={tm(
                navLinkClass,
                navItemClass,
                "block whitespace-nowrap rounded-md transition-all",
                menuShow ? "py-2" : "py-0",
              )}
            >
              {route.label}
            </NavLink>
          </li>
        ))}
      </DropDownUl>
    </DropDown>
  );
};

export default NavDropDown;
