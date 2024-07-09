/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import ContestItem from "./ContestItem";

const ContestThumbnail = ({ contestContents }) => {
  return (
    <Link
      className="flex flex-col gap-2 rounded-lg bg-tertiary-600/70 p-2 text-sm
       shadow-contestThumbnail shadow-secondary-400 md:gap-4"
      to={`/contests/${contestContents._id}`}
    >
      {/* cover image */}
      <div className="grid grid-cols-2 gap-2 text-sm">
        <ContestItem item={contestContents.entries[0]} />
        <ContestItem item={contestContents.entries[1]} />
      </div>
      <h3 className=" text-xl font-semibold">{contestContents.title}</h3>
      <p>{contestContents.description}</p>
    </Link>
  );
};

export default ContestThumbnail;
