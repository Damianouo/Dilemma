import { cn } from "../../utils/cn";
import ContestItem from "./ContestItem";

const ContestThumbnail = ({ className, contest }) => {
  return (
    <div
      className={cn(
        "from-primary-600 to-primary-700 shadow-primary-300 hover:shadow-primary-400 rounded-lg bg-linear-to-b p-2 transition-all",
        "hover:shadow-hover-around shadow-around",
        className,
      )}
    >
      {/* cover image */}
      <div className="grid grid-cols-2 gap-2 text-sm">
        <ContestItem item={contest.entries[0]} />
        <ContestItem item={contest.entries[1]} />
      </div>
      <div className="py-3">
        <h3 className="line-clamp-2 h-12 content-center text-xl leading-6 font-bold text-white">
          {contest.title}
        </h3>
      </div>
      <p className="text-primary-200 line-clamp-2 h-8 content-center text-sm leading-4 md:text-base">
        {contest.description}
      </p>
    </div>
  );
};

export default ContestThumbnail;
