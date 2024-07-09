import { Link } from "react-router-dom";
import { WebIconSvg } from "../svgs/NavSvgs";
import { twMerge as tm } from "tailwind-merge";
import NavbarLinks from "./NavbarLinks";
import { navItemClass } from "./cssClass";
import UserMenu from "./UserMenu";
import NavAccordion from "./NavAccordion";

const Navbar = () => {
  return (
    <header>
      <nav className="text-base">
        <div className="flex justify-between shadow-md">
          {/* icon & title */}
          <Link
            to="/"
            className={tm(
              navItemClass,
              "flex items-center gap-1 bg-primary-600 text-2xl font-bold text-white ",
            )}
          >
            <WebIconSvg className="h-10 w-10" />
            <span>Dilemma</span>
          </Link>
          {/* nav links */}
          <NavbarLinks />
          {/* login, logout button */}
          <UserMenu />
        </div>
        <NavAccordion />
      </nav>
    </header>
  );
};

export default Navbar;
