/* eslint-disable react/prop-types */

import { useContext, useState } from "react";
import { shuffleArray } from "../../utilityFunc";
import ContestItemPreview from "./ContestItemPreview";
import Button from "./Button";
import { ChooseSvg } from "../../svgs/ContestSvgs";
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
    candidates: getCurrentCompete(content.items, config.totalCanditates),
    winners: [],
    losers: [],
    finished: false,
  });
  const competeItemIndex = (currentCompete.match - 1) * 2;
  const itemPairToCompete = [
    currentCompete.candidates[competeItemIndex],
    currentCompete.candidates[competeItemIndex + 1],
  ];

  function handleChooseWinner(title) {
    const currentCompetingPair = [...itemPairToCompete];
    const winItem = currentCompetingPair.filter(
      (item) => item.itemTitle === title,
    )[0];
    const loseItem = currentCompetingPair.filter(
      (item) => item.itemTitle !== title,
    )[0];
    // last match of the rounds or game
    if (currentCompete.match === currentCompete.totalCandidates / 2) {
      const result = {
        ...currentCompete,
        winners: [...currentCompete.winners, winItem],
        losers: [...currentCompete.losers, loseItem],
      };
      competeResult.current = [...competeResult.current, result];

      setCurrentCompete((prev) =>
        prev.totalCandidates === 2
          ? { ...prev, finished: true }
          : {
              totalCandidates: prev.totalCandidates / 2,
              match: 1,
              candidates: [...prev.winners, winItem],
              winners: [],
              losers: [],
            },
      );
    } else {
      // normal situation
      setCurrentCompete((prev) => {
        return {
          ...prev,
          match: prev.match + 1,
          winners: [...prev.winners, winItem],
          losers: [...prev.losers, loseItem],
        };
      });
    }
  }
  function handleShowResult() {
    configDispatch({
      type: "changePhase",
      phase: "result",
    });
  }
  return (
    <div className=" flex flex-col items-center gap-8 px-4 py-8 text-center ">
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
      <div className="flex w-full flex-col justify-center gap-8 sm:flex-row ">
        {currentCompete.candidates.length > 0 &&
          !currentCompete.finished &&
          itemPairToCompete.map((item) => (
            <CompeteItemBox
              key={item.itemTitle}
              handleClick={() => handleChooseWinner(item.itemTitle)}
            >
              <ContestItemPreview item={item} mode="compete" />
            </CompeteItemBox>
          ))}
        {currentCompete.finished && (
          <div className="flex flex-col items-center gap-8">
            <ContestItemPreview
              item={
                competeResult.current[competeResult.current.length - 1]
                  .winners[0]
              }
              mode="info"
            />
            <Button handleClick={handleShowResult}>
              <span>Show Full Result</span>
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContestCompetePage;

const CompeteItemBox = ({ children, handleClick }) => {
  return (
    <div className=" max-w-[750px] flex-1">
      {children}
      <div className="mt-4 flex flex-col gap-4 text-base">
        <p>Chat Votes : 10</p>
        <Button
          handleClick={handleClick}
          bgColor="bg-slate-300"
          customStyles="text-center"
        >
          <ChooseSvg />
          <span>Win</span>
        </Button>
      </div>
    </div>
  );
};
