/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import Button from "../UI/Button";
import { useContext } from "react";
import { ContentCtx } from "../../contexts/ContentCtx";
import ContestItem from "./ContestItem";

const ContestResultPage = ({ competeResult }) => {
  const content = useContext(ContentCtx);
  const fullResult = competeResult.current.toReversed();
  return (
    <div className=" px-20">
      <div className="my-4 flex justify-center gap-8">
        <Button>
          <Link to="/contests">Other Contests</Link>
        </Button>
        <Button>
          <Link to={`/ranking/${content._id}`}>Ranking</Link>
        </Button>
      </div>
      <ul className="flex flex-col items-center gap-8  ">
        <li className="flex flex-col items-center">
          <h2 className="mb-2">The Winner Gose to :</h2>
          <ResultItem item={fullResult[0].winners[0]} />
        </li>
        {fullResult.map((result) => (
          <li
            key={result.totalCandidates}
            className="flex flex-col items-center"
          >
            <h2 className="mb-2">
              Stopped at the top {result.totalCandidates}
            </h2>
            <div className=" flex flex-wrap justify-center gap-2">
              {result.losers.map((item) => (
                <ResultItem key={item.title} item={item} />
              ))}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContestResultPage;

const ResultItem = ({ item }) => {
  return (
    <ContestItem
      key={item.title}
      item={item}
      className="max-w-40"
      titleClass="overflow-hidden text-ellipsis whitespace-nowrap sm:text-sm"
    />
  );
};
