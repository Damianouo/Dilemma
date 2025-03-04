import ShareSvg from "../svgs/contest/ShareSvg";
import StartSvg from "../svgs/contest/StartSvg";
import Button from "../UI/Button";
import ContestItem from "./ContestItem";
import useContestCtx from "../../hooks/useContestCtx";
import useCompeteCtx from "../../hooks/useCompeteCtx";
import RankingLink from "./RankingLink";

const ContestInfoPage = () => {
  const { handler } = useCompeteCtx();
  const { contest } = useContestCtx();
  return (
    <div className="text-base sm:text-xl md:text-2xl">
      <p className="mb-6 text-center sm:mb-10">{contest.description}</p>

      {/* contest item preview */}
      <div className="grid grid-cols-[1fr_auto_1fr] items-center justify-items-center gap-4">
        <ContestItem item={contest.entries[0]} />
        <p className="text-2xl font-bold sm:text-4xl">vs</p>
        <ContestItem item={contest.entries[1]} />
      </div>

      {/* total candidate selection */}
      <div className="flex flex-col items-center justify-center md:flex-row md:gap-6">
        <TotalParticipantsSelect />
        {/* buttons */}
        <div className="flex gap-2">
          <Button
            onClick={() => handler.startCompeting(contest)}
            className="bg-red-300 text-black hover:bg-red-400"
          >
            <StartSvg />
            <span>Start</span>
          </Button>
          <RankingLink />
          <Button className="bg-emerald-300 text-black hover:bg-emerald-400">
            <ShareSvg />
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
          <label htmlFor="selectParticipants">Choose the total number of participants :</label>
          <select
            className="bg-primary-200 items-center rounded-lg py-2 text-center text-base text-black"
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
