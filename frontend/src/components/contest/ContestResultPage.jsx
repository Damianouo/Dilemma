/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import Button from "../UI/Button";
import { useState } from "react";
import ContestItem from "./ContestItem";
import { twMerge as tm } from "tailwind-merge";
import Accordion from "../UI/Accordion";
import AccordionItems from "../UI/AccordionItems";
import PlusMinusSvg from "../svgs/PlusMinusSvg";
import useCompeteCtx from "../../hooks/useCompeteCtx";
import useContestCtx from "../../hooks/useContestCtx";

const ContestResultPage = () => {
  const { contest } = useContestCtx();
  const { compete } = useCompeteCtx();
  const fullResult = compete.result.toReversed();
  const resultBeforeTop4 = fullResult.slice(0, 2);
  const resultAfterTop4 = fullResult.slice(2);
  return (
    <div>
      <div className="my-8 flex justify-center gap-8">
        <Button>
          <Link to="/contests">Other Contests</Link>
        </Button>
        <Button>
          <Link to={`/ranking/${contest._id}`}>Ranking</Link>
        </Button>
      </div>
      <ul className="mx-auto grid grid-cols-4 gap-x-2 gap-y-8 text-center text-base transition-all sm:text-2xl">
        <li className="col-span-4 justify-self-center text-3xl font-bold">
          <h2 className="mb-4 ">The Winner Gose to :</h2>
          <ContestItem item={fullResult[0].winners[0]} />
        </li>
        {resultBeforeTop4.map((result) => (
          <ResultList
            className="col-span-2 text-left"
            key={"result" + result.participantsNum}
          >
            <h2>Stopped at top {result.participantsNum}</h2>
            <ResultItems result={result} className="grid-cols-2" />
          </ResultList>
        ))}

        {resultAfterTop4.map((result) => (
          <ResultList key={"result" + result.participantsNum}>
            <ResultAccordion result={result} />
          </ResultList>
        ))}
      </ul>
    </div>
  );
};

export default ContestResultPage;

const ResultList = ({ className, children }) => {
  return (
    <li className={tm("col-span-full flex flex-col gap-4", className)}>
      {children}
    </li>
  );
};

const ResultItems = ({ result, className }) => {
  return (
    <div className={tm(" grid grid-cols-4 gap-2 overflow-hidden", className)}>
      {result.losers.map((item) => (
        <ContestItem
          key={item.title}
          item={item}
          titleClass="overflow-hidden text-ellipsis whitespace-nowrap sm:text-sm"
        />
      ))}
    </div>
  );
};

const ResultAccordion = ({ result }) => {
  const [accordionOpen, setAccordionOpen] = useState(false);
  function handleAccordionOpen(e) {
    e.stopPropagation();
    setAccordionOpen((prev) => !prev);
  }
  return (
    <Accordion>
      <Button onClick={handleAccordionOpen} className="gap-4">
        <PlusMinusSvg accordionOpen={accordionOpen} />
        <span>Stopped at the top {result.participantsNum}</span>
      </Button>
      <AccordionItems accordionOpen={accordionOpen}>
        <div
          className={tm(
            "overflow-hidden transition-all",
            accordionOpen ? "pt-4" : "pt-0",
          )}
        >
          <ResultItems result={result} />
        </div>
      </AccordionItems>
    </Accordion>
  );
};
