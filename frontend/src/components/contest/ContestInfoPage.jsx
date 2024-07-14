/* eslint-disable react/prop-types */
import { RankingBtnSvg, ShareBtnSvg, StartBtnSvg } from "../svgs/ContestSvgs";
import Button from "../UI/Button";
import ContestItem from "./ContestItem";
import { Link } from "react-router-dom";
import useContestCtx from "../../hooks/useContestCtx";
import useCompeteCtx from "../../hooks/useCompeteCtx";

const ContestInfoPage = () => {
  const { handler } = useCompeteCtx();
  const { contest } = useContestCtx();
  return (
    <div className=" rounded-lg p-4 text-base sm:px-4 sm:py-8 sm:text-lg md:text-xl">
      <p className="mb-10">{contest.description}</p>

      {/* contest item preview */}
      <div className="flex items-center justify-center gap-2 ">
        <ContestItem item={contest.entries[0]} />
        <p className="text-4xl font-bold">vs</p>
        <ContestItem item={contest.entries[1]} />
      </div>

      {/* total candidate selection */}
      <div className="flex flex-col items-center justify-center md:flex-row md:gap-6">
        <TotalCandidatesSelect />
        {/* buttons */}
        <div className="flex gap-2 ">
          <Button
            onClick={() => handler.startCompeting(contest.entries)}
            className="bg-red-200 text-black"
          >
            <StartBtnSvg />
            <span>Start</span>
          </Button>
          <Button className="bg-sky-200  text-black">
            <Link
              to={`/ranking/${contest._id}`}
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
  const { handler } = useCompeteCtx();
  const { contest } = useContestCtx();

  let optionsArr = [];
  let i = 4;
  while (i <= contest.totalParticipants) {
    optionsArr = [i, ...optionsArr];
    i = i * 2;
  }

  return (
    <div className="my-6 flex items-center gap-2">
      {contest && (
        <>
          <label htmlFor="selectParticipants">
            Choose the total number of candidates :
          </label>
          <select
            className="items-center rounded-lg bg-secondary-100 py-2 text-center text-base text-black"
            onChange={(e) => handler.changeParticipants(+e.target.value)}
            defaultValue={contest.totalParticipants}
            name="selectParticipants"
            id="selectParticipants"
          >
            {optionsArr.map((optionNum) => (
              <option key={optionNum} value={optionNum}>
                Top {optionNum}
              </option>
            ))}
          </select>
        </>
      )}
    </div>
  );
};
