import { Link } from "react-router-dom";
import NavbarLinks from "./NavbarLinks";
import UserMenu from "./UserMenu";
import NavAccordion from "./NavAccordion";
import CardSvg from "../svgs/CardSvg";

const Navbar = () => {
  return (
    <header>
      <nav className="text-base">
        <div className="flex justify-between bg-gradient-to-b from-primary-800 to-primary-950 shadow-md">
          {/* icon & title */}
          <Link
            to="/"
            className="navItem flex items-center gap-1 bg-gradient-to-b from-primary-500 to-primary-800
            text-2xl font-bold text-primary-100 "
          >
            <CardSvg className="h-10 w-10" />
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
