/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { getCoverImageUrl } from "../../utilityFunc";
import Button from "../UI/Button";
import { useContext } from "react";
import { ContentCtx } from "../../contexts/ContentCtx";
const ContestResultPage = ({ competeResult }) => {
  const content = useContext(ContentCtx);
  const fullResult = competeResult.current.toReversed();
  return (
    <div className=" px-20">
      <div className="my-4 flex justify-center gap-8">
        <Button className="bg-slate-300">
          <Link to="/contests">Other Contests</Link>
        </Button>
        <Button>
          <Link to={`/ranking/${content.id}`}>Ranking</Link>
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
            <div className=" flex flex-wrap gap-2">
              {result.losers.map((item) => (
                <ResultItem key={item.itemTitle} item={item} />
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
  const imageUrl = getCoverImageUrl(item);
  return (
    <div className="w-[150px] rounded-lg bg-zinc-400 p-2 text-center text-black">
      <img src={imageUrl} alt="item image" />
      <p className="mt-2  overflow-hidden text-ellipsis whitespace-nowrap text-sm">
        {item.itemTitle}
      </p>
    </div>
  );
};
