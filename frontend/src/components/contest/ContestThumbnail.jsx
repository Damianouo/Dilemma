import { Link } from "react-router-dom";
import ContestItem from "./ContestItem";

const ContestThumbnail = ({ contest }) => {
  return (
    <Link
      className="hover:shadow-hover-around from-primary-600 to-primary-700 shadow-around shadow-primary-300 hover:shadow-primary-400 flex flex-col gap-2 rounded-lg bg-linear-to-b p-2 text-sm transition-all md:gap-4"
      to={`/contests/${contest._id}`}
    >
      {/* cover image */}
      <div className="grid grid-cols-2 gap-2 text-sm">
        <ContestItem item={contest.entries[0]} />
        <ContestItem item={contest.entries[1]} />
      </div>
      <h3 className="text-xl font-semibold">{contest.title}</h3>
      <p>{contest.description}</p>
    </Link>
  );
};

export default ContestThumbnail;
