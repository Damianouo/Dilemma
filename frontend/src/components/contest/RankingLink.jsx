import { Link } from "react-router-dom";
import useContestCtx from "../../hooks/useContestCtx";
import RankingSvg from "../svgs/contest/RankingSvg";

const RankingLink = () => {
  const { contest } = useContestCtx();
  return (
    <Link to={`/ranking/${contest._id}`} className="btn bg-sky-300 text-black hover:bg-sky-400">
      <RankingSvg />
      <span>Ranking</span>
    </Link>
  );
};

export default RankingLink;
