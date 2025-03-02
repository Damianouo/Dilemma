import { Link, useRouteLoaderData } from "react-router-dom";
import ContestThumbnail from "../components/contest/ContestThumbnail";

const BrowseContests = () => {
  return (
    <div className="p-4 sm:p-6">
      <ContestList />
    </div>
  );
};

export default BrowseContests;

const ContestList = () => {
  const contests = useRouteLoaderData("contests");
  return (
    <div className="contestList">
      {contests.map((contest) => (
        <Link className="grid max-w-[550px]" key={contest._id} to={`/contests/${contest._id}`}>
          <ContestThumbnail contest={contest} />
        </Link>
      ))}
    </div>
  );
};
