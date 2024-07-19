/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import Button from "../UI/Button";
import ContestItem from "./ContestItem";
import useCompeteCtx from "../../hooks/useCompeteCtx";
import useContestCtx from "../../hooks/useContestCtx";
import ResultList from "./ResultList";

const ContestResultPage = () => {
  const { contest } = useContestCtx();
  const { compete } = useCompeteCtx();
  const fullResult = compete.result.toReversed();
  const resultAfterTop4 = fullResult.slice(2);
  return (
    <div className="">
      <div className="my-8 flex justify-center gap-8">
        <Button>
          <Link to="/contests">Other Contests</Link>
        </Button>
        <Button>
          <Link to={`/ranking/${contest._id}`}>Ranking</Link>
        </Button>
      </div>
      <ul className="mx-auto flex max-w-[1224px] flex-col gap-x-2 gap-y-8 text-center text-base transition-all sm:text-2xl">
        <li className="self-center text-3xl font-bold">
          <h2 className="mb-4 ">The Winner Gose to :</h2>
          <ContestItem item={fullResult[0].winners[0]} />
        </li>

        <ResultList participantsNum={4}>
          <div className="grid grid-cols-1 gap-2 overflow-hidden xl:grid-cols-4">
            <div>
              <p className="mb-2">Runner up:</p>
              <ContestItem
                className="mx-auto max-w-[400px]"
                item={fullResult[0].losers[0]}
              />
            </div>
            <div className="xl:col-span-2 xl:col-start-3">
              <p className="mb-2">Stop at top 4:</p>
              <div className="flex flex-col gap-2 sm:flex-row">
                <ContestItem
                  className="max-w-[400px]"
                  item={fullResult[1].losers[0]}
                />
                <ContestItem
                  className="max-w-[400px]"
                  item={fullResult[1].losers[1]}
                />
              </div>
            </div>
          </div>
        </ResultList>

        {resultAfterTop4.map((result) => (
          <ResultList
            key={"result" + result.participantsNum}
            participantsNum={result.participantsNum}
          >
            <div className="grid grid-cols-1 justify-center gap-2 overflow-hidden sm:grid-cols-2 xl:grid-cols-4">
              {result.losers.map((item) => (
                <ContestItem
                  key={item.title}
                  item={item}
                  className="max-w-[400px]"
                  titleClass="overflow-hidden text-ellipsis whitespace-nowrap sm:text-sm"
                />
              ))}
            </div>
          </ResultList>
        ))}
      </ul>
    </div>
  );
};

export default ContestResultPage;
