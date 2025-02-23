/* eslint-disable react/prop-types */
import { useState } from "react";
import Accordion from "../UI/Accordion";
import Button from "../UI/Button";
import PlusMinusSvg from "../svgs/PlusMinusSvg";
import AccordionItems from "../UI/AccordionItems";
import { cn } from "../../utils/cn";

const ResultList = ({ children, className, participantsNum }) => {
  const [accordionOpen, setAccordionOpen] = useState(false);
  function handleAccordionOpen(e) {
    e.stopPropagation();
    setAccordionOpen((prev) => !prev);
  }
  return (
    <li className={cn("flex flex-col gap-4", className)}>
      <Accordion className={cn("bg-primary-600/50 mx-auto", accordionOpen ? "gap-4" : "gap-0")}>
        <Button onClick={handleAccordionOpen} className="gap-4">
          <PlusMinusSvg open={accordionOpen} />
          <span>Stopped at the top {participantsNum}</span>
        </Button>
        <AccordionItems accordionOpen={accordionOpen}>{children}</AccordionItems>
      </Accordion>
    </li>
  );
};

export default ResultList;
