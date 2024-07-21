/* eslint-disable react/prop-types */
import { useState } from "react";
import { twMerge as tm } from "tailwind-merge";
import Accordion from "../UI/Accordion";
import Button from "../UI/Button";
import PlusMinusSvg from "../svgs/PlusMinusSvg";
import AccordionItems from "../UI/AccordionItems";

const ResultList = ({ children, className, participantsNum }) => {
  const [accordionOpen, setAccordionOpen] = useState(false);
  function handleAccordionOpen(e) {
    e.stopPropagation();
    setAccordionOpen((prev) => !prev);
  }
  return (
    <li className={tm("flex flex-col gap-4", className)}>
      <Accordion
        className={tm(
          "mx-auto bg-primary-600/50",
          accordionOpen ? "gap-4" : "gap-0",
        )}
      >
        <Button onClick={handleAccordionOpen} className="gap-4">
          <PlusMinusSvg open={accordionOpen} />
          <span>Stopped at the top {participantsNum}</span>
        </Button>
        <AccordionItems accordionOpen={accordionOpen}>
          {children}
        </AccordionItems>
      </Accordion>
    </li>
  );
};

export default ResultList;
