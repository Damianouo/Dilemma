/* eslint-disable react/prop-types */
import { getCoverImageUrl } from "../utilityFunc";
import { Link } from "react-router-dom";

const ContestThumbnail = ({ contestContents }) => {
  return (
    <Link
      className="shadow-primary-200 flex flex-col gap-2 rounded-lg bg-white p-2
       text-sm shadow-contestThumbnail md:gap-4"
      to={`/contests/${contestContents.id}`}
    >
      {/* cover image */}
      <div className="grid grid-cols-2 text-sm">
        <VideoThumbnail contestItem={contestContents.items[0]} />
        <VideoThumbnail contestItem={contestContents.items[1]} />
      </div>
      <h3 className=" text-xl font-semibold">{contestContents.title}</h3>
      <p>{contestContents.desc}</p>
    </Link>
  );
};

const VideoThumbnail = ({ contestItem }) => {
  const coverImageUrl = getCoverImageUrl(contestItem);
  return (
    <div className="bg-zinc-200">
      <div className="">
        <img
          className="min-h-[150px] object-cover  "
          src={coverImageUrl}
          alt={`${contestItem.itemTitle} thumbnail`}
        />
      </div>
      <p className="overflow-hidden text-ellipsis whitespace-nowrap p-1 text-center md:p-2">
        {contestItem.itemTitle}
      </p>
    </div>
  );
};

export default ContestThumbnail;
