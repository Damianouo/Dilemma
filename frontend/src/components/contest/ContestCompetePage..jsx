/* eslint-disable react/prop-types */

import { useContext, useState } from "react";
import { shuffleArray } from "../../utils/entry";
import ContestItem from "./ContestItem";
import Button from "../UI/Button";
import { ChooseSvg } from "../svgs/ContestSvgs";
import { ContentCtx } from "../../contexts/ContentCtx";
import { ConfigCtx } from "../../contexts/ConfigCtx";

function getCurrentCompete(items, totalNum) {
  const itemsArray = [...items];
  return shuffleArray(itemsArray).slice(0, totalNum);
}

const ContestCompetePage = ({ competeResult }) => {
  //contexts
  const content = useContext(ContentCtx);
  const { config, configDispatch } = useContext(ConfigCtx);

  //states
  const [currentCompete, setCurrentCompete] = useState({
    totalCandidates: config.totalCandidates,
    match: 1,
    candidates: getCurrentCompete(content.entries, config.totalCanditates),
    winners: [],
    losers: [],
    finished: false,
  });

  const competeItemIndex = (currentCompete.match - 1) * 2;
  const competeItem1 = currentCompete.candidates[competeItemIndex];
  const competeItem2 = currentCompete.candidates[competeItemIndex + 1];

  function handleChooseWinner(bool) {
    const winItem = bool ? competeItem1 : competeItem2;
    const loseItem = bool ? competeItem2 : competeItem1;

    const result = {
      ...currentCompete,
      winners: [...currentCompete.winners, winItem],
      losers: [...currentCompete.losers, loseItem],
    };
    if (result.match === result.totalCandidates / 2) {
      competeResult.current = [...competeResult.current, result];
    }

    setCurrentCompete((prev) => {
      const result = {
        ...prev,
        winners: [...prev.winners, winItem],
        losers: [...prev.losers, loseItem],
      };
      // last match of the game
      if (result.totalCandidates === 2) {
        return { ...result, finished: true };
      }
      // last match of the rounds
      if (result.match === result.totalCandidates / 2) {
        return {
          totalCandidates: result.totalCandidates / 2,
          match: 1,
          candidates: shuffleArray(result.winners),
          winners: [],
          losers: [],
        };
      }
      // normal situation
      return {
        ...result,
        match: result.match + 1,
      };
    });
  }

  function handleShowResult() {
    configDispatch({
      type: "changePhase",
      phase: "result",
    });
  }
  return (
    <div className=" flex flex-col items-center gap-8 text-center sm:px-4 sm:py-8 ">
      {/* matchs info */}
      {!currentCompete.finished ? (
        <h2 className="md:text-2xl">
          Round of {currentCompete.totalCandidates} : Match{" "}
          {currentCompete.match}
        </h2>
      ) : (
        <h2 className="md:text-2xl">The Winner Gose to :</h2>
      )}

      {/* items to compete */}
      <div className="flex w-full flex-col justify-center gap-4 sm:flex-row ">
        {!currentCompete.finished && (
          <>
            <CompeteItemBox onClick={() => handleChooseWinner(true)}>
              <ContestItem item={competeItem1} mode="compete" />
            </CompeteItemBox>
            <p className="self-center text-4xl">VS</p>
            <CompeteItemBox onClick={() => handleChooseWinner(false)}>
              <ContestItem item={competeItem2} mode="compete" />
            </CompeteItemBox>
          </>
        )}

        {currentCompete.finished && (
          <div className="flex flex-col items-center gap-8">
            <ContestItem
              item={
                competeResult.current[competeResult.current.length - 1]
                  .winners[0]
              }
              mode="info"
            />
            <Button onClick={handleShowResult}>
              <span>Show Full Result</span>
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContestCompetePage;

const CompeteItemBox = ({ children, onClick }) => {
  return (
    <div className="flex flex-1 flex-col gap-4">
      {children}
      <p className="text-base">Chat Votes : 10</p>
      <Button onClick={onClick} className=" text-center text-lg font-bold ">
        <ChooseSvg />
        <span>WIN</span>
      </Button>
    </div>
  );
};
