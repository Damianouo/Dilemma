/* eslint-disable react/prop-types */
import ContestItem from "./ContestItem";
import Button from "../UI/Button";
import { ChooseSvg } from "../svgs/ContestSvgs";
import useCompeteCtx from "../../hooks/useCompeteCtx";

const ContestCompetePage = () => {
  const { compete, handler } = useCompeteCtx();

  const competeItemIndex = (compete.match - 1) * 2;
  const competeItem1 = compete.entries[competeItemIndex];
  const competeItem2 = compete.entries[competeItemIndex + 1];

  return (
    <div className=" flex flex-col items-center gap-8 text-center sm:px-4 sm:py-8 ">
      {/* matchs info */}
      {!compete.finished ? (
        <h2 className="md:text-2xl">
          Round of {compete.participantsNum} : Match {compete.match}
        </h2>
      ) : (
        <h2 className="md:text-2xl">The Winner Gose to :</h2>
      )}

      {/* items to compete */}
      <div className="flex w-full flex-col justify-center gap-4 sm:flex-row ">
        {!compete.finished ? (
          <>
            <CompeteItemBox
              onClick={() => handler.chooseWinner(competeItem1, competeItem2)}
            >
              <ContestItem item={competeItem1} mode="compete" />
            </CompeteItemBox>
            <p className="self-center text-4xl">VS</p>
            <CompeteItemBox
              onClick={() => handler.chooseWinner(competeItem2, competeItem1)}
            >
              <ContestItem item={competeItem2} mode="compete" />
            </CompeteItemBox>
          </>
        ) : (
          <div className="flex flex-col items-center gap-8">
            <ContestItem
              item={compete.result[compete.result.length - 1].winners[0]}
              mode="info"
            />
            <Button onClick={() => handler.changePhase("result")}>
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
