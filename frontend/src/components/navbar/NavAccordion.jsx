import { NavLink, useLocation } from "react-router-dom";
import { dropDownRoutes } from "../../routes";
import Accordion from "../UI/Accordion";
import AccordionItems from "../UI/AccordionItems";
import { useState } from "react";
import Button from "../UI/Button";
import MenuSvg from "../svgs/Navbar/MenuSvg";
import { cn } from "../../utils/cn";

const NavAccordion = () => {
  const [accordionOpen, setAccordionOpen] = useState(false);
  const { pathname } = useLocation();
  function handleAccordionOpen(e) {
    e.stopPropagation();
    setAccordionOpen((prev) => !prev);
  }
  const title = dropDownRoutes.filter((route) => route.path === pathname)[0]?.label;
  return (
    <Accordion className="border-primary-700 relative border-y md:hidden">
      <Button
        onClick={handleAccordionOpen}
        className={
          "from-primary-800 to-primary-900 hover:bg-primary-500 justify-start gap-2 rounded-none bg-linear-to-b text-inherit"
        }
      >
        <MenuSvg accordionOpen={accordionOpen} />
        <span>{title}</span>
      </Button>
      <AccordionItems
        className="border-primary-700 from-primary-800 to-primary-900 absolute top-full z-50 w-full border-y bg-linear-to-b"
        accordionOpen={accordionOpen}
      >
        <ul className={cn("overflow-hidden px-2 transition-all", accordionOpen ? "py-2" : "py-0")}>
          {dropDownRoutes.map((route) => (
            <li key={route.label}>
              <NavLink
                onClick={handleAccordionOpen}
                to={route.path}
                className="navItem block rounded-md whitespace-nowrap transition-all"
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
