import { Link } from "react-router-dom";
import NavbarLinks from "./NavbarLinks";
import UserMenu from "./UserMenu";
import NavAccordion from "./NavAccordion";
import CardSvg from "../svgs/CardSvg";

const Navbar = () => {
  return (
    <header>
      <nav className="text-base">
        <div className="bg-primary-900 flex justify-between shadow-md">
          {/* icon & title */}
          <Link
            to="/"
            className="navItem from-primary-500 to-primary-800 text-primary-100 flex items-center gap-1 bg-linear-to-b text-2xl font-bold"
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
