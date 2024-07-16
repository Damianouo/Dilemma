/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import ContestItem from "./ContestItem";

const ContestThumbnail = ({ contest }) => {
  return (
    <Link
      className="shadow-around flex flex-col gap-2 rounded-lg bg-tertiary-600/70 p-2
       text-sm shadow-secondary-400 md:gap-4"
      to={`/contests/${contest._id}`}
    >
      {/* cover image */}
      <div className="grid grid-cols-2 gap-2 text-sm">
        <ContestItem item={contest.entries[0]} />
        <ContestItem item={contest.entries[1]} />
      </div>
      <h3 className=" text-xl font-semibold">{contest.title}</h3>
      <p>{contest.description}</p>
    </Link>
  );
};

export default ContestThumbnail;
