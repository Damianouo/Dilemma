import { Link } from "react-router-dom";
import { RankingBtnSvg } from "../svgs/ContestSvgs";
import useContestCtx from "../../hooks/useContestCtx";

const RankingLink = () => {
  const { contest } = useContestCtx();
  return (
    <Link to={`/ranking/${contest._id}`} className="btn bg-sky-300 text-black hover:bg-sky-400">
      <RankingBtnSvg />
      <span>Ranking</span>
    </Link>
  );
};

export default RankingLink;
