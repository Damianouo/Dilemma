/* eslint-disable react/prop-types */
import { getCoverImageUrl } from "../utilityFunc";
import { Link } from "react-router-dom";

const ContestThumbnail = ({ contestContents }) => {
  return (
    <Link
      className="flex flex-col gap-2 rounded-lg bg-white p-2 text-sm
       shadow-contestThumbnail shadow-primary-200 md:gap-4"
      to={`/contests/${contestContents._id}`}
    >
      {/* cover image */}
      <div className="grid grid-cols-2 text-sm">
        <VideoThumbnail contestItem={contestContents.entries[0]} />
        <VideoThumbnail contestItem={contestContents.entries[1]} />
      </div>
      <h3 className=" text-xl font-semibold">{contestContents.title}</h3>
      <p>{contestContents.description}</p>
    </Link>
  );
};

const VideoThumbnail = ({ contestItem }) => {
  const coverImageUrl = getCoverImageUrl(contestItem.url);
  return (
    <div className="bg-zinc-200">
      <div className="">
        <img
          className="min-h-[150px] object-cover  "
          src={coverImageUrl}
          alt={`${contestItem.title} thumbnail`}
        />
      </div>
      <p className="overflow-hidden text-ellipsis whitespace-nowrap p-1 text-center md:p-2">
        {contestItem.title}
      </p>
    </div>
  );
};

export default ContestThumbnail;
