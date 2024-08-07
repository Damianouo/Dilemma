/* eslint-disable react/prop-types */
import ContestItem from "./ContestItem";
import Button from "../UI/Button";
import { ChooseSvg } from "../svgs/ContestSvgs";
import useCompeteCtx from "../../hooks/useCompeteCtx";
import RefreshSvg from "../svgs/RefreshSvg";
import XmarkSvg from "../svgs/XmarkSvg";
import { useEffect } from "react";
import { useSubmit } from "react-router-dom";

const ContestCompetePage = () => {
  const submit = useSubmit();
  const { compete, handler } = useCompeteCtx();

  const competeItemIndex = (compete.match - 1) * 2;
  const competeItem1 = compete.entries[competeItemIndex];
  const competeItem2 = compete.entries[competeItemIndex + 1];

  useEffect(() => {
    if (compete.finished) {
      submit(
        {
          entryId: compete.result[compete.result.length - 1].winners[0]._id,
        },
        {
          method: "patch",
          encType: "application/json",
        },
      );
    }
  }, [compete, submit]);

  return (
    <div className="mx-auto flex max-w-[1500px] flex-col items-center gap-4 text-center md:gap-6 md:p-4 ">
      {/* matchs info */}
      {!compete.finished ? (
        <>
          <h2 className="text-lg md:text-2xl">
            Round of {compete.participantsNum} : Match {compete.match}
          </h2>
          <div className="flex gap-4">
            <Button
              onClick={() => handler.changeOpponent(competeItemIndex)}
              className="bg-none p-1 shadow-none hover:bg-primary-800"
            >
              <RefreshSvg />
            </Button>
            <Button
              onClick={handler.endCompeting}
              className="bg-none p-1 shadow-none hover:bg-primary-800"
            >
              <XmarkSvg />
            </Button>
          </div>
        </>
      ) : (
        <h2 className="md:text-2xl">The Winner Gose to :</h2>
      )}

      {/* items to compete */}
      <div className="block w-full items-stretch justify-between gap-4 md:flex xl:gap-8 ">
        {!compete.finished ? (
          <>
            <CompeteItemBox
              onClick={() => handler.chooseWinner(competeItem1, competeItem2)}
            >
              <ContestItem item={competeItem1} mode="compete" />
            </CompeteItemBox>
            <p className="my-4 self-center text-2xl md:my-0 xl:text-4xl">VS</p>
            <CompeteItemBox
              onClick={() => handler.chooseWinner(competeItem2, competeItem1)}
            >
              <ContestItem item={competeItem2} mode="compete" />
            </CompeteItemBox>
          </>
        ) : (
          <div className="mx-auto flex flex-col items-center gap-8">
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
    <div className="mx-auto flex max-w-[550px] flex-1 flex-col gap-2 rounded-md bg-primary-900/50 sm:gap-4">
      {children}
      <p className="text-base">Chat Votes : 10</p>
      <Button
        onClick={onClick}
        className="text-center font-bold hover:text-primary-300 md:text-lg "
      >
        <ChooseSvg />
        <span>WIN</span>
      </Button>
    </div>
  );
};

//TODO action function to send request to add winCount
export async function action({ request, params }) {
  const data = await request.json();
  const { contestId } = params;
  await fetch(`http://localhost:8080/contest/${contestId}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return null;
}
