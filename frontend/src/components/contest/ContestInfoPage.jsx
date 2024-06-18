import { RankingBtnSvg, ShareBtnSvg, StartBtnSvg } from "../svgs/ContestSvgs";
import Button from "../UI/Button";
import ContestItem from "./ContestItem";
import { ContentCtx } from "../../contexts/ContentCtx";
import { ConfigCtx } from "../../contexts/ConfigCtx";
import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const ContestInfoPage = () => {
  const content = useContext(ContentCtx);
  const { configDispatch } = useContext(ConfigCtx);
  function handleContestStart() {
    configDispatch({
      type: "changePhase",
      phase: "compete",
    });
  }

  return (
    <div className="mx-auto max-w-[1000px] rounded-lg p-4 text-base sm:p-6 sm:text-lg md:text-xl">
      <p className="mb-10">{content.description}</p>

      {/* contest item preview */}
      <div className="flex items-center justify-center gap-2 ">
        <ContestItem item={content.entries[0]} mode="info" />
        <p className="text-4xl font-bold">vs</p>
        <ContestItem item={content.entries[1]} mode="info" />
      </div>

      {/* total candidate selection */}
      <div className="flex flex-col items-center justify-center md:flex-row md:gap-6">
        <TotalCandidatesSelect />
        {/* buttons */}
        <div className="flex gap-2 ">
          <Button
            onClick={handleContestStart}
            className="bg-red-200 text-black"
          >
            <StartBtnSvg />
            <span>Start</span>
          </Button>
          <Button className="bg-sky-200  text-black">
            <Link
              to={`/ranking/${content._id}`}
              className="flex items-center gap-1"
            >
              <RankingBtnSvg />
              <span>Ranking</span>
            </Link>
          </Button>
          <Button className="bg-emerald-200  text-black">
            <ShareBtnSvg />
            <span>Share</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ContestInfoPage;

const TotalCandidatesSelect = () => {
  const content = useContext(ContentCtx);
  const { configDispatch } = useContext(ConfigCtx);
  const { totalParticipants } = content;
  useEffect(() => {
    configDispatch({
      type: "editTotalCandidates",
      totalCandidates: totalParticipants,
    });
  }, [configDispatch, totalParticipants]);

  let optionsArr = [];
  let i = 4;
  while (i <= totalParticipants) {
    optionsArr = [i, ...optionsArr];
    i = i * 2;
  }

  function handleTotleCandidatesSelect(e) {
    const totalNum = +e.target.value;
    configDispatch({
      type: "editTotalCandidates",
      totalCandidates: totalNum,
    });
  }

  return (
    <div className="my-6 flex items-center gap-2">
      <label htmlFor="totalCandidatesSelect">
        Choose the total number of candidates :
      </label>
      <select
        className="items-center rounded-lg bg-secondary-100 py-2 text-center text-base text-black"
        onChange={handleTotleCandidatesSelect}
        defaultValue={totalParticipants}
        name="totalCandidates"
        id="totalCandidatesSelect"
      >
        {optionsArr.map((optionNum) => (
          <option key={optionNum} value={optionNum}>
            Top {optionNum}
          </option>
        ))}
      </select>
    </div>
  );
};
