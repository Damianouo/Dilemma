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
    <div className="text-base sm:text-xl md:text-2xl">
      <p className="mb-6 text-center sm:mb-10">{contest.description}</p>

      {/* contest item preview */}
      <div className="flex items-center justify-center gap-2 ">
        <ContestItem item={contest.entries[0]} />
        <p className="text-2xl font-bold sm:text-4xl">vs</p>
        <ContestItem item={contest.entries[1]} />
      </div>

      {/* total candidate selection */}
      <div className="flex flex-col items-center justify-center md:flex-row md:gap-6">
        <TotalParticipantsSelect />
        {/* buttons */}
        <div className="flex gap-2 ">
          <Button
            onClick={() => handler.startCompeting(contest)}
            className="bg-red-300 bg-none text-black hover:bg-red-400"
          >
            <StartBtnSvg />
            <span>Start</span>
          </Button>
          <Button className="bg-sky-300 bg-none text-black hover:bg-sky-400">
            <Link
              to={`/ranking/${contest._id}`}
              className="flex items-center gap-1"
            >
              <RankingBtnSvg />
              <span>Ranking</span>
            </Link>
          </Button>
          <Button className="bg-emerald-300 bg-none text-black hover:bg-emerald-400">
            <ShareBtnSvg />
            <span>Share</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ContestInfoPage;

const TotalParticipantsSelect = () => {
  const { handler } = useCompeteCtx();
  const { contest } = useContestCtx();

  let optionsArr = [];
  let i = 4;
  while (i <= contest.totalParticipants) {
    optionsArr = [i, ...optionsArr];
    i = i * 2;
  }

  return (
    <div className="my-10 flex items-center gap-2">
      {contest && (
        <>
          <label htmlFor="selectParticipants">
            Choose the total number of participants :
          </label>
          <select
            className="items-center rounded-lg bg-primary-200 py-2 text-center text-base text-black"
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
