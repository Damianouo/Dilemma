import { NavLink, useLocation } from "react-router-dom";
import { twMerge as tm } from "tailwind-merge";
import { dropDownRoutes } from "../../routes";
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
    <Accordion className="relative border-y border-primary-700 md:hidden">
      <Button
        onClick={handleAccordionOpen}
        className={
          "justify-start rounded-none bg-gradient-to-b from-primary-800 to-primary-900 text-inherit hover:bg-primary-500"
        }
      >
        <MenuSvg accordionOpen={accordionOpen} className="h-8 w-8" />
        <span>{title}</span>
      </Button>
      <AccordionItems
        className="absolute top-full w-full border-y border-primary-700
        bg-gradient-to-b from-primary-800 to-primary-900"
        accordionOpen={accordionOpen}
      >
        <ul
          className={tm(
            "overflow-hidden px-2 transition-all",
            accordionOpen ? "py-2" : "py-0",
          )}
        >
          {dropDownRoutes.map((route) => (
            <li key={route.label}>
              <NavLink
                onClick={handleAccordionOpen}
                to={route.path}
                className="navItem block whitespace-nowrap rounded-md transition-all"
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
