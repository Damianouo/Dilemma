import { NavLink, useLocation } from "react-router-dom";
import { twMerge as tm } from "tailwind-merge";
import { dropDownRoutes } from "../../routes";
import { navItemClass } from "./cssClass";
import Accordion from "../UI/Accordion";
import AccordionItems from "../UI/AccordionItems";
import { useState } from "react";
import Button from "../UI/Button";
import { MenuSvg } from "../svgs/NavSvgs";

const NavAccordion = () => {
  const [accordionOpen, setAccordionOpen] = useState(false);
  const { pathname } = useLocation();
  function handleAccordionOpen(e) {
    e.stopPropagation();
    setAccordionOpen((prev) => !prev);
  }
  const title = dropDownRoutes.filter((route) => route.path === pathname)[0]
    ?.label;
  return (
    <Accordion onClick={handleAccordionOpen} className="md:hidden">
      <Button
        className={
          "justify-start rounded-none bg-primary-700 text-inherit shadow-md"
        }
      >
        <MenuSvg className="h-8 w-8" />
        <span>{title}</span>
      </Button>
      <AccordionItems accordionOpen={accordionOpen}>
        <ul
          className={tm(
            "overflow-hidden px-2 transition-all",
            accordionOpen ? "py-2" : "py-0",
          )}
        >
          {dropDownRoutes.map((route) => (
            <li key={route.label}>
              <NavLink
                to={route.path}
                className={tm(
                  navItemClass,
                  "block whitespace-nowrap rounded-md transition-all",
                )}
              >
                {route.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </AccordionItems>
    </Accordion>
  );
};

export default NavAccordion;
